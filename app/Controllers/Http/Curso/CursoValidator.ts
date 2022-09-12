import { schema, rules } from '@ioc:Adonis/Core/Validator'

let CreateValidator = schema.create({
  nome: schema.string({}, [
    rules.required()
  ]),
  descricao: schema.string.optional(),
  valor: schema.number()
})

let UpdateValidator = schema.create({
  nome: schema.string.optional({}, [
    rules.required()
  ]),
  descricao: schema.string.optional(),
  valor: schema.number.optional(),
  ativo: schema.boolean.optional(),
  publicado: schema.boolean.optional(),
})

let MsgValidacao = schema.create({
  msgConfirm: schema.string({},[
    rules.required()
  ])
})

export {CreateValidator, UpdateValidator, MsgValidacao}