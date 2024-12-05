# Type Narrowing in TypeScript

Type narrowing is the process of refining types to more specific ones.

## Narrowing Techniques

1. **typeof Type Guards**
   ```typescript
   function process(value: string | number) {
     if (typeof value === "string") {
       return value.toUpperCase() // value is string
     }
     return value.toFixed(2) // value is number
   }
   ```

2. **instanceof Checks**
   ```typescript
   class Animal {
     name: string;
     constructor(name: string) {
       this.name = name
     }
   }

   function processAnimal(value: any) {
     if (value instanceof Animal) {
       return value.name // value is Animal
     }
   }
   ```

3. **in Operator**
   ```typescript
   interface Bird { fly(): void }
   interface Fish { swim(): void }

   function move(pet: Bird | Fish) {
     if ("fly" in pet) {
       pet.fly() // pet is Bird
     } else {
       pet.swim() // pet is Fish
     }
   }
   ```

## Best Practices
- Use type guards for unions
- Combine multiple checks when needed
- Consider custom type predicates

## Learn More
- [Narrowing Documentation](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)