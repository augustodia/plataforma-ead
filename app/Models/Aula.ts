import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Curso from './Curso';
import DuvidaAula from './DuvidaAula';

export default class Aula extends BaseModel {
  public static table = 'aulas';

  @column({ isPrimary: true })
  public idAula: number

  @hasMany(() => DuvidaAula)
  public duvidas: HasMany<typeof DuvidaAula>

  @column()
  public cursoId: number

  @belongsTo(() => Curso)
  public curso: BelongsTo<typeof Curso>

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
