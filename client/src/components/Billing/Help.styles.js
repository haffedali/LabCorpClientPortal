import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  helpContainer: {
    marginBottom: '100px'
  },
  helpHead: {
    color: theme.HIGHLIGHT
  },
  helpQ: {
    color: theme.HIGHLIGHT,
    marginBottom: '0'
  },
  helpA: {
  },
  helpMainHead: {

  },
  divider: {
    backgroundColor: theme.DIVIDER,
    marginBottom: '30px',
    marginTop: '50px',
  },
}));