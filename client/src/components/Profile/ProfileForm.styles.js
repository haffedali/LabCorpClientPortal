import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
      '& .MuiFormLabel-root.Mui-focused': {
          color: theme.DRAWER_TEXT_ACTIVE,
      },
      '& .MuiFilledInput-underline:after': {
        borderColor: theme.DRAWER_TEXT_ACTIVE,
      }
    },
    fieldBox: {
        backgroundColor: theme.PROFILE_BOX_FILL,
        '& > div': {color: `${theme.PRIMARY} !important`},
    },

  }));