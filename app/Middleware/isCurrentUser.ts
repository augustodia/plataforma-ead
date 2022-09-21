import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { isCurrentUser, isSuperUser } from '../../Utils/Auth';

export default class IsCurrentUser {
  public async handle({auth, request, response}: HttpContextContract, next: () => Promise<void>) {
    let { alunoId } = Object.keys(request.only(['alunoId'])).length
      ? request.only(['alunoId'])
      : request.params();

    if(!isCurrentUser(auth.user, alunoId) && !isSuperUser(auth.user)) return response.status(401)
    
    await next()
  }
}
