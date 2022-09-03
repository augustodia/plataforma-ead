import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  public static table = 'DuvidasAula';

  @column({ isPrimary: true })
  public idDuvida: number

  @column()
  public idAula: number
  
  @column()
  public idAluno: number

  @column()
  public comentario: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}