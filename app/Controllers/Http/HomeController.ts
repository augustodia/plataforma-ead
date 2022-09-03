import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'
import Aluno from '../../Models/Aluno';

export default class HomeController {
  async index({response}): Promise<HttpContextContract> {

    // const users = await Database
    //   .from('Alunos')
    //   .select('*')

    //   Aluno.all();
    return response.send(await Aluno.all())
  }
}
