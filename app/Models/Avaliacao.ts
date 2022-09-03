import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  public static table = 'Avaliacoes';

  @column({ isPrimary: true })
  public idAvaliacao: number

  @column()
  public idAluno: number

  @column()
  public idCurso: number

  @column()
  public nota: number

  @column()
  public comentario: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
