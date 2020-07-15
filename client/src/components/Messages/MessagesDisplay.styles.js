import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    // root: {
    //   backgroundColor: theme.DRAWER_TEXT,
    //   width: 500,
    //   padding:'0px'
    // },
    '&.MuiTabs-indicator' : {
        color: theme.MSG_TABS_TABINDICATOR,
    },
    displayItemContainer: {
        margin: '1vw',
        width: '95%',
        backgroundColor: theme.DRAWER_BACKGROUNG,
    },
    displayItemDate: {
        display: "inline-flex",
        justifyContent: 'end'
    },
    listContainer: {
        maxHeight:'75vh',
        width:'100%',
        // backgroundColor: theme.DRAWER_BACKGROUNG,
        overflow:'auto'
    },
    displayItemFromSub: {
        // overflow:'hidden'
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto',
    },
    senderText: {
        color: theme.MSG_TABS_TEXT,
        fontWeight: '700',
    }
  }));