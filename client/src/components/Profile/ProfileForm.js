import React from 'react';
import { useStyles } from './ProfileForm.styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


export default function FormFields(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
            required
            id="filled-required"
            label="Full Name"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            id="filled-address"
            label="Street Address"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            id="filled-city"
            label="City"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            id="filled-state"
            label="State"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            id="filled-number-zip"
            label="ZIP Code"
            type="number"
            variant="filled"
        />
        <TextField
            id="filled-number"
            label="Insurance Number"
            type="number"
            InputLabelProps={{ shrink: true, }}
            variant="filled"
        />
        <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
        />
        <TextField
            id="filled-read-only-input"
            label="Username"
            defaultValue="Dummy Data Username"
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            error
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
        />
      </div>
    </form>
  );
}
