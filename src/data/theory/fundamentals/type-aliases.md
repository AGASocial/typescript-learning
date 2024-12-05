# Type Aliases in TypeScript

Type aliases create custom names for types, making code more readable and maintainable.

## Using Type Aliases

1. **Basic Type Aliases**
   ```typescript
   type ID = string | number
   type Point = { x: number; y: number }
   ```

2. **Complex Types**
   ```typescript
   type UserConfig = {
     id: ID
     name: string
     settings: {
       theme: 'light' | 'dark'
       notifications: boolean
     }
   }
   ```

3. **Function Types**
   ```typescript
   type Callback = (error: Error | null, result: any) => void
   ```

## Best Practices
- Use PascalCase for type names
- Create aliases for commonly used types
- Combine with other type features

## Learn More
- [Type Aliases Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)