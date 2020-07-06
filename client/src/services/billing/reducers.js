import { GRAB_INVOICES_SUCCESFUL, GRAB_INVOICES_PENDING, GRAB_INVOICES_FAILURE } from './actionTypes';
import { updateObject } from '../utils'

const initialState = {
  invoices: null,
  loading: false
}

export default function invoiceReducer(state = initialState, action) {
  switch (action.type) {
    case GRAB_INVOICES_SUCCESFUL:
      return updateObject(state, { 
        invoices: action.data, 
        requestSucessful: true,
        loading: false
      });
    case GRAB_INVOICES_PENDING:
      return updateObject(state, {
        requestPending: true,
        loading: true
      });
    case GRAB_INVOICES_FAILURE: 
      return updateObject(state, {
        requestFailed: true,
        loading: false
      });
    default:
      return state;
  }
}