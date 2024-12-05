# Type Assertions in TypeScript

Type assertions tell TypeScript to treat a value as a specific type.

## Using Type Assertions

1. **Basic Assertions**
   ```typescript
   let someValue: any = "hello"
   let strLength: number = (someValue as string).length
   ```

2. **Angle Bracket Syntax**
   ```typescript
   let someValue: any = "hello"
   let strLength: number = (<string>someValue).length
   ```

3. **Const Assertions**
   ```typescript
   const config = {
     api: "https://api.example.com",
     timeout: 3000
   } as const
   ```

## Best Practices
- Use assertions sparingly
- Prefer type declarations when possible
- Be careful with type safety

## Learn More
- [Type Assertions Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)