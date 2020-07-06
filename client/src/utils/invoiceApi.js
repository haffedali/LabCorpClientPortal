import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import { apiRoute } from './APIHeaders'

export const invoiceApi = {
  isValidInvoice: (customerid) => {
    const queryString = `${apiRoute}invoices?$select=invoicenumber,name,duedate,totalamount,description&$filter=_customerid_value%20eq%20${customerid}&$expand=invoice_details($select=invoicedetailid,productname,priceperunit)`
    return adalApiFetch(axios, queryString, getConfig);
  },
};
