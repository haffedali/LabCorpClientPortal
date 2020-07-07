import React from 'react';
import LabCorpLogo from "../../assets/img/logo.png";
import { makeStyles } from '@material-ui/core/styles';

const Home = (props) => {
    //<h2>Welcome to your Patient Portal!</h2>
    return (
    <div>
        <img src={LabCorpLogo} height="500px" position="center"/>
    </div>
    )
}
export default Home;