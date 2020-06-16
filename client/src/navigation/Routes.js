import React from 'react';
import { Switch, Route } from "react-router-dom";

import {
    Appointment,
    Billing,
    Home,
    Messages,
    Profile,
} from '../pages'

const Routes = () => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={Appointment} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/messages" component={Messages} /> 
        <Route exact path="/profile" component={Profile} />
    </Switch>

export default Routes;