import React from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const LogIn = () => {
  const useStyles = makeStyles({
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    grid: {

    },

    logInContainer: {
      width: "30vw",
    },
    logInInput: {
      margin: "3vw",
    },
  });

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.logInContainer} item xs={4}>
        <Grid
          clssName={classes.grid}
          container
          direction="column"
          justify="center"
        >
          <TextField
            className={classes.logInInput}
            id="email"
            variant="outlined"
            label="email"
          />
          <TextField
            className={classes.logInInput}
            id="password"
            variant="outlined"
            label="password"
          />
          <Button variant="contained" color="primary">
            Log in
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LogIn;
