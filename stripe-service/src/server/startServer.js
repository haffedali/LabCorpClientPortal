import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7102);

const express = require('express');
const app = express();
// const { resolve } = require('path');

require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get("/", (req, res) => {
  res.send(`stripe-service listening on port ${PORT}`);
});

app.get('/config', async (req, res) => {
  // const price = await stripe.prices.retrieve(process.env.PRICE);

  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    // unitAmount: price.unit_amount,
    currency: 'usd',
  });
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId).then((res_two) => {
    return stripe.paymentIntents.retrieve(res_two.payment_intent).then((res_three) => {
      res_two.metadata.receipt_url = res_three.charges.data[0].receipt_url
      console.log(res_two)
      return res_two
    })
  })
  res.send(session);
});

app.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.DOMAIN;

  const { quantity, price, name, stripeid, productid, invoiceid, locale } = req.body;

  const sessionObj = {
    payment_method_types: process.env.PAYMENT_METHODS.split(', '),
    mode: 'payment',
    locale: locale,
    line_items: [],
    metadata: {
      invoiceid: invoiceid,
    },
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`,
  };

  // Connect payment to stripe customer if one exists
  if (stripeid) {
    sessionObj.customer = stripeid;
  }

  if (productid) {
    const product_price = await stripe.prices.create({
        unit_amount: price,
        currency: 'usd',
        product: productid,
      });

    sessionObj.line_items.push({
      price: product_price.id,
      quantity: quantity
    });
  } else {
    sessionObj.line_items.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: name,
        },
        unit_amount: price,
      },
      quantity: quantity
    })
  }
  
  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the Checkout page
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create(sessionObj);

    
  const accountSid = 'AC485144e8173eef38b20fa54d64aba535';
  const authToken = 'bb868abbf69ab4bf2ecfd5694a06a655';
  const client = require('twilio')(accountSid, authToken);
  try {
    client.messages.create({
        body: `${price} - ${name}`,
        from: '+12015845088',
        to: '+8182810894'
      })
      .then(message => console.log(message.sid));
  } catch (e) {
    console.log(e)
  }

  res.send({
    sessionId: session.id,
  });
});

// Webhook handler for asynchronous events.
app.post('/webhook', async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
});

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Stripe service listening on ${PORT}`)
});
