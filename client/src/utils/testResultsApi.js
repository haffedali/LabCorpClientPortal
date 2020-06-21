import axios from "axios";
import {getConfig, apiRoute } from './APIHeaders';
import  {adalApiFetch} from '../adalConfig';

export const testResultsApi = {
  doSomething : () => {
    return adalApiFetch(axios, apiRoute + "ss_labresults", getConfig)
  },
  getGroupedResults : () => {
    const results = adalApiFetch(axios, apiRoute + "ss_labresults", getConfig)
    const keys = [{}]
    results.forEach(value => {
      
    });
  }
}

