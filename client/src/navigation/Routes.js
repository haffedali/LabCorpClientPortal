import React from 'react';
import { Switch, Route } from "react-router-dom";

import {
    Appointment,
    Billing,
    Home,
} from '../pages'

import {
    Results,
    Messages,
    Profile,
} from "../components"

const Routes = () => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={Appointment} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/messages" component={Messages} /> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Results} />
    </Switch>

export default Routes;