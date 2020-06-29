import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as scheduleActions from "../../services/Schedule/actions"
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Container, Grid } from '@material-ui/core';
import ScheduledAlert from './ScheduledAlert';

function mapStateToProps(state) {
    return {
        date: state.scheduleReducer.date,
        startTime: state.scheduleReducer.startTime,
        endTime: state.scheduleReducer.endTime
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}
const DatePicker = (props) => {
    const { actions } = props;

    const [selectedDate, setSelectedDate] = React.useState({
        startDate: new Date(),
        startTime: new Date(),
        endTime: new Date()
    });
    
    const handleDateChange = (name, value) => {
        setSelectedDate({
            ...selectedDate,
            [name]: value
        });
    };

    return (
        <Container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        name="startDate"
                        value={selectedDate.startDate}
                        onChange={(date) => handleDateChange('startDate', date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Start Time Range"
                        name="startTime"
                        value={selectedDate.startTime}
                        onChange={(date) => handleDateChange('startTime', date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="End Time"
                        label="End Time Range"
                        name="endTime"
                        value={selectedDate.endTime}
                        onChange={(date) => handleDateChange('endTime', date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                <ScheduledAlert />
                </Grid>
            </MuiPickersUtilsProvider>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
