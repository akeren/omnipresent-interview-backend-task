import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.json({
    status: true,
    message: 'Hello from the server-side!',
    data: null,
  });
});

export default app;
