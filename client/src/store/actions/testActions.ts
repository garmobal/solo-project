import * as actionTypes from './actionTypes';
import * as testAPI from '../../testAPI';
import { AppDispatch } from '../../index';
import { ResultQuestions, TestQuestion, UserAnswer } from '../../types';

export const fetchTests = () => {
  return (dispatch: AppDispatch) => {
    testAPI
      .getTests()
      .then((data) => dispatch({ type: actionTypes.GET_TESTS, payload: data }));
  };
};

export const postTest = (questions: TestQuestion[], title: string) => {
  return (dispatch: AppDispatch) => {
    testAPI
      .postTest({ questions, title })
      .then((data) => dispatch({ type: actionTypes.POST_TEST, payload: data }));
  };
};

export const deleteTest = (id: string) => {
  return (dispatch: AppDispatch) => {
    testAPI
      .deleteTest(id)
      .then((data) => dispatch({ type: actionTypes.DELETE_TEST, payload: id }));
  };
};

export const fetchQuizz = (id: string) => {
  return (dispatch: AppDispatch) => {
    testAPI
      .getQuizz(id)
      .then((data) =>
        dispatch({ type: actionTypes.GET_CURRENTQUIZZ, payload: data })
      );
  };
};

export const checkUserAnswer = (answerObject: UserAnswer) => {
  return (dispatch: AppDispatch) => {
    testAPI.checkAnswer(answerObject).then((data: ResultQuestions) =>
      dispatch({
        type: actionTypes.POST_CHECK_ANSWER,
        payload: { data, answerObject },
      })
    );
  };
};
