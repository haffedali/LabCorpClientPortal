import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '100px'
  },
  customPaper: {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
    padding: '1.5em',
    backgroundColor: theme.MSG_TABS_CONTAINER,
  },
  divider: {
    backgroundColor: theme.DIVIDER,
    marginBottom: '30px',
    marginTop: '50px',
  },
  construction: {
    color: theme.HIGHLIGHT,
    width: '100cw',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '60px'
  },
  billingInfoCont: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.PRIMARY,
    marginBottom: '15px'
  },
  patientName: {
    color: theme.HIGHLIGHT,
    paddingLeft: '4px'
  },
  stripeBilling: {
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
  },
}));