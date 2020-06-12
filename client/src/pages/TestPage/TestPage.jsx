import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import InnerTable from '../../components/InnerTable'

const TestPage = (props) => {
    return (
        <div>
            <InnerTable></InnerTable>
        </div>
    )
}

export default TestPage;