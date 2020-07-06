import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dashboard } from './components'

// For microservices
import gql from "graphql-tag";
import graphqlClient from "./utils/graphqlClient";
import { setSession } from './services/Session/actions';

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        contactId
        email
        id
      }
    }
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });
  }, []);

  if (!initialised) return "Loading...";

  return (
    <Dashboard />
  );
};

export default App;



/* NOTE: The 'username' prop in the Login component below is
   only for development, and should be deleted for production
   along with the its usage in Login.js (change 'props.username'
   back to an empty string in the state initializer)
   
   It is necessary to auto login the user when the app is 
   started with 'npm run noauth'. */

// const App = (props) => 
//   <div>{props.loggedIn === true
//     ? <SideBar /> 
//     : <LogIn username={process.env.REACT_APP_NOAUTH === 'true' ? 'daniel.barone' : ''} />
//   }</div>

// const mapStateToProps = (state) => {
//   return {loggedIn: state.loginReducer.loggedIn};
// }

// export default connect(mapStateToProps, {})(App);