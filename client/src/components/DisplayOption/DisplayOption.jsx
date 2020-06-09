import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export const DisplayOption = ({
  pageName,
  handleClick,
  selectedIndex,
}) => {
    return(
  <ListItem button selected={selectedIndex === pageName} onClick={(event)=> handleClick(event, pageName)}>
    <ListItemText color="green" primary={pageName} />
  </ListItem>
    )
};
