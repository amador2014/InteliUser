/**
 * Esta é uma função de exemplo da getAge
 *
 * @example
 *   const isAuthenticated = isAuth()
 *   // output: true or false
 *
 */

export function isAuth():boolean {
  var user = localStorage.getItem("@Inteliuser:user-logged");
  if (!user) return false;

  return true;
}
