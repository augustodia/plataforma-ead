import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'
import Curso from 'App/Models/Curso'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      nome: 'Admin',
      email: 'admin@admin.com',
      cpf: '00000000000',
      password: '123456',
      logradouro: 'exemplo',
      bairro: 'exemplo',
      cidade: 'exemplo',
      uf: 'ex',
      cep: '0000000',
      ativo: true
    })
    await Curso.create({
      nome: 'Curso de JS',
      valor: 0,
      ativo: false,
      publicado: false
    })
    await Aula.create({
      nome: 'Aula 1',
      cursoId: 1,
      duracao: 0,
      ativo: false
    })
  }
}
