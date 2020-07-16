import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnSecondary: props => {
    if (props.priority === 1) {
      return {
        minWidth: '125px',
        padding: '5px 15px',
        backgroundColor: theme.BTN_SECONDARY,
        border: theme.BTN_OVERDUE_BORDER,
        color: theme.BTN_OVERDUE_TXT,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.BTN_OVERDUE_HOVER,
          border: theme.BTN_OVERDUE_BORDER_HOVER,
          color: theme.BTN_OVERDUE_TXT_HOVER,
        },
      }
    } else {
      return {
        minWidth: '125px',
        padding: '5px 15px',
        backgroundColor: theme.BTN_SECONDARY,
        border: `solid 1px ${theme.PRIMARY}`,
        color: theme.PRIMARY,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.BTN_SECONDARY_HOVER,
          border: theme.BTN_SECONDARY_BORDER_HOVER,
          color: theme.BTN_SECONDARY_TXT_HOVER
        },
      }
    }
  },
  btnPrimaryTxt: {
    margin: 0,
    padding: 0,
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    textTransform: 'none',
    color: 'inherit',
  },
  btnLoading: props => ({
    margin: 0,
    padding: 0,
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    textTransform: 'none',
    color: props.priority === 1 ? theme.BTN_OVERDUE_TXT : theme.HIGHLIGHT,
  }),
  spinnerContainer: {
    width: '100%',
    height: '100ch',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30ch',
    color: 'red',
  },
  progressSpinner: {
    color: theme.HIGHLIGHT
  },
  successReceipt: {
    color: theme.HIGHLIGHT,
  }
}));