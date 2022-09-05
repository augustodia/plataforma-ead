import { DateTime } from 'luxon'
import { beforeSave, BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  public static table = 'Alunos';

  @column({ columnName: 'idAluno', isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public logradouro: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: string

  @column()
  public complemento: string

  @column()
  public ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
