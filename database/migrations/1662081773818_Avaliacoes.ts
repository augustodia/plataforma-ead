import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Avaliacoes extends BaseSchema {
    protected tableName = 'avaliacoes'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_avaliacao')
            table.integer('aluno_id').notNullable().unsigned().references('id_aluno').inTable('alunos')
            table.integer('curso_id').notNullable().unsigned().references('id_curso').inTable('cursos')
            table.integer('nota').notNullable()
            table.string('comentario')

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
