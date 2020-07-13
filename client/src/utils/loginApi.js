import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig } from "./APIHeaders";
import {buildApiCall} from './helperFunctions';

export const loginApi = {
  /**
   * @param string firstname
   * @param string lastname
   * @returns Promise
   */
  isValidUser: (fullname, id) => {
    fullname = fullname.replace(".", " ");
    const queryObj = {
      entity: 'contacts',
      select: ["firstname","ss_patientid","address1_line1",'address1_city','address1_stateorprovince','address1_postalcode','address1_country','mobilephone','emailaddress1','lastname'],
      filter: [{field: "fullname", value: fullname},{field:"ss_patientid", value: id}],
      relatedEntity: 'ss_contact_ss_insuranceplan_Patient',
      relatedSelect: ['ss_name']
    }
    const queryString = buildApiCall(queryObj)



    // const queryObjTest = {
    //   entity: 'contacts',
    //   select: ["firstname","ss_patientid","address1_line1",'address1_city','address1_stateorprovince','address1_postalcode','address1_country','mobilephone','emailaddress1','lastname'],
    //   filter: [{field: "fullname", value: fullname},{field:"ss_patientid", value: id}],
    //   relatedEntity: 'ss_contact_ss_insuranceplan_Patient',
    //   relatedSelect: ['ss_name']
    // };
    // const queryStringTest = buildApiCall(queryObjTest)

    // adalApiFetch(axios,queryStringTest, getConfig).then(r=>console.log(r))






    return adalApiFetch(axios, queryString, getConfig);
  },


};
