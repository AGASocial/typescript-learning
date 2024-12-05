# Enums in TypeScript

Enums allow you to define a set of named constants.

## Working with Enums

1. **Numeric Enums**
   ```typescript
   enum Direction {
     Up,     // 0
     Down,   // 1
     Left,   // 2
     Right   // 3
   }
   ```

2. **String Enums**
   ```typescript
   enum Color {
     Red = "RED",
     Green = "GREEN",
     Blue = "BLUE"
   }
   ```

3. **Const Enums**
   ```typescript
   const enum Status {
     Active = "ACTIVE",
     Inactive = "INACTIVE"
   }
   ```

## Best Practices
- Use const enums for better performance
- Consider union types for simple cases
- Document enum values

## Learn More
- [Enums Documentation](https://www.typescriptlang.org/docs/handbook/enums.html)