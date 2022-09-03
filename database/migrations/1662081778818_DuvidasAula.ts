import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DuvidasAula extends BaseSchema {
    protected tableName = 'DuvidasAula'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('idDuvida')
            table.integer('idAula').notNullable()
            table.integer('idAluno').notNullable()
            table.text('comentario').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
