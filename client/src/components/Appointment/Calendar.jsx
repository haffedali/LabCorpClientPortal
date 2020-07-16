import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
    DayView,
    AppointmentForm,
    AppointmentTooltip,
    DateNavigator,
    Toolbar
} from '@devexpress/dx-react-scheduler-material-ui';
import * as calendarActions from "../../services/Calendar/actions"
import { useStyles } from "./Appointment.styles"

// Grab Current View for Calendar(Month, Week, Day)
// Fetch Calendar Appointments with contactID
// appData for mapping appointments and checking request
function mapStateToProps(state) {
    return {
        currentView: state.calendarReducer.currentView,
        contactId: state.loginReducer.userInfo.contactId,
        appData: state.calendarReducer.appointmentData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(calendarActions, dispatch),
    };
}

//Mapping appointment Data for Material-Ui calendar
const makeData = appointment => ({
    title: appointment.subject,
    startDate: appointment.scheduledstart,
    endDate: appointment.scheduledend,
});


const CalendarView = (props) => {
    const classes = useStyles(props);
    const { actions } = props;

    const [viewName, setViewName] = React.useState("Month");

    const viewChange = (e, value) => {
        setViewName(value);
        actions.switchView(value);
    };

    const fetchData = () => {
        actions.getData(props.contactId);
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData()
        setData(props.appData)
    }, []);

    let content = '';

    if (!props.appData || props.appData.requestPending) {
        content = (
            <div className={classes.radio}>
                <CircularProgress />
            </div>
        )
    }

    if (props.appData && props.appData.requestSucessful) {
        content = (
            <div>
                <Paper className={classes.calendar} elevation={10}>
                    <RadioGroup
                        aria-label="Views"
                        className={classes.radio}
                        name="views"
                        value={viewName}
                        onChange={viewChange}
                    >
                        <FormControlLabel value="Month" control={<Radio />} label="Month" />
                        <FormControlLabel value="Week" control={<Radio />} label="Week" />
                        <FormControlLabel value="Day" control={<Radio />} label="Day" />
                    </RadioGroup>
                    <Scheduler
                        data={props.appData.appointments.map(makeData)}>
                        <ViewState currentViewName={viewName} />
                        <MonthView />
                        <WeekView
                            startDayHour={10}
                            endDayHour={19}
                        />
                        <DayView />
                        <Appointments />
                        <AppointmentTooltip
                            showOpenButton
                            showCloseButton
                        />
                        <Toolbar />
                        <DateNavigator />
                        <AppointmentForm readonly />
                    </Scheduler>
                </Paper>
            </div>
        )

    }
    return (
        <div>
            {content}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);