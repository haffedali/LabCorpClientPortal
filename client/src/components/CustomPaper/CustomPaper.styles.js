import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '-25px',
    zIndex: '1000'
  },
  customPaper: {
    height: '100px',
    width: '100%',
    height: '500px',
    borderRadius: '15px',
  }
}));