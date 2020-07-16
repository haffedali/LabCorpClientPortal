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
    color: theme.PRIMARY
  },
  patientName: {
    color: theme.HIGHLIGHT,
    paddingLeft: '4px'
  }
}));