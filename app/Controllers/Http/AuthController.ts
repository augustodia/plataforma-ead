// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({request, auth}) {
    let {email, password} = request.all();

    const token = await auth.attempt(email, password, {
      expiresIn: '30 days'
    });

    return token
  }

  public async logout({auth}) {
    await auth.logout();
  }
}
