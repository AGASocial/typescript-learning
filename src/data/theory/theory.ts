import { fundamentals } from './fundamentals';
import { intermediate } from './intermediate';
import { advanced } from './advanced';

export interface TheoryTopic {
  id: string;
  title: string;
  content: string;
}

export interface TheorySection {
  title: string;
  topics: TheoryTopic[];
}

export const theory: TheorySection[] = [
  {
    title: 'Fundamentals',
    topics: [
      { id: 'introduction', title: 'Introduction to TypeScript', content: fundamentals.introduction },
      { id: 'basic-types', title: 'Basic Types', content: fundamentals.basicTypes },
      { id: 'type-inference', title: 'Type Inference', content: fundamentals.typeInference },
      { id: 'arrays', title: 'Arrays', content: fundamentals.arrays },
      { id: 'tuples', title: 'Tuples', content: fundamentals.tuples },
      { id: 'union-types', title: 'Union Types', content: fundamentals.unionTypes },
      { id: 'type-aliases', title: 'Type Aliases', content: fundamentals.typeAliases },
      { id: 'literal-types', title: 'Literal Types', content: fundamentals.literalTypes },
      { id: 'object-types', title: 'Object Types', content: fundamentals.objectTypes },
      { id: 'type-assertions', title: 'Type Assertions', content: fundamentals.typeAssertions },
      { id: 'enums', title: 'Enums', content: fundamentals.enums },
      { id: 'any-unknown', title: 'Any and Unknown Types', content: fundamentals.anyUnknown },
      { id: 'null-undefined', title: 'Null and Undefined', content: fundamentals.nullUndefined },
      { id: 'type-narrowing', title: 'Type Narrowing', content: fundamentals.typeNarrowing },
      { id: 'type-inference-advanced', title: 'Advanced Type Inference', content: fundamentals.typeInferenceAdvanced },
      { id: 'type-compatibility', title: 'Type Compatibility', content: fundamentals.typeCompatibility }
    ]
  },
  {
    title: 'Intermediate',
    topics: [
      { id: 'interfaces', title: 'Interfaces', content: intermediate.interfaces },
      { id: 'function-types', title: 'Function Types', content: intermediate.functionTypes },
      { id: 'generics-basics', title: 'Generics Basics', content: intermediate.genericsBasics },
      { id: 'mapped-types', title: 'Mapped Types', content: intermediate.mappedTypes },
      { id: 'conditional-types', title: 'Conditional Types', content: intermediate.conditionalTypes },
      { id: 'utility-types', title: 'Utility Types', content: intermediate.utilityTypes },
      { id: 'type-guards-advanced', title: 'Advanced Type Guards', content: intermediate.typeGuardsAdvanced },
      { id: 'decorators', title: 'Decorators', content: intermediate.decorators },
      { id: 'mixins', title: 'Mixins', content: intermediate.mixins }
    ]
  },
  {
    title: 'Advanced',
    topics: [
      { id: 'conditional-types-advanced', title: 'Advanced Conditional Types', content: advanced.conditionalTypesAdvanced },
      { id: 'decorators-advanced', title: 'Advanced Decorators', content: advanced.decoratorsAdvanced },
      { id: 'generics-advanced', title: 'Advanced Generics', content: advanced.genericsAdvanced },
      { id: 'mixins-advanced', title: 'Advanced Mixins', content: advanced.mixinsAdvanced },
      { id: 'reflection-metadata', title: 'Reflection and Metadata', content: advanced.reflectionMetadata },
      { id: 'template-literal-advanced', title: 'Advanced Template Literals', content: advanced.templateLiteralAdvanced },
      { id: 'type-level-algorithms', title: 'Type-Level Algorithms', content: advanced.typeLevelAlgorithms },
      { id: 'type-level-computation', title: 'Type-Level Computation', content: advanced.typeLevelComputation },
      { id: 'type-level-data-structures', title: 'Type-Level Data Structures', content: advanced.typeLevelDataStructures },
      { id: 'type-level-programming', title: 'Type-Level Programming', content: advanced.typeLevelProgramming },
      { id: 'type-level-validation', title: 'Type-Level Validation', content: advanced.typeLevelValidation },
      { id: 'variadic-tuples', title: 'Variadic Tuple Types', content: advanced.variadicTuples }
    ]
  }
];