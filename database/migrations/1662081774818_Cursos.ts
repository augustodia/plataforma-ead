import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cursos extends BaseSchema {
    protected tableName = 'Cursos'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('idCurso')
            table.string('nome').notNullable()
            table.float('valor').notNullable()
            table.boolean('ativo').notNullable()
            table.boolean('publicado').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
