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

test('Not able to create countries', async () => {
  await request(app)
    .post('/api/v1/countries')
    .send({
      timezones: ['Africa/Lagos'],
    })
    .expect(400);
});

test('should create a country', async () => {
  await request(app)
    .post('/api/v1/countries')
    .send({
      name: 'Nigeria',
      currency: 'Naira',
      languages: [
        {
          type: 'National',
          name: 'English',
        },
      ],
      timezones: ['Africa/Benue'],
      continent: '60e22ab5867350469671cbba',
    })
    .expect(201);
});

test('Return the collection of countries', async () => {
  const response = await request(app).get('/api/v1/countries');

  expect(response.status).toBe(200);
});
