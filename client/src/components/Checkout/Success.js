import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateInvoice, _updateInvoiceStarted } from '../../services/billing/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './Checkout.styles';

const Success = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');
  const [receipt_url, setUrl] = useState('#')

  const updating = useSelector(state => state.invoiceReducer.updating)

  useEffect(() => {
    dispatch(_updateInvoiceStarted());

    async function fetchSession() {
      setSession(
        await fetch('/checkout-session?sessionId=' + sessionId).then((res) => {
          return res.json()
        }).then((res) => {
          dispatch(updateInvoice(res.metadata));
          setUrl(res.metadata.receipt_url)
          return res
        })
      );
    }
    fetchSession();
  }, [sessionId]);

  return (
    <div>
      {updating ? 
        (<div className={classes.spinnerContainer}>
          <CircularProgress className={classes.progressSpinner} />
        </div>) :
        <div>
          <h2>Your payment was successful!</h2>
          <div>
            <a className={classes.successReceipt} href={receipt_url}>
              <h1>View your receipt</h1>
            </a>
          </div>
          {/* <Link to='/billing'>Back to Billing</Link> */}
        </div>
      }
      
    </div>
  );
};

export default Success;
