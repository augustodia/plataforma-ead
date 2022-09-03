import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  public static table = 'Aulas';

  @column({ isPrimary: true })
  public idAula: number

  @column()
  public idCurso: number

  @column()
  public nome: string
  
  @column()
  public duracao: number

  @column()
  public ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
