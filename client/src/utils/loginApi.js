import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute } from "./APIHeaders";

export const loginApi = {
  /**
   * @param string firstname
   * @param string lastname
   * @returns Promise
   */
  isValidUser: (fullname, id) => {
    console.log("cat");
    fullname = fullname.replace('.', ' ');
    const queryString = apiRoute + `contacts?$select=firstname,ss_patientid,lastname&$filter=contains(fullname, '${fullname}') and contains(ss_patientid, '${id}')`;
    return adalApiFetch(axios, queryString, getConfig)

  },
};
