import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Matriculas extends BaseSchema {
    protected tableName = 'matriculas'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_matricula')
            table.integer('aluno_id').notNullable().unsigned().references('id_aluno').inTable('alunos')
            table.integer('curso_id').notNullable().unsigned().references('id_curso').inTable('cursos')
            
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
