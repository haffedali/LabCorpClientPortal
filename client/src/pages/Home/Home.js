import React from 'react';
import LabCorpLogo from "../../assets/img/logo.png";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const Home = (props) => {
    //<h2>Welcome to your Patient Portal!</h2>
    const contactUUID = useSelector(state => state.session.user.id);

    return (
    <div>
        <h1>{contactUUID}</h1>
        <img src={LabCorpLogo} height="500px" position="center"/>
    </div>
    )
}
export default Home;