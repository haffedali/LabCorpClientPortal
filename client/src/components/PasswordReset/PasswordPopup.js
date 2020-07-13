import React from 'react';
import {TextField, Button, Dialog} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="filled" color="primary" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Password Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter current password:
          </DialogContentText>
          <TextField
            className={classes.fieldBox}
            id="loginPasswordOld"
            label="Current password"
            type="password"
            defaultValue= {props.userInfo.ss_patientid}
            //autoComplete="current-password"
            variant="outlined"
            size="small"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Please enter a new password:
          </DialogContentText>
          <TextField
            className={classes.fieldBox}
            id="loginPasswordNew"
            label="New password"
            type="password"
            defaultValue= {props.userInfo.ss_patientid}
            variant="outlined"
            size="small"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Please re-enter new password:
          </DialogContentText>
          <TextField
            className={classes.fieldBox}
            id="loginPasswordConfirm"
            label="Confirm password"
            type="password"
            defaultValue= {props.userInfo.ss_patientid}
            variant="outlined"
            size="small"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}