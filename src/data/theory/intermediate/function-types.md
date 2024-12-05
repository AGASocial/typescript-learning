# Function Types in TypeScript

Understanding how to type functions and their signatures.

## Function Type Patterns

1. **Function Type Expressions**
   ```typescript
   type Callback = (data: string) => void
   type Predicate = (value: unknown) => boolean
   ```

2. **Call Signatures**
   ```typescript
   interface Calculator {
     (x: number, y: number): number
     mode: 'add' | 'subtract'
   }
   ```

3. **Function Overloads**
   ```typescript
   interface StringNumberFunction {
     (x: string): string
     (x: number): number
   }
   ```

## Best Practices
- Use type aliases for function types
- Consider call signatures for methods
- Document complex function types

## Learn More
- [Functions Documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html)