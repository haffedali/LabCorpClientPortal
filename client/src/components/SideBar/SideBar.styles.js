import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerContainer: {
      backgroundColor: theme.DRAWER_BACKGROUNG,
      height: '100%',
      color: theme.DRAWER_TEXT,
    },
    drawerIcon: {
      color: theme.DRAWER_TEXT,
    },
    activeListItemIcon: {
      '& svg': {
        color: theme.DRAWER_TEXT_ACTIVE,
      }
    },
    inactiveListItemIcon: {
      '& svg': {
        color: theme.DRAWER_TEXT,
      }
    },
    listItemText: {
      '& span': {
        fontWeight: '500',
      }
    },
    listItemHover: {
      '&:hover': {
        backgroundColor: theme.DRAWER_ITEM_HOVER,
      }
    },
    divider: {
      backgroundColor: theme.DIVIDER,
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: `${theme.BACKGROUND_000} !important`
    },
    appBarContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appBarTitleContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer'
    },
    appBarText: {
      color: theme.PRIMARY,
    },
    appBarRightItems: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    lightSwitchContainer: {
      marginRight: '12px'
    },
    lightSwitchIcon: {
      color: theme.PRIMARY
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      color: theme.PRIMARY,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      borderColor: `${theme.DRAWER_BORDER}`,
    },
    content: props => ({
      flexGrow: 1,
      backgroundColor: theme.BACKGROUND_001,
      minHeight: '100vh',
      height: '100%',
      color: theme.PRIMARY,
      padding: props.noPadding.includes(props.currentPage) ? '0px' : theme.spacing(3),
  }),
}));