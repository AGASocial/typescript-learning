# Any and Unknown Types in TypeScript

Understanding the difference between any and unknown types.

## Type Safety

1. **Any Type**
   ```typescript
   let anyValue: any = 10
   anyValue.foo()  // No error
   ```

2. **Unknown Type**
   ```typescript
   let unknownValue: unknown = 10
   // unknownValue.foo()  // Error!
   ```

3. **Type Checking**
   ```typescript
   function processUnknown(value: unknown) {
     if (typeof value === "string") {
       return value.toUpperCase()
     }
     return String(value)
   }
   ```

## Best Practices
- Avoid any when possible
- Use unknown for type-safe alternatives
- Always check unknown types

## Learn More
- [Unknown Type Documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)