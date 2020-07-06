import React, { useEffect, useCallback, useState, useRef, setState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes, { array } from 'prop-types';
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
import * as scheduleActions from "../../services/Schedule/actions"
import { useStyles } from "./Appointment.styles"

function mapStateToProps(state) {
    return {
        currentView: state.scheduleReducer.currentView,
        contactId: state.session.user.contactId,
        appData: state.scheduleReducer.appointmentData,
    };
}

function mapDispatchToProps(dispatch) {
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


const makeData = appointment => ({
    ...appointment,
    title: appointment.subject,
    startDate: appointment.scheduledstart,
    endDate: appointment.scheduledend,
});

const CalendarView = (props) => {
    const [viewName, setViewName] = React.useState("Month");
    const classes = useStyles(props);
    const { actions } = props;
    /*     const data = {
            title: props.appointmentData.subject,
            startDate: new Date(2020, 5, 23, 9, 30),
            endDate: new Date(2020, 5, 23, 11, 30)
        } */

    const viewChange = (e, index) => {
        setViewName(index);
        actions.switchView(index);
    };

    const fetchData = async () => {
        await (actions.getData(props.contactId));
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetchData()
            setData(props.appData)
        }, 600)
    }, []);

    /* const makeData = {
        title: props.appData.subject,
        startDate: new Date(2020, 5, 19, 9, 30),
        endDate: new Date(2020, 5, 19, 11, 30),
    }; */


    let content = '';

    if (!props.appData || props.appData.requestPending) {
        content = (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        )
    }

    if (props.appData && props.appData.requestSucessful) {
        const apps = props.appData.appointments;
        console.log(apps.appointments);

    
/*     const formattedData = () => {
       for (let i=0; i<apps.lengh; i++) {
           const data = apps[i]
           data ? data.map(makeData) : [];
        }
    } */
    const data = props.appData.appointment;
    const formattedData = data
      ? data.map(makeData) : [];
    console.log(formattedData);

        /*         const dataApp = {
                    title: props.data.subject,
                    startDate: new Date(2020, 5, 19, 9, 30),
                    endDate: new Date(2020, 5, 19, 11, 30),
                } */
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

CalendarView.propTypes = {
    actions: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);