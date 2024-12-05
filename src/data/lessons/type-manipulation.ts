import { Chapter } from '../../types/lesson';

export const typeManipulation: Chapter = {
  id: 'type-manipulation',
  title: 'Advanced Type Manipulation',
  lessons: [
    {
      id: 'conditional-types-basics',
      title: 'Basic Conditional Types',
      difficulty: 'advanced',
      description: 'Introduction to conditional type patterns',
      instructions: `
Learn the fundamentals of conditional types.

## Task
1. Create simple conditional types
2. Use the extends keyword
3. Implement basic type branching`,
      initialCode: `// Implement conditional types
type IsString
type IsArray
type NonNullable`,
      solution: `type IsString<T> = T extends string ? true : false
type IsArray<T> = T extends any[] ? true : false
type NonNullable<T> = T extends null | undefined ? never : T

// Usage
type StringCheck = IsString<"hello"> // true
type ArrayCheck = IsArray<number[]> // true
type NonNull = NonNullable<string | null> // string`,
      hints: [
        'Conditional types use extends keyword',
        'Use true/false for boolean conditions',
        'never type removes types from unions'
      ]
    },
    {
      id: 'distributive-conditionals',
      title: 'Distributive Conditional Types',
      difficulty: 'advanced',
      description: 'Understanding distributive behavior',
      instructions: `
Learn how conditional types distribute over unions.

## Task
1. Create distributive types
2. Handle union types
3. Control distribution`,
      initialCode: `// Implement distributive types
type Distribute
type NonDistributive
type Filter`,
      solution: `type Distribute<T> = T extends any ? T[] : never
type NonDistributive<T> = [T] extends [any] ? T[] : never
type Filter<T, U> = T extends U ? T : never

// Usage
type DistResult = Distribute<string | number>
// string[] | number[]

type NonDistResult = NonDistributive<string | number>
// (string | number)[]

type Strings = Filter<string | number | boolean, string>
// string`,
      hints: [
        'Naked type parameters are distributive',
        'Wrap in tuple to prevent distribution',
        'Distribution happens automatically'
      ]
    },
    {
      id: 'type-inference-infer',
      title: 'Type Inference with infer',
      difficulty: 'advanced',
      description: 'Using infer for type extraction',
      instructions: `
Learn to extract types using the infer keyword.

## Task
1. Extract array element types
2. Extract function return types
3. Extract promise types`,
      initialCode: `// Implement type inference
type ArrayElement
type ReturnType
type Awaited`,
      solution: `type ArrayElement<T> = T extends (infer U)[] ? U : never
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never
type Awaited<T> = T extends Promise<infer U> ? U : T

// Usage
type Numbers = ArrayElement<number[]> // number
type ReturnString = ReturnType<() => string> // string
type ResolvedType = Awaited<Promise<string>> // string`,
      hints: [
        'infer creates type variables',
        'Use in extends clause',
        'Can be nested for deep extraction'
      ]
    },
    {
      id: 'recursive-conditional-types',
      title: 'Recursive Conditional Types',
      difficulty: 'advanced',
      description: 'Creating recursive type patterns',
      instructions: `
Learn to create recursive conditional types.

## Task
1. Create recursive type unwrapping
2. Handle nested structures
3. Implement depth limits`,
      initialCode: `// Implement recursive types
type DeepUnwrap
type FlattenArray
type UnwrapPromises`,
      solution: `type DeepUnwrap<T> = T extends Promise<infer U>
  ? DeepUnwrap<U>
  : T

type FlattenArray<T> = T extends Array<infer U>
  ? U extends Array<any>
    ? FlattenArray<U>
    : U
  : T

type UnwrapPromises<T> = T extends Promise<infer U>
  ? UnwrapPromises<U>
  : T extends object
    ? { [K in keyof T]: UnwrapPromises<T[K]> }
    : T`,
      hints: [
        'Recursive types call themselves',
        'Handle base cases first',
        'Consider infinite recursion'
      ]
    },
    {
      id: 'mapped-types-basic',
      title: 'Basic Mapped Types',
      difficulty: 'advanced',
      description: 'Creating mapped type transformations',
      instructions: `
Learn to transform types using mapped types.

## Task
1. Create readonly mappings
2. Create optional mappings
3. Filter properties`,
      initialCode: `// Implement mapped types
type Readonly
type Partial
type Pick`,
      solution: `type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// Usage
interface User {
  name: string
  age: number
}

type ReadonlyUser = Readonly<User>
type PartialUser = Partial<User>
type NameOnly = Pick<User, 'name'>`,
      hints: [
        'Use keyof to get keys',
        'in operator iterates keys',
        'Modifiers affect all properties'
      ]
    },
    {
      id: 'advanced-mapped-types',
      title: 'Advanced Mapped Types',
      difficulty: 'advanced',
      description: 'Complex mapped type patterns',
      instructions: `
Learn advanced mapped type techniques.

## Task
1. Use template literals
2. Filter with never
3. Remap keys`,
      initialCode: `// Implement advanced mappings
type Getters
type RemoveReadonly
type Prefix`,
      solution: `type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P]
}

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P]
}

type Prefix<T, P extends string> = {
  [K in keyof T as \`\${P}\${string & K}\`]: T[K]
}

// Usage
interface Person {
  name: string
  age: number
}

type PersonGetters = Getters<Person>
// { getName: () => string; getAge: () => number }`,
      hints: [
        'as clause remaps keys',
        'Template literals transform names',
        'Remove modifiers with minus'
      ]
    },
    {
      id: 'template-literal-manipulation',
      title: 'Template Literal Manipulation',
      difficulty: 'advanced',
      description: 'Advanced string type manipulation',
      instructions: `
Learn to manipulate string types.

## Task
1. Create string transformations
2. Combine with mapped types
3. Use string unions`,
      initialCode: `// Implement string manipulation
type CamelToSnake
type PropPath
type URLParams`,
      solution: `type CamelToSnake<S extends string> = 
  S extends \`\${infer C}\${infer R}\`
    ? C extends Uppercase<C>
      ? \`_\${Lowercase<C>}\${CamelToSnake<R>}\`
      : \`\${C}\${CamelToSnake<R>}\`
    : S

type PropPath<T, P extends string> = 
  P extends \`\${infer Key}.\${infer Rest}\`
    ? Key extends keyof T
      ? PropPath<T[Key], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never

type URLParams<T> = {
  [K in keyof T]: \`?\${string & K}=\${string & T[K]}\`
}[keyof T]`,
      hints: [
        'Use template literal types',
        'Handle recursive cases',
        'Consider edge cases'
      ]
    },
    {
      id: 'union-intersection-manipulation',
      title: 'Union and Intersection Manipulation',
      difficulty: 'advanced',
      description: 'Advanced type combinations',
      instructions: `
Learn to manipulate union and intersection types.

## Task
1. Convert unions to intersections
2. Extract shared properties
3. Create union helpers`,
      initialCode: `// Implement type manipulation
type UnionToIntersection
type SharedProps
type UnionKeys`,
      solution: `type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends 
  ((k: infer I) => void) ? I : never

type SharedProps<T extends object> = {
  [P in keyof T]: T[P]
}

type UnionKeys<T> = T extends any ? keyof T : never

// Usage
type Union = { a: string } | { b: number }
type Intersection = UnionToIntersection<Union>
// { a: string } & { b: number }`,
      hints: [
        'Use function inference',
        'Handle union distribution',
        'Consider property types'
      ]
    },
    {
      id: 'type-predicates-advanced',
      title: 'Advanced Type Predicates',
      difficulty: 'advanced',
      description: 'Complex type narrowing',
      instructions: `
Learn advanced type predicate patterns.

## Task
1. Create complex predicates
2. Chain type guards
3. Use assertion functions`,
      initialCode: `// Implement type predicates
function isRecord
function assertType
function isDeepEqual`,
      solution: `function isRecord<K extends string | number | symbol = string>(
  value: unknown
): value is Record<K, unknown> {
  return value !== null && typeof value === 'object'
}

function assertType<T>(
  value: unknown,
  predicate: (value: unknown) => value is T
): asserts value is T {
  if (!predicate(value)) {
    throw new Error('Type assertion failed')
  }
}

function isDeepEqual<T extends object>(a: T, b: unknown): b is T {
  if (!isRecord(b)) return false
  return Object.keys(a).every(key => {
    if (!(key in b)) return false
    const aVal = a[key as keyof T]
    const bVal = b[key as keyof T]
    if (typeof aVal === 'object' && aVal !== null) {
      return isDeepEqual(aVal, bVal)
    }
    return aVal === bVal
  })
}`,
      hints: [
        'Type predicates narrow types',
        'Assertion functions throw',
        'Handle nested structures'
      ]
    },
    {
      id: 'type-branding',
      title: 'Type Branding',
      difficulty: 'advanced',
      description: 'Creating nominal type systems',
      instructions: `
Learn to create branded types.

## Task
1. Create branded primitives
2. Implement type guards
3. Create validation functions`,
      initialCode: `// Implement type branding
type Brand
type Email
type Password`,
      solution: `type Brand<K, T> = T & { __brand: K }

type Email = Brand<'email', string>
type Password = Brand<'password', string>

function isEmail(value: string): value is Email {
  return /^[^@]+@[^@]+$/.test(value)
}

function createEmail(value: string): Email {
  if (!isEmail(value)) {
    throw new Error('Invalid email')
  }
  return value as Email
}

function createPassword(value: string): Password {
  if (value.length < 8) {
    throw new Error('Password too short')
  }
  return value as Password
}`,
      hints: [
        'Branded types prevent mixing',
        'Use type assertions carefully',
        'Validate at runtime'
      ]
    },
    {
      id: 'higher-order-types',
      title: 'Higher-Order Types',
      difficulty: 'advanced',
      description: 'Creating type-level functions',
      instructions: `
Learn to create higher-order type operations.

## Task
1. Create type operators
2. Compose types
3. Build type-level functions`,
      initialCode: `// Implement higher-order types
type Compose
type Pipe
type Apply`,
      solution: `type Compose<F, G> = F extends (x: infer A) => infer B
  ? G extends (x: B) => infer C
    ? (x: A) => C
    : never
  : never

type Pipe<F extends any[], R> = F extends []
  ? R
  : F extends [infer First, ...infer Rest]
    ? First extends (x: R) => infer Next
      ? Pipe<Rest, Next>
      : never
    : never

type Apply<F, T> = F extends (x: T) => infer R ? R : never`,
      hints: [
        'Types can be functions',
        'Use inference for composition',
        'Handle type parameters'
      ]
    },
     {
      id: 'type-level-computation',
      title: 'Type-Level Computation',
      difficulty: 'advanced',
      description: 'Advanced type manipulation',
      instructions: `
Learn type-level computation techniques.

## Task
1. Create numeric operations
2. Use boolean logic
3. Build complex computations`,
      initialCode: `// Implement type computations
type Add
type Not
type And`,
      solution: `type BuildTuple<N extends number, T extends any[] = []> =
  T['length'] extends N ? T : BuildTuple<N, [...T, any]>

type Add<A extends number, B extends number> =
  [...BuildTuple<A>, ...BuildTuple<B>]['length']

type Not<T extends boolean> = T extends true ? false : true

type And<A extends boolean, B extends boolean> =
  A extends true
    ? B extends true
      ? true
      : false
    : false`,
      hints: [
        'Type-level computation uses recursion',
        'Tuple types enable arithmetic',
        'Boolean operations combine conditions'
      ]
    },
    {
      id: 'type-level-data-structures',
      title: 'Type-Level Data Structures',
      difficulty: 'advanced',
      description: 'Complex type structures',
      instructions: `
Learn type-level data structure patterns.

## Task
1. Create type-level lists
2. Implement type-level trees
3. Build type-level maps`,
      initialCode: `// Implement type structures
type List
type Tree
type Map`,
      solution: `type List<T> = {
  isEmpty: boolean
  head?: T
  tail?: List<T>
}

type Tree<T> = {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}

type Map<K extends string | number | symbol, V> = {
  [P in K]?: V
}`,
      hints: [
        'Type-level structures model data',
        'Recursive types enable complex structures',
        'Operations preserve type safety'
      ]
    },
    {
      id: 'type-level-algorithms',
      title: 'Type-Level Algorithms',
      difficulty: 'advanced',
      description: 'Complex type algorithms',
      instructions: `
Learn type-level algorithm implementation.

## Task
1. Create sorting algorithms
2. Implement search algorithms
3. Build traversal algorithms`,
      initialCode: `// Implement type algorithms
type Sort
type Search
type Traverse`,
      solution: `type Sort<T extends any[]> = T extends []
  ? []
  : T extends [infer H]
    ? [H]
    : T extends [infer H, ...infer R]
      ? [...Sort<Filter<R, H>>, H, ...Sort<Filter<R, H, 'gt'>>]
      : never

type Search<T extends any[], V> = T extends []
  ? never
  : T extends [infer H, ...infer R]
    ? H extends V
      ? H
      : Search<R, V>
    : never

type Traverse<T extends Tree<any>> = [
  T['value'],
  ...(T extends { left: infer L }
    ? L extends Tree<any>
      ? Traverse<L>
      : []
    : []),
  ...(T extends { right: infer R }
    ? R extends Tree<any>
      ? Traverse<R>
      : []
    : [])
]`,
      hints: [
        'Type-level algorithms use recursion',
        'Pattern matching guides implementation',
        'Type inference preserves information'
      ]
    },
    {
      id: 'type-level-validation',
      title: 'Type-Level Validation',
      difficulty: 'advanced',
      description: 'Implementing type validation',
      instructions: `
Learn to create type-level validation rules.

## Task
1. Create validation types
2. Implement type constraints
3. Build validation messages`,
      initialCode: `// Implement type validation
type Validate
type ValidateObject
type ErrorMessage`,
      solution: `type Validate<T, Schema> = T extends Schema
  ? { valid: true; value: T }
  : { valid: false; error: string }

type ValidateObject<T, Schema> = {
  [K in keyof Schema]: K extends keyof T
    ? Validate<T[K], Schema[K]>
    : { valid: false; error: \`Missing property \${string & K}\` }
}

type ErrorMessage<T> = T extends { valid: false; error: infer E }
  ? E
  : never`,
      hints: [
        'Validation types check constraints',
        'Error messages use template literals',
        'Object validation checks all properties'
      ]
    },
    {
      id: 'type-level-state-machines',
      title: 'Type-Level State Machines',
      difficulty: 'advanced',
      description: 'Building state machines with types',
      instructions: `
Learn to implement type-level state machines.

## Task
1. Define state transitions
2. Create state constraints
3. Implement state guards`,
      initialCode: `// Implement state machines
type State
type Transition
type StateMachine`,
      solution: `type State<S extends string> = {
  type: S
  data: any
}

type Transition<From extends string, To extends string, Event extends string> = {
  from: From
  to: To
  event: Event
}

type StateMachine<
  S extends string,
  E extends string
> = {
  state: S
  transitions: {
    [K in E]: {
      [P in S]?: S
    }
  }
}`,
      hints: [
        'State machines track valid states',
        'Transitions define allowed changes',
        'Type safety ensures valid paths'
      ]
    }
  ]
};