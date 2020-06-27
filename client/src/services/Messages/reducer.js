import {
  SWITCH_PAGE,
  GET_EMAILS_STARTED,
  GET_EMAILS_FAILED,
  GET_INBOX_EMAILS_SUCCESS,
} from "./actionTypes";

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
    case GET_EMAILS_STARTED:
      return { ...state, getMessageRequest: "pending" };
    case GET_EMAILS_FAILED:
      return { ...state, getMessageRequest: false };
    default:
      return state;
  }
}
