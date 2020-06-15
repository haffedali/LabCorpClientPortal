import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DatePicker from '../../components/Calendar';
import Schedule from '../../components/Schedule'
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    textAlign: "center",
  },
  icon: {
    marginRight: theme.spacing(1.5),
    width: 20,
    height: 20
  }
}));

export default function AppointmentHeader() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          to={`${url}/Calendar`}
          className={classes.link}
        >
          <Button variant="contained" color="primary">
            <EventIcon className={classes.icon} />
            Calendar
          </Button>
        </Link>

        <Link
          color="inherit"
          to={`${url}/Schedule`}
          className={classes.link}
        >
          <Button variant="contained" color="primary">
            <EventAvailableIcon className={classes.icon} />
            Appointments
          </Button>
        </Link>
      </Breadcrumbs>

      <hr />

      <Switch>
        <Route exact path={path}>
          <h2>Welcome To Appointments</h2>
        </Route>
        <Route path={`${path}/Calendar`}>
          <Schedule />
        </Route>
        <Route path={`${path}/Schedule`}>
          <DatePicker />
        </Route>
      </Switch>
    </Router>
  );
}