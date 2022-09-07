import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import DuvidaAula from './DuvidaAula';
import User from './User';

export default class RespostaDuvida extends BaseModel {
  public static table = 'respostas_duvida';

  @column({ isPrimary: true })
  public idResposta: number

  @column()
  public duvidaId: number

  @belongsTo(() => DuvidaAula)
  public duvida: BelongsTo<typeof DuvidaAula>
  
  @column()
  public alunoId: number

  @belongsTo(() => User)
  public aluno: BelongsTo<typeof User>

  @column()
  public comentario: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
