import { GRAB_INVOICES_SUCCESFUL, GRAB_INVOICES_FAILURE, GRAB_INVOICES_PENDING} from './actionTypes';
import { invoiceApi } from "../../utils";

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

// Helper function
const parseProducts = (products) => {
    const product_list = products.map((prod) => ({
        invoicedetailid: prod.invoicedetailid,
        productname: prod.productname,
        priceperunit: prod.priceperunit
    }))
    return JSON.stringify(product_list)
}

const _grabInvoicesSuccess = (invoiceList) => {
    return {
        type: GRAB_INVOICES_SUCCESFUL,
        data: invoiceList.map((obj, indx) => ({
            id: obj.invoicenumber,
            name: obj.name,
            duedate: obj.duedate,
            totalamount: obj.totalamount,
            description: obj.description,
            products: parseProducts(obj.invoice_details)
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