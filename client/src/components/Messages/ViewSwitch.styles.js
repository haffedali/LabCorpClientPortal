import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.DRAWER_TEXT,
      width: 500,
      padding:'0px'
    },
    appBar: {
      backgroundColor: theme.DRAWER_TEXT,
      width: 500,
      padding:'0px',
      width: "80vw"
    },
    tab: {
      textColor: theme.MSG_TABS_TEXT
    },
    tabs: {
      
    }
  }));