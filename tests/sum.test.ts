import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum';

describe('sum', () => {
  it('suma dos números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('suma con negativos', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});
