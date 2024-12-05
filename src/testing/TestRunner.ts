import { describe, it, expect } from 'vitest';

export interface TestCase {
  input: any;
  expected: any;
}

export interface TestSuite {
  name: string;
  cases: TestCase[];
}

export class TestRunner {
  static async runTests(code: string, testSuite: TestSuite): Promise<TestResult[]> {
    const results: TestResult[] = [];
    
    try {
      // Create a safe evaluation context
      const evalContext = new Function('code', `
        return (function() {
          ${code}
          return { ${this.extractExports(code)} };
        })();
      `);

      const implementation = evalContext(code);

      for (const testCase of testSuite.cases) {
        try {
          const actual = await this.runTestCase(implementation, testCase);
          results.push({
            passed: this.compareResults(actual, testCase.expected),
            expected: testCase.expected,
            actual,
            error: null
          });
        } catch (error) {
          results.push({
            passed: false,
            expected: testCase.expected,
            actual: null,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
    } catch (error) {
      results.push({
        passed: false,
        expected: null,
        actual: null,
        error: 'Code evaluation failed: ' + (error instanceof Error ? error.message : 'Unknown error')
      });
    }

    return results;
  }

  private static extractExports(code: string): string {
    const exportRegex = /export\s+(const|let|function|class)\s+(\w+)/g;
    const exports: string[] = [];
    let match;

    while ((match = exportRegex.exec(code)) !== null) {
      exports.push(match[2]);
    }

    return exports.join(',');
  }

  private static async runTestCase(implementation: any, testCase: TestCase): Promise<any> {
    const result = implementation[Object.keys(implementation)[0]](testCase.input);
    return result instanceof Promise ? await result : result;
  }

  private static compareResults(actual: any, expected: any): boolean {
    if (actual === expected) return true;
    if (typeof actual !== typeof expected) return false;
    
    if (Array.isArray(actual) && Array.isArray(expected)) {
      return actual.length === expected.length &&
             actual.every((item, index) => this.compareResults(item, expected[index]));
    }
    
    if (typeof actual === 'object' && actual !== null && expected !== null) {
      const actualKeys = Object.keys(actual);
      const expectedKeys = Object.keys(expected);
      
      return actualKeys.length === expectedKeys.length &&
             actualKeys.every(key => this.compareResults(actual[key], expected[key]));
    }
    
    return false;
  }
}