import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import { apiRoute } from './APIHeaders'

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSIsImtpZCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSJ9.eyJhdWQiOiJodHRwczovL3Nzd2lsYm9icmFnZ2lucy5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNThiZjUxZWMtY2EyMi00OGQ5LWFkOTMtZTlkNDQzMDliMjdhLyIsImlhdCI6MTU5NDIzMjkyNiwibmJmIjoxNTk0MjMyOTI2LCJleHAiOjE1OTQyMzY4MjYsImFpbyI6IkUyQmdZTWljY3ZXb3FtcjUvTTE3N3JiWEtwbE5BUUE9IiwiYXBwaWQiOiJlZmE5Mzk1NC1jYTQ1LTQ3ZDUtOWY5Mi1iNjI4ZjA1YjQ4NzEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81OGJmNTFlYy1jYTIyLTQ4ZDktYWQ5My1lOWQ0NDMwOWIyN2EvIiwib2lkIjoiNDRiM2FlZGItMWNlOC00YmY0LWFiMmQtZjJhZGVjYTJjYTZkIiwic3ViIjoiNDRiM2FlZGItMWNlOC00YmY0LWFiMmQtZjJhZGVjYTJjYTZkIiwidGlkIjoiNThiZjUxZWMtY2EyMi00OGQ5LWFkOTMtZTlkNDQzMDliMjdhIiwidXRpIjoiUC1vNmNidEVmRWFzdmFLN1hZQXRBQSIsInZlciI6IjEuMCJ9.g_gY8pKguXHU8YZM_ujXdJahW6lU7C691qb_ewqaCxLIjxIiMTaeYBmLoWKGIG9XBu48CDGKmyyNu_0Z5aePXbnkEfDbbCVtgTUMlF84neO5ap79LF1BH_DJ5XaQ_FSWnrgiubdlsZ7c8OCSQmPyyHPSHasKnJdMGakrIqFQ0r37lnJ_Q48FH7GpoBesnyC2TMnekxyGSphEFoVnvferDEMkKFXocUtE9dYynbNiQF3decQ3om9MbLrv0kFootBJKaDSbOQtzrWYNFQUbQXuFfAqKwfEahfevSL-ZGEd8S_4DU1qUSYHppV3cJHhfbcqF8CtlRlcoKfzP3ZM0LWJ8A';

var config = {
  method: 'get',
  url: 'https://sswilbobraggins.crm.dynamics.com/api/data/v9.1/contacts(cc03b0bb-b2ba-ea11-a812-000d3a31f370)?$select=firstname',
  headers: { 
    'Authorization': `Bearer ${accessToken}`, 
    'Cookie': 'ARRAffinity=6a8f7cd71f11c2b510d8550123c171c66ae60d2845592c7c2250ea645dabc54a; ReqClientId=616b95a9-6995-4aff-b917-ad7068fd97e8; orgId=d1c2af78-68e3-490e-a502-af5e7047a5dd'
  }
};

const testAccess = (config) => {
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
} 



export const invoiceApi = {
  isValidInvoice: () => {
    const invoiceData = testAccess(config);
    // const queryString = `${apiRoute}invoices?$select=invoicenumber,name,duedate,totalamount,description&$expand=invoice_details($select=invoicedetailid,priceperunit,productname),customerid_contact($select=ss_stripeid)&$filter=_customerid_value%20eq%20${customerid}`
    // return adalApiFetch(axios, queryString, getConfig);
    console.log(invoiceData);
    return testAccess(config);
  },
};




