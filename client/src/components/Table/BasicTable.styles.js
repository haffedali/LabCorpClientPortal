import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: props => ({
    '& > *': {
      color: props.status === 2 || props.datePriority === 1 ? theme.WHITE : theme.PRIMARY,
    },
    backgroundColor: props.status === 0 ? props.datePriority === 1 ? theme.ROW_OVERDUE : '' : theme.ROW_PAID,
    '&:hover': {
      backgroundColor: props.status === 0 ? props.datePriority === 1 ? theme.ROW_OVERDUE_HOVER : `${theme.BACKGROUND_001} !important` : theme.ROW_PAID_HOVER,
    },
  }),
  detailsRoot: {
    '& > *': {
      color: theme.PRIMARY,
    },
  },
  testTblRoot: {
    '& > *': {
      color: theme.PRIMARY,
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
      // border: '0px !important'
    },
  },
  collapsedContainer: props => ({
    backgroundColor: props.status === 2 ? theme.DETAILS_PAID : props.datePriority === 1 ? theme.DETAILS_OVERDUE : theme.BACKGROUND_001,
  }),
  detailsHeader: {
    marginBottom: '1em',
  },
  headerCol: {
    padding: 0, 
    margin: 0,
    color: theme.PRIMARY,
    fontSize: '1.2em',
  },
  arrowIcons: props => ({
    color: props.status === 2 || props.datePriority === 1 ? theme.WHITE : theme.HIGHLIGHT,
  }),
  money: props => ({
    color: props.status === 2 || props.datePriority === 1 ? theme.WHITE : `${theme.MONEY} !important`,
    fontWeight: 'bold'
  }),
  moneyDetails: props => ({
    color: props.status === 2 ? theme.PAID : props.datePriority === 1 ? theme.OVERDUE : `${theme.MONEY} !important`,
    fontWeight: 'bold'
  }),
  invItemDivider: {
    backgroundColor: theme.TABLE_DIVIDER
  },
  paymentCompleteIcon: {
    color: theme.PAID,
    '& > path': {
      fill: theme.WHITE
    }
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
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    textTransform: 'none',
    color: 'inherit',
  },
  datePriority: props => {
    switch(props.datePriority) {
      case 0: {
        return {
          color: theme.WHITE,
        }
      }
      case 1: {
        return {
          color: theme.WHITE,
        }
      }
      case 2: {
        return {
          color: theme.PRIORITY_2,
          fontWeight: 'bold',
        }
      }
      default: {
        return {
          color: theme.PRIMARY,
        }
      }
    }
  },   
}));