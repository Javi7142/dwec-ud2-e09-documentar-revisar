// E09 · Documentar y revisar
// Prueba rápida de las funciones de la biblioteca
import { f, titulo, puede, cuenta } from './biblioteca.js';

console.log(f(3));
console.log(f(80));
console.log(titulo('Rayuela', 'Julio Cortázar'));
console.log(puede(2, false));
console.log(puede(3, false));
console.log(cuenta(['disponible', 'prestado', 'disponible', 'reparación']));
