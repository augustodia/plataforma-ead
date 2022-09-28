import { schema } from '@ioc:Adonis/Core/Validator';

let CreateValidator = schema.create({
  alunoId: schema.number(),
  aulaId: schema.number(),
  comentario: schema.string(),
});
export { CreateValidator };
