import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inscricoes extends BaseSchema {
    protected tableName = 'Inscricoes'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('idInscricao')
            table.integer('idAluno').notNullable()
            table.integer('idPlano').notNullable()
            table.integer('idOperacaoPagamento').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
