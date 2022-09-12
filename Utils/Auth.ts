import Env from '@ioc:Adonis/Core/Env'

export function isSuperUser(user): boolean {
  return user.email === Env.get('EMAIL_ADMIN');
}

export function isCurrentUser(userLogged, idUserTarget): boolean {
  return userLogged.id == idUserTarget;
}