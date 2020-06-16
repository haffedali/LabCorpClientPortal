import React from 'react';
import { SideBar } from './components'
import {connect} from 'react-redux';

import {LogIn} from './pages';


function mapStateToProps(state){
  return {loggedIn: state.loginReducer.loggedIn};
}


const App = (props) => {
  return (
    <div>
    {
      props.loggedIn === true
      ?
      <SideBar />  
      :
      <LogIn />    
    }
    </div>
  )

}


export default connect(mapStateToProps,{})(App);