import { describe, it, expect } from 'vitest';
import {
  calcularMulta,
  formatearTitulo,
  puedePedirPrestado,
  contarDisponibles,
} from './biblioteca.js';

describe('calcularMulta', () => {
  it('multiplica los días de retraso por 0,20 € y redondea a céntimos', () => {
    expect(calcularMulta(3)).toBe(0.6);
  });

  it('no cobra nada sin retraso (caso límite: 0 días)', () => {
    expect(calcularMulta(0)).toBe(0);
  });

  it('no cobra nada si los días son negativos', () => {
    expect(calcularMulta(-5)).toBe(0);
  });

  it('llega justo a la multa máxima con 50 días (caso límite)', () => {
    expect(calcularMulta(50)).toBe(10);
  });

  it('no supera la multa máxima con muchos días de retraso', () => {
    expect(calcularMulta(80)).toBe(10);
  });
});

describe('formatearTitulo', () => {
  it('pone el título entre comillas y el autor entre paréntesis', () => {
    expect(formatearTitulo('Rayuela', 'Julio Cortázar')).toBe('"Rayuela" (Julio Cortázar)');
  });

  it('admite un título vacío (caso límite)', () => {
    expect(formatearTitulo('', 'Anónimo')).toBe('"" (Anónimo)');
  });
});

describe('puedePedirPrestado', () => {
  it('permite pedir con menos de 3 préstamos y sin multas', () => {
    expect(puedePedirPrestado(2, false)).toBe(true);
  });

  it('no permite pedir al llegar justo al límite de 3 préstamos (caso límite)', () => {
    expect(puedePedirPrestado(3, false)).toBe(false);
  });

  it('no permite pedir con multas pendientes aunque no haya préstamos', () => {
    expect(puedePedirPrestado(0, true)).toBe(false);
  });
});

describe('contarDisponibles', () => {
  it('cuenta solo los ejemplares disponibles', () => {
    expect(contarDisponibles(['disponible', 'prestado', 'disponible', 'reparación'])).toBe(2);
  });

  it('devuelve 0 con una lista vacía (caso límite)', () => {
    expect(contarDisponibles([])).toBe(0);
  });

  it('devuelve 0 si ninguno está disponible', () => {
    expect(contarDisponibles(['prestado', 'reparación'])).toBe(0);
  });
});
