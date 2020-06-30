import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},
  customPaper: {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
    backgroundColor: theme.MSG_TABS_CONTAINER,
  },
  divider: {
    backgroundColor: theme.DIVIDER,
    marginBottom: '30px',
    marginTop: '50px',
  },
}));