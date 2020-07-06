import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  innerSideBar: props => ({
    height: '100vh',
    position: 'fixed',
    width: props.drawerWidth,
    color: theme.PRIMARY,
    padding: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: theme.INNER_DRAWER,
    boxShadow: 'inset -2px 0 9px -7px rgba(0,0,0,0.4)',
  }),
  listItem: props => ({
    color: theme.INNER_DRAWER_TEXT,
    '&:hover': {
      backgroundColor: theme.DRAWER_ITEM_HOVER,
    },
  }),
  listItemChild: {},
  listItemChildActive: {
    color: theme.INNER_DRAWER_TEXT_ACTIVE,
    backgroundColor: theme.DRAWER_ITEM_HOVER,
  },
  listItemActive: {
    color: theme.INNER_DRAWER_TEXT_ACTIVE,
    backgroundColor: theme.DRAWER_ITEM_HOVER,
    '&:hover': {
      backgroundColor: theme.DRAWER_ITEM_HOVER,
    },
  },
  listItemNotActive: {
    '&:hover': {
      backgroundColor: theme.DRAWER_ITEM_HOVER,
    },
  },
  innerSideBarHeader: {
    color: theme.INNER_DRAWER_TEXT_ACTIVE,
    marginBottom: '20px'
  },
  innerSideBarHeaderIcon: {
    color: theme.DRAWER_TEXT_ACTIVE,
  },
  innerSideBarHeaderText: {
    '& span': {
      fontWeight: '600',
      fontSize: '1.3em'
    }
  },
  listItemText: {
    '& span': {
      fontWeight: '600',
    }
  },
  listItemIcon: {
    '& svg': {
      color: theme.DRAWER_TEXT_ACTIVE,
    }
  },
}));