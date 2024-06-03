import fs from 'fs';

export function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const fields = {};

            lines.slice(1).forEach(line => {
                const [firstname, lastname, age, field] = line.split(',');
                if (field && field.trim() !== '') {
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(firstname.trim());
                }
            });

            resolve(fields);
        });
    });
}
