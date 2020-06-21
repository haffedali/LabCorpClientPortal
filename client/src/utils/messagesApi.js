import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute } from "./APIHeaders";

export const messagesApi = {
  getInboxEmails: (id) => {
    const queryString =
      apiRoute +
      `contacts(${id})/Contact_Emails?$select=subject,sender,description,actualend`;
    return adalApiFetch(axios, queryString, getConfig)
  },
};
