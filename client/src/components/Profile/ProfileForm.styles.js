import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '40ch',
      },
    },
    fieldBox: {
        backgroundColor: theme.MSG_TABS_CONTAINER,
        color: theme.DRAWER_TEXT_ACTIVE,
    },

  }));