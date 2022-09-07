import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User';

export default class Inscricao extends BaseModel {
  public static table = 'inscricoes';

  @column({ isPrimary: true })
  public idInscricao: number

  @column()
  public alunoId: number

  @belongsTo(() => User)
  public aluno: BelongsTo<typeof User>

  @column()
  public idPlano: number

  @column()
  public idOperacaoPagamento: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
