import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from './InnerSideBar.styles';

// Icons
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import DescriptionIcon from '@material-ui/icons/Description';
import BallotIcon from '@material-ui/icons/Ballot';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const tabIcons = {
  0: <DescriptionIcon />,
  3: <LiveHelpIcon />,
  4: <BallotIcon />
}

const InnerSideBar = (props) => {
  const classes = useStyles(props);
  
  return (
      <div className={classes.innerSideBar}>
        <List>
          {["Billing Overview", "Invoices", "Payments", "Help", "Terms & Conditions"].map(
            (text, index) => (
              <ListItem
                button
                selected={'REPLACE ME' === text}
                onClick={() => props.changeTab(index)}
                key={`${index}-main-tabs`}
                className={
                  props.innerPage === index 
                    ? (index in tabIcons ? classes.listItemActive : classes.listItemChildActive) 
                    : (index in tabIcons ? classes.listItemNotActive : classes.listItemChild)                    
                }
              >
                {index in tabIcons ? (
                  <ListItemIcon className={classes.listItemIcon}>
                    {tabIcons[index]}
                  </ListItemIcon>
                ) : 
                  <ListItemIcon />
                }
                <ListItemText 
                  primary={text} 
                  className={
                    index in tabIcons ?
                      classes.listItemText :
                      classes.listItemChildText
                  } 
                />
              </ListItem>
              
            )
          )}
        </List>
      </div>
  );
}

export default InnerSideBar;