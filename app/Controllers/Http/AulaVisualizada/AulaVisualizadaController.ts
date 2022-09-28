import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AulaVisualizada from '../../../Models/AulaVisualizada';
import { CreateValidator, UpdateValidator } from './AulaVisualizadaValidator';

export default class AulaVisualizadaController {
  public async visualizacaoByIdAula({ response, request }) {
    let { aulaId } = request.params();
    let { alunoId } = request.only(['alunoId']);
    let aulaVisualizada = await AulaVisualizada.query()
      .where('aula_id', aulaId)
      .where('aluno_id', alunoId)
      .first();

    if (!aulaVisualizada) return response.send({ visualizada: false, aulaId, created: false });

    let { visualizada } = aulaVisualizada;
    return response.send({ visualizada, aulaId, created: true });
  }

  public async create({ request, response }: HttpContextContract) {
    let aulaVisualizada = request.only(['aulaId', 'alunoId']);

    await request.validate({
      schema: CreateValidator,
    });

    let aula = await AulaVisualizada.create({ ...aulaVisualizada, visualizada: true });
    return response.send(aula);
  }
  public async update({ request, response }: HttpContextContract) {
    let { aulaId } = request.params();
    let aulaVisualizadaData = request.only(['alunoId', 'visualizada']);

    let aulaVisualizadaEdit = await AulaVisualizada.query()
      .where('aula_id', aulaId)
      .where('aluno_id', aulaVisualizadaData.alunoId)
      .first();

    await request.validate({
      schema: UpdateValidator,
    });

    if (aulaVisualizadaEdit) {
      aulaVisualizadaEdit.merge(aulaVisualizadaData);
      await aulaVisualizadaEdit.save();
    } else {
      return response.status(404);
    }

    return response.send(aulaVisualizadaEdit);
  }
}
