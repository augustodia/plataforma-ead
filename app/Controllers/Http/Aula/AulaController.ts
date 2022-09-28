import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Aula from '../../../Models/Aula';
import { CreateValidator, UpdateValidator } from './AulaValidator';

export default class HomeController {
  public async aulasByCurso({ request, response }) {
    let { idCurso } = request.params();

    return response.send(await Aula.query().where('cursoId', idCurso));
  }

  public async aulaById({ response, request }) {
    let { id } = request.params();
    let aula = await Aula.find(id);

    if (!aula) return response.status(404).send({ success: false, msg: 'Aula não encontrada' });

    return response.send(aula);
  }

  public async create({ request, response }: HttpContextContract) {
    let aulaData = request.only(['cursoId', 'nome', 'duracao']);

    await request.validate({
      schema: CreateValidator,
    });

    let aula = await Aula.create({ ...aulaData, ativo: false });
    return response.send(aula);
  }
  public async update({ request, response }: HttpContextContract) {
    let { id } = request.params();
    let aulaData = request.only(['cursoId', 'nome', 'valor', 'ativo']);

    let aulaEdit = await Aula.findOrFail(id);

    await request.validate({
      schema: UpdateValidator,
    });

    aulaEdit.merge(aulaData);
    await aulaEdit.save();

    return response.send(aulaEdit);
  }
  public async delete({ request, response }: HttpContextContract) {
    let { id } = request.params();

    let aulaDelete = await Aula.find(id);

    if (!aulaDelete)
      return response.status(404).send({ success: false, msg: 'Aula não encontrada' });

    aulaDelete.delete();

    return response.send({ success: true, msg: 'Aula deletada com sucesso' });
  }
}
