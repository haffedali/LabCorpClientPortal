import React from "react";
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  for (let i=1;i<string.length-3;i++){
    if (string[i] === "R" && string[i-1] === "C" && string[i+1] === "M" && string[i+2] === ":"){
      endpoint = i-1
    }
  }
  return string.slice(0,endpoint)
}

const MessagesDisplayItem = ({ item }) => {
  const classes = useStyles();
  const textContentPeek = messageContentStringTrim(item.textContent);
  const subjectText = messageSubjectStringTrim(item.subject)
  return (
    <Paper key={item.subject} className={classes.displayItemContainer}>
      <ListItem >
        <Grid container direction="row" justify="space-between">
          <Grid item xs={2} className={classes.displayItemFromSub}>
            {/* <ListItemText
              className={classes.textElement}
              primary={item.sender}
            /> */}
            <Typography className={classes.senderText}>
              {item.sender}
            </Typography>
            {/* <ListItemText className={classes.senderText} primary={item.subject} /> */}
            {/* <Typography className={classes.senderText}>
              {subjectText}
            </Typography> */}
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={8}>
            <ExpansionPanel>
              <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}>
                <ListItemText
                  primary={subjectText}
                />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{item.textContent}</ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={1}>
            <Container className={classes.displayItemDate}>
              {/* <ListItemText primary={item.date} className={classes.senderText}/> */}
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
  return (
    <List className={classes.listContainer}>
      {props.messages.length ? (
        props.messages.map((message) => <MessagesDisplayItem key={message.subject} item={message} />)
      ) : (
        <div>No Messages at this time</div>
      )}
    </List>
  );
};
