/* React */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
/* LabCorp */
import { useStyles } from './Billing.styles';
import { CustomPaper, InnerSideBar } from '../../components';
import { grabInvoices } from '../../services/billing/actions';



const Billing = (props) => {
    const dispatch = useDispatch();
    const styleProps = {...props, drawerWidth: 240};
    const classes = useStyles(styleProps);
    
    const [billingPage, setBillingPage] = useState(0);
    const invoiceData = useSelector(state => state.invoiceReducer.invoices);
    const customerid = useSelector(state => state.loginReducer.userInfo.contactId);

    const pages = {
        0: <CustomPaper innerPage={billingPage} />,
        1: <h1>Hey 1</h1>,
        2: <h1>Hey 2</h1>,
        3: <h1>Hey 3</h1>,
        4: <h1>Hey 4</h1>,
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




