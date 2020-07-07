import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useStyles } from "./LogoutButton.styles";

import { useDispatch, useSelector } from "react-redux";
import { logoutAttempt } from '../../services/LogIn/actions';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { clearSession } from "../../services/Session/actions";

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const LogoutButton = (props) => {
  const classes = useStyles(props);

  const [deleteUserSession] = useMutation(mutation);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  return (
    <List>
      <ListItem
        key="logout-button"
        button
        onClick={evt => {
          evt.preventDefault();
          dispatch(clearSession());
          dispatch(logoutAttempt());
          deleteUserSession({ variables: { sessionId: session.id } });
        }}
      >
        <ListItemIcon>
          <ExitToAppIcon className={classes.drawerIcon} />
        </ListItemIcon>
        <ListItemText primary="Logout" className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

export default LogoutButton;
