# Literal Types in TypeScript

Literal types allow you to specify exact values that a type can have.

## Using Literal Types

1. **String Literals**
   ```typescript
   type Direction = 'north' | 'south' | 'east' | 'west'
   type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
   ```

2. **Numeric Literals**
   ```typescript
   type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6
   type HttpStatus = 200 | 404 | 500
   ```

3. **Boolean Literals**
   ```typescript
   type Strict = true
   type Loose = false
   ```

## Common Use Cases
- API method types
- Status values
- Configuration options

## Learn More
- [Literal Types Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)