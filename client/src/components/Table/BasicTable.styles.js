import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: props => ({
    '& > *': {
      color: props.status === 2 ? theme.ROW_TXT_PAID : props.datePriority === 1 ? theme.ROW_TXT_OVERDUE : theme.PRIMARY,
      fontWeight: props.status === 2 ? 'bold' : props.datePriority === 1 ? 'bold' : '',
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
  invDetailsDescCont: props => ({
    paddingTop: '20px',
    paddingBottom: '20px',
    color: props.status === 2 ? theme.ROW_DESC_PAID : props.datePriority === 1 ? theme.ROW_DESC_OVERDUE : theme.HIGHLIGHT,
  }),
  invoiceTableContainer: {
    backgroundColor: theme.BILLING_BACKGROUND,
    boxShadow: 'none',
  },
  firstcol: {
    // paddingLeft: '0px'
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
    color: props.status === 2 ? theme.EXPAND_PAID : props.datePriority === 1 ? theme.EXPAND_OVERDUE : theme.HIGHLIGHT,
  }),
  expandBtn: {
    cursor: 'pointer'
  },
  moneyDetails: props => ({
    color: props.status === 2 ? theme.PAID : props.datePriority === 1 ? theme.OVERDUE : `${theme.MONEY} !important`,
    fontWeight: 'bold'
  }),
  invItemDivider: {
    backgroundColor: theme.TABLE_DIVIDER
  },
  paymentCompleteIcon: {
    color: theme.WHITE,
    '& > path': {
      fill: theme.PAID
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
          color: theme.ROW_TXT_PAID,
        }
      }
      case 1: {
        return {
          color: theme.ROW_TXT_OVERDUE,
        }
      }
      default: {
        return {
          color: theme.PRIMARY,
        }
      }
    }
  },   
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  sortArrow: {
    '& > svg': {
      color: `${theme.HIGHLIGHT} !important`
    }
  },
  paginationComponent: {
    color: theme.PRIMARY,
    '& > div div svg': {
      color: theme.PRIMARY
    }
  },
  receiptLink: {
    color: theme.HIGHLIGHT,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));