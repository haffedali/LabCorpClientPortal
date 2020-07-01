import {testResultsApi} from '../../utils/testResultsApi'

export const SEARCH = "SEARCH";
export const LOAD_PENDING = "LOAD_PENDING";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const changeSearch = (searchString) => {
  return (dispatch) => {
    dispatch(_search(searchString));
  };
};

export const loadData = (id) => {
  return (dispatch) => {
    dispatch(_load_pending());
    return testResultsApi.getByContact(id)
      .then(res => {
        dispatch(_load_success(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(_load_fail(error));
      });
  }
}

const _search = (searchString) => {
  return {
    type: SEARCH,
    payLoad: searchString,
  };
};

const _load_pending = () => {
  return {
    type: LOAD_PENDING,
    payLoad: {
      status: "pending",
      data: null,
    }
  }
}

const _load_success = (response) => {
  const rows = _groupRowsByTest(response)
  return {
    type: LOAD_SUCCESS,
    payLoad: {
      status: "success",
      data: response,
      rows: rows,
    }
  }
}

const _load_fail = (error) => {
  return {
    type: LOAD_FAIL,
    payLoad: {
      status: "error",
      data: error,
    }
  }
}

// Based on https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
// var groupBy = function(xs, key) {
//   return xs.reduce(function(rv, x) {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };
const _groupRowsByTest = (data) => { 
  const ungrouped = data.data.value; // is an array of objects. Each value[i] is a lab result.
  // Build an Object {test1: {name: "Hemoglobin", date: "2020-01-01", items: [{iron 1 g}, {chemX 1 drop}]}, test2: {another test}}
  // Object.values() [{name: "Hemoglobin", date: "2020-01-01", items: [{iron 1 g}, {chemX 1 drop}]}, {another test}]
  // Any test with the same name and date will become a single test with grouped items.
  // I'd like to build an array directly, but each insert I would have to loop through the whole array to check existing key.
  const grouped = ungrouped.reduce((rowWrapper, val)=> {
    const testName = val["ss_Appointment"] ? val["ss_Appointment"]["name"] : "Unrelated Tests"
    const testKey = testName + val["ss_date"]
    const test = {
      name: testName,
      date: val["ss_date@OData.Community.Display.V1.FormattedValue"],
      rowKey: testKey,
      items: [],
    }
    rowWrapper[testKey] = rowWrapper[testKey] || test
    const testItem = {
      item: val["ss_name"],
      numericValue: val["ss_numericvalue@OData.Community.Display.V1.FormattedValue"],
      unit: val["ss_unit"],
    }
    rowWrapper[testKey].items.push(testItem);
    return rowWrapper;
  }, {});
  const rows = Object.values(grouped)
  return rows
}
