import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CursosConcluidos extends BaseSchema {
    protected tableName = 'CursosConcluidos'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('idConclusao')
            table.integer('idCurso').notNullable()
            table.integer('idAluno').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
