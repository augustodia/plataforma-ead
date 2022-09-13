import { schema } from '@ioc:Adonis/Core/Validator'

let CreateValidator = schema.create({
  aulaId: schema.number(),
  alunoId: schema.number(),
})

let UpdateValidator = schema.create({
  alunoId: schema.number(),
  visualizada: schema.boolean()
})

export {CreateValidator, UpdateValidator}