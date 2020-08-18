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
import { Container, Grid, Paper } from '@material-ui/core';
import ScheduledAlert from './ScheduledAlert';
import { dateError, startTimeError, endTimeError } from '../../utils/dateValidation'
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import { useStyles } from "./Appointment.styles"


function mapStateToProps(state) {
    return {
        request: state.scheduleReducer.request,
        alert: state.scheduleReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

const DatePicker = (props) => {
    const classes = useStyles(props);
    const { actions } = props;
    let date = new Date();

    const [selectedDate, setSelectedDate] = React.useState({
        startDate: new Date(),
        startTime: new Date(),
        endTime: new Date(date.setHours(date.getHours() + 1)),
        subject: ''
    });

    const handleTextFieldChange = (e) => {
        const { name, value } = e.target;
        setSelectedDate({ ...selectedDate, [name]: value })
        actions.getSubject(value)

    }

    const handleDateChange = (name, value) => {
        setSelectedDate({
            ...selectedDate,
            [name]: value
        });
        if (name === 'startDate') {
            actions.getDate(value)
        }
        if (name === 'startTime') {
            actions.getStart(value)
        }
        if (name === 'endTime') {
            actions.getEnd(value)
        }
    };

    let alert = '';
    const message = props.request
    switch (message) {
        case null:
            alert = (
                <h2>Request Date and Time For Testing</h2>
            );
            break;
        case 'Pending':
            alert = (
                <Alert severity="info">Pending Request</Alert>
            );
            break;
        case 'Success':
            alert = (
                <Alert severity="success">You've Successfully Submitted A Request</Alert>
            );
            break;
        case 'Done':
            alert = ''
            break;
        case props.alert.alertOpen === false:
            alert = (
                <h2>Request Date and Time For Testing</h2>
            );
            break;
        case 'Failed':
            alert = (
                <Alert severity="error">Failed to make request please Email labtest@labcorp.com for test request</Alert>
            );
            break;


    }
/*     if (!props.request) {
        alert = (
            <h2>Request Date and Time For Testing</h2>
        )
    }

    if (props.request && props.request === 'Pending') {
        alert = (
            <Alert severity="info">Pending Request</Alert>
        );
    }

    if (props.request && props.request === 'Success') {
        alert = (
            <Alert severity="success">You've Successfully Submitted A Request</Alert>
        )
    }

    if (props.alert.alertOpen === false) {
        alert = (
            <h2>Request Date and Time For Testing</h2>
        )
    }

    if (props.request && props.request === 'Failed') {
        alert = (
            <Alert severity="error">Failed to make request please Email labtest@labcorp.com for test request</Alert>
        )
    } */
    return (
        <Container className={classes.schedule} justify='center'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Paper
                    className={classes.date}
                    container justify="space-around"
                    direction="column"
                    justify="center"
                    spacing={3}
                >
                    <div>
                        {alert}
                    </div>
                    <Grid>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date"
                            name="startDate"
                            value={selectedDate.startDate}
                            onChange={(date) => handleDateChange('startDate', date)}
                            error={dateError(selectedDate)}
                            helperText={dateError(selectedDate) ? dateError(selectedDate) : ' '}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Start Time Range"
                            name="startTime"
                            value={selectedDate.startTime}
                            onChange={(date) => handleDateChange('startTime', date)}
                            error={startTimeError(selectedDate)}
                            helperText={startTimeError(selectedDate)}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                    <Grid>
                        <KeyboardTimePicker
                            margin="normal"
                            id="End Time"
                            label="End Time Range"
                            name="endTime"
                            value={selectedDate.endTime}
                            onChange={(date) => handleDateChange('endTime', date)}
                            error={endTimeError(selectedDate)}
                            helperText={endTimeError(selectedDate)}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            id="standard-basic"
                            label="Subject"
                            name="subject"
                            value={selectedDate.subject}
                            onChange={(e) => handleTextFieldChange(e)}

                        />
                    </Grid>
                    <Grid>
                        <div className={classes.date}>
                            <ScheduledAlert />
                        </div>
                    </Grid>
                </Paper>
            </MuiPickersUtilsProvider>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
