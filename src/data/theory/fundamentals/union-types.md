# Union Types in TypeScript

Union types allow a value to be one of several types.

## Using Union Types

1. **Basic Unions**
   ```typescript
   let id: string | number = "abc123"
   id = 123 // also valid
   ```

2. **Type Guards**
   ```typescript
   function process(value: string | number) {
     if (typeof value === "string") {
       return value.toUpperCase()
     }
     return value.toFixed(2)
   }
   ```

3. **Union with Literals**
   ```typescript
   type Status = "pending" | "approved" | "rejected"
   let status: Status = "pending"
   ```

## Best Practices
- Use type guards to narrow types
- Combine with literal types for enums
- Consider interfaces for complex unions

## Learn More
- [Union Types Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)