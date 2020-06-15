import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import * as scheduleActions from "../../services/Schedule/actions"

/* const ViewSwitcher = ({
    currentViewName,
    onChange,
}) => (
        <RadioGroup
            aria-label="Views"
            style={{ flexDirection: 'row' }}
            name="views"
            value={currentViewName}
            onChange={onChange}
        >
            <FormControlLabel value="Month" control={<Radio />} label="Month" />
            <FormControlLabel value="Week" control={<Radio />} label="Week" />
            <FormControlLabel value="Day" control={<Radio />} label="Day" />
        </RadioGroup>
    ); */
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
const ViewSwitcher = ({ onChange, currentViewName }) => (
    <RadioGroup
        aria-label="Views"
        style={{ flexDirection: 'row' }}
        name="views"
        value={currentViewName}
        onChange={onChange}
    >
        <FormControlLabel value="Month" control={<Radio />} label="Month" />
        <FormControlLabel value="Week" control={<Radio />} label="Week" />
        <FormControlLabel value="Day" control={<Radio />} label="Day" />
    </RadioGroup>
);

const CurrentView = (props) => {
    const [viewName, setViewName] = React.useState("Month");

    const viewChange = (e, index) => {
        const { actions } = props;
        setViewName(index);
        actions.switchView(index);
    };

    return (
        <Paper>

            <ViewSwitcher 
            currentViewName={viewName}
            onChange={viewChange}/>
            <Scheduler>
                <ViewState currentViewName={viewName} />
                <MonthView />
                <WeekView
                    startDayHour={10}
                    endDayHour={19}
                />
                <Appointments />
            </Scheduler>
        </Paper>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentView);
