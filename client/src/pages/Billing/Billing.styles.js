import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 0,
  },
  billingContent: props => ({
    // flexGrow: 1,
    minHeight: '100vh',
    width: `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: props.drawerWidth,
    paddingTop: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    backgroundColor: theme.BILLING_BACKGROUND,
  }),
}));