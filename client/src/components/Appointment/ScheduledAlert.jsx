import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as scheduleActions from "../../services/Schedule/actions"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AlertTitle, Alert } from '@material-ui/lab';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(scheduleActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    date: state.scheduleReducer,
    contact: state.loginReducer.userInfo
  }
}

function ScheduledAlert(props) {
  const [open, setOpen] = React.useState(false);
  const { actions } = props;

  const date = props.date.date;
  const start = props.date.startTime;
  const end = props.date.endTime;


  const alertString = () => {
    if (date && start && end) {
      return (
        `You've chosen ${date} between ${start} and ${end} for your next appoitnment.`
      )
    }
    else {
      return (

        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Please Choose — <strong>Date and Time Range</strong>
        </Alert>
      )
    }
  }

  const handleSubmit = () => {
    let appDate = {}
    appDate.scheduledstart = new Date(`${props.date.date} ${start}`).toISOString();
    appDate.scheduledend = new Date(`${props.date.date} ${end}`).toISOString();
    appDate['regardingobjectid_contact@odata.bind'] = `/contacts(${props.contact.contactId})`;
    appDate.description = `${props.contact.firstName} ${props.contact.lastName} is requesting ${props.date.subject}`;
    appDate.subject = props.date.subject;
    appDate.ss_standing = 1;

    actions.createAppointment(appDate);
    setOpen(false);
    setTimeout(() => {
      actions.hideAlert()
    }, 5000)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" className="button" onClick={handleClickOpen}>
        Confirm Date Request
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Your next Appointment Request"}</DialogTitle>
        <DialogContent>
          {alertString()}
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
      </Button>
          <Button
            onClick={handleSubmit}
            disabled={!date || !start || !end}
            color="primary"
            autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledAlert)

