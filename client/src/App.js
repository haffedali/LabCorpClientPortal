import React from 'react';
import { SideBar } from './components'
import {connect} from 'react-redux';

import {LogIn} from './pages';


function mapStateToProps(state){
  return {loggedIn: state.loginReducer.loggedIn};
}


const App = (props) => {
  // LOGIN LOGIC IMPLEMENTED ----FOR PRODUCTION
  // return (
  //   <div>
  //   {
  //     props.loggedIn === true
  //     ?
  //     <SideBar />  
  //     :
  //     <LogIn />    
  //   }
  //   </div>
  // )

  // LOGIN NOT IMPLEMENTED ----FOR DEVELOPMENT
  return <SideBar />

}


export default connect(mapStateToProps,{})(App);