import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AulasVisualizadas extends BaseSchema {
    protected tableName = 'aulas_visualizadas'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_visualizacao')
            table.integer('aula_id').notNullable().unsigned().references('id_aula').inTable('aulas')

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
