import morgan from 'morgan';
import express from 'express';
import continentRouter from '@src/routes/contientRoutes';
import countryRouter from '@src/routes/countryRoutes';
import employeeRouter from '@src/routes/employeeRoutes';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/continents', continentRouter);
app.use('/api/v1/countries', countryRouter);
app.use('/api/v1/employees', employeeRouter);

export default app;
