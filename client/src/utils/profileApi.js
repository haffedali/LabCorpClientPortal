import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute } from "./APIHeaders";

export const profileApi = {
  /**
   * @param object userObject
   * @returns Promise
   */
  update: (userObj) => {
    fullname = fullname.replace(".", " ");
    const queryString =
      apiRoute +
      `contacts?$select=firstname,ss_patientid,
      address1_line1,address1_city,address1_stateorprovince,
      address1_postalcode,address1_country,mobilephone,
      emailaddress1,lastname&$filter=contains(fullname, '${fullname}') and contains(ss_patientid, '${id}')&$expand=ss_contact_ss_insuranceplan_Patient($select=ss_name)`;
    return adalApiFetch(axios, queryString, getConfig);
  },
};
