import { schema, rules } from '@ioc:Adonis/Core/Validator'

let CreateValidator = schema.create({
  cursoId: schema.number(),
  nome: schema.string({}, [
    rules.required()
  ]),
  duracao: schema.number()
})

let UpdateValidator = schema.create({
  cursoId: schema.number.optional(),
  nome: schema.string.optional({}),
  duracao: schema.number.optional(),
  ativo: schema.boolean.optional(),
})

export {CreateValidator, UpdateValidator}