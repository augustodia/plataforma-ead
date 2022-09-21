import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CreateValidator } from './CertificadoValidator';
import Certificado from '../../../Models/Certificado';
import Curso from '../../../Models/Curso';

export default class CertificadoController {
  public async showAll({ request, response }: HttpContextContract) {
    let { cursoId } = request.params();

    let certificados = await Certificado.query().where('cursoId', cursoId);

    response.send(certificados);
  }
  public async showByAlunoId({ request, response }: HttpContextContract) {
    let { alunoId } = request.params();
    let { cursoId } = request.only(['cursoId']);

    let certificado = await Certificado.query()
      .where('alunoId', alunoId)
      .where('cursoId', cursoId)
      .first();

    if (!certificado) return response.status(404).send('Certificado não encontrado');

    response.send(certificado);
  }
  public async create({ request, response }: HttpContextContract) {
    //TODO: Verificar se todas as aulas do curso estão marcadas como visualizadas.

    let { cursoId } = request.only(['cursoId']);

    // Se não existe o curso dá erro.
    if (!(await Curso.find(cursoId))) {
      return response.status(500).send('Ocorreu um erro');
    }

    let { alunoId } = request.params();

    await request.validate({
      schema: CreateValidator,
    });

    await Certificado.create({ alunoId, cursoId });

    response.status(200);
  }
}
