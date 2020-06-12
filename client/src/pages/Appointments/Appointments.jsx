import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppointmentHeader from '../../components/AppointmentHeader';
import DatePicker from '../../components/Calendar';
import { Router } from "react-router";

export default function Appointment() {

    return (

            <Grid container item xs={12}
                container
                direction="column"
                justify="space-between"
                alignItems="center">
                <AppointmentHeader />
            </Grid>
        
    );
}
