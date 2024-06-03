import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    try {
      const fields = await readDatabase(req.query.database || 'database.csv');

      Object.entries(fields).sort((a, b) => a[0].localeCompare(b[0])).forEach(([field, students]) => {
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(req.query.database || 'database.csv');

      if (!fields[major]) {
        res.status(500).send(`No students found in ${major}`);
        return;
      }

      res.send(`List: ${fields[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
