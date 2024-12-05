# Advanced Conditional Types in TypeScript

Learn sophisticated conditional type patterns for complex type transformations.

## Advanced Patterns

1. **Distributive Conditionals**
   ```typescript
   type ToArray<T> = T extends any ? T[] : never
   // string | number -> string[] | number[]
   ```

2. **Nested Inference**
   ```typescript
   type UnpackPromise<T> = T extends Promise<infer U>
     ? U extends Promise<any>
       ? UnpackPromise<U>
       : U
     : T
   ```

3. **Type Predicates**
   ```typescript
   type IsNever<T> = [T] extends [never] ? true : false
   type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
   ```

## Best Practices
- Use distributive types carefully
- Handle recursive types with care
- Consider type inference depth

## Learn More
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)