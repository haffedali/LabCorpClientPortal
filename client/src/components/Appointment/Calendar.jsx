import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
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
    DayView,
    AppointmentForm,
    AppointmentTooltip,
    DateNavigator,
    Toolbar
} from '@devexpress/dx-react-scheduler-material-ui';
import * as scheduleActions from "../../services/Schedule/actions"
import { useStyles } from "./Appointment.styles"

function mapStateToProps(state) {
    return {
        currentView: state.scheduleReducer.currentView,
        contactId: state.loginReducer.userInfo.contactId,
        appData: state.scheduleReducer.appointmentData,
        /*         start: state.scheduleReducer.appointmentData.scheduledstart,
                end: state.scheduleReducer.appointmentData.scheduledend,
                subject: state.scheduleReducer.appointmentData.subject */
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch),
    };
}


const appointments = [
    {
        title: 'Blood Test',
        startDate: new Date(2020, 5, 19, 9, 30),
        endDate: new Date(2020, 5, 19, 11, 30),
    }, {
        title: 'Blood Sugar Test',
        startDate: new Date(2020, 6, 23, 12, 0),
        endDate: new Date(2020, 6, 23, 13, 0),
    }
]



const CalendarView = (props, { appData }) => {
    const [viewName, setViewName] = React.useState("Month");
    const classes = useStyles(props);
    /*     const data = {
            title: props.appointmentData.subject,
            startDate: new Date(2020, 5, 23, 9, 30),
            endDate: new Date(2020, 5, 23, 11, 30)
        } */

    const viewChange = (e, index) => {
        const { actions } = props;
        setViewName(index);
        actions.switchView(index);
        console.log(props.appData);

    };

    useEffect(() => {
        const { actions } = props;
        const fetchData = async () => {
            await (actions.getData(props.contactId));
        };

        fetchData();
    }, []);

    let content = '';

    if (!appData || appData.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (appData && appData.requestSucessful) {
        content = (
            <div>
                <Paper>
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
                        data={appointments}>
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

CalendarView.propTypes = {
    actions: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);