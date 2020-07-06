import { SEEN } from './actions'

export default function NotificationCounterReducer(state = {}, action){
  switch (action){
    case SEEN: 
      return {...state, notificationCounter: action.data}
    default:
      return state
  }
}
