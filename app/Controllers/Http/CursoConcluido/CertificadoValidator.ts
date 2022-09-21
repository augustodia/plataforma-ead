import { schema } from '@ioc:Adonis/Core/Validator';

let CreateValidator = schema.create({
  cursoId: schema.number(),
});

export { CreateValidator };
