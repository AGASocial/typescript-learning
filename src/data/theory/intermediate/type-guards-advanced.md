# Advanced Type Guards in TypeScript

Learn sophisticated type narrowing patterns for better type safety.

## Advanced Type Guard Patterns

1. **User-Defined Type Guards**
   ```typescript
   interface Cat { meow(): void }
   interface Dog { bark(): void }

   function isCat(animal: Cat | Dog): animal is Cat {
     return 'meow' in animal
   }
   ```

2. **Assertion Functions**
   ```typescript
   function assertIsNumber(val: unknown): asserts val is number {
     if (typeof val !== 'number') {
       throw new Error('Not a number!')
     }
   }
   ```

3. **Discriminated Unions**
   ```typescript
   type Shape = 
     | { kind: 'circle'; radius: number }
     | { kind: 'square'; size: number }

   function getArea(shape: Shape) {
     switch (shape.kind) {
       case 'circle': return Math.PI * shape.radius ** 2
       case 'square': return shape.size ** 2
     }
   }
   ```

## Best Practices
- Use type guards for complex type narrowing
- Combine with discriminated unions
- Consider assertion functions for validation

## Learn More
- [Type Guards Documentation](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)