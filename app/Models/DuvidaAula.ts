import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import Aula from './Aula';
import RespostaDuvida from './RespostaDuvida';

export default class DuvidaAula extends BaseModel {
  public static table = 'duvidas_aula';

  @column({ isPrimary: true })
  public idDuvida: number

  @column()
  public aulaId: number

  @belongsTo(() => Aula)
  public aula: BelongsTo<typeof Aula>
  
  @column()
  public alunoId: number

  @belongsTo(() => User, { foreignKey: 'alunoId' })
  public aluno: BelongsTo<typeof User>

  @column()
  public comentario: string

  @hasMany(() => RespostaDuvida)
  public respostas: HasMany<typeof RespostaDuvida>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
