import React, { useEffect, useReducer } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@material-ui/core';
import { useStyles } from './Checkout.styles';

const fetchCheckoutSession = async ({ quantity, price, name, stripeid }) => {
  return fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity,
      price,
      name,
      stripeid
    }),
  }).then((res) => res.json());
};

const formatPrice = ({ amount, currency, quantity }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (quantity * amount).toFixed(2);
  return numberFormat.format(total);
};

function reducer(state, action) {
  switch (action.type) {
    case 'useEffectUpdate':
      return {
        ...state,
        ...action.payload,
        price: action.payload.unitAmount,
      };
    case 'setLoading':
      return { ...state, loading: action.payload.loading };
    case 'setError':
      return { ...state, error: action.payload.error };
    default:
      throw new Error();
  }
}

const Checkout = (props) => {
  const classes = useStyles(props);

  const [state, dispatch] = useReducer(reducer, {
    quantity: 1,
    price: props.price || null,
    loading: false,
    error: null,
    stripe: null,
  });

  useEffect(() => {
    async function fetchConfig() {
      // Fetch config from our backend.
      const { publicKey, currency } = await fetch(
        '/config'
      ).then((res) => res.json());
      
      const unitAmount = state.price;
      
      // Make sure to call `loadStripe` outside of a component’s render to avoid
      // recreating the `Stripe` object on every render.
      dispatch({
        type: 'useEffectUpdate',
        payload: { unitAmount, currency, stripe: await loadStripe(publicKey) },
      });
    }
    fetchConfig();
  }, []);

  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    dispatch({ type: 'setLoading', payload: { loading: true } });
    const { sessionId } = await fetchCheckoutSession({
      quantity: state.quantity,
      price: state.price,
      name: props.name,
      stripeid: props.stripeid,
    });
    // When the customer clicks on the button, redirect them to Checkout.
    const { error } = await state.stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      dispatch({ type: 'setError', payload: { error } });
      dispatch({ type: 'setLoading', payload: { loading: false } });
    }
  };

  return (
    <Button
      role="link"
      onClick={handleClick}
      disabled={!state.stripe || state.loading}
      variant='outlined' 
      className={classes.btnSecondary}
    >
    {state.loading || !state.price
      ? <p className={classes.btnPrimaryTxt}>Loading...</p>
      : <p className={classes.btnPrimaryTxt}>Pay {formatPrice({
        amount: state.price,
        currency: 'usd',
        quantity: state.quantity,
      })}</p>}
    </Button>
  );
};

export default Checkout;

{/* <div>{state.error?.message}</div> */}
