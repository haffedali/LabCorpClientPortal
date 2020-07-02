import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
      color: theme.PRIMARY,
    },
  },
  detailsRoot: {
    '& > *': {
      color: theme.PRIMARY,
    },
  },
  testTblRoot: {
    '& > *': {
      color: `${theme.PRIMARY}`,
    },
  },
  invDetailsDescCont: {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: theme.HIGHLIGHT,
  },
  invoiceTableContainer: {
    backgroundColor: theme.BILLING_BACKGROUND,
    boxShadow: 'none',
  },
  firstcol: {
    paddingLeft: '0px'
  },
  headerRow: {
    '& > th': {
      border: '0px !important'
    },
  },
  collapsedContainer: {
    backgroundColor: theme.BACKGROUND_001,
  },
  detailsHeader: {
    marginBottom: '1em',
  },
  headerCol: {
    padding: 0, 
    margin: 0,
    color: theme.PRIMARY,
    fontSize: '1.2em',
  },
  arrowIcons: {
    color: theme.HIGHLIGHT,
  },
  money: {
    color: theme.MONEY,
    fontWeight: 'bold'
  },
  invItemDivider: {
    backgroundColor: theme.TABLE_DIVIDER
  },
  datePriority1: {
    color: theme.PRIORITY_1,
    fontWeight: 'bold'
  },
  datePriority2: {
    color: theme.PRIORITY_2,
  },
  datePriority3: {
    color: theme.PRIMARY,
  },
  paymentCompleteIcon: {
    color: theme.PAID
  },
  btnPrimary: {
    minWidth: '100px',
    padding: '5px 15px',
    backgroundColor: theme.BTN_PRIMARY,
    border: theme.BTN_PRIMARY_BORDER,
    color: theme.BTN_PRIMARY_TXT,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#4d6b8f',
      border: theme.BTN_PRIMARY_BORDER,
      color: theme.BTN_PRIMARY_TXT
    },
  },
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