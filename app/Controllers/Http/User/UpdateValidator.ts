import { schema, rules } from '@ioc:Adonis/Core/Validator'

let UpdateValidator = schema.create({
  password: schema.string.optional({}, [
    rules.confirmed(), //Preciso receber um password_confirmation do front para poder validar com esse método
    rules.minLength(6),
  ]),
  uf: schema.string.optional({}, [
    rules.maxLength(2)
  ]),
  cep: schema.string.optional({}, [
    rules.maxLength(8)
  ]),
})

export default UpdateValidator