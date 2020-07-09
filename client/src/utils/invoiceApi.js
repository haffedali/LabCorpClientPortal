import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import { apiRoute } from './APIHeaders'

export const invoiceApi = {
  isValidInvoice: (customerid) => {
    const queryString = `${apiRoute}invoices?$select=invoicenumber,name,duedate,totalamount,description,statecode,statuscode&$expand=invoice_details($select=invoicedetailid,priceperunit,productname),customerid_contact($select=ss_stripeid)&$filter=_customerid_value%20eq%20${customerid}`
    return adalApiFetch(axios, queryString, getConfig);
  },
};




