/* React */
import React from 'react';
/* LabCorp */
import { useStyles } from './Billing.styles';
import { InnerSideBar } from '../../components'

const Billing = (props) => {
    const classes = useStyles(props);
    return (<InnerSideBar />)
}

export default Billing;