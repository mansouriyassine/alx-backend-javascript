import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1245;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
