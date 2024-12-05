# Tuples in TypeScript

Tuples are arrays with a fixed number of elements where each element may have a different type.

## Working with Tuples

1. **Basic Tuple**
   ```typescript
   let tuple: [string, number] = ["hello", 10]
   ```

2. **Optional Elements**
   ```typescript
   let optionalTuple: [string, number?] = ["hello"]
   ```

3. **Rest Elements**
   ```typescript
   let restTuple: [number, ...string[]] = [1, "hello", "world"]
   ```

4. **Named Tuples**
   ```typescript
   let point: [x: number, y: number] = [10, 20]
   ```

## Common Use Cases
- Representing coordinates
- Returning multiple values from functions
- Defining fixed data structures

## Learn More
- [Tuple Types Documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)