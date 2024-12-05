import { describe, it, expect } from 'vitest';
import { TestRunner } from '../TestRunner';

describe('TestRunner', () => {
  it('should evaluate simple code correctly', async () => {
    const code = `
      export function add(a: number): number {
        return a + 1;
      }
    `;

    const testSuite = {
      name: 'Addition',
      cases: [
        { input: 1, expected: 2 },
        { input: 2, expected: 3 }
      ]
    };

    const results = await TestRunner.runTests(code, testSuite);
    expect(results).toHaveLength(2);
    expect(results[0].passed).toBe(true);
    expect(results[1].passed).toBe(true);
  });

  it('should handle syntax errors', async () => {
    const code = 'export function broken {';
    const testSuite = {
      name: 'Broken',
      cases: [{ input: 1, expected: 1 }]
    };

    const results = await TestRunner.runTests(code, testSuite);
    expect(results[0].passed).toBe(false);
    expect(results[0].error).toBeDefined();
  });

  it('should handle runtime errors', async () => {
    const code = `
      export function throwError() {
        throw new Error('Test error');
      }
    `;
    const testSuite = {
      name: 'Error',
      cases: [{ input: null, expected: null }]
    };

    const results = await TestRunner.runTests(code, testSuite);
    expect(results[0].passed).toBe(false);
    expect(results[0].error).toBeDefined();
  });
});