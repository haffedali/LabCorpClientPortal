export const SEEN = "SEEN"

export const seen = () => {
  return (dispatch) => {
    const actionSeen = {type: SEEN, data: ""}
    dispatch(actionSeen)
  }
}

export const received = () => {
  // any time I get a notfication-worthy response from Dynamics, this will catch it.
  // I wish I could put some kind of api polling function here that will run on a timer.
}

export const poll = () => {
  setInterval(function(){
    // hit api to check for news
  }, 1000 * 60)
}