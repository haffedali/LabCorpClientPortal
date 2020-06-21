
import axios from 'axios'

import { GRAB_INVOICES_SUCCESFUL, GRAB_INVOICES_FAILURE, GRAB_INVOICES_PENDING} from './actionTypes';

export const grabInvoices = () => {
  return dispatch => {
      dispatch(_grabInvoicesStarted());

      return axios.get(`http://localhost:7101/payments`)
      .then(res => {
          dispatch(_grabInvoicesSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_grabInvoicesFailed(error));
      });
  };
}

const _grabInvoicesSuccess = (res) => {
    return {
        type: GRAB_INVOICES_SUCCESFUL,
        data:  res.data
    };
}

const _grabInvoicesFailed = (error) => {
    return {
        type: GRAB_INVOICES_FAILURE,
        error  
    };
}

const _grabInvoicesStarted = () => {
    return {
        type: GRAB_INVOICES_PENDING
    };
}