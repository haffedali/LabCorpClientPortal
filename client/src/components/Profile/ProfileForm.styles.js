import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
      '.MuiFilledInput-underline': {
        color: theme.PRIMARY,
      },
    },
    fieldBox: {
        backgroundColor: theme.PROFILE_CONTAINER_FILL,
        color: theme.PRIMARY,
    },

  }));