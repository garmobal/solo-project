export interface SystemState {
  role: string;
  currentStudent?: Student;
  tests?: Test[];
  students: Student[];
  currentQuizz?: Quizz;
  progress?: ResultQuestions[];
}

export interface Student {
  pendingtests?: PendingTest[];
  _id: string;
  name: string;
  completedtests?: CompletedTest[];
}

export interface CompletedTest {
  id: string;
  result: TestResult;
  title?: string;
}

export interface TestResult {
  percentage: number;
  questions: ResultQuestions[];
}

export interface ResultQuestions {
  _id?: string;
  qid: string;
  option: string;
  question: string;
  correct: boolean;
}

export interface PendingTest {
  id: string;
  title: string;
}

export interface PostTest {
  questions: TestQuestion[];
  title: string;
}

export interface Test {
  _id?: string;
  id: string;
  questions?: TestQuestion[];
  title: string;
}

export interface TestQuestion {
  _id?: string;
  qid?: string;
  answer: string;
  question: string;
  options: Option[];
  image?: string;
}

export interface Option {
  op: string;
  correct: boolean;
}

export interface UserAnswer {
  learner: boolean;
  answer: string;
  qid: string;
  question: string;
  testid: string;
}

export interface LoginStatus {
  name: string;
  pw?: string;
  logout?: string;
}

export interface AssignToStudentsList {
  ssids: string[];
  test: PendingTest;
}

export interface CurrentQuizz {
  currentQuizz: Quizz;
}

export interface Quizz {
  _id: string;
  assignedto: [];
  finishedby: [];
  questions: TestQuestion[];
  testtype: string;
  title: string;
}


export interface Progress {

}

export interface CurrentQuest {
  currentQuest: TestQuestion[];
}


  




