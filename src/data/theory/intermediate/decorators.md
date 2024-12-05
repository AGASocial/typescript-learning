# Decorators in TypeScript

Learn how to use and create TypeScript decorators for metaprogramming.

## Decorator Types

1. **Class Decorators**
   ```typescript
   function logged(target: Function) {
     console.log(`Class ${target.name} was decorated`)
   }

   @logged
   class Example {}
   ```

2. **Method Decorators**
   ```typescript
   function measure(
     target: any,
     key: string,
     descriptor: PropertyDescriptor
   ) {
     const original = descriptor.value
     descriptor.value = function(...args: any[]) {
       console.time(key)
       const result = original.apply(this, args)
       console.timeEnd(key)
       return result
     }
     return descriptor
   }
   ```

3. **Property Decorators**
   ```typescript
   function format(format: string) {
     return function(target: any, key: string) {
       let value = target[key]

       const getter = () => value
      
       const setter = (next: any) => {
         value = `[${format}] ${next}`
       }

       Object.defineProperty(target, key, {
         get: getter,
         set: setter,
         enumerable: true,
         configurable: true
       })
     }
   }
   ```

## Best Practices
- Use decorators for cross-cutting concerns
- Keep decorators focused and reusable
- Consider performance implications

## Learn More
- [Decorators Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Decorator Metadata](https://www.typescriptlang.org/docs/handbook/decorators.html#metadata)