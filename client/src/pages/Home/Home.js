import React from 'react';
import homePageLogo from "../../assets/img/homePage.png";
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from './Home.styles';

const Home = (props) =>  {
    const classes = useStyles(props);

    return (
        <div>
        <h1 className={classes.header}>Welcome to your Patient Portal!</h1>
        {/* <img src={homePageLogo} className={classes.logo}/> */}
        </div>
    )
}

export default Home;