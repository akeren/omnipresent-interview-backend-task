import request from 'supertest';
import * as dbHandler from '@src/database/mongooseTest';
import app from '@src/app';

beforeAll(async () => {
  await dbHandler.connect();
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

test('Not able to create employee', async () => {
  await request(app)
    .post('/api/v1/employees')
    .send({
      firstName: 'Diana',
    })
    .expect(400);
});

test('should create an employee', async () => {
  await request(app)
    .post('/api/v1/employees')
    .send({
      firstName: 'Roy',
      lastName: 'Testerton',
      dateOfBirth: '19/02/1990',
      jobTitle: 'Software developer',
      company: 'Test co',
      country: '5c8a1dfa2f8fb814b56fa181',
    })
    .expect(201);
});

test('Return the collection of employee', async () => {
  const response = await request(app).get('/api/v1/employees');

  expect(response.status).toBe(200);
});
