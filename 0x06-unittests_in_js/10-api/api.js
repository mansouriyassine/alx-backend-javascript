const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET / route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// GET /cart/:id route
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).end();
  }
});

// GET /available_payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// POST /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export app for testing
