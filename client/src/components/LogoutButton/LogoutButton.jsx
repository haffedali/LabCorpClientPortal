import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../services/LogIn/actions";
import { useStyles } from "./LogoutButton.styles";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

const LogoutButton = (props) => {
  const handleLogoutAttempt = () => {
    const { actions } = props;

    actions.logoutAttempt();
  };

  const classes = useStyles(props);
  return (
    <List>
      <ListItem
        key="logout-button"
        button
        onClick={() => handleLogoutAttempt()}
      >
        <ListItemIcon>
          <ExitToAppIcon className={classes.drawerIcon} />
        </ListItemIcon>
        <ListItemText primary="Logout" className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
