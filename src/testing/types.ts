export interface TestResult {
  passed: boolean;
  expected: any;
  actual: any;
  error: string | null;
}

export interface TestReport {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  results: TestResult[];
}