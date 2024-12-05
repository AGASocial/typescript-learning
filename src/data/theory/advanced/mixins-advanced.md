# Advanced Mixins in TypeScript

Learn sophisticated mixin patterns for code composition.

## Advanced Mixin Patterns

1. **Constrained Mixins**
   ```typescript
   type GConstructor<T = {}> = new (...args: any[]) => T

   type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>

   function Moveable<TBase extends Positionable>(Base: TBase) {
     return class extends Base {
       move(dx: number, dy: number) {
         const pos = this.getPos()
         this.setPos(pos.x + dx, pos.y + dy)
       }
     }
   }
   ```

2. **Mixin Decorators**
   ```typescript
   function mixins(...constructors: any[]) {
     return function <T extends { new (...args: any[]): {} }>(target: T) {
       constructors.forEach(baseCtor => {
         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
           Object.defineProperty(
             target.prototype,
             name,
             Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || 
             Object.create(null)
           )
         })
       })
     }
   }
   ```

3. **Stateful Mixins**
   ```typescript
   function State<S extends object>() {
     return function<TBase extends GConstructor>(Base: TBase) {
       return class extends Base {
         private state: S

         setState(update: Partial<S>) {
           this.state = { ...this.state, ...update }
         }

         getState(): Readonly<S> {
           return Object.freeze({ ...this.state })
         }
       }
     }
   }
   ```

## Best Practices
- Use type constraints for safety
- Consider composition order
- Handle state carefully

## Learn More
- [Mixins Documentation](https://www.typescriptlang.org/docs/handbook/mixins.html)
- [Class Composition](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-heritage)