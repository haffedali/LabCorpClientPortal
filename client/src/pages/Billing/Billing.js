/* React */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
/* LabCorp */
import { useStyles } from './Billing.styles';
import { 
    BillingOverview, 
    Checkout, 
    InnerSideBar,
    InvoiceTabContent,
    PaymentTabContent,
    TermsAndConditions,
} from '../../components';
import { grabInvoices } from '../../services/billing/actions';

const Billing = (props) => {
    const dispatch = useDispatch();
    const styleProps = {...props, drawerWidth: 240};
    const classes = useStyles(styleProps);
    
    const [billingPage, setBillingPage] = useState(0);
    const invoiceData = useSelector(state => state.invoiceReducer.invoices);
    const customerid = useSelector(state => state.session.user.contactId);

    const pages = {
        0: <BillingOverview />,
        1: <InvoiceTabContent />,
        2: <PaymentTabContent changeTab={(page) => setBillingPage(page)} />,
        3: <h2>Help</h2>,
        4: <TermsAndConditions />,
        5: <Checkout price={50000} />
    }

    useEffect(() => {
        dispatch(grabInvoices(customerid));
    }, []);

    return (
        <div className={classes.root}>
            {!invoiceData ? 
                <div className={classes.spinnerContainer}>
                    <CircularProgress className={classes.spinner}/> 
                </div> : 
                <React.Fragment>
                    <InnerSideBar 
                        changeTab={(page) => setBillingPage(page)} 
                        drawerWidth={styleProps.drawerWidth} 
                        innerPage={billingPage}
                    />
                    <div className={classes.billingContent}>
                        {pages[billingPage]}
                    </div>
                </React.Fragment>}
        </div>
    );
}

export default Billing;




