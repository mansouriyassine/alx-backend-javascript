import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = 1245;

app.use(bodyParser.json());
app.use('/', router);

// Exporting the app for testing purposes
export default app;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
