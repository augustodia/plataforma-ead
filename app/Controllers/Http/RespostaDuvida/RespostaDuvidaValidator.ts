import { schema } from '@ioc:Adonis/Core/Validator';

let CreateValidator = schema.create({
  alunoId: schema.number(),
  duvidaId: schema.number(),
  comentario: schema.string(),
});
export { CreateValidator };
