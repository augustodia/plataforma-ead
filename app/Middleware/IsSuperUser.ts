import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { isSuperUser } from '../../Utils/Auth';

export default class IsSuperUser {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    if(!isSuperUser(auth.user)) return response.status(401)
    
    await next()
  }
}
