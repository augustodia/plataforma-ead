import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { isSuperUser, isCurrentUser } from '../../../../Utils/Auth';
import Aluno from '../../../Models/User';
import CreateValidator from './CreateValidator'
import UpdateValidator from './UpdateValidator'

export default class HomeController {
  async showAll({response}){
    response.send(await Aluno.all());
  }

  async showById({request, response, auth}){
    let {id} = request.params();

    let aluno = await Aluno.findOrFail(id)

    if(!isCurrentUser(auth.user, aluno.id) && !isSuperUser(auth.user)) {
      return response.status(401)
    }
    
    response.send(aluno);
  }

  async create({request, response}: HttpContextContract) {

    let user = request.body();
    
    await request.validate({
      schema: CreateValidator
    })

    // Preciso deletar campos que não existem no banco
    delete user.password_confirmation

    let aluno = await Aluno.create({...user, ativo: false});
    return response.send(aluno)
  }

  async update({request, response, auth}: HttpContextContract) {
    let aluno:any = {};
    let idAluno = request.params().id ;

    if(!isSuperUser(auth.user)) {
      aluno = request.only([
        'password', 'logradouro', 'bairro', 'cidade', 
        'uf', 'cep', 'complemento', 'password_confirmation'
      ]);
    } else {
      aluno = request.body();
    }
    
    if(!isCurrentUser(auth.user, idAluno) && !isSuperUser(auth.user)) {
      return response.status(401)
    }
    
    let alunoEdit = await Aluno.findOrFail(idAluno)

    await request.validate({
      schema: UpdateValidator
    })
    
    // Preciso deletar campos que não existem no banco
    delete aluno.password_confirmation

    alunoEdit.merge(aluno);
    alunoEdit.save();

    return response.send(alunoEdit);
  }
}
