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
import { AlertTitle, Alert } from '@material-ui/lab';
import { useStyles } from "./Appointment.styles"

function mapStateToProps(state) {
    return {
        request: state.scheduleReducer.request
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
            console.log(selectedDate)
            actions.getEnd(value)
        }
    };
    let content = '';

    if (!props.request) {
        content = (
            <Container className={classes.schedule} justify='center'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Paper
                        className={classes.date}
                        container justify="space-around"
                        direction="column"
                        justify="center"
                        spacing={3}
                    >
                        <Grid>
                            {/* <Paper className={classes.paper} elevation={5}> */}
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
                            {/* </Paper> */}
                        </Grid>

                        <Grid>
                            {/* <Paper className={classes.paper} elevation={5}> */}
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
                            {/* </Paper> */}
                        </Grid>
                        <Grid>
                            {/* <Paper className={classes.paper} elevation={5}> */}
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
                            {/* </Paper> */}
                        </Grid>
                        <Grid>
                            {/* <Paper className={classes.paper} elevation={5}> */}
                            <TextField
                                id="standard-basic"
                                label="Subject"
                                name="subject"
                                value={selectedDate.subject}
                                onChange={(e) => handleTextFieldChange(e)}

                            />
                            {/* </Paper> */}
                        </Grid>
                        <Grid>
                            {/* <Paper className={classes.paper} elevation={5}> */}
                            <div>
                                <ScheduledAlert />
                            </div>
                            {/* </Paper> */}
                        </Grid>
                    </Paper>
                </MuiPickersUtilsProvider>
            </Container>
        );
    }

    if (props.request && props.request === 'Pending') {
        content = (
            <Alert severity="info">Pending Request</Alert>
        );
    }

    /*     if (props.request && props.request === 'Success') {
            content = (
                <Container>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
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
                                helperText={dateError(selectedDate)}
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
                                error={startTimeError(selectedDate)}
                                helperText={startTimeError(selectedDate)}
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
                                error={endTimeError(selectedDate)}
                                helperText={endTimeError(selectedDate)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                            <TextField id="standard-basic" label="Standard" />
                            <ScheduledAlert />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Alert severity="success">You've Successfully Submitted A Request</Alert>
                </Container>
            )
        } */
    return (
        <div>
            {content}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
