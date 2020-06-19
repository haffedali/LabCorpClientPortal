import React from 'react';
import { useStyles } from './MessagesTabs.styles';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MessagesTabs(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.messagesTabsAppbar}>
        <Tabs value={value} onChange={handleChange} aria-label="message slection tabs">
          <Tab label="Inbox" {...a11yProps(0)} />
          <Tab label="Sent Messages" {...a11yProps(1)} />
          <Tab label="Notices/Letter" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
      {/* Setting the body of the tabs */}
      <TabPanel value={value} index={0}>
        <p className={classes.messagesBody}>Users can see their incoming messages</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className={classes.messagesBody}>Users can see their sent messages</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className={classes.messagesBody}>Letters and Notices should go here</p>
      </TabPanel>
    </div>
  );
}
