import { schema } from '@ioc:Adonis/Core/Validator'

let CreateValidator = schema.create({
  cursoId: schema.number(),
  nota: schema.number(),
  comentario: schema.string.optional()
})

export {CreateValidator}