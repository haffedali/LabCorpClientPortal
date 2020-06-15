import React from 'react';
import {Container, Grid} from '@material-ui/core';

import MessagesTabs from '../../components/MessagesTabs';
import AppBar from '@material-ui/core/AppBar';


export default function Message() {
    
    return (
        <Grid container item xs={10}
            container
            direction="column"
            justify="space-between"
            alignItems="center">
            <MessagesTabs />
        </Grid>
    );
}