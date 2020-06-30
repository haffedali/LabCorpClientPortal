
import { GRAB_INVOICES_SUCCESFUL, GRAB_INVOICES_FAILURE, GRAB_INVOICES_PENDING} from './actionTypes';
import { invoiceApi } from "../../utils";

export const grabInvoices = (customerid) => {
    return dispatch => {
        dispatch(_grabInvoicesStarted());
  
        return invoiceApi
        .isValidInvoice(customerid)
        .then(res => {
            dispatch(_grabInvoicesSuccess(res.data.value));
        })
        .catch( (error) => {
            console.log(error);
            dispatch(_grabInvoicesFailed(error));
        });
    };
}

// USING PAYMENT MICROSERVICE
// import axios from 'axios'
// export const grabInvoices = () => {
//   return dispatch => {
//       dispatch(_grabInvoicesStarted());

//       return axios.get(`http://localhost:7101/payments`)
//       .then(res => {
//           dispatch(_grabInvoicesSuccess(res));
//       })
//       .catch( (error) => {
//           console.log(error);
//           dispatch(_grabInvoicesFailed(error));
//       });
//   };
// }

const _grabInvoicesSuccess = (invoiceList) => {
    return {
        type: GRAB_INVOICES_SUCCESFUL,
        data: invoiceList.map((obj) => ({
            id: obj.invoiceid,
            name: obj.name
        }))
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