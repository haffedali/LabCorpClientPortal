import { CLEAR, SET } from './actionTypes';

const DEFAULT_STATE = null;

const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.session;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

export default sessionReducer;
