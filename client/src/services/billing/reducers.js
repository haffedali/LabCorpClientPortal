import { 
  GRAB_INVOICES_SUCCESFUL, 
  GRAB_INVOICES_FAILURE, 
  GRAB_INVOICES_PENDING,
  UPDATE_INVOICE_PENDING,
  UPDATE_INVOICE_SUCCESS,
  UPDATE_INVOICE_FAILED 
} from './actionTypes';

import { updateObject } from '../utils'

const initialState = {
  invoices: null,
  loading: false,
  updating: false
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
    case UPDATE_INVOICE_SUCCESS:
      return updateObject(state, {
        updating: false
      });
    case UPDATE_INVOICE_PENDING:
      return updateObject(state, {
        updating: true,
      })
    case UPDATE_INVOICE_FAILED:
      return updateObject(state, {
        requestFailed: true,
        updating: false
      })
    default:
      return state;
  }
}