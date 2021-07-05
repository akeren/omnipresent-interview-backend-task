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

test('Not able to create continents', async () => {
  await request(app)
    .post('/api/v1/continents')
    .send({
      continent: 'USA',
    })
    .expect(400);
});

test('should create a continent', async () => {
  await request(app)
    .post('/api/v1/continents')
    .send({
      name: 'Africa',
    })
    .expect(201);
});

test('Return the collection of continents', async () => {
  const response = await request(app).get('/api/v1/continents');

  expect(response.status).toBe(200);
});
