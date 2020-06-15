import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import DisplayOption from "../DisplayOption";
import { bindActionCreators } from "redux";

import * as messagesAction from "../../services/Messages/actions";

const messageTab = (props) => {
  const useStyles = makeStyles({
    container: {
      height: "50%",
      backgroundColor: "#dea6ff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    option: {
      marginTop: "3vw",
    },
  });

  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState("Messages");

  const handleListItemClick = (event, index) => {
    const {actions} = props
    setSelectedIndex(index);
    actions.switchPage(index);
  };

  return (
    <DisplayOption
        className={classes.root}
        ExpansionPanelDetails
          Typography
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        /></ExpansionPanelSummary>
  );
};

function mapStateToProps(state) {
  return {
    page: state.messagesReducer.page,
  };
}

function mapDispathToProps(dispatch) {
  return {
    actions: bindActionCreators(messagesAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispathToProps)(messageTab);
