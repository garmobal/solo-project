import {
  ResultQuestions,
  Student,
  SystemState,
  Test,
  UserAnswer,
} from '../../types';

// For tests
export const GET_TESTS = 'GET_TESTS';
export const POST_TEST = 'POST_TEST';
export const DELETE_TEST = 'DELETE_TEST';

// For student list
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const POST_STUDENTS = 'POST_STUDENTS';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// For quizz (no answers)
export const GET_CURRENTQUIZZ = 'GET_CURRENTQUIZZ';
export const POST_CHECK_ANSWER = 'POST_CHECK_ANSWER';
export const RESET_PROGRESS = 'RESET_PROGRESS';

// Authentication (fake)
export const AUTHENTIFY = 'AUTHENTIFY';

// Action types types
interface GetTestsAction {
  type: typeof GET_TESTS;
  payload: Test;
}

interface PostTestsAction {
  type: typeof POST_TEST;
  payload: Test;
}

interface DeleteTestsAction {
  type: typeof DELETE_TEST;
  payload: string;
}

export type TestsActionTypes =
  | GetTestsAction
  | PostTestsAction
  | DeleteTestsAction;

interface GetStudentsAction {
  type: typeof GET_STUDENTS;
  payload: Student[];
}

interface GetStudentAction {
  type: typeof GET_STUDENT;
  payload: Student;
}

interface PostStudentAction {
  type: typeof POST_STUDENTS;
  payload: Student[];
}

interface ResetProgressAction {
  type: typeof RESET_PROGRESS;
  payload: Student;
}

export type StudentsActionTypes =
  | GetStudentsAction
  | GetStudentAction
  | PostStudentAction
  | ResetProgressAction;

interface AnswerObject {
  answerObject: UserAnswer;
  data: ResultQuestions;
}

interface GetCurrentQuizzAction {
  type: typeof GET_CURRENTQUIZZ;
  payload: AnswerObject;
}

interface PostCheckAnswerAction {
  type: typeof POST_CHECK_ANSWER;
  payload: AnswerObject;
}

interface ResetProgressAction {
  type: typeof RESET_PROGRESS;
  payload: Student;
}

export type QuizzActionTypes =
  | GetCurrentQuizzAction
  | PostCheckAnswerAction
  | ResetProgressAction;

interface AuthenticateAction {
  type: typeof AUTHENTIFY;
  payload: SystemState;
}

export type AuthenticateActionTypes = AuthenticateAction;
