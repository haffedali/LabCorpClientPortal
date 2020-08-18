import axios from "axios";
import { adalApiFetch } from '../adalConfig';
import { getConfig, apiRoute } from './APIHeaders';

export const appointmentsApi = {
  /**
   * @param string id
   * @returns Promise
   */

  query: (id) => {
    const queryString = apiRoute + `contacts(${id})/Contact_Appointments?$select=subject,scheduledstart,scheduledend,ss_standing&$filter=ss_standing eq 2`;
    return adalApiFetch(axios, queryString, getConfig)
  },

  createApp: (date) => {
    let config = {
      method: 'post',
      'OData-MaxVersion': 4.0,
      'OData-Version': 4.0,
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      headers: {
        'Prefer': 'return=representation'
      },
      data: date
    };
   
    const createCall = 'https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/appointments'
    return adalApiFetch(axios, createCall, config)

  }
}
