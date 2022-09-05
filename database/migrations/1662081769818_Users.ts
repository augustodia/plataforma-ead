import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alunos extends BaseSchema {
    protected tableName = 'Alunos'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('idAluno')
            table.string('nome').notNullable()
            table.string('email').notNullable().unique()
            table.string('cpf').notNullable().unique()
            table.string('password').notNullable()
            table.string('remember_me_token').nullable()
            table.string('logradouro').notNullable()
            table.string('bairro').notNullable()
            table.string('cidade').notNullable()
            table.specificType('uf', 'char(2)').notNullable()
            table.string('cep').notNullable()
            table.string('complemento')
            table.boolean('ativo').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
