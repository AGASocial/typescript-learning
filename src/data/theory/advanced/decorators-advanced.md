# Advanced Decorators in TypeScript

Learn sophisticated decorator patterns for metaprogramming.

## Advanced Decorator Patterns

1. **Composable Decorators**
   ```typescript
   function compose(...decorators: any[]) {
     return (target: any, key?: string, descriptor?: PropertyDescriptor) => {
       return decorators.reduceRight((prev, curr) => {
         return curr(target, key, prev)
       }, descriptor)
     }
   }
   ```

2. **Decorator Factories**
   ```typescript
   function memoize(hashFn?: (...args: any[]) => string) {
     return function(target: any, key: string, descriptor: PropertyDescriptor) {
       const original = descriptor.value
       const cache = new Map()

       descriptor.value = function(...args: any[]) {
         const key = hashFn ? hashFn(...args) : JSON.stringify(args)
         if (cache.has(key)) return cache.get(key)
         const result = original.apply(this, args)
         cache.set(key, result)
         return result
       }
       return descriptor
     }
   }
   ```

3. **Parameter Decorators**
   ```typescript
   function validate(schema: any) {
     return function(target: any, key: string, parameterIndex: number) {
       // Validation logic
     }
   }
   ```

## Best Practices
- Consider performance implications
- Use decorator composition
- Document decorator behavior

## Learn More
- [Decorators Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Decorator Metadata](https://www.typescriptlang.org/docs/handbook/decorators.html#metadata)