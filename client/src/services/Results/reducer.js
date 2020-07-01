import { 
  SEARCH,
  LOAD_PENDING,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './actions';

export default function resultsReducer(state = {}, action){
  // Expected fields in Results mapStateToProps
  // {
  //   search: state.resultsReducer.search,
  //   data: state.resultsReducer.ajaxData,
  //   rows: state.resultsReducer.rows,
  // };
  function isFound(str="", q="") {
    return (str.toLowerCase().indexOf(q) > -1)
  }
  function matchedRows(rows=[], search="") {
    return rows.filter(row => isFound(row.name, search) || isFound(row.date, search))
  }

  switch (action.type){
    case SEARCH:
      return {...state, search: action.payLoad, matchedRows: matchedRows(state.rows, action.payLoad)}
    case LOAD_PENDING:
      return {...state, ajaxData: action.payLoad.data, ajaxStatus: action.payLoad.status,}
    case LOAD_SUCCESS:
      return {...state, ajaxData: action.payLoad.data, ajaxStatus: action.payLoad.status, rows: action.payLoad.rows, matchedRows: matchedRows(action.payLoad.rows, state.search)}
    case LOAD_FAIL:
      return {...state, ajaxData: action.payLoad.data, ajaxStatus: action.payLoad.status,}
    default:
      return state
  }
}