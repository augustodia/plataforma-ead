import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Curso from 'App/Models/Curso'

export default class Matricula extends BaseModel {
  public static table = 'matriculas';

  @column({ isPrimary: true })
  public idMatricula: number

  @column()
  public alunoId: number

  @belongsTo(() => User)
  public aluno: BelongsTo<typeof User>

  @column()
  public cursoId: number

  @belongsTo(() => Curso)
  public curso: BelongsTo<typeof Curso>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
