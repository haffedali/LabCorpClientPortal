import { GRAB_INVOICES_SUCCESFUL, GRAB_INVOICES_FAILURE, GRAB_INVOICES_PENDING} from './actionTypes';
import { invoiceApi } from "../../utils";
import axios from "axios";

export const grabInvoices = (customerid) => {
    return dispatch => {
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
            products: parseProducts(obj.invoice_details),
            stripeid: obj.customerid_contact.ss_stripeid,
            statecode: obj.statecode,
            statuscode: obj.statuscode,
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