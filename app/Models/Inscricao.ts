import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  public static table = 'Inscricoes';

  @column({ isPrimary: true })
  public idInscricao: number

  @column()
  public idAluno: number

  @column()
  public idPlano: number

  @column()
  public idOperacaoPagamento: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
