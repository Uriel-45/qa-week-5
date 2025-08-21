import { describe, it, expect } from 'vitest';
import { isEven } from '../src/isEven';

describe('isEven', () => {
  it('true para pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('false para impares', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});
