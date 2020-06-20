import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from './InnerSideBar.styles';
import { CustomPaper } from '../'

const InnerSideBar = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.innerSideBar}>
        <List>
          {["Invoices", "Payments", "Help"].map(
            (text, index) => (
              <ListItem
                button
                selected={'REPLACE ME' === text}
                // onClick={(event) => handleListItemClick(event, text)}
                key={`${index}-main-tabs`}
                className={classes.listItemHover}
              >
                <ListItemIcon
                  className={
                    'REPLACE ME' === text
                      ? classes.activeListItemIcon
                      : classes.inactivelistItemIcon
                  }
                >
                  {/* {tabIcons[index]} */}
                </ListItemIcon>
                <ListItemText primary={text} className={classes.listItemText} />
              </ListItem>
            )
          )}
        </List>
      </div>
      <div className={classes.billingContent}>
        {/* <CustomPaper /> */}
      </div>
    </div>
    
  );
}

export default InnerSideBar;