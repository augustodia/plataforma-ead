import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      nome: 'Admin',
      email: 'augustodia97@gmail.com',
      cpf: '00000000000',
      password: '123456',
      logradouro: 'exemplo',
      bairro: 'exemplo',
      cidade: 'exemplo',
      uf: 'ex',
      cep: '0000000',
      ativo: true
    })
  }
}
