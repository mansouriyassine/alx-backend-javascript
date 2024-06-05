const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  // Validate that id is a number
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Cart ID must be a number');
  }

  res.status(200).send(`Payment methods for cart ${id}`);
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
