export interface SystemState {
  role: string;
  currentStudent: Student;
}

export interface Student {
  pendingtests: PendingTest[];
  _id: string;
  name: string;
  completedtests: CompletedTest[];
}

export interface CompletedTest {
  result: TestResult;
}

export interface TestResult {
  percentage: number;
  questions: ResultQuestions[];
}

export interface ResultQuestions {
  _id: string;
  option: string;
  question: string;
  correct: boolean;
}

export interface PendingTest {
  id: string;
  title: string;
}
