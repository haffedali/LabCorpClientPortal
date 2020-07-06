import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import  Header  from '../../components/Appointment/Header';

export default function Appointment() {
    return (
            <Grid container item xs={12}
                direction="column"
                justify="space-between"
                alignItems="center">
                <Header />
            </Grid>
    );
}
