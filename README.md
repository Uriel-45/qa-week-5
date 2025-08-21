# qa-week-5

Este proyecto contiene funciones simples de utilidad matemática con sus respectivos tests.

## Funciones

### sum(a, b)

Suma dos números y devuelve el resultado.

```typescript
const resultado = sum(2, 3); // 5
```

### isEven(n)

Verifica si un número es par.

```typescript
const esPar = isEven(4); // true
const esImpar = isEven(3); // false
```

## Scripts disponibles

- `npm test`: Ejecuta todos los tests.
- `npm run test:watch`: Ejecuta los tests en modo watch.
- `npm run lint`: Ejecuta ESLint para verificar el código.
- `npm run lint:fix`: Ejecuta ESLint para verificar y corregir automáticamente el código.
- `npm run format`: Ejecuta Prettier para formatear el código.

## Tecnologías utilizadas

- TypeScript
- Vitest para testing
- ESLint para linting
- Prettier para formateo

## Configuración

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm test` para correr los tests

## Mejoras implementadas

1. Agregada documentación JSDoc a las funciones.
2. Ampliados los casos de prueba para cubrir más escenarios.
3. Agregada configuración de ESLint y Prettier para mantener la calidad del código.
4. Agregados scripts para linting y formateo.
</content>
<line_count>35</line_count>
</write_to_file>