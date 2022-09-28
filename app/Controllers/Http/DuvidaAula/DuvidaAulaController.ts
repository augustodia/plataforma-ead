import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator } from './DuvidaAulaValidator';
import DuvidaAula from 'App/Models/DuvidaAula';

export default class DuvidaAulasController {
  public async getAllDuvidas({ request, response }: HttpContextContract) {
    let { idAula } = request.params();
    if (!(await DuvidaAula.query().first())) return response.send([]);

    return response.send(await DuvidaAula.query().where('aulaId', idAula).preload('aluno'));
  }
  public async getDuvida({ request, response }: HttpContextContract) {
    let { idDuvida } = request.params();

    let duvida = await DuvidaAula.find(idDuvida);

    if (!duvida) {
      return response.status(404).send({ success: false, msg: 'Dúvida não econtrada' });
    }

    await duvida.load('aluno');
    await duvida.load('respostas');
    return response.send(duvida);
  }
  public async create({ request, response }: HttpContextContract) {
    let { aulaId, comentario, alunoId } = request.only(['aulaId', 'comentario', 'alunoId']);

    await request.validate({
      schema: CreateValidator,
    });

    let duvida = await DuvidaAula.create({ aulaId, comentario, alunoId });

    if (!duvida) {
      response.status(500).send({ success: false, msg: 'Ocorreu um erro ao criar a dúvida' });
    }

    return response.send(duvida);
  }
}
