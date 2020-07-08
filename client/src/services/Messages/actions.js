import {
  SWITCH_PAGE,
  GET_EMAILS_STARTED,
  GET_INBOX_EMAILS_SUCCESS,
  GET_EMAILS_FAILED,
  GET_SENT_EMAILS_SUCCESS
} from "./actionTypes";
import { messagesApi } from "../../utils";

export const switchPage = (page) => {
  return (dispatch) => {
    dispatch(_switchPage(page));
  };
};

export const getInboxEmails = (contactId) => {
  return (dispatch) => {
    dispatch(_getEmailsStarted());
    messagesApi
      .getInboxEmails(contactId)
      .then((r) => {
        const emailArray = [];
        const emailResponseArray = r.data.value;
        emailResponseArray.forEach((email) => {
          // console.log(email)
          let emailObject = {};
          emailObject.subject = email.subject;
          emailObject.sender = email.sender;
          emailObject.date =
            email["actualend@OData.Community.Display.V1.FormattedValue"];

          const el = document.createElement("div");
          el.innerHTML = email.description;
          const description = el.getElementsByTagName("pre");
          if (description[0]) {
            emailObject.textContent = description[0].textContent;
          }
          emailArray.push(emailObject);
        })
        dispatch(_getInboxEmailsSuccess(emailArray));
      })
      .catch((e)=>{
          console.log(e);
          dispatch(_getEmailsFailed)
      });
  };
};

export const getSentEmails = (email) => {
  return (dispatch) => {

    messagesApi
      .getSentEmails(email)
      .then((r) => {
        const emailArray = [];
        const emailResponseArray = r.data.value;
        emailResponseArray.forEach((email) => {
          console.log(email)
          let emailObject = {};
          emailObject.subject = email.subject;
          emailObject.sender = email.ss_sentfrom;
          // Hard coded cause i messed up me dummy data
          emailObject.date = '7/1/2020'
          // const el = document.createElement("div");
          // el.innerHTML = email.description;
          // const description = el.getElementsByTagName("pre");
          // if (description[0]) {
          //   emailObject.textContent = description[0].textContent;
          // }
          emailObject.textContent = email.description
          emailArray.push(emailObject);
        })
        console.log(emailArray)
        dispatch(_getSentEmailsSuccess(emailArray));
      })
      .catch((e)=>{
          console.log(e);
      });
  };
}

const _switchPage = (page) => {
  return {
    type: SWITCH_PAGE,
    data: page,
  };
};

const _getEmailsStarted = () => {
  return {
    type: GET_EMAILS_STARTED,
  };
};

const _getInboxEmailsSuccess = (emails) => {
  return {
    type: GET_INBOX_EMAILS_SUCCESS,
    inboxMessages: [...emails],
  };
};

const _getEmailsFailed = ()=> {
    return {
        type: GET_EMAILS_FAILED
    }
}

const _getSentEmailsSuccess = (emails) => {
  return {
    type: GET_SENT_EMAILS_SUCCESS,
    sentMessages: [...emails]
  }
}