import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./MessagesDisplay.styles";
import { useTheme } from "../../theme/ThemeContext";

const messageContentStringTrim = (string) => {
  if (string) {
    let cutString = string.slice(0, 100);
    cutString += "...";
    return cutString;
  }
  return string;
};

const messageSubjectStringTrim = (string) => {
  let endpoint = 0;
  for (let i = 1; i < string.length - 3; i++) {
    if (
      string[i] === "R" &&
      string[i - 1] === "C" &&
      string[i + 1] === "M" &&
      string[i + 2] === ":"
    ) {
      endpoint = i - 1;
    }
  }
  if (endpoint > 0) {
    return string.slice(0, endpoint);
  } else {
    return string;
  }
};

const MessagesDisplayItem = ({ item, inbox }) => {
  const classes = useStyles();
  const textContentPeek = messageContentStringTrim(item.textContent);
  const subjectText = messageSubjectStringTrim(item.subject);
  return (
    <Paper key={item.subject} className={classes.displayItemContainer}>
      <ListItem>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={3} className={classes.displayItemFromSub}>
            <Typography className={classes.senderText}>
              {
                inbox?item.sender:item.recipient
              }
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ListItemText primary={subjectText} />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{item.textContent}</ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={2}>
            <Container className={classes.displayItemDate}>
              <Typography className={classes.senderText}>
                {item.date}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </ListItem>
    </Paper>
  );
};

export const MessagesDisplay = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const dispatch = useDispatch();
  let count = 0;
  useEffect(() => {
    dispatch({ type: "SENT_EMAIL_STATUS_RESET" });
  }, []);
  return (
    <List className={classes.listContainer}>
      {  
      props.messages.length ? (
        props.messages.map((message) => {
          count += 1;   
          return <MessagesDisplayItem key={count} item={message} inbox={props.inbox}/>;
        })
      ) : (
        <div>No Messages at this time</div>
      )}
    </List>
  );
};
