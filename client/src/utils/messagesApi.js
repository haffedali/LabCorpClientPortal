import axios from "axios";
import { adalApiFetch } from "../adalConfig";
import { getConfig, apiRoute, postConfigGenerator } from "./APIHeaders";
import {buildApiPost} from './helperFunctions';


export const messagesApi = {
  getInboxEmails: (id) => {
    const queryString =
      apiRoute +
      `contacts(${id})/Contact_Emails?$select=subject,sender,description,actualend`;
    return adalApiFetch(axios, queryString, getConfig)
  },

  createNewEmail: (email) =>{
    const data = {
      sender: "PokemonMan@gmail.com",
      subject: "Hi, I'm paul mach 2",
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
