import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute, postConfigGenerator } from "./APIHeaders";
import {buildApiPost, buildApiCall} from './helperFunctions';


export const messagesApi = {
  getInboxEmails: (id) => {
    // const queryObj = {
    //   entity: 'emails',
    //   select: ['description', 'actualend', 'subject', 'ss_sentfrom'],
    //   filter: [{field: 'torecipients', value: email}]
    // }
    const queryString =
      apiRoute +
      `contacts(${id})/Contact_Emails?$select=subject,sender,description,actualend`;
    // const queryString = buildApiCall(queryObj)

    return adalApiFetch(axios, queryString, getConfig)
  },

  getSentEmails: (userEmail)=> {
    const queryObj ={
      entity: 'emails',
      select: ['description', 'actualend', 'subject', 'ss_sentfrom'],
      filter: [{field: 'ss_sentfrom', value: userEmail}]
    }
    const queryString = buildApiCall(queryObj)
 
    return adalApiFetch(axios, queryString, getConfig)
  },


  createNewEmail: (email) =>{
    const data = {
      ss_sentfrom: "haffedmcnair@gmail.com",
      subject: "Hi, I'm paul mach 23",
      description: "When I was young I was petrified, but now I've grown and I'm still petrified. Maybe this is because I've never been outside of my house before, but as spongebob says, 'Indoooooooooooooooors'"
    }
    const postConfig = postConfigGenerator(data);
    const postString = buildApiPost("emails");
    adalApiFetch(axios, postString, postConfig)
    .then((r)=>{
      console.log(r)
    })
    .catch((e)=>console.log(e))
  }


};
