# Advanced Generics in TypeScript

Learn advanced generic patterns and techniques for creating flexible, type-safe code.

## Advanced Generic Patterns

1. **Generic Factory Functions**
   ```typescript
   function createFactory<T>(
     ctor: new (...args: any[]) => T,
     initialize: (instance: T) => void
   ) {
     return (...args: any[]) => {
       const instance = new ctor(...args)
       initialize(instance)
       return instance
     }
   }
   ```

2. **Higher-Order Type Parameters**
   ```typescript
   type HKT<T, U = any> = T extends { type: U } ? T : never

   interface Functor<T> {
     map<U>(f: (x: T) => U): Functor<U>
   }
   ```

3. **Generic Type Inference**
   ```typescript
   function compose<A, B, C>(
     f: (a: A) => B,
     g: (b: B) => C
   ): (a: A) => C {
     return (a) => g(f(a))
   }
   ```

## Best Practices
- Use constraints to ensure type safety
- Leverage type inference when possible
- Document complex generic patterns

## Learn More
- [Advanced Types Documentation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Generic Classes](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes)