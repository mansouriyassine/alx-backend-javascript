const express = require('express');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const databasePath = req.query.database || 'database.csv';

  try {
    await countStudents(databasePath);
    res.end();
  } catch (error) {
    res.write(error.message);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
