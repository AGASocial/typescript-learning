# Type Compatibility in TypeScript

Understanding when types are compatible with each other.

## Compatibility Rules

1. **Structural Typing**
   ```typescript
   interface Point {
     x: number
     y: number
   }

   const point3D = { x: 1, y: 2, z: 3 }
   const point: Point = point3D // OK
   ```

2. **Function Compatibility**
   ```typescript
   type Logger = (value: string) => void
   type StringProcessor = (value: string | number) => void

   let logger: Logger = value => console.log(value)
   let processor: StringProcessor = logger // OK
   ```

3. **Class Compatibility**
   ```typescript
   class Animal {
     name: string;
   }

   class Dog {
     name: string;
     breed: string;
   }

   let animal: Animal = new Dog() // OK
   ```

## Best Practices
- Understand structural typing
- Consider function parameter compatibility
- Be aware of class compatibility

## Learn More
- [Type Compatibility Documentation](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)