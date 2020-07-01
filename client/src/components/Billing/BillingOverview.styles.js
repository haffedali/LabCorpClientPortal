import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '100px'
  },
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
  invoiceListItemContainer: {
    border: 'solid 1px red',
    borderRadius: '5px'
  },
  invoiceListItemField: {
    color: 'green'
  },
}));