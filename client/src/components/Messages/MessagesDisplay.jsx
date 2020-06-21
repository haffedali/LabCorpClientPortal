import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Container,
} from "@material-ui/core";
import { useStyles } from "./MessagesDisplay.styles";

const MessagesDisplayItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.displayItemContainer}>
        <ListItem>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={3} className={classes.displayItemFromSub}>
              <ListItemText primary={item.sender} />
              <ListItemText primary={item.subject} />
            </Grid>
            <Grid item xs={6}>
              <ListItemText
                primary={item.textContent}
                secondary={"Click here to read more"}
              />
            </Grid>
            <Grid item xs={3}>
              <Container className={classes.displayItemDate}>
                <ListItemText primary={item.date} />
              </Container>
            </Grid>
          </Grid>
        </ListItem>
    </Paper>
  );
};

export const MessagesDisplay = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.listContainer}>
      {props.messages.length ? (
        props.messages.map((message) => <MessagesDisplayItem item={message} />)
      ) : (
        <div>No Messages at this time</div>
      )}
    </List>
  );
};
