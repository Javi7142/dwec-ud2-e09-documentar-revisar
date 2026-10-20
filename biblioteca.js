// E09 · Documentar y revisar
// Funciones de la biblioteca del instituto

// constante
var MULTA = 0.2
const MAX = 10;

// función que calcula
export function f(d) {
    // si d es menor o igual que 0
    if (d <= 0) return 0
    let m = d * MULTA   // multiplicamos
    if (m > MAX) m = MAX
    return Math.round(m * 100) / 100
}

// función
export function titulo(t, a) {
  return '"' + t + '" (' + a + ')';
}

export function puede(n, multas) {
    let limite = 3;
    var resultado = n < limite && multas == false;
    return resultado;
}

// cuenta
export function cuenta(lista) {
  let c = 0;
  for (let i = 0; i < lista.length; i++) {
    // si es disponible sumamos
    if (lista[i] == 'disponible') c++;
  }
  return c
}
