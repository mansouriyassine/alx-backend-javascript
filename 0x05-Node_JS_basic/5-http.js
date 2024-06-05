const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
