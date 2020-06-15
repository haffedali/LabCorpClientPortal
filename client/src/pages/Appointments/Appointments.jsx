import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppointmentHeader from '../../components/AppointmentHeader';

export default function Appointment() {

    return (

            <Grid item xs={12}
                container
                direction="column"
                justify="space-between"
                alignItems="center">
                <AppointmentHeader />
            </Grid>
        
    );
}
