import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.DRAWER_TEXT,
      width: 500,
      padding:'0px'
    },
    appBar: {
      width: "80vw"
    },
  }));