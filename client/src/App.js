import React, { Component } from 'react';
import { SideBar } from './components'

// import { BrowserRouter as Router } from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <SideBar />      
    )
  }
}

export default App;