/* React */
import React, { useState, useEffect } from 'react';
/* LabCorp */
import { useStyles } from './Billing.styles';
import { CustomPaper, InnerSideBar } from '../../components';

const Billing = (props) => {
    const styleProps = {...props, drawerWidth: 240}
    const classes = useStyles(styleProps);
    const [billingPage, setBillingPage] = useState(0);

    useEffect(() => {
        console.log(`Page: ${billingPage}`);
    });
    
    return (
        <div className={classes.root}>
            <InnerSideBar 
                changeTab={(page) => setBillingPage(page)} 
                drawerWidth={styleProps.drawerWidth} 
                innerPage={billingPage}
            />
            <div className={classes.billingContent}>
                <CustomPaper innerPage={billingPage} />
            </div>
        </div>
    );
}

export default Billing;




