import { combineReducers } from 'redux';
import { Test } from '../../types';
import * as actionTypes from '../actions/actionTypes';

const initialTests: [] = [];

const tests = (state = initialTests, action: actionTypes.TestsActionTypes) => {
  switch (action.type) {
    case actionTypes.GET_TESTS:
      return action.payload;
    case actionTypes.POST_TEST:
      return action.payload;
    case actionTypes.DELETE_TEST:
      return state.filter((test: Test) => test._id !== action.payload);
    default:
      return state;
  }
};

const initialRole = 'teacher';

const role = (
  state = initialRole,
  action: actionTypes.AuthenticateActionTypes
) => {
  switch (action.type) {
    case actionTypes.AUTHENTIFY:
      return action.payload.role;
    default:
      return state;
  }
};

const initialStudentList: [] = [];

const students = (
  state = initialStudentList,
  action: actionTypes.StudentsActionTypes
) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS:
      const students = action.payload.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
      });
      return students;
    case actionTypes.POST_STUDENTS:
      const allStudents = [...state, ...action.payload].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
      });
      return allStudents;
    default:
      return state;
  }
};

const initalCurrentStudent = {};

const currentStudent = (
  state = initalCurrentStudent,
  action: actionTypes.StudentsActionTypes
) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

const initialCurrentQuizz = {};

const currentQuizz = (
  state = initialCurrentQuizz,
  action: actionTypes.QuizzActionTypes
) => {
  switch (action.type) {
    case actionTypes.GET_CURRENTQUIZZ:
      return action.payload;
    default:
      return state;
  }
};

const initialProgress: [] = [];

const progress = (
  state = initialProgress,
  action: actionTypes.QuizzActionTypes
) => {
  switch (action.type) {
    case actionTypes.POST_CHECK_ANSWER:
      const result = {
        qid: action.payload.answerObject.qid,
        option: action.payload.answerObject.answer,
        question: action.payload.answerObject.question,
        correct: action.payload.data,
      };
      return [...state, result];
    case actionTypes.RESET_PROGRESS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  tests,
  role,
  students,
  currentStudent,
  currentQuizz,
  progress,
});
