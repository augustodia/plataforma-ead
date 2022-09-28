import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator } from './RespostaDuvidaValidator';
import RespostaDuvida from 'App/Models/RespostaDuvida';

export default class DuvidaAulasController {
  public async getAllRespostas({ request, response }: HttpContextContract) {
    let { duvidaId } = request.params();
    if (!(await RespostaDuvida.query().first())) return response.send([]);

    return response.send(await RespostaDuvida.query().where('duvidaId', duvidaId).preload('aluno'));
  }
  public async create({ request, response }: HttpContextContract) {
    let { duvidaId, comentario, alunoId } = request.only(['duvidaId', 'comentario', 'alunoId']);

    await request.validate({
      schema: CreateValidator,
    });

    let resposta = await RespostaDuvida.create({ duvidaId, comentario, alunoId });

    if (!resposta) {
      response.status(500).send({ success: false, msg: 'Ocorreu um erro ao responder a dúvida' });
    }

    return response.send(resposta);
  }
}
