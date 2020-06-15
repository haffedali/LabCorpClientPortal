import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import DisplayOption from "../DisplayOption";
import { bindActionCreators } from "redux";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    textAlign: "center",
  },
  icon: {
    marginRight: theme.spacing(1.5),
    width: 20,
    height: 20
  }
}));

const [selectedIndex, setSelectedIndex] = React.useState("Messages");

  const handleClick = (event) {
  };

export default function messagesTab () {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    
    <AppBar position="static">
    <Tabs value={value} onChange={handleChange} aria-label="tabs">
      <Tab label="Inbox" {...a11yProps(0)} />
      <Tab label="Sent Messages" {...a11yProps(1)} />
      <Tab label="Notices/Letters" {...a11yProps(2)} />
    </Tabs>
  </AppBar>

  <TabPanel value={value} index={0}>
    Item One
  </TabPanel>
  <TabPanel value={value} index={1}>
    Item Two
  </TabPanel>
  <TabPanel value={value} index={2}>
    Item Three
  </TabPanel>


<Switch>
<Route exact path={path}>
  <h2>Welcome To Messages Panel</h2>
</Route>
</Switch>

  );
}


