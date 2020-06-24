import { SEARCH } from './actions';

export default function resultsReducer(state = {}, action){
  switch (action.type){
    case SEARCH:
      return {...state, search: action.data}
    default:
      return state
  }
}