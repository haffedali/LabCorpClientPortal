import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');

  useEffect(() => {
    async function fetchSession() {
      setSession(
        await fetch('/checkout-session?sessionId=' + sessionId).then((res) =>
          res.json()
        )
      );
    }
    fetchSession();
  }, [sessionId]);

  return (
    <div>
      <h1>Your payment succeeded</h1>
      <h4>View CheckoutSession response:</h4>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Link to='/billing'>Back to Billing</Link>
    </div>
  );
};

export default Success;
