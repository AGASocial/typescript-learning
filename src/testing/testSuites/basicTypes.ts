import { TestSuite } from '../TestRunner';

export const basicTypesTests: TestSuite = {
  name: 'Basic Types',
  cases: [
    {
      input: 42,
      expected: 'number'
    },
    {
      input: 'hello',
      expected: 'string'
    },
    {
      input: true,
      expected: 'boolean'
    },
    {
      input: null,
      expected: 'null'
    }
  ]
};