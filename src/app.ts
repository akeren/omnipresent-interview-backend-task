import morgan from 'morgan';
import express, { Request, Response } from 'express';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req: Request, res: Response): void => {
  res.json({
    status: true,
    message: 'Hello from the server-side!',
    data: null,
  });
});

export default app;
