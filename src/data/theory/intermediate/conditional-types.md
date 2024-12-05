# Conditional Types in TypeScript

Conditional types select types based on type relationships.

## Core Concepts

1. **Basic Conditional Types**
   ```typescript
   type IsString<T> = T extends string ? true : false
   ```

2. **Inferring Within Conditionals**
   ```typescript
   type ElementType<T> = T extends Array<infer U> ? U : never
   ```

3. **Distributive Conditionals**
   ```typescript
   type ToArray<T> = T extends any ? T[] : never
   // string | number -> string[] | number[]
   ```

## Best Practices
- Use for type selection logic
- Leverage type inference
- Consider type distribution

## Learn More
- [Conditional Types Documentation](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)