import { schema } from '@ioc:Adonis/Core/Validator';

let CreateValidator = schema.create({
  cursoId: schema.number(),
});

let UpdateValidator = schema.create({
  cursoId: schema.number(),
  concluido: schema.boolean(),
});

export { CreateValidator, UpdateValidator };
