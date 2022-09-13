import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula';
import Aluno from './User';

export default class AulaVisualizada extends BaseModel {
  public static table = 'aulas_visualizadas';

  @column({ isPrimary: true })
  public idVisualizacao: number

  @column()
  public aulaId: number

  @column()
  public alunoId: number

  @column()
  public visualizada: boolean

  @belongsTo(() => Aula)
  public aula: BelongsTo<typeof Aula>

  @belongsTo(() => Aluno)
  public aluno: BelongsTo<typeof Aluno>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
