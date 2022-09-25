import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator, UpdateValidator } from './CursoConcluidoValidator';
import CursoConcluido from '../../../Models/CursoConcluido';
import Curso from '../../../Models/Curso';

export default class CursoConcluidoController {
  public async showByCursoId({ request, response }: HttpContextContract) {
    let { alunoId } = request.params();
    let { cursoId } = request.only(['cursoId']);

    let conclusao = await CursoConcluido.query()
      .where('alunoId', alunoId)
      .where('cursoId', cursoId)
      .first();

    if (!conclusao) return response.status(404).send({ concluido: false });

    response.send(conclusao);
  }
  public async create({ request, response }: HttpContextContract) {
    //TODO: Verificar se todas as aulas do curso estão marcadas como visualizadas.

    let { cursoId } = request.only(['cursoId']);

    await request.validate({
      schema: CreateValidator,
    });

    // Se não existe o curso dá erro.
    if (!(await Curso.find(cursoId))) {
      return response.status(500).send('Ocorreu um erro');
    }

    let { alunoId } = request.params();

    await CursoConcluido.create({ alunoId, cursoId, concluido: true });

    response.status(200);
  }
  public async update({ request, response }: HttpContextContract) {
    //TODO: Verificar se todas as aulas do curso estão marcadas como visualizadas.

    let { alunoId } = request.params();
    let { cursoId, concluido } = request.only(['cursoId', 'concluido']);

    await request.validate({
      schema: UpdateValidator,
    });

    let cursoConclusao = await CursoConcluido.query()
      .where('cursoId', cursoId)
      .where('alunoId', alunoId)
      .first();

    // Se não existe o curso dá erro.
    if (!cursoConclusao) {
      return response.status(500).send('Ocorreu um erro');
    }

    cursoConclusao.merge({ concluido });
    await cursoConclusao.save();

    response.status(200);
  }
}
