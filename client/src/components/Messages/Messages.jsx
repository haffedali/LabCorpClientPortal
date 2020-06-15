import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import DisplayOption from "../DisplayOption";
import { bindActionCreators } from "redux";

import * as messagesAction from "../../services/Messages/actions";

const messageTab = (props) => {
  const useStyles = makeStyles({
    container: {
      height: "50%",
      backgroundColor: "#dea6ff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    option: {
      marginTop: "3vw",
    },
  });

  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState("Appointments");

  const handleListItemClick = (event, index) => {
    const {actions} = props
    setSelectedIndex(index);
    actions.switchPage(index);
  };

  return (
    <List
    className={classes.container}
    component="nav"
    aria-label="Message Center"
    disablePadding
    >
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Notices/Letters"
        
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Inbox"
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Sent Messages"
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Request Information"
        />
    </List>
  );
};

function mapStateToProps(state) {
  return {
    page: state.messagesReducer.page,
  };
}

function mapDispathToProps(dispatch) {
  return {
    actions: bindActionCreators(messagesAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispathToProps)(messageTab);
