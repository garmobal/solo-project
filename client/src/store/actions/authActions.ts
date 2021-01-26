import * as actionTypes from './actionTypes';

import { AppDispatch } from '../../index';
import { LoginStatus } from '../../types';

export const authenticate = (input: LoginStatus) => {
  return (dispatch: AppDispatch) => {
    let role: string;
    if (input.logout) role = 'none';
    else role = input.name === 'vader_loveislove' ? 'teacher' : 'student';

    dispatch({ type: actionTypes.AUTHENTIFY, payload: { role: role } });
  };
};
