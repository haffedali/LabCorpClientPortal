import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute } from "./APIHeaders";

export const testResultsApi = {
  /**
   * @returns Promise
   */
  getByContact: (id) => {
    const queryString = apiRoute 
                        + "ss_labresults?$expand=ss_Patient($select=contactid),ss_Appointment($select=name)"
                        + "&$filter=_ss_patient_value eq " + id
    return adalApiFetch(axios, queryString, getConfig);
  },
}