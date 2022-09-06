import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula';

export default class Aluno extends BaseModel {
  public static table = 'cursos';

  @column({ columnName: 'id_curso', isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public valor: number

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>

  @column()
  public ativo: boolean

  @column()
  public publicado: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
