/* React */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core'
/* LabCorp */
import { useStyles } from './Billing.styles';
import { BillingOverview, Checkout, InnerSideBar } from '../../components';
import { grabInvoices } from '../../services/billing/actions';

const Billing = (props) => {
    const dispatch = useDispatch();
    const styleProps = {...props, drawerWidth: 240};
    const classes = useStyles(styleProps);
    
    const [billingPage, setBillingPage] = useState(0);
    const invoiceData = useSelector(state => state.invoiceReducer.invoices);
    const customerid = useSelector(state => state.loginReducer.userInfo.contactId);

    const pages = {
        0: <BillingOverview />,
        1: <h2>Invoices</h2>,
        2: <h1>Payments</h1>,
        3: <h1>Help</h1>,
        4: <h1>Terms & Conditions<br /><Button onClick={() => setBillingPage(5)}>Hey 4</Button></h1>,
        5: <Checkout />
    }

    useEffect(() => {
        dispatch(grabInvoices(customerid));
    }, []);

    return (
        <div className={classes.root}>
            {!invoiceData ? <CircularProgress /> : <>
                <InnerSideBar 
                    changeTab={(page) => setBillingPage(page)} 
                    drawerWidth={styleProps.drawerWidth} 
                    innerPage={billingPage}
                />
                <div className={classes.billingContent}>
                    {pages[billingPage]}
                </div>
            </>}
        </div>
    );
}

export default Billing;




