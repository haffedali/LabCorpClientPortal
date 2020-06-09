import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import DisplayOption from "../DisplayOption";
import { bindActionCreators } from "redux";

import * as sideBarActions from "../../services/SideBar/actions";

const SideBar = (props) => {
  const useStyles = makeStyles({
    container: {
      height: "100%",
      backgroundColor: "#5FA9F1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center ",
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
    aria-label="Display Choices"
    disablePadding
    >
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Appointments"
        
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Test Results"
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Messages"
        />
      <DisplayOption
        className={classes.option}
        selectedIndex={selectedIndex}
        handleClick={handleListItemClick}
        pageName="Billing"
        />
    </List>
  );
};

function mapStateToProps(state) {
  return {
    page: state.sideBarReducer.page,
  };
}

function mapDispathToProps(dispatch) {
  return {
    actions: bindActionCreators(sideBarActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispathToProps)(SideBar);
