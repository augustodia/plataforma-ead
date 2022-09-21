import Route from '@ioc:Adonis/Core/Route';

/* AUTENTICAÇÃO */
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout').middleware('auth');
/* AUTENTICAÇÃO */

/* ALUNO */
Route.group(() => {
  Route.get('/', 'User/UserController.showAll').middleware(['auth', 'isSuperUser']);
  Route.get('/:id', 'User/UserController.showById').middleware('auth');
  Route.post('/', 'User/UserController.create'); //Cadastro
  Route.put('/:id', 'User/UserController.update').middleware('auth');
}).prefix('/aluno');
/* ALUNO */

/* CURSO */
Route.group(() => {
  Route.get('/all', 'Curso/CursoController.allCursos');
  Route.get('/:id', 'Curso/CursoController.cursoById');
  Route.post('/', 'Curso/CursoController.create');
  Route.put('/:id', 'Curso/CursoController.update').middleware(['auth', 'isSuperUser']);
  Route.delete('/:id', 'Curso/CursoController.delete').middleware(['auth', 'isSuperUser']);
}).prefix('/curso');
/* CURSO */

/* AULA */
Route.group(() => {
  Route.get('/aulasByCurso/:idCurso', 'Aula/AulaController.aulasByCurso');
  Route.get('/aulaById/:id', 'Aula/AulaController.aulaById');
  Route.post('/aula', 'Aula/AulaController.create').middleware('isSuperUser');
  Route.put('/aula/:id', 'Aula/AulaController.update').middleware('isSuperUser');
  Route.delete('/aula/:id', 'Aula/AulaController.delete').middleware('isSuperUser');
}).middleware('auth');
/* AULA */

/* AULA VISUALIZADA */
Route.group(() => {
  Route.post(
    '/aulaVisualizadaById/:aulaId',
    'AulaVisualizada/AulaVisualizadaController.visualizacaoByIdAula'
  );
  Route.post('/aulaVisualizada', 'AulaVisualizada/AulaVisualizadaController.create');
  Route.put('/aulaVisualizada/:aulaId', 'AulaVisualizada/AulaVisualizadaController.update');
}).middleware(['auth', 'isCurrentUser']);
/* AULA VISUALIZADA */

/* AVALIACAO CURSO */
Route.group(() => {
  Route.get('/showAll/:cursoId', 'Avaliacao/AvaliacaoController.showAll').middleware('isSuperUser');
  Route.post('/create/:alunoId', 'Avaliacao/AvaliacaoController.create').middleware(
    'isCurrentUser'
  );
})
  .prefix('/avaliacao')
  .middleware(['auth']);
/* AVALIACAO CURSO */

/* CERTIFICADO */
Route.group(() => {
  Route.get('/showAll/:cursoId', 'Certificado/CertificadoController.showAll').middleware(
    'isSuperUser'
  );
  Route.post('/showByAlunoId/:alunoId', 'Certificado/CertificadoController.showByAlunoId');
  Route.post('/create/:alunoId', 'Certificado/CertificadoController.create');
})
  .prefix('/certificado')
  .middleware(['auth', 'isCurrentUser']);
/* CERTIFICADO */

/* CURSO CONCLUÍDO */
Route.group(() => {
  Route.post('/:alunoId', 'CursoConcluido/CursoConcluidoController.showByCursoId');
  Route.post('/create/:alunoId', 'CursoConcluido/CursoConcluidoController.create');
  Route.put('/update/:alunoId', 'CursoConcluido/CursoConcluidoController.update');
})
  .prefix('/conclusaoCurso')
  .middleware(['auth', 'isCurrentUser']);
/* CURSO CONCLUÍDO */
