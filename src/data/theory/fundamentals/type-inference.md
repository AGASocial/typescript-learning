# Type Inference in TypeScript

TypeScript can automatically determine types based on the context.

## How It Works

1. **Variable Initialization**
   ```typescript
   let message = "Hello" // inferred as string
   let count = 42       // inferred as number
   let active = true    // inferred as boolean
   ```

2. **Array Inference**
   ```typescript
   let numbers = [1, 2, 3]    // number[]
   let mixed = [1, "hello"]   // (string | number)[]
   ```

3. **Return Type Inference**
   ```typescript
   function add(x: number, y: number) {
     return x + y  // return type inferred as number
   }
   ```

## Best Practices
- Let TypeScript infer when types are obvious
- Add explicit types for better documentation
- Use explicit types for function parameters

## Learn More
- [Type Inference Documentation](https://www.typescriptlang.org/docs/handbook/type-inference.html)