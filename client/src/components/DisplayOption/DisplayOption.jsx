import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";


/**
 * 
 * @prop {string} pageName - name of the page
 * @prop {function} handleClick - A click handling function
 * @prop {string} selectedIndex - my state reference for current page selected
 */
export const DisplayOption = ({ pageName, handleClick, selectedIndex }) => {
  return (
    <ListItem
      button
      selected={selectedIndex === pageName}
      onClick={(event) => handleClick(event, pageName)}
    >
      <Link to={pageName} style={{ textDecoration: "none" }}>
        <ListItemText color="green" primary={pageName} />
      </Link>
    </ListItem>
  );
};
