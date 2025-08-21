/**
 * Verifica si un número es par.
 *
 * @param n - El número a verificar.
 * @returns `true` si el número es par, `false` en caso contrario.
 *
 * @example
 * ```typescript
 * const esPar = isEven(4); // true
 * const esImpar = isEven(3); // false
 * ```
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}
