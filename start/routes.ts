import Route from '@ioc:Adonis/Core/Route'

/* AUTENTICAÇÃO */
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout').middleware('auth')
/* AUTENTICAÇÃO */

/* ALUNO */
Route.group(() => {
  Route.get('/', 'User/UserController.showAll').middleware(['auth', 'isSuperUser'])
  Route.get('/:id', 'User/UserController.showById').middleware('auth')
  Route.post('/', 'User/UserController.create') //Cadastro
  Route.put('/:id', 'User/UserController.update').middleware('auth')
}).prefix('/aluno')
/* ALUNO */

/* CURSO */
Route.group(() => {
  Route.get('/all', 'Curso/CursoController.allCursos')
  Route.get('/:id', 'Curso/CursoController.cursoById')
  Route.post('/', 'Curso/CursoController.create')
  Route.put('/:id', 'Curso/CursoController.update').middleware(['auth', 'isSuperUser'])
  Route.delete('/:id', 'Curso/CursoController.delete').middleware(['auth', 'isSuperUser'])
}).prefix('/curso')
/* CURSO */

/* AULA */
Route.get('/aulasByCurso/:idCurso', 'Aula/AulaController.aulasByCurso').middleware('auth')
Route.get('/aulaById/:id', 'Aula/AulaController.aulaById').middleware('auth')
Route.post('/aula', 'Aula/AulaController.create').middleware(['auth', 'isSuperUser'])
Route.put('/aula/:id', 'Aula/AulaController.update').middleware(['auth', 'isSuperUser'])
Route.delete('/aula/:id', 'Aula/AulaController.delete').middleware(['auth', 'isSuperUser'])
/* AULA */