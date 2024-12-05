import { Chapter } from '../../types/lesson';

export const fundamentals: Chapter = {
  id: 'fundamentals',
  title: 'TypeScript Fundamentals',
  lessons: [
    {
      id: 'introduction',
      title: 'Introduction to TypeScript',
      difficulty: 'beginner',
      description: 'Understanding TypeScript and its benefits',
      instructions: `
Learn why TypeScript exists and how it enhances JavaScript development.

## Task
1. Create a simple TypeScript variable
2. Add type annotations
3. See type checking in action`,
      initialCode: `// Declare a variable with type annotation
let message
let count
let isActive`,
      solution: `let message: string = "Hello TypeScript!"
let count: number = 42
let isActive: boolean = true`,
      hints: [
        'TypeScript adds type safety to JavaScript',
        'Type annotations use : followed by the type',
        'TypeScript prevents type-related bugs'
      ]
    },
    {
      id: 'basic-types',
      title: 'Basic Types',
      difficulty: 'beginner',
      description: 'Core types in TypeScript',
      instructions: `
Learn about the fundamental types in TypeScript.

## Task
1. Create variables with different basic types
2. Use string, number, boolean, null, and undefined
3. Try type inference`,
      initialCode: `// Create variables with basic types
let name
let age
let isStudent
let nullValue
let undefinedValue`,
      solution: `let name: string = "John"
let age: number = 25
let isStudent: boolean = true
let nullValue: null = null
let undefinedValue: undefined = undefined`,
      hints: [
        'TypeScript has all JavaScript types plus more',
        'Type inference works when you initialize variables',
        'null and undefined are types and values'
      ]
    },
    {
      id: 'type-inference',
      title: 'Type Inference',
      difficulty: 'beginner',
      description: 'How TypeScript infers types automatically',
      instructions: `
Understand how TypeScript automatically determines types.

## Task
1. Create variables without type annotations
2. Let TypeScript infer the types
3. Check the inferred types`,
      initialCode: `// Let TypeScript infer these types
let greeting = 
let score = 
let isEnabled = 
let numbers = `,
      solution: `let greeting = "Hello"  // inferred as string
let score = 100  // inferred as number
let isEnabled = true  // inferred as boolean
let numbers = [1, 2, 3]  // inferred as number[]`,
      hints: [
        'TypeScript can infer types from initialization',
        'Hover over variables to see inferred types',
        'Type inference helps reduce explicit annotations'
      ]
    },
    {
      id: 'arrays',
      title: 'Arrays',
      difficulty: 'beginner',
      description: 'Working with arrays in TypeScript',
      instructions: `
Learn how to work with typed arrays.

## Task
1. Create arrays of different types
2. Use array type syntax
3. Try array methods with type checking`,
      initialCode: `// Create typed arrays
let numbers
let names
let mixed
let matrix`,
      solution: `let numbers: number[] = [1, 2, 3, 4, 5]
let names: string[] = ["Alice", "Bob", "Charlie"]
let mixed: (string | number)[] = [1, "two", 3, "four"]
let matrix: number[][] = [[1, 2], [3, 4]]`,
      hints: [
        'Arrays can be typed using Type[] or Array<Type>',
        'Use union types for mixed arrays',
        'Multidimensional arrays use nested brackets'
      ]
    },
    {
      id: 'tuples',
      title: 'Tuples',
      difficulty: 'beginner',
      description: 'Fixed-length arrays with specific types',
      instructions: `
Learn about tuples for fixed-length arrays with different types.

## Task
1. Create a tuple for coordinates
2. Create a tuple for user data
3. Use optional tuple elements`,
      initialCode: `// Define tuples
let coordinate
let userInfo
let optionalTuple`,
      solution: `let coordinate: [number, number] = [10, 20]
let userInfo: [string, number, boolean] = ["John", 30, true]
let optionalTuple: [string, number?] = ["Hello"]`,
      hints: [
        'Tuples have a fixed length and specific types per position',
        'Use ? for optional tuple elements',
        'Tuples are great for representing structured data'
      ]
    },
    {
      id: 'union-types',
      title: 'Union Types',
      difficulty: 'beginner',
      description: 'Combining multiple types',
      instructions: `
Learn how to use union types for variables that can hold multiple types.

## Task
1. Create union type variables
2. Use type guards with unions
3. Create arrays with union types`,
      initialCode: `// Create union types
let id
let status
let mixed
function process(value) {
}`,
      solution: `let id: string | number = "abc123"
let status: "active" | "inactive" = "active"
let mixed: (string | number)[] = [1, "two", 3]

function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value * 2
}`,
      hints: [
        'Union types use the | symbol',
        'Type guards help narrow down unions',
        'Unions can be used with arrays and functions'
      ]
    },
    {
      id: 'type-aliases',
      title: 'Type Aliases',
      difficulty: 'beginner',
      description: 'Creating custom named types',
      instructions: `
Learn how to create reusable custom types.

## Task
1. Create type aliases for primitive unions
2. Create type aliases for object types
3. Use type aliases in functions`,
      initialCode: `// Define type aliases
type ID
type Point
type User

// Use the types
let userId
let currentPoint
let newUser`,
      solution: `type ID = string | number
type Point = { x: number; y: number }
type User = {
  id: ID
  name: string
  age: number
}

let userId: ID = "abc123"
let currentPoint: Point = { x: 10, y: 20 }
let newUser: User = { id: 1, name: "John", age: 30 }`,
      hints: [
        'Type aliases make code more maintainable',
        'They can represent simple or complex types',
        'Use PascalCase for type names'
      ]
    },
    {
      id: 'literal-types',
      title: 'Literal Types',
      difficulty: 'beginner',
      description: 'Using specific values as types',
      instructions: `
Learn how to use specific values as types.

## Task
1. Create string literal types
2. Create numeric literal types
3. Combine literal types with unions`,
      initialCode: `// Define literal types
type Direction
type DiceRoll
type Status

let move
let roll
let userStatus`,
      solution: `type Direction = "north" | "south" | "east" | "west"
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6
type Status = "pending" | "approved" | "rejected"

let move: Direction = "north"
let roll: DiceRoll = 6
let userStatus: Status = "approved"`,
      hints: [
        'Literal types restrict values to specific constants',
        'They work with strings, numbers, and booleans',
        'Combine them with unions for enum-like types'
      ]
    },
    {
      id: 'object-types',
      title: 'Object Types',
      difficulty: 'beginner',
      description: 'Working with object types',
      instructions: `
Learn how to type objects and their properties.

## Task
1. Create an object type with required properties
2. Add optional properties
3. Use readonly properties`,
      initialCode: `// Define object types
type Person
type Config
type ReadOnlyPoint`,
      solution: `type Person = {
  name: string
  age: number
  email?: string
}

type Config = {
  readonly apiKey: string
  timeout?: number
  retries: number
}

type ReadOnlyPoint = {
  readonly x: number
  readonly y: number
}

let person: Person = { name: "Alice", age: 30 }
let config: Config = { apiKey: "secret", retries: 3 }`,
      hints: [
        'Use ? for optional properties',
        'readonly prevents property modification',
        'Object types can be nested'
      ]
    },
    {
      id: 'type-assertions',
      title: 'Type Assertions',
      difficulty: 'beginner',
      description: 'Converting between types safely',
      instructions: `
Learn how to assert types when you know more than TypeScript.

## Task
1. Use angle bracket syntax
2. Use as syntax
3. Assert to and from any`,
      initialCode: `// Use type assertions
let someValue: any
let strLength
let value: unknown
let str: string`,
      solution: `let someValue: any = "Hello World"
let strLength: number = (<string>someValue).length
let value: unknown = "Hello"
let str: string = value as string

// More complex example
interface User {
  name: string
  id: number
}

let userJson = '{"name": "John", "id": 1}'
let user = JSON.parse(userJson) as User`,
      hints: [
        'Type assertions don\'t change runtime behavior',
        'as syntax is preferred in TSX files',
        'Be careful with type assertions to avoid runtime errors'
      ]
    },
    {
      id: 'enums',
      title: 'Enums',
      difficulty: 'beginner',
      description: 'Working with enumerated types',
      instructions: `
Learn how to use enums for named constants.

## Task
1. Create a numeric enum
2. Create a string enum
3. Use const enums for better performance`,
      initialCode: `// Define enums
enum Direction
enum HttpStatus
const enum Season`,
      solution: `enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  Error = 500
}

const enum Season {
  Spring = "SPRING",
  Summer = "SUMMER",
  Autumn = "AUTUMN",
  Winter = "WINTER"
}

let dir: Direction = Direction.Up
let status: HttpStatus = HttpStatus.OK
let currentSeason: Season = Season.Summer`,
      hints: [
        'Numeric enums auto-increment values',
        'String enums require explicit values',
        'const enums are inlined at compile time'
      ]
    },
    {
      id: 'any-unknown',
      title: 'Any and Unknown Types',
      difficulty: 'beginner',
      description: 'Understanding top types in TypeScript',
      instructions: `
Learn the difference between any and unknown types.

## Task
1. Use the any type
2. Use the unknown type
3. Understand type safety differences`,
      initialCode: `// Compare any and unknown
let anyValue
let unknownValue

function processValue(val)
function processUnknown(val)`,
      solution: `let anyValue: any = 10
anyValue.foo() // No error

let unknownValue: unknown = 10
// unknownValue.foo() // Error!

function processValue(val: any) {
  return val.toString() // No type checking
}

function processUnknown(val: unknown) {
  if (typeof val === "string") {
    return val.toUpperCase() // Safe!
  }
  return String(val)
}`,
      hints: [
        'any disables type checking',
        'unknown is a type-safe alternative to any',
        'unknown requires type checking before use'
      ]
    },
    {
      id: 'null-undefined',
      title: 'Null and Undefined',
      difficulty: 'beginner',
      description: 'Handling null and undefined values',
      instructions: `
Learn how to work with null and undefined in TypeScript.

## Task
1. Use strict null checks
2. Handle nullable values
3. Use the non-null assertion operator`,
      initialCode: `// Handle null and undefined
function process(value)
function requiresString(str)
let nullable`,
      solution: `function process(value: string | null) {
  if (value === null) {
    return "default"
  }
  return value.toUpperCase()
}

function requiresString(str: string | undefined) {
  return str?.toLowerCase() ?? "default"
}

let nullable: string | null = null
let definitelyString: string = "hello"
let length: number = definitelyString!.length`,
      hints: [
        'Use strict null checks for better safety',
        'Optional chaining helps with nullable values',
        'Be careful with non-null assertions (!)'
      ]
    },
    {
      id: 'type-narrowing',
      title: 'Type Narrowing',
      difficulty: 'beginner',
      description: 'Narrowing types with type guards',
      instructions: `
Learn how to narrow types using type guards.

## Task
1. Use typeof type guards
2. Use instanceof type guards
3. Use custom type predicates`,
      initialCode: `// Implement type narrowing
function process(value)
function isString(value)
class Animal`,
      solution: `function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value.toFixed(2)
}

function isString(value: any): value is string {
  return typeof value === "string"
}

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

function processAnimal(value: any) {
  if (value instanceof Animal) {
    return value.name
  }
  return "Not an animal"
}`,
      hints: [
        'typeof checks primitive types',
        'instanceof checks class instances',
        'Custom type predicates use is keyword'
      ]
    },
    {
      id: 'type-inference-advanced',
      title: 'Advanced Type Inference',
      difficulty: 'beginner',
      description: 'Understanding complex type inference',
      instructions: `
Learn about TypeScript's advanced type inference capabilities.

## Task
1. Use contextual typing
2. Understand return type inference
3. Work with generic type inference`,
      initialCode: `// Explore type inference
let numbers
function map(arr, func)
let promise`,
      solution: `let numbers = [1, 2, 3] // inferred as number[]

function map<T, U>(arr: T[], func: (item: T) => U): U[] {
  return arr.map(func)
}

// Return type is inferred
function getValue(x: number) {
  if (x > 0) {
    return x.toString()
  }
  return x
}

let promise = Promise.resolve("hello") // Promise<string>`,
      hints: [
        'TypeScript can infer complex types',
        'Return types are often inferred automatically',
        'Generic type inference works with context'
      ]
    },
    {
      id: 'type-compatibility',
      title: 'Type Compatibility',
      difficulty: 'beginner',
      description: 'Understanding when types are compatible',
      instructions: `
Learn about structural typing in TypeScript.

## Task
1. Compare interface compatibility
2. Check function compatibility
3. Understand excess property checks`,
      initialCode: `// Check type compatibility
interface Point
interface Named
function printPoint(p)
function printName(x)`,
      solution: `interface Point {
  x: number
  y: number
}

interface Named {
  name: string
}

let point3D = { x: 1, y: 2, z: 3 }
let named = { name: "Alice", age: 30 }

function printPoint(p: Point) {
  console.log(\`(\${p.x}, \${p.y})\`)
}

function printName(x: Named) {
  console.log(\`Name: \${x.name}\`)
}

printPoint(point3D) // OK
printName(named) // OK`,
      hints: [
        'TypeScript uses structural typing',
        'Extra properties are allowed in some contexts',
        'Function compatibility checks parameters and return type'
      ]
    },
    {
      id: 'type-guards',
      title: 'Type Guards',
      difficulty: 'beginner',
      description: 'Creating custom type guards',
      instructions: `
Learn how to create and use custom type guards.

## Task
1. Create type guard functions
2. Use type predicates
3. Combine multiple type guards`,
      initialCode: `// Implement type guards
interface Bird
interface Fish
function isBird(pet)
function isFish(pet)
function move(animal)`,
      solution: `interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function move(animal: Fish | Bird) {
  if (isBird(animal)) {
    animal.fly()
  } else {
    animal.swim()
  }
}`,
      hints: [
        'Type guards help narrow down union types',
        'Use is keyword for type predicates',
        'Type guards can be combined with &&'
      ]
    },
    {
      id: 'type-assertions-advanced',
      title: 'Advanced Type Assertions',
      difficulty: 'beginner',
      description: 'Complex type assertions and safety',
      instructions: `
Learn advanced type assertion techniques.

## Task
1. Use double assertions
2. Handle unknown types safely
3. Create type-safe assertions`,
      initialCode: `// Advanced type assertions
let value
function assertString(value)
function assertNonNull<T>(value)`,
      solution: `let value: unknown = "hello"
let str: string = (value as unknown as string)

function assertString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string!")
  }
}

function assertNonNull<T>(value: T | null | undefined): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error("Value is null or undefined")
  }
}

let maybeString: unknown = "hello"
assertString(maybeString)
console.log(maybeString.toUpperCase())`,
      hints: [
        'Double assertions can bypass type safety',
        'assertion functions use asserts keyword',
        'Type assertions should be used carefully'
      ]
    },
    {
      id: 'type-inference-control-flow',
      title: 'Control Flow Type Inference',
      difficulty: 'beginner',
      description: 'Type inference in control flow',
      instructions: `
Learn how TypeScript infers types in control flow.

## Task
1. Use type inference in if statements
2. Use type inference in switch statements
3. Handle discriminated unions`,
      initialCode: `// Control flow typing
function process(value)
interface Square
interface Circle
function getArea(shape)`,
      solution: `function process(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase()
  } else if (typeof value === "number") {
    return value.toFixed(2)
  } else {
    return value.toString()
  }
}

interface Square {
  kind: "square"
  size: number
}

interface Circle {
  kind: "circle"
  radius: number
}

function getArea(shape: Square | Circle) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size
    case "circle":
      return Math.PI * shape.radius ** 2
  }
}`,
      hints: [
        'TypeScript tracks types through if statements',
        'switch statements can narrow types',
        'Discriminated unions provide type safety'
      ]
    },
    {
      id: 'type-declarations',
      title: 'Type Declarations',
      difficulty: 'beginner',
      description: 'Working with declaration files',
      instructions: `
Learn how to work with type declaration files.

## Task
1. Create ambient declarations
2. Declare global types
3. Use module declarations`,
      initialCode: `// Type declarations
declare function getData()
declare global {
}
declare module "myModule" {
}`,
      solution: `// example.d.ts
declare function getData(): Promise<string>

declare global {
  interface Window {
    myAPI: {
      getData(): string
    }
  }
}

declare module "myModule" {
  export interface Options {
    timeout: number
  }
  export function initialize(options: Options): void
}

// Usage
getData().then(data => console.log(data))
window.myAPI.getData()`,
      hints: [
        'Declaration files use .d.ts extension',
        'declare keyword for ambient declarations',
        'Global declarations affect all files'
      ]
    },
    {
      id: 'type-utilities',
      title: 'Built-in Type Utilities',
      difficulty: 'beginner',
      description: 'Using TypeScript utility types',
      instructions: `
Learn about TypeScript's built-in utility types.

## Task
1. Use Partial<T>
2. Use Readonly<T>
3. Use Pick<T> and Omit<T>`,
      initialCode: `// Use utility types
interface User
type PartialUser
type ReadonlyUser
type UserName`,
      solution: `interface User {
  id: number
  name: string
  email: string
  age: number
}

type PartialUser = Partial<User>
type ReadonlyUser = Readonly<User>
type UserName = Pick<User, "name">
type UserWithoutId = Omit<User, "id">

let partialUser: PartialUser = { name: "John" }
let readonlyUser: ReadonlyUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30
}`,
      hints: [
        'Utility types help transform types',
        'Partial makes all properties optional',
        'Pick and Omit create new types'
      ]
    }
  ]
};