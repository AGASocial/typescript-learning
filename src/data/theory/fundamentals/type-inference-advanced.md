# Advanced Type Inference in TypeScript

Understanding TypeScript's sophisticated type inference capabilities.

## Inference Patterns

1. **Contextual Typing**
   ```typescript
   // Type inferred from context
   const numbers = [1, 2, 3] // number[]
   const mixed = [1, "two", true] // (string | number | boolean)[]
   ```

2. **Return Type Inference**
   ```typescript
   function createUser(name: string, age: number) {
     return { name, age } // { name: string; age: number }
   }
   ```

3. **Generic Type Inference**
   ```typescript
   function first<T>(arr: T[]) {
     return arr[0] // T
   }

   const value = first([1, 2, 3]) // number
   ```

## Best Practices
- Let TypeScript infer when obvious
- Add explicit types for clarity
- Understand inference limitations

## Learn More
- [Type Inference Documentation](https://www.typescriptlang.org/docs/handbook/type-inference.html)