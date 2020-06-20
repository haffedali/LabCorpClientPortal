import axios from "axios";
import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '58bf51ec-ca22-48d9-ad93-e9d44309b27a',
  clientId: 'efa93954-ca45-47d5-9f92-b628f05b4871',
  endpoints: {
    api: 'https://sswilbobraggins.crm.dynamics.com/',
  },
  cacheLocation: 'localStorage',
  redirectUri: 'http://localhost:3000'
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
/**
 * 
 * @param axios fetch 
 * @param string url 
 * @param getConfig options 
 */
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);


export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

export const apiRoute = 'https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/';

export const getConfig = {
    method: 'get',
    'OData-MaxVersion': 4.0,
    'OData-Version': 4.0,
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    headers: {
        'Prefer': "odata.include-annotations=*"
    }
};
    // `https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/contacts?$select=firstname&$filter=contains(fullname, 'Richard Daley')&$expand=Contact_Phonecalls($select=subject)`
    // after '&$expand=' is where you put the name of the relationship you are looking for
    //&$expand=Lab_Results


export const testResultsApi = {
  doSomething : () => {
    return adalApiFetch(axios, apiRoute + "ss_labresults", getConfig)
  }
}

function fetchData() {
  let req = new XMLHttpRequest();
  req.open("GET", "https://sswilbobraggins.api.crm.dynamics.com" + "/api/data/v9.1/ss_labresults", true);
  req.setRequestHeader("OData-MaxVersion", "4.0");
  req.setRequestHeader("OData-Version", "4.0");
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
  req.onreadystatechange = function() {
      if (this.readyState === 4) {
          req.onreadystatechange = null;
          if (this.status === 200) {
              let results = JSON.parse(this.response);
              return results.value
              // for (let i = 0; i < results.value.length; i++) {
              //   let {
              //     ss_date, 
              //     ss_date@OData.Community.Display.V1.FormattedValue, 
              //     _ss_appointment_value@OData.Community.Display.V1.FormattedValue, 
              //    } = results.value[i]
              //    if(rows)
                // {ss_labresultid: results.value[i]["ss_labresultid"]};
                // ss_labresultid,
                // ss_numericvalue,
                // ss_name, 
                // ss_unit, 
                // ss_date, 
                // ss_date@OData.Community.Display.V1.FormattedValue, 
                // _ss_appointment_value@OData.Community.Display.V1.FormattedValue, 
              // }
          } else {
              console.log(this.statusText);
          }
      }
  };
  req.send();
}

