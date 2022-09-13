import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { isCurrentUser } from '../../Utils/Auth';

export default class IsCurrentUser {
  public async handle({auth, request, response}: HttpContextContract, next: () => Promise<void>) {
    let {alunoId} = request.only(['alunoId'])
    
    if(!isCurrentUser(auth.user, alunoId)) return response.status(401)
    
    await next()
  }
}
