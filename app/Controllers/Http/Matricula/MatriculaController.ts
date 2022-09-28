import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator } from './MatriculaValidator';
import Matricula from 'App/Models/Matricula';

export default class MatriculaCursoController {
  public async getAllMatriculas({ request, response }: HttpContextContract) {
    let { cursoId } = request.params();
    let matriculas = Matricula.query().where('cursoId', cursoId);

    return response.send(matriculas);
  }
  public async create({ request, response }: HttpContextContract) {
    let { alunoId, cursoId } = request.only(['alunoId', 'cursoId']);

    await request.validate({
      schema: CreateValidator,
    });

    let matricula = await Matricula.create({ alunoId, cursoId });

    if (!matricula) {
      response.status(500).send({ success: false, msg: 'Ocorreu um erro ao se matricular' });
    }

    return response.send(matricula);
  }
}
