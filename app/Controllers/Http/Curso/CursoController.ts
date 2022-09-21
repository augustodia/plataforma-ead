import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Curso from '../../../Models/Curso';
import { CreateValidator, UpdateValidator, MsgValidacao } from './CursoValidator'

export default class CursoController {
  async allCursos({response}){
    return response.send(await Curso.all());
  }

  async cursoById({response, request}){
    let { id } = request.params();
    let curso = await Curso.find(id);

    if(!curso) return response.status(404).send({success: false, msg: 'Curso não encontrado'});
    
    return response.send(curso);
  }

  async create({request, response}: HttpContextContract) {

    let cursoData = request.only(['nome', 'descricao', 'valor']);
    
    await request.validate({
      schema: CreateValidator
    })

    let curso = await Curso.create({...cursoData, ativo: false, publicado: false});
    return response.send(curso)
  }

  async update({request, response}: HttpContextContract) {
    
    let cursoId = request.params().id;
    let cursoData = request.only(['nome', 'valor', 'ativo', 'publicado']);
    let cursoEdit = await Curso.findOrFail(cursoId)

    await request.validate({
      schema: UpdateValidator
    })
    
    cursoEdit.merge(cursoData);
    await cursoEdit.save();

    return response.send(cursoEdit);
  }

  async delete({request, response}: HttpContextContract) {
    
    let cursoId = request.params().id;
    let {msgConfirm}: any = request.only(['msgConfirm']);
    
    let cursoDelete = await Curso.findOrFail(cursoId)

    await request.validate({
      schema: MsgValidacao
    })

    if(msgConfirm == 'CONFIRMO') {
      cursoDelete.delete();
    } else {
      return response.status(403).send({success: false, msg: 'O usuário não autorizou a deleção'})
    }

    return response.send({success: true, msg: 'Curso deletado com sucesso'});
  }
}
