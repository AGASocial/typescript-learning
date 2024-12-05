# Arrays in TypeScript

TypeScript provides several ways to work with arrays, ensuring type safety for array elements.

## Array Types

1. **Basic Array Syntax**
   ```typescript
   let numbers: number[] = [1, 2, 3]
   let strings: string[] = ["a", "b", "c"]
   ```

2. **Generic Array Type**
   ```typescript
   let numbers: Array<number> = [1, 2, 3]
   let strings: Array<string> = ["a", "b", "c"]
   ```

3. **Mixed Arrays**
   ```typescript
   let mixed: (string | number)[] = [1, "two", 3]
   ```

4. **Multidimensional Arrays**
   ```typescript
   let matrix: number[][] = [
     [1, 2],
     [3, 4]
   ]
   ```

## Learn More
- [Array Types Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)