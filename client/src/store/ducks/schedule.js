// actions
const SWITCH_VIEW = 'SWITCH_VIEW'

const DEFAULT_STATE = {};

// reducer
const scheduleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SWITCH_VIEW: 
      return { ...state, currentView: action.data};
    default:
      return state;
  }
};

export default scheduleReducer;

// action creators
export const switchView = view => {
  return { type: SWITCH_VIEW, data: view };
}