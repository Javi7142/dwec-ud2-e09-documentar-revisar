// @ts-check
// E09 · Documentar y revisar
// Funciones de la biblioteca del instituto

/**
 * Multa en euros por cada día de retraso en la devolución de un libro.
 * @type {number}
 */
const MULTA_POR_DIA = 0.2;

/**
 * Multa máxima en euros que se cobra por un préstamo, por muchos días de retraso que haya.
 * @type {number}
 */
const MULTA_MAXIMA = 10;

/**
 * Número de libros que un alumno puede tener prestados a la vez como máximo.
 * El alumno puede pedir uno más mientras tenga menos que este límite.
 * @type {number}
 */
const LIMITE_PRESTAMOS = 3;

/**
 * Calcula la multa por devolver un libro con retraso.
 * @param {number} diasRetraso Días de retraso en la devolución (0 o menos si no hay retraso).
 * @returns {number} Multa en euros, entre 0 y `MULTA_MAXIMA`, redondeada a céntimos.
 * @example
 * calcularMulta(3); // 0.6
 * calcularMulta(80); // 10
 */
export function calcularMulta(diasRetraso) {
  if (diasRetraso <= 0) return 0;

  const multa = Math.min(diasRetraso * MULTA_POR_DIA, MULTA_MAXIMA);
  // Se redondea a céntimos porque los decimales binarios no son exactos:
  // 0.2 * 3 da 0.6000000000000001 y no se puede cobrar esa cantidad.
  return Math.round(multa * 100) / 100;
}

/**
 * Da formato al título de un libro junto a su autor.
 * @param {string} titulo Título del libro.
 * @param {string} autor Nombre del autor.
 * @returns {string} Texto con el título entre comillas y el autor entre paréntesis.
 * @example
 * formatearTitulo('Rayuela', 'Julio Cortázar'); // '"Rayuela" (Julio Cortázar)'
 */
export function formatearTitulo(titulo, autor) {
  return `"${titulo}" (${autor})`;
}

/**
 * Indica si un alumno puede pedir prestado un libro más.
 * @param {number} prestamosActivos Número de libros que tiene prestados ahora.
 * @param {boolean} tieneMultas `true` si tiene multas pendientes de pagar.
 * @returns {boolean} `true` si tiene menos de `LIMITE_PRESTAMOS` préstamos y ninguna multa.
 * @example
 * puedePedirPrestado(2, false); // true
 * puedePedirPrestado(3, false); // false
 */
export function puedePedirPrestado(prestamosActivos, tieneMultas) {
  return prestamosActivos < LIMITE_PRESTAMOS && !tieneMultas;
}

/**
 * Cuenta cuántos ejemplares están disponibles para prestar.
 * @param {string[]} estados Estado de cada ejemplar ('disponible', 'prestado', 'reparación'…).
 * @returns {number} Número de ejemplares con estado 'disponible'.
 * @example
 * contarDisponibles(['disponible', 'prestado', 'disponible']); // 2
 */
export function contarDisponibles(estados) {
  let disponibles = 0;
  for (const estado of estados) {
    if (estado == 'disponible') disponibles++;
  }
  return disponibles;
}
