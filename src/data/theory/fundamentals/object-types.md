# Object Types in TypeScript

Object types define the shape of objects with property types.

## Working with Object Types

1. **Basic Object Type**
   ```typescript
   type User = {
     name: string
     age: number
     email?: string  // Optional property
   }
   ```

2. **Readonly Properties**
   ```typescript
   type Point = {
     readonly x: number
     readonly y: number
   }
   ```

3. **Index Signatures**
   ```typescript
   type Dictionary = {
     [key: string]: string
   }
   ```

## Best Practices
- Use interfaces for public APIs
- Mark immutable properties as readonly
- Use optional properties when needed

## Learn More
- [Object Types Documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html)