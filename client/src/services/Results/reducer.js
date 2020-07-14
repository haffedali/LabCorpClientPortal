import { 
  SEARCH,
  LOAD_PENDING,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './actionTypes';

export default function resultsReducer(state = {}, action){
  function isFound(str="", q="") {
    return (str.toLowerCase().indexOf(q) > -1)
  }
  function matchedRows(rows=[], search="") {
    return rows.filter((row) => {
      const searchable = []
      searchable.push(row.name)
      searchable.push(row.date)
      row.items.forEach((i) => {
        searchable.push(i["item"])
        searchable.push(i["unit"])
        searchable.push(i["numericValue"])
       })
      return searchable.some(v => isFound(v, search))
    })
  }

  switch (action.type){
    case SEARCH:
      return {...state, search: action.payLoad, rows: matchedRows(state.allRows, action.payLoad)}
    case LOAD_PENDING:
      return {...state,}
    case LOAD_SUCCESS:
      return {...state, rows: matchedRows(action.payLoad.rows, state.search), allRows: action.payLoad.rows}
    case LOAD_FAIL:
      return {...state,}
    default:
      return state
  }
}