import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DuvidasAula extends BaseSchema {
    protected tableName = 'duvidas_aula'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_duvida')
            table.integer('aula_id').notNullable().unsigned().references('id_aula').inTable('aulas')
            table.integer('aluno_id').notNullable().unsigned().references('id_aluno').inTable('alunos')
            table.text('comentario').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
