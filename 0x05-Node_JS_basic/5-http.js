const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read and parse the CSV file
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
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

      resolve(students);
    });
  });
};

// Create the server
const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = path.resolve(process.argv[2]);

    readDatabase(databasePath)
      .then((students) => {
        const csStudents = students.filter(student => student.field === 'CS');
        const sweStudents = students.filter(student => student.field === 'SWE');

        const responseText = `This is the list of our students
Number of students: ${students.length}
Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.firstName).join(', ')}
Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.firstName).join(', ')}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        console.error('Error reading database file:', err);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
