import morgan from 'morgan';
import express from 'express';
import employeeRouter from '@src/routes/employeeRoutes';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/employees', employeeRouter);

export default app;
