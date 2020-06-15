import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import SideBar from "../../components/SideBar";
import TestPage from "../TestPage";
import LogIn from '../LogIn'
import Messages from '../Messages/Messages';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({});

const AppWrapper = (props) => {
  const useStyles = makeStyles({
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#f1f7f3",
    },
    grid: {
      height: "100%",
    },
    sidebar: {
      height: "100%",
      width: "100%",
      justifyContent: "left",
    },
  });

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid className={classes.grid} container direction="row" justify="left">
        <Grid className={classes.sidebar} item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <Switch>
            <Route exact path="/" component={TestPage} />
            {/* <Route path="/Messages" component={} /> */}


          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
