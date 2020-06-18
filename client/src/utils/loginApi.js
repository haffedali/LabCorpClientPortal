import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute } from "./APIHeaders";

export const loginApi = {
  /**
   * @param string fullname
   * @param string id
   */
  isValidUser: (fullName, id) => {
    //axios logic
  },

  /**
   * @param string firstname
   * @param string lastname
   * @returns object userInfo object
   */
  isValidUserTest: (firstName, lastName) => {
    // const queryString = apiRoute + `contacts?$select=firstname&$filter=contains(firstname, '${firstName}') and contains(lastname, '${lastName}')`;
    // adalApiFetch(axios, queryString, getConfig)
    // .then((r) => {
    //     console.log(r)
    // })
    // .catch(e=>console.log(e))
    adalApiFetch(
      axios,
      "https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/contacts?$select=firstname&$filter=contains(firstname,%20%27jo%27)",
      getConfig
    ).then((r) => console.log(r));
  },
};
