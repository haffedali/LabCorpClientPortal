import axios from "axios";
import  {adalApiFetch} from '../adalConfig';
import {getConfig, apiRoute } from './APIHeaders';

export const appointmentsApi = {
  /**
   * @param string id
   * @returns Promise
   */

     query: (id) => {
          const queryString = apiRoute + `contacts(${id})/Contact_Appointments?$select=subject,scheduledstart,scheduledend`;
          return adalApiFetch(axios, queryString, getConfig)
        }
    }
