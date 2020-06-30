import {
  SWITCH_PAGE,
  GET_EMAILS_STARTED,
  GET_INBOX_EMAILS_SUCCESS,
  GET_EMAILS_FAILED,
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