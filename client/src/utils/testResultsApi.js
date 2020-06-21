import axios from "axios";
import {getConfig, apiRoute } from './APIHeaders';
import  {adalApiFetch} from '../adalConfig';

// `https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/contacts?$select=firstname&$filter=contains(fullname, 'Richard Daley')&$expand=Contact_Phonecalls($select=subject)`
    // after '&$expand=' is where you put the name of the relationship you are looking for
    //&$expand=Lab_Results


export const testResultsApi = {
  doSomething : () => {
    return adalApiFetch(axios, apiRoute + "ss_labresults", getConfig)
  },
  getGroupedResults : () => {
    const results = adalApiFetch(axios, apiRoute + "ss_labresults", getConfig)
    results.forEach(value => {
      return
    });
  }
}

