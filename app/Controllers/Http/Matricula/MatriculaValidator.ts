import { schema } from '@ioc:Adonis/Core/Validator';

let CreateValidator = schema.create({
  alunoId: schema.number(),
  cursoId: schema.number(),
});
export { CreateValidator };
