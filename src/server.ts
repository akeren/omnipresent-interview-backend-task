import { createServer } from 'http';
import dotenv from 'dotenv-safe';
import app from '@src/app';
import log from '@src/log/logger';

dotenv.config();

// eslint-disable-next-line import/first
import '@src/database/mongoose';

const port = process.env.PORT;
const host = process.env.HOST;

const server = createServer(app);

server.listen(port, (): void => {
  log.info(`Server running at ${host}:${port}`);
});
