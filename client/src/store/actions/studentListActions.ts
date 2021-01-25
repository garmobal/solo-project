import * as actionTypes from './actionTypes';
import * as studentAPI from '../../studentAPI';

import { AppDispatch } from '../../index';
import { CompletedTest, AssignToStudentsList, Student } from '../../types';

export const fetchStudents = () => {
  return (dispatch: AppDispatch) => {
    studentAPI
      .getStudents()
      .then((data) =>
        dispatch({ type: actionTypes.GET_STUDENTS, payload: data })
      );
  };
};

export const fetchStudent = () => {
  return (dispatch: AppDispatch) => {
    studentAPI
      .getStudent('sarah')
      .then((data) =>
        dispatch({ type: actionTypes.GET_STUDENT, payload: data })
      );
  };
};

// export const fetchStudent = (name) => {
//   return (dispatch) => {
//     studentAPI
//       .getStudent(name)
//       .then((data) =>
//         dispatch({ type: actionTypes.GET_STUDENT, payload: data })
//       );
//   };
// };

export const updateStudentResults = (
  ssid: string,
  status: string,
  testResults: CompletedTest
) => {
  console.log('ssid', ssid, 'status', status, 'testResults', testResults);

  return (dispatch: AppDispatch) => {
    studentAPI.updateStudentTests(ssid, status, testResults).then((data) => {
      dispatch({ type: actionTypes.GET_STUDENT, payload: data });
      dispatch({ type: actionTypes.RESET_PROGRESS });
    });
  };
};

export const updateStudentsPendingTests = (
  testid: string,
  status: string,
  studentsList: AssignToStudentsList
) => {
  return (dispatch: AppDispatch) => {
    studentAPI.updateStudentTests(testid, status, studentsList).then((data) => {
      dispatch({ type: actionTypes.GET_STUDENTS, payload: data });
    });
  };
};

export const importStudents = (newSs: Student[]) => {
  return (dispatch: AppDispatch) => {
    studentAPI.importStudents(newSs).then((data) => {
      dispatch({ type: actionTypes.POST_STUDENTS, payload: data });
    });
  };
};

// export const deleteStudent = (id) => {
//   return dispatch => {
//     studentAPI.deleteStudent(id)
//       .then(data => dispatch({type: actionTypes.DELETE_STUDENT, payload: id}));
//   };
// };
