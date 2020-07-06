import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnSecondary: {
    minWidth: '100px',
    padding: '5px 15px',
    backgroundColor: theme.BTN_SECONDARY,
    border: theme.BTN_SECONDARY_BORDER,
    color: theme.BTN_SECONDARY_TXT,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.BTN_SECONDARY_HOVER,
      border: theme.BTN_SECONDARY_BORDER_HOVER,
      color: theme.BTN_SECONDARY_TXT_HOVER
    }
  },
  btnPrimaryTxt: {
    margin: 0,
    padding: 0,
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // fontWeight: 400,
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    textTransform: 'none',
    color: 'inherit',
  },
}));