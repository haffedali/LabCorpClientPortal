import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { apiRoute, getConfig, updateConfigGenerator } from './APIHeaders'

export const invoiceApi = {
  isValidInvoice: (customerid) => {
    const queryString = `${apiRoute}invoices?$select=invoicenumber,name,duedate,totalamount,description,statecode,statuscode,ss_stripeproductid,invoiceid&$expand=invoice_details($select=invoicedetailid,priceperunit,productname),customerid_contact($select=ss_stripeid)&$filter=_customerid_value%20eq%20${customerid}`
    return adalApiFetch(axios, queryString, getConfig);
  },
  patchInvoice: (invoiceid) => {
    const queryString = `${apiRoute}invoices(${invoiceid})`
    return adalApiFetch(axios, queryString, updateConfigGenerator({statecode: 2}))
  }
};
