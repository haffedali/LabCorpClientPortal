import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.DRAWER_TEXT,
      width: 500,
      padding:'0px'
    },
    displayItemContainer: {
        margin: '1vw',
        overflow: 'auto'
    },
    displayItemDate: {
        display: "flex",
        justifyContent: 'end'
    },
    listContainer: {
        maxHeight:'75vh',
        overflow:'auto'
    },
    displayItemFromSub: {
        overflow:'hidden'
    }
  }));