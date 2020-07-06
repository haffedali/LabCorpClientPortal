import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useStyles} from './ViewSwitch.styles';
import { useTheme } from "../../theme/ThemeContext";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messagesActions from '../../services/Messages/actions';


function mapStateToProps(state){
  return {
    currentPage: state.messagesReducer.currentPage
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(messagesActions, dispatch)
  }
}

const ViewSwitch = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    const {actions} = props;
    console.log(event.target)
    const page = event.target.innerHTML;
    setValue(newValue);
    actions.switchPage(page);
  };



  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          className={classes.tabs}
          indicatorColor={theme.MSG_TABS_INDACTOR}
        >
          <Tab label="Inbox" className={classes.tab}/>
          <Tab label="Sent" className={classes.tab}/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewSwitch)