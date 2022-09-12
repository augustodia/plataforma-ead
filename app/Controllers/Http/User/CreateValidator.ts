import { schema, rules } from '@ioc:Adonis/Core/Validator'

let CreateValidator = schema.create({
  nome: schema.string({}, [
    rules.required()
  ]),
  email: schema.string({}, [
    rules.email(),
    rules.unique({table: 'alunos', column: 'email'})
  ]),
  cpf: schema.string({}, [
    rules.required(),
    rules.maxLength(11),
    rules.unique({table: 'alunos', column: 'cpf'})
  ]),
  password: schema.string({}, [
    rules.confirmed(), //Preciso receber um password_confirmation do front para poder validar com esse método
    rules.minLength(6),
  ]),
  logradouro: schema.string({}, [
    rules.required()
  ]),
  bairro: schema.string({}, [
    rules.required()
  ]),
  cidade: schema.string({}, [
    rules.required()
  ]),
  uf: schema.string({}, [
    rules.required(),
    rules.maxLength(2)
  ]),
  cep: schema.string({}, [
    rules.required(),
    rules.maxLength(8),
  ]),
  complemento: schema.string.optional()
})

export default CreateValidator