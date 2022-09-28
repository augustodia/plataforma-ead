import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator } from './AvaliacaoValidator';
import Avaliacao from '../../../Models/Avaliacao';
import Curso from '../../../Models/Curso';
import Certificado from '../../../Models/Certificado';

export default class AvaliacaoController {
  public async showAll({ request, response }: HttpContextContract) {
    let { cursoId } = request.params();
    let avaliacoes: any = [];
    if (await Avaliacao.query().first()) {
      avaliacoes = await Avaliacao.query().where('curso_id', cursoId).preload('aluno');
    }

    response.send(avaliacoes);
  }
  public async create({ request, response, auth }: HttpContextContract) {
    let { alunoId } = request.params();

    let avaliacaoData = request.only(['cursoId', 'nota', 'comentario']);

    // Se não existe o curso ou se o aluno ainda não emitiu o certificado, dá erro.
    if (
      !(await Curso.find(avaliacaoData.cursoId)) ||
      !(await Certificado.query()
        .where('curso_id', avaliacaoData.cursoId)
        .where('aluno_id', alunoId)
        .first())
    ) {
      return response.status(500).send('Ocorreu um erro');
    }

    await request.validate({
      schema: CreateValidator,
    });

    await Avaliacao.create({ ...avaliacaoData, alunoId });

    response.status(200);
  }
}
