import { createServer } from 'http';
import dotenv from 'dotenv-safe';
import app from '@src/app';

dotenv.config();

// eslint-disable-next-line import/first
import '@src/database/mongoose';

const port = process.env.PORT || 3000;

const server = createServer(app);

server.listen(port, (): void => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
