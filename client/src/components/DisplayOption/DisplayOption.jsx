import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

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
