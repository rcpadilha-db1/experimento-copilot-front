import { describe, it, expect } from 'vitest';
import { addSignal } from './detalhes.helper';

describe('addSignal', () => {
  it('deve retornar o número com sinal positivo para números positivos', () => {
    expect(addSignal(5)).toBe('+5');
  });

  it('deve retornar o número sem sinal para números negativos', () => {
    expect(addSignal(-3)).toBe('-3');
  });

  it('deve retornar o número sem sinal para zero', () => {
    expect(addSignal(0)).toBe('0');
  });
});
