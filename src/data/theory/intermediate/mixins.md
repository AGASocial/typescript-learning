# Mixins in TypeScript

Learn how to create and compose mixins for code reuse.

## Mixin Patterns

1. **Basic Mixin**
   ```typescript
   type Constructor<T = {}> = new (...args: any[]) => T

   function Timestamped<TBase extends Constructor>(Base: TBase) {
     return class extends Base {
       timestamp = new Date()
       
       getTimestamp() {
         return this.timestamp
       }
     }
   }
   ```

2. **Composing Mixins**
   ```typescript
   function Tagged<TBase extends Constructor>(Base: TBase) {
     return class extends Base {
       tags: string[] = []
       
       addTag(tag: string) {
         this.tags.push(tag)
       }
     }
   }

   class User {}
   const TaggedTimestampedUser = Tagged(Timestamped(User))
   ```

3. **Constrained Mixins**
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

## Best Practices
- Use mixins for horizontal code reuse
- Keep mixins focused and composable
- Consider type constraints

## Learn More
- [Mixins Documentation](https://www.typescriptlang.org/docs/handbook/mixins.html)