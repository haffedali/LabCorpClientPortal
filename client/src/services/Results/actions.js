import testResultsApi from '../../utils/testResultsApi'

export const SEARCH = "SEARCH";

export const changeSearch = (searchString) => {
  return (dispatch) => {
    dispatch(_search(searchString));
  };
};

export const loadData = () => {
  return (dispatch) => {
    dispatch(_load(testResultsApi.all()));
  }
}

const _search = (searchString) => {
  return {
    type: SEARCH,
    data: searchString,
  };
};

const _load = (dataPromise) => {
  return {
    type: LOAD,
    data: dataPromise
  }
}