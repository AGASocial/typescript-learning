# Advanced Template Literals in TypeScript

Learn sophisticated string type manipulation techniques.

## Advanced Patterns

1. **String Manipulation**
   ```typescript
   type CamelToSnake<S extends string> = 
     S extends `${infer C}${infer R}`
       ? C extends Uppercase<C>
         ? `_${Lowercase<C>}${CamelToSnake<R>}`
         : `${C}${CamelToSnake<R>}`
       : S
   ```

2. **Path Types**
   ```typescript
   type PropPath<T, P extends string> = 
     P extends `${infer Key}.${infer Rest}`
       ? Key extends keyof T
         ? PropPath<T[Key], Rest>
         : never
       : P extends keyof T
         ? T[P]
         : never
   ```

3. **URL Parameters**
   ```typescript
   type URLParams<T> = {
     [K in keyof T]: `?${string & K}=${string & T[K]}`
   }[keyof T]
   ```

## Best Practices
- Handle edge cases
- Consider performance
- Use with mapped types

## Learn More
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
- [String Manipulation](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#string-unions-in-types)