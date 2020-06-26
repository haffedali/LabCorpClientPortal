import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import {buildApiCall} from './helperFunctions'

export const testResultsApi = {
  /**
   * @returns Promise
   */
  all: () => {
    const queryObj = {
      entity: 'ss_labresults',
      select: [
        "_ss_appointment_value",
        "ss_date",
        "ss_labresultid",
        "ss_name",
        "ss_numericvalue",
        "_ss_patient_value",
        "_ss_product_value",
        "ss_unit"
      ],
      relatedEntity: 'ss_Appointment',
      relatedSelect: ['name','opportunityid']
    }
    const queryString = buildApiCall(queryObj)
    return adalApiFetch(axios, queryString, getConfig);
  },
  // allRichard: () => {
  //   const queryObj = {
  //     entity: 'ss_labresults',
  //     filter: ["_ss_patient_value eq 8937d501-96b1-ea11-a812-000d3a31f370"],
  //   }
  //   const queryString = "ss_labresults?$filter=_ss_patient_value eq 8937d501-96b1-ea11-a812-000d3a31f370&$orderby=ss_date asc"
  //   return adalApiFetch(axios, queryString, getConfig);
  // },
}