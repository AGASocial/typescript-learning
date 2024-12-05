# Interfaces in TypeScript

Interfaces define contracts in your code and provide explicit names for type checking.

## Core Concepts

1. **Basic Interface**
   ```typescript
   interface Person {
     name: string
     age: number
   }
   ```

2. **Optional Properties**
   ```typescript
   interface Config {
     color?: string
     width?: number
   }
   ```

3. **Readonly Properties**
   ```typescript
   interface Point {
     readonly x: number
     readonly y: number
   }
   ```

4. **Extending Interfaces**
   ```typescript
   interface Animal {
     name: string
   }

   interface Dog extends Animal {
     breed: string
   }
   ```

## Best Practices
- Use interfaces for public APIs
- Prefer interfaces over type aliases for objects
- Keep interfaces focused and single-purpose

## Learn More
- [Interfaces Documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html)