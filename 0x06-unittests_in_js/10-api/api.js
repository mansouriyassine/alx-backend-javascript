const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

app.use(bodyParser.json());

// GET /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
