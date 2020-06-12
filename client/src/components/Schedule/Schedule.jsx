import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import * as scheduleActions from "../../services/Schedule/actions"

function mapStateToProps(state) {
    return {
        currentView: state.scheduleReducer.currentView
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch),
    };
}


export default function Schedule() {
    return (
        <Paper>
            <Scheduler>
                <ViewState />
                <MonthView />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

/* export default connect(mapStateToProps, mapDispatchToProps)(Schedule); */
