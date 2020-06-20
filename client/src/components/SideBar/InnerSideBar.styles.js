import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 0
  },
  innerSideBar: {
    height: '100vh',
    position: 'fixed',
    width: drawerWidth,
    color: theme.PRIMARY,
    padding: theme.spacing(3),
    paddingLeft: 0,
    paddingTop: '50px',
    backgroundColor: theme.INNER_DRAWER,
    boxShadow: 'inset -2px 0 9px -7px rgba(0,0,0,0.4)',

  },
  billingContent: {
    // flexGrow: 1,
    minHeight: '100vh',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    paddingTop: theme.spacing(6),
    paddingRight: theme.spacing(6),
    zIndex: 10,
    backgroundColor: theme.WHITE,
  }
}));