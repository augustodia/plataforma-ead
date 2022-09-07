import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Curso from './Curso';
import User from './User';

export default class Certificado extends BaseModel {
  public static table = 'certificados';

  @column({ isPrimary: true })
  public idCertificado: number

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
