import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute, postConfigGenerator } from "./APIHeaders";
import { buildApiPost, buildApiCall } from "./helperFunctions";

export const messagesApi = {
  getInboxEmails: (id) => {

    const queryObj = {
      entity: "emails",
      select: ["description", "actualend", "subject", "sender"],
      filter: [{ field: "torecipients", value: "haffedmcnair@gmail.com" }],
      orderBy: [{field: 'actualend', operator: 'desc'}]
    } 
    const queryString = buildApiCall(queryObj)
    return adalApiFetch(axios, queryString, getConfig);
  },

  getSentEmails: (userEmail) => {
    const queryObj = {
      entity: "emails",
      select: ["description", "actualend", "subject", "ss_sentfrom", "ss_recipient"],
      filter: [{ field: "ss_sentfrom", value: userEmail }],
      orderBy: [{field: 'actualend', operator: 'desc'}]
    };
    const queryString = buildApiCall(queryObj);

    return adalApiFetch(axios, queryString, getConfig);
  },

  createNewEmail: ({ ss_sentfrom, subject, body, recipient }) => {
    var now = new Date();
    var utc = new Date(now.getTime() + now.getTimezoneOffset());

    const data = {
      ss_sentfrom: ss_sentfrom,
      subject: subject,
      description: body,
      ss_recipient: recipient,
      actualend: utc
    };
    const postConfig = postConfigGenerator(data);
    const postString = buildApiPost("emails");
    return adalApiFetch(axios, postString, postConfig);
  },
};
