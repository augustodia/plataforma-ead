import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  public static table = 'Cursos';

  @column({ columnName: 'idCurso', isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public valor: number

  @column()
  public ativo: boolean

  @column()
  public publicado: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
