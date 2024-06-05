const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Function to read and parse the CSV file
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = [];

      lines.forEach((line, index) => {
        if (index === 0) return; // Skip the header line
        if (line.trim() === '') return; // Skip empty lines

        const [id, firstName, lastName, field] = line.split(',');
        students.push({ id, firstName, lastName, field });
      });

      const csStudents = students.filter(student => student.field === 'CS');
      const sweStudents = students.filter(student => student.field === 'SWE');

      const responseText = `This is the list of our students
Number of students: ${students.length}
Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.firstName).join(', ')}
Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.firstName).join(', ')}`;

      resolve(responseText);
    });
  });
};

// Create the server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
