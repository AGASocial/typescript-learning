import { Chapter } from '../../types/lesson';

export const intermediateConcepts: Chapter = {
  id: 'intermediate-concepts',
  title: 'Intermediate Concepts',
  lessons: [
    {
      id: 'interfaces',
      title: 'Interfaces',
      difficulty: 'intermediate',
      description: 'Define custom types using interfaces',
      instructions: `
Learn how to create and use interfaces for type definitions.

## Task
1. Create an interface for a Person
2. Add optional and readonly properties
3. Extend the interface`,
      initialCode: `// Define interfaces
interface Person
interface Employee
interface Manager`,
      solution: `interface Person {
  readonly id: number
  name: string
  age: number
  email?: string
}

interface Employee extends Person {
  department: string
  salary: number
}

interface Manager extends Employee {
  subordinates: Employee[]
  budget: number
}`,
      hints: [
        'Interfaces can extend other interfaces',
        'Use ? for optional properties',
        'readonly prevents property modification'
      ]
    },
    {
      id: 'function-types',
      title: 'Function Types',
      difficulty: 'intermediate',
      description: 'Advanced function type definitions',
      instructions: `
Learn how to define complex function types.

## Task
1. Create function type aliases
2. Use call signatures
3. Define overloaded functions`,
      initialCode: `// Define function types
type Calculator
type EventHandler
function process`,
      solution: `type Calculator = {
  (x: number, y: number): number
  mode: 'add' | 'subtract'
}

type EventHandler = (event: { type: string; target: any }) => void

function process(x: number): number
function process(x: string): string
function process(x: number | string): number | string {
  return typeof x === 'number' ? x * 2 : x.toUpperCase()
}`,
      hints: [
        'Function types can include properties',
        'Call signatures define callable types',
        'Function overloads provide type safety'
      ]
    },
    {
      id: 'generics-basics',
      title: 'Generics Basics',
      difficulty: 'intermediate',
      description: 'Introduction to generic types',
      instructions: `
Learn the basics of generic type parameters.

## Task
1. Create a generic function
2. Define a generic interface
3. Use generic constraints`,
      initialCode: `// Implement generic types
function identity<T>
interface Container<T>
function getProperty`,
      solution: `function identity<T>(arg: T): T {
  return arg
}

interface Container<T> {
  value: T
  getValue(): T
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}`,
      hints: [
        'Generics provide type safety with flexibility',
        'Use extends for type constraints',
        'Generic interfaces can have multiple type parameters'
      ]
    },
    {
      id: 'mapped-types',
      title: 'Mapped Types',
      difficulty: 'intermediate',
      description: 'Creating new types from existing ones',
      instructions: `
Learn how to transform existing types into new ones.

## Task
1. Create a Readonly mapped type
2. Create a Partial mapped type
3. Use template literal types`,
      initialCode: `// Define mapped types
type ReadOnly
type Optional
type Getters`,
      solution: `type ReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

type Optional<T> = {
  [P in keyof T]?: T[P]
}

type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P]
}`,
      hints: [
        'Use keyof to iterate over properties',
        'in operator creates mapped types',
        'as clause can transform property names'
      ]
    },
    {
      id: 'conditional-types',
      title: 'Conditional Types',
      difficulty: 'intermediate',
      description: 'Types that depend on type parameters',
      instructions: `
Learn how to create types that choose based on conditions.

## Task
1. Create basic conditional types
2. Use the infer keyword
3. Create distributive conditional types`,
      initialCode: `// Define conditional types
type IsArray
type ElementType
type NonNullable`,
      solution: `type IsArray<T> = T extends any[] ? true : false

type ElementType<T> = T extends (infer U)[] ? U : never

type NonNullable<T> = T extends null | undefined ? never : T

// Usage
type StringArray = IsArray<string[]> // true
type NumberType = ElementType<number[]> // number`,
      hints: [
        'extends keyword creates conditions',
        'infer extracts type information',
        'never type represents impossibility'
      ]
    },
    {
      id: 'utility-types',
      title: 'Advanced Utility Types',
      difficulty: 'intermediate',
      description: 'Using built-in utility types',
      instructions: `
Learn about TypeScript's advanced utility types.

## Task
1. Use Record and Extract
2. Use Exclude and Pick
3. Create custom utility types`,
      initialCode: `// Use utility types
type Theme
type UserProps
type FilterFlags`,
      solution: `type Theme = Record<'light' | 'dark', { bg: string; text: string }>

type UserProps = {
  name: string
  age: number
  email: string
  active: boolean
}

type StringProps = Extract<keyof UserProps, string>
type OptionalProps = Partial<Pick<UserProps, 'email' | 'active'>>

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]`,
      hints: [
        'Record creates an object type',
        'Extract filters union types',
        'Custom utilities can combine existing ones'
      ]
    },
    {
      id: 'type-guards-advanced',
      title: 'Advanced Type Guards',
      difficulty: 'intermediate',
      description: 'Complex type narrowing techniques',
      instructions: `
Learn sophisticated type narrowing patterns.

## Task
1. Create user-defined type guards
2. Use assertion functions
3. Implement discriminated unions`,
      initialCode: `// Implement type guards
interface Cat
interface Dog
function isCat
function assertIsNumber`,
      solution: `interface Cat { type: 'cat'; meow(): void }
interface Dog { type: 'dog'; bark(): void }

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).type === 'cat'
}

function assertIsNumber(val: unknown): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!')
  }
}

type Pet = Cat | Dog
function getPetSound(pet: Pet) {
  if (pet.type === 'cat') return pet.meow()
  return pet.bark()
}`,
      hints: [
        'Type guards narrow types in scope',
        'assertion functions throw on failure',
        'discriminated unions use literal types'
      ]
    },
    {
      id: 'decorators',
      title: 'Decorators',
      difficulty: 'intermediate',
      description: 'Using and creating decorators',
      instructions: `
Learn how to use and create TypeScript decorators.

## Task
1. Create a class decorator
2. Create a method decorator
3. Create a property decorator`,
      initialCode: `// Implement decorators
function logged
function validate
function readonly`,
      solution: `function logged(target: any) {
  console.log(\`Class \${target.name} was decorated\`)
  return target
}

function validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function(...args: any[]) {
    if (args.length === 0) throw new Error('No arguments')
    return original.apply(this, args)
  }
  return descriptor
}

function readonly(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false
  })
}

@logged
class Example {
  @readonly
  name: string = 'example'

  @validate
  greet(name: string) {
    return \`Hello \${name}\`
  }
}`,
      hints: [
        'Decorators modify class behavior',
        'Method decorators can validate input',
        'Property decorators affect instance properties'
      ]
    },
    {
      id: 'mixins',
      title: 'Mixins',
      difficulty: 'intermediate',
      description: 'Creating and using mixins',
      instructions: `
Learn how to create and compose mixins.

## Task
1. Create a mixin class
2. Apply mixins to a class
3. Use constructor mixins`,
      initialCode: `// Implement mixins
type Constructor
function Timestamped
function Activatable`,
      solution: `type Constructor<T = {}> = new (...args: any[]) => T

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date()
    getTimestamp() {
      return this.timestamp
    }
  }
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false
    activate() { this.isActive = true }
    deactivate() { this.isActive = false }
  }
}

class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const TimestampedUser = Timestamped(User)
const ActivatableUser = Activatable(TimestampedUser)`,
      hints: [
        'Mixins combine multiple classes',
        'Constructor type enables composition',
        'Mixins can be chained together'
      ]
    },
    {
      id: 'async-types',
      title: 'Async Types',
      difficulty: 'intermediate',
      description: 'Typing asynchronous operations',
      instructions: `
Learn how to type async functions and Promises.

## Task
1. Type Promise chains
2. Handle async errors
3. Use async iterators`,
      initialCode: `// Type async operations
async function fetchData
type AsyncResult
async function* generate`,
      solution: `async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`)
  }
  return response.json()
}

type AsyncResult<T> = Promise<{
  data: T | null
  error: Error | null
}>

async function* generate(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield await Promise.resolve(i)
  }
}

// Usage
interface User {
  id: number
  name: string
}

const getUser: AsyncResult<User> = fetchData('/api/user')
  .then(data => ({ data, error: null }))
  .catch(error => ({ data: null, error }))`,
      hints: [
        'Promise type wraps async results',
        'async functions return Promises',
        'async iterators use for-await-of'
      ]
    },
    {
      id: 'module-types',
      title: 'Module Types',
      difficulty: 'intermediate',
      description: 'Working with TypeScript modules',
      instructions: `
Learn how to type module imports and exports.

## Task
1. Create module declarations
2. Use namespace imports
3. Type dynamic imports`,
      initialCode: `// Type modules
declare module
export interface
import type`,
      solution: `// types.d.ts
declare module 'config' {
  export interface Config {
    apiUrl: string
    timeout: number
  }
  export function getConfig(): Config
}

// api.ts
export interface ApiResponse<T> {
  data: T
  status: number
}

export type ApiError = {
  code: number
  message: string
}

// usage.ts
import type { Config } from 'config'
import * as api from './api'

async function loadModule() {
  const module = await import('./dynamic-module')
  return module.default
}`,
      hints: [
        'declare module for external modules',
        'import type for type-only imports',
        'dynamic imports return Promises'
      ]
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      difficulty: 'intermediate',
      description: 'Typing errors and exceptions',
      instructions: `
Learn how to type error handling patterns.

## Task
1. Create custom error types
2. Type error handlers
3. Use Result types`,
      initialCode: `// Type error handling
class AppError
type Result
function tryCatch`,
      solution: `class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message)
    this.name = 'AppError'
  }
}

type Result<T, E = Error> = 
  | { success: true; value: T }
  | { success: false; error: E }

function tryCatch<T>(fn: () => T): Result<T> {
  try {
    return { success: true, value: fn() }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error(String(error))
    }
  }
}

// Usage
const result = tryCatch(() => JSON.parse('invalid'))
if (!result.success) {
  console.error(result.error)
}`,
      hints: [
        'Custom errors extend Error class',
        'Result type provides type safety',
        'tryCatch wraps error-prone code'
      ]
    },
    {
      id: 'type-branding',
      title: 'Type Branding',
      difficulty: 'intermediate',
      description: 'Creating nominal type systems',
      instructions: `
Learn how to create branded types for type safety.

## Task
1. Create branded primitives
2. Use branded types
3. Implement type guards`,
      initialCode: `// Implement type branding
type Branded
type Email
type Password`,
      solution: `type Branded<T, Brand> = T & { __brand: Brand }

type Email = Branded<string, 'Email'>
type Password = Branded<string, 'Password'>

function createEmail(value: string): Email {
  if (!value.includes('@')) {
    throw new Error('Invalid email')
  }
  return value as Email
}

function createPassword(value: string): Password {
  if (value.length < 8) {
    throw new Error('Password too short')
  }
  return value as Password
}

function login(email: Email, password: Password) {
  // Type safe login logic
}

// Usage
const email = createEmail('user@example.com')
const password = createPassword('secure123')
login(email, password)`,
      hints: [
        'Branded types prevent type confusion',
        'Use type assertions carefully',
        'Validation ensures type safety'
      ]
    },
    {
      id: 'type-predicates',
      title: 'Type Predicates',
      difficulty: 'intermediate',
      description: 'Advanced type narrowing',
      instructions: `
Learn how to create advanced type predicates.

## Task
1. Create complex type predicates
2. Chain type guards
3. Use type predicates with generics`,
      initialCode: `// Implement type predicates
function isObject
function hasProperty
function isType`,
      solution: `function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function hasProperty<T extends object, K extends string>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> {
  return prop in obj
}

function isType<T>(
  value: unknown,
  check: (value: unknown) => value is T
): value is T {
  return check(value)
}

// Usage
interface User {
  id: number
  name: string
}

function isUser(value: unknown): value is User {
  return (
    isObject(value) &&
    hasProperty(value, 'id') &&
    typeof value.id === 'number' &&
    hasProperty(value, 'name') &&
    typeof value.name === 'string'
  )
}`,
      hints: [
        'Type predicates refine types',
        'Chain predicates for complex checks',
        'Generic predicates are reusable'
      ]
    },
    {
      id: 'template-literal-types',
      title: 'Template Literal Types',
      difficulty: 'intermediate',
      description: 'Advanced string manipulation types',
      instructions: `
Learn how to use template literal types.

## Task
1. Create string unions
2. Use type inference
3. Create mapped types`,
      initialCode: `// Use template literal types
type EventName
type CSSProperty
type Getters`,
      solution: `type EventName<T extends string> = \`on\${Capitalize<T>}\`

type CSSProperty<T extends string> = \`--\${T}\`

type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}

// Usage
interface User {
  name: string
  age: number
}

type UserGetters = Getters<User>
// { getName: () => string; getAge: () => number }

type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>
// 'onClick' | 'onMousedown' | 'onMouseup'`,
      hints: [
        'Template literals work with unions',
        'Use with mapped types',
        'Capitalize is a built-in helper'
      ]
    },
    {
      id: 'indexed-access-types',
      title: 'Indexed Access Types',
      difficulty: 'intermediate',
      description: 'Accessing nested type information',
      instructions: `
Learn how to access nested type information.

## Task
1. Access nested properties
2. Use keyof with index access
3. Create type safe accessors`,
      initialCode: `// Use indexed access types
type NestedProp
type PropType
function getProp`,
      solution: `interface API {
  user: {
    id: number
    profile: {
      name: string
      email: string
    }
  }
  settings: {
    theme: 'light' | 'dark'
    notifications: boolean
  }
}

type UserProfile = API['user']['profile']
type ThemeType = API['settings']['theme']

type PropType<T, Path extends string[]> = Path extends [infer First, ...infer Rest]
  ? First extends keyof T
    ? Rest extends string[]
      ? PropType<T[First], Rest>
      : never
    : never
  : T

function getProp<
  T,
  Path extends string[]
>(obj: T, path: [...Path]): PropType<T, Path> {
  return path.reduce((acc, key) => acc[key], obj) as any
}`,
      hints: [
        'Use brackets for type access',
        'Combine with keyof operator',
        'Create recursive types'
      ]
    },
    {
      id: 'inference-basics',
      title: 'Type Inference Basics',
      difficulty: 'intermediate',
      description: 'Understanding type inference',
      instructions: `
Learn how TypeScript infers types.

## Task
1. Use return type inference
2. Infer generic types
3. Use conditional type inference`,
      initialCode: `// Work with type inference
function transform
type ArrayElement
type ReturnType`,
      solution: `function transform<T>(value: T) {
  if (Array.isArray(value)) {
    return value.map(v => ({ value: v }))
  }
  return { value }
}

type ArrayElement<T> = T extends Array<infer U> ? U : never

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// Usage
const result = transform([1, 2, 3])
// inferred as Array<{ value: number }>

type StringArray = ArrayElement<string[]> // string
type FunctionReturn = ReturnType<() => number> // number`,
      hints: [
        'Return types can be inferred',
        'infer extracts type information',
        'Conditional types help inference'
      ]
    },
    {
      id: 'type-narrowing-advanced',
      title: 'Advanced Type Narrowing',
      difficulty: 'intermediate',
      description: 'Complex type narrowing techniques',
      instructions: `
Learn sophisticated type narrowing.

## Task
1. Use discriminated unions
2. Implement exhaustiveness checking
3. Create custom type guards`,
      initialCode: `// Implement type narrowing
type Shape
function getArea
function assertNever`,
      solution: `type Circle = {
  kind: 'circle'
  radius: number
}

type Square = {
  kind: 'square'
  size: number
}

type Triangle = {
  kind: 'triangle'
  base: number
  height: number
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.size ** 2
    case 'triangle':
      return (shape.base * shape.height) / 2
    default:
      return assertNever(shape)
  }
}

function assertNever(value: never): never {
  throw new Error(\`Unexpected value: \${JSON.stringify(value)}\`)
}`,
      hints: [
        'Discriminated unions use literal types',
        'never type ensures exhaustiveness',
        'Type guards narrow union types'
      ]
    },
    {
      id: 'type-recursion',
      title: 'Type Recursion',
      difficulty: 'intermediate',
      description: 'Creating recursive type definitions',
      instructions: `
Learn how to create recursive type definitions.

## Task
1. Create recursive data structures
2. Use recursive type helpers
3. Handle nested objects`,
      initialCode: `// Implement recursive types
type JSONValue
type DeepReadonly
type DeepPartial`,
      solution: `type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P]
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P]
}

// Usage
interface NestedObject {
  a: {
    b: {
      c: string
    }
    d: number[]
  }
}

type ReadonlyNested = DeepReadonly<NestedObject>
type PartialNested = DeepPartial<NestedObject>`,
      hints: [
        'Recursive types reference themselves',
        'Use conditional types for recursion',
        'Handle edge cases carefully'
      ]
    },
    {
      id: 'type-operators',
      title: 'Type Operators',
      difficulty: 'intermediate',
      description: 'Using type manipulation operators',
      instructions: `
Learn how to use type operators effectively.

## Task
1. Use keyof operator
2. Use typeof operator
3. Combine type operators`,
      initialCode: `// Use type operators
type Keys
type ValueOf
type TypeName`,
      solution: `type Keys<T> = keyof T

type ValueOf<T> = T[keyof T]

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object'

// Usage
interface Example {
  name: string
  age: number
  isActive: boolean
}

type ExampleKeys = Keys<Example> // 'name' | 'age' | 'isActive'
type ExampleValues = ValueOf<Example> // string | number | boolean

const obj = { x: 10, y: 20 }
type ObjType = typeof obj // { x: number, y: number }`,
      hints: [
        'keyof gets property names',
        'typeof works on values',
        'Combine operators for complex types'
      ]
    },
    {
      id: 'type-assertions',
      title: 'Type Assertions',
      difficulty: 'intermediate',
      description: 'Advanced type assertions',
      instructions: `
Learn safe type assertion patterns.

## Task
1. Use const assertions
2. Create assertion functions
3. Handle unknown types`,
      initialCode: `// Implement type assertions
const config
function assertIsArray
function assertNonNull`,
      solution: `const config = {
  api: 'https://api.example.com',
  timeout: 1000,
  retries: 3
} as const

function assertIsArray<T>(value: unknown): asserts value is T[] {
  if (!Array.isArray(value)) {
    throw new Error('Value is not an array')
  }
}

function assertNonNull<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Value is null or undefined')
  }
}

// Usage
type Config = typeof config
const timeoutMs: 1000 = config.timeout // Literal type

function processArray<T>(value: unknown) {
  assertIsArray<T>(value)
  return value.map(item => item)
}`,
      hints: [
        'const assertions preserve literals',
        'assertion functions throw on failure',
        'Use type predicates with assertions'
      ]
    },
    {
      id: 'type-compatibility',
      title: 'Type Compatibility',
      difficulty: 'intermediate',
      description: 'Understanding structural typing',
      instructions: `
Learn about TypeScript's type compatibility rules.

## Task
1. Check interface compatibility
2. Use structural typing
3. Handle function compatibility`,
      initialCode: `// Check type compatibility
interface Animal
interface Dog
function checkCompatible`,
      solution: `interface Animal {
  name: string
  age: number
}

interface Dog {
  name: string
  age: number
  breed: string
}

interface Named {
  name: string
}

function checkCompatible() {
  let animal: Animal
  let dog: Dog = { name: 'Rex', age: 5, breed: 'Lab' }
  
  // Dog is assignable to Animal
  animal = dog

  let named: Named
  // Animal is assignable to Named
  named = animal
}

// Function compatibility
type Logger = (value: string) => void
type StringProcessor = (value: string | number) => void

let logger: Logger = value => console.log(value)
let processor: StringProcessor = logger // OK`,
      hints: [
        'Extra properties are allowed',
        'Functions check parameters bivariantly',
        'Structural typing checks shape'
      ]
    }
  ]
};