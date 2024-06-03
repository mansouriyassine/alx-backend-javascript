import { readDatabase } from '../utils';

export class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const fields = await readDatabase('./database.csv');
            let response = 'This is the list of our students\n';

            Object.keys(fields).sort().forEach(field => {
                const students = fields[field];
                response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            });

            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const fields = await readDatabase('./database.csv');
            const students = fields[major] || [];
            const response = `List: ${students.join(', ')}`;
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}
