import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { useTheme } from '../../theme/ThemeContext';
import { useStyles } from './SideBar.styles';
import { Routes } from '../../navigation'
import { history } from '../../navigation'

import { useLocation } from 'react-router-dom'

import logo from '../../assets/img/logo.png'
import { AvatarBtn } from '../'

function SideBar(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  let location = useLocation();

  useEffect(() => {
    let stateCurrPage = selectedIndex;
    let pathname = location.pathname.substring(1);

    if (pathname !== stateCurrPage) {
      setSelectedIndex(pathname)
    }
  });

  const tabIcons = {
    0: <EventIcon className={classes.drawerIcon} />,
    1: <PaymentIcon className={classes.drawerIcon} />,
    2: <MailOutlineIcon className={classes.drawerIcon} />,
    3: <ListAltIcon className={classes.drawerIcon} />,
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(location.pathname.substring(1));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    history.push(index);
  };

    const drawer = (
        <div className={classes.drawerContainer}>
            <div className={classes.toolbar} />
            <Divider className={classes.divider} />
            <List>
            {['Appointments', 'Billing', 'Messages', 'Test Results'].map((text, index) => (
                <ListItem
                    button
                    selected={selectedIndex === text}
                    onClick={(event) => handleListItemClick(event, text)}
                    key={`${index}-main-tabs`}
                    className={classes.listItemHover}
                >
                    <ListItemIcon className={selectedIndex === text ? classes.activeListItemIcon : classes.inactivelistItemIcon}>{tabIcons[index]}</ListItemIcon>
                    <ListItemText primary={text} className={classes.listItemText} />
                </ListItem>
            ))}
            </List>
            <Divider className={classes.divider} />
            <List>
                <ListItem button>
                    <ListItemIcon>
                      <ExitToAppIcon className={classes.drawerIcon} />
                    </ListItemIcon>
                    <ListItemText primary='Logout' className={classes.listItemText} />
                </ListItem>
            </List>
        </div>
    );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.appBarContainer}>
              <div className={classes.appBarTitleContainer} onClick={(event) => handleListItemClick(event, '')}>
                <img src={logo} height='50px' />
                <Typography variant="h6" className={classes.appBarText} noWrap>
                    LabCorp
                </Typography>
            </div>
            <div className={classes.appBarRightItems}>
                <IconButton onClick={() => theme.toggle()} className={classes.lightSwitchContainer}>
                    {theme.dark ? 
                        <Brightness7Icon aria-label="Lights On" className={classes.lightSwitchIcon} /> : 
                        <Brightness4Icon aria-label="Lights Off" className={classes.lightSwitchIcon} />}
                </IconButton>
                {/* <AvatarBtn avatarSrc={avatarSrc} page='/profile' /> */}
                <AvatarBtn page='/profile' />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
}

export default SideBar;