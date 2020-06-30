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

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(scheduleActions, dispatch)
  };
}
  
function mapStateToProps(state) {
  return {
    date: state.scheduleReducer
  }
}

function ScheduledAlert(props) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
          <DialogContentText id="alert-dialog-description">
            You've chosen {props.date.date} between {props.date.startTime} and {props.date.endTime} for your next appoitnment.

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledAlert)