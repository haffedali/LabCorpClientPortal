import {
  SWITCH_PAGE,
  GET_EMAILS_STARTED,
  GET_EMAILS_FAILED,
  GET_INBOX_EMAILS_SUCCESS,
  GET_SENT_EMAILS_SUCCESS,
  SENT_EMAIL_FAILED,
  SENT_EMAIL_STARTED,
  SENT_EMAIL_SUCCESS,
  UPDATE_EMAIL_OBJ
} from "./actionTypes";
import { CallToActionSharp } from "@material-ui/icons";

export default function messagesReducer(
  state = { currentPage: "Inbox" },
  action
) {
  switch (action.type) {
    case SWITCH_PAGE:
      return { ...state, currentPage: action.data };

    case GET_INBOX_EMAILS_SUCCESS:
      return {
        ...state,
        inboxMessages: action.inboxMessages,
        getMessageRequest: true,
      };

    case GET_SENT_EMAILS_SUCCESS:
      return {
        ...state,
        sentMessages: action.sentMessages,
      }
    case GET_EMAILS_STARTED:
      return { ...state, getMessageRequest: "pending" };
    case GET_EMAILS_FAILED:
      return { ...state, getMessageRequest: false };
    case SENT_EMAIL_STARTED:
      return {...state, sentEmailStatus: 'pending'};
    case SENT_EMAIL_FAILED:
      return {...state, sentEmailStatus: false}
    case SENT_EMAIL_SUCCESS: 
      return {...state, sentEmailStatus: true}
    case UPDATE_EMAIL_OBJ: {
      return {...state, emailObj: action.emailObj}
    }
    default:
      return state;
  }
}
