import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula';

export default class Aluno extends BaseModel {
  public static table = 'aulas_visualizadas';

  @column({ isPrimary: true })
  public idVisualizacao: number

  @column()
  public aulaId: number

  @belongsTo(() => Aula)
  public aula: BelongsTo<typeof Aula>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
