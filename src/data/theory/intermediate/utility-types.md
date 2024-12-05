# Utility Types in TypeScript

Built-in types that transform or extract type information.

## Common Utility Types

1. **Partial and Required**
   ```typescript
   type PartialUser = Partial<User>  // All properties optional
   type RequiredUser = Required<User>  // All properties required
   ```

2. **Pick and Omit**
   ```typescript
   type NameOnly = Pick<User, 'name'>  // Only name property
   type NoId = Omit<User, 'id'>  // Everything except id
   ```

3. **Record and Extract**
   ```typescript
   type Theme = Record<'light' | 'dark', { color: string }>
   type StringProps = Extract<keyof User, string>
   ```

## Best Practices
- Use built-in utilities when possible
- Combine utilities for complex transformations
- Create custom utilities when needed

## Learn More
- [Utility Types Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)