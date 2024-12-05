# Reflection and Metadata in TypeScript

Learn how to use reflection and metadata for runtime type information.

## Core Concepts

1. **Reflect API**
   ```typescript
   import 'reflect-metadata'

   @controller('/users')
   class UserController {
     @inject
     service: UserService
   }

   // Get metadata
   const path = Reflect.getMetadata('path', UserController)
   ```

2. **Metadata Decorators**
   ```typescript
   function controller(path: string) {
     return function(target: Function) {
       Reflect.defineMetadata('path', path, target)
     }
   }

   function inject(target: any, key: string) {
     const type = Reflect.getMetadata('design:type', target, key)
     const instance = new type()
     Reflect.defineProperty(target, key, { value: instance })
   }
   ```

3. **Runtime Type Information**
   ```typescript
   function validate<T>(target: any, key: string) {
     const type = Reflect.getMetadata('design:type', target, key)
     let value = target[key]

     return {
       get() { return value },
       set(newValue: T) {
         if (!(newValue instanceof type)) {
           throw new Error(`Invalid type, expected ${type.name}`)
         }
         value = newValue
       }
     }
   }
   ```

## Best Practices
- Enable metadata in tsconfig.json
- Use for dependency injection
- Consider performance impact

## Learn More
- [Metadata Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#metadata)
- [Reflect API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)