import React from 'react';
import { Link } from 'react-router-dom';

const Canceled = () => {
  return (
  <div>
    <h1>Your payment was canceled</h1>
    <Link to="/billing">Back to Billing</Link>
  </div>
  );
};

export default Canceled;
