import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        outline: 'solid',
        outlineColor: 'red',
        width: "80vw",
        height: '85vh',
        padding: '0px'  
    },
    displayContainer: {
        outline: 'solid',
        outlineColor: 'green',
    }
  }));