import {
  SWITCH_PAGE,
  GET_EMAILS_STARTED,
  GET_INBOX_EMAILS_SUCCESS,
  GET_EMAILS_FAILED,
  GET_SENT_EMAILS_SUCCESS,
  SENT_EMAIL_STARTED,
  SENT_EMAIL_FAILED,
  SENT_EMAIL_SUCCESS,
  UPDATE_EMAIL_OBJ,
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
          if (!emailObject.textContent){
            const el2 = document.createElement("div");
            el2.innerHTML = email.description;
            emailObject.textContent = el2.textContent

          }
          emailArray.push(emailObject);
        });
        dispatch(_getInboxEmailsSuccess(emailArray));
      })
      .catch((e) => {
        console.log(e);
        dispatch(_getEmailsFailed);
      });
    // await messagesApi.getInboxEmails(emails)
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
          let emailObject = {};
          emailObject.subject = email.subject;
          emailObject.sender = email.ss_sentfrom;
          if (email.ss_recipient) {
            emailObject.recipient = email.ss_recipient;
          } else {
            emailObject.recipient = "wilbobaggins@smoothstack.com";
          }
          if (!email.actualend) {
            emailObject.date = "7/1/2020";
          } else {
            emailObject.date =
              email["actualend@OData.Community.Display.V1.FormattedValue"];
          }
          emailObject.textContent = email.description;
          emailArray.push(emailObject);
        });
        dispatch(_getSentEmailsSuccess(emailArray));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const sendEmail = (emailObj) => {
  return (dispatch) => {
    dispatch(_sendEmailStarted());
    messagesApi
      .createNewEmail(emailObj)
      .then((r) => {
        dispatch(_sendEmailSuccess());
      })
      .catch((e) => {
        dispatch(_sendEmailFailed());
      });
  };
};

export const writeEmail = (emailObj) => {
  return (dispatch) => {
    dispatch(_updateEmailObj(emailObj));
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

const _getEmailsFailed = () => {
  return {
    type: GET_EMAILS_FAILED,
  };
};

const _getSentEmailsSuccess = (emails) => {
  return {
    type: GET_SENT_EMAILS_SUCCESS,
    sentMessages: [...emails],
  };
};

const _sendEmailStarted = () => {
  return {
    type: SENT_EMAIL_STARTED,
  };
};

const _sendEmailFailed = () => {
  return {
    type: SENT_EMAIL_FAILED,
  };
};

const _sendEmailSuccess = () => {
  return {
    type: SENT_EMAIL_SUCCESS,
  };
};

const _updateEmailObj = (emailObj) => {
  return {
    type: UPDATE_EMAIL_OBJ,
    emailObj: emailObj,
  };
};
