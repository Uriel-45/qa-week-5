import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum';

describe('sum', () => {
  it('suma dos números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('suma con negativos', () => {
    expect(sum(-2, 3)).toBe(1);
  });

  it('suma con cero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('suma dos ceros', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('suma números decimales', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('suma números grandes', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});
