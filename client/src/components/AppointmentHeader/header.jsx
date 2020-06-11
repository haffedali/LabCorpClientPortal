import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

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

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AppointmentHeader() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        href="/"
        onClick={handleClick}
        className={classes.link}
      >
        <EventIcon className={classes.icon} />
        Calendar
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <EventAvailableIcon className={classes.icon} />
        Appointments
      </Link>
    </Breadcrumbs>
  );
}