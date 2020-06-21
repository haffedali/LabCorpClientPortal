import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
    },
    fieldBox: {
<<<<<<< HEAD
        backgroundColor: theme.PROFILE_BOX_FILL,
=======
        backgroundColor: theme.PROFILE_CONTAINER_FILL,
>>>>>>> b32f8ac73f7b2f843fd7cd6b259a45f21fc17a93
        color: theme.PRIMARY,
    },

  }));