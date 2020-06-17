import React from 'react';
import { connect } from 'react-redux';
import { SideBar } from './components'
import { LogIn } from './pages';

// NOTE: Change "undefined" below to "true" to 
// renable the login page 

const App = (props) => 
  <div>{props.loggedIn === undefined 
    ? <SideBar /> 
    : <LogIn />
  }</div>

const mapStateToProps = (state) => {
  return {loggedIn: state.loginReducer.loggedIn};
}

<<<<<<< HEAD

const App = (props) => {
  return (
    <div>
    {
      props.loggedIn === undefined // test@gmail.com  || 1234
      ?
      <SideBar />  
      :
      <LogIn />    
    }
    </div>
  )

}


export default connect(mapStateToProps,{})(App);
=======
export default connect(mapStateToProps, {})(App);
>>>>>>> master
