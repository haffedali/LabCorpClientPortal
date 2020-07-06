import { CLEAR, SET } from './actionTypes';

export const setSession = session => {
  console.log(session)
  return { session, type: SET };
};

export const clearSession = () => {
  return { type: CLEAR };
};