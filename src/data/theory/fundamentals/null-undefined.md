# Null and Undefined in TypeScript

Understanding how to work with null and undefined values.

## Type Safety

1. **Strict Null Checks**
   ```typescript
   let name: string = null // Error with strictNullChecks
   let age: number | null = null // OK
   ```

2. **Optional Chaining**
   ```typescript
   interface User {
     name: string
     address?: {
       street: string
     }
   }

   const user: User = { name: "John" }
   const street = user.address?.street // Safe access
   ```

3. **Nullish Coalescing**
   ```typescript
   const value = null ?? "default"
   const count = 0 ?? 42 // keeps 0
   ```

## Best Practices
- Enable strictNullChecks
- Use union types with null
- Leverage optional chaining

## Learn More
- [Strict Null Checks Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)