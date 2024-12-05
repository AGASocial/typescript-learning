# Mapped Types in TypeScript

Mapped types allow you to create new types based on existing ones.

## Core Concepts

1. **Basic Mapped Type**
   ```typescript
   type Readonly<T> = {
     readonly [P in keyof T]: T[P]
   }
   ```

2. **Optional Mappings**
   ```typescript
   type Partial<T> = {
     [P in keyof T]?: T[P]
   }
   ```

3. **Key Remapping**
   ```typescript
   type Getters<T> = {
     [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
   }
   ```

## Best Practices
- Use for type transformations
- Combine with other type features
- Consider readability

## Learn More
- [Mapped Types Documentation](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)