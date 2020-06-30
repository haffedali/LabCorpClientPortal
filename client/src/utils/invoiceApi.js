import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import { buildApiCall } from './helperFunctions'
import { apiRoute } from './APIHeaders'

export const invoiceApi = {
  /**
   * @param string customerid
   * @returns Promise
   */
  isValidInvoice: (customerid) => {

    // const queryObj = {
    //   entity: 'invoices',
    //   select: ['invoiceid', 'name'],
    //   filter: [{field: '_customerid_value', value: customerid}],
    // }
    // const queryString = buildApiCall(queryObj)
    const queryString = `${apiRoute}invoices?$select=invoiceid,name&$filter=_customerid_value%20eq%20${customerid}`

    return adalApiFetch(axios, queryString, getConfig);
  },
};

