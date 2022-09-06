import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aulas extends BaseSchema {
    protected tableName = 'aulas'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_aula')
            table.integer('curso_id').notNullable().unsigned().references('id_curso').inTable('cursos')
            table.string('nome').notNullable()
            table.integer('duracao').notNullable()
            table.boolean('ativo').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
