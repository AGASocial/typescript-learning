# Generics Basics in TypeScript

Generics enable type-safe reusable components.

## Generic Patterns

1. **Generic Functions**
   ```typescript
   function identity<T>(arg: T): T {
     return arg
   }
   ```

2. **Generic Interfaces**
   ```typescript
   interface Container<T> {
     value: T
     getValue(): T
   }
   ```

3. **Generic Constraints**
   ```typescript
   interface Lengthwise {
     length: number
   }

   function logLength<T extends Lengthwise>(arg: T): number {
     return arg.length
   }
   ```

## Best Practices
- Use descriptive type parameter names
- Add constraints when needed
- Keep generic types simple

## Learn More
- [Generics Documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)