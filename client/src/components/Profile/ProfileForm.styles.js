import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
    },
    fieldBox: {
        backgroundColor: theme.PROFILE_BOX_FILL,
        color: theme.PRIMARY,
    },

  }));