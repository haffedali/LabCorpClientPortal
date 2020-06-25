import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Container, Grid } from '@material-ui/core';
import ScheduledAlert from './ScheduledAlert';



export default function DatePicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setTime] = React.useState(new Date());
    const handleTimeChange = (date) => {
        setTime(date);
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
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
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Start Time"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="End Time"
                        label="Time picker"
                        /* defaultValue={selectedDate} */
                        value={selectedTime}
                        onChange={handleTimeChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                <ScheduledAlert />
                </Grid>
            </MuiPickersUtilsProvider>
        </Container>
    );
}
