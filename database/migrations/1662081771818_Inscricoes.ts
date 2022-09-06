import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inscricoes extends BaseSchema {
    protected tableName = 'inscricoes'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_inscricao')
            table.integer('aluno_id').notNullable().unsigned().references('id_aluno').inTable('alunos')
            table.integer('plano_id').notNullable()
            table.integer('id_operacao_pagamento').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
