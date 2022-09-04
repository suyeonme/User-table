import { Pool } from 'mysql2';
import request from 'supertest';
import { app } from '../app';

import { Status } from '@/types/common';
import { initConnectionPool } from '@/loaders/mysql';

/**
 * @TODO
 * Test for FAIL case
 * Clear test data
 * Jest has detected the following 2 open handles potentially keeping Jest from exiting
 */

describe('Test for CRUD of User APIs', () => {
  let pool: Pool | undefined;

  beforeAll(async () => {
    pool = await initConnectionPool();
  });

  test('[GET] /user/list', async () => {
    await request(app)
      .get('/user/list')
      .expect(200)
      .then(response => {
        const { status, data } = response.body;

        expect(Array.isArray(data)).toBeTruthy();
        expect(status).toBe(Status.OK);

        expect(!!data.length && typeof data[0].id).toBe('number');
        expect(!!data.length && typeof data[0].name).toBe('string');
        expect(!!data.length && typeof data[0].company).toBe('string');
        expect(!!data.length && typeof data[0].position).toBe('string');
      });
  });

  test('[POST] /user/add', async () => {
    const user = {
      name: 'Test User Name',
      company: 'Test Company',
      position: 'user',
    };

    await request(app)
      .post('/user/add')
      .expect('Content-Type', /json/)
      .send(user)
      .expect(201)
      .then(response => {
        const { status, data } = response.body;

        expect(status).toBe(Status.OK);
        expect(Array.isArray(data)).toBeTruthy();

        expect(!!data.length && data[0].name).toBe('Test User Name');
        expect(!!data.length && data[0].company).toBe('Test Company');
        expect(!!data.length && data[0].position).toBe('user');
      });
  });

  test('[POST] /user/update', async () => {
    const user = {
      id: 22,
      name: 'Test Updated User Name',
      company: 'Test Updated Company',
      position: 'user',
    };

    await request(app)
      .post('/user/update')
      .expect('Content-Type', /json/)
      .send(user)
      .expect(200)
      .then(response => {
        const { status, data } = response.body;

        expect(status).toBe(Status.OK);
        expect(Array.isArray(data)).toBeTruthy();

        expect(!!data.length && data[0].name).toBe('Test Updated User Name');
        expect(!!data.length && data[0].company).toBe('Test Updated Company');
        expect(!!data.length && data[0].position).toBe('user');
      });
  });

  test('[POST] /user/delete', async () => {
    await request(app)
      .post('/user/delete')
      .expect('Content-Type', /json/)
      .send({ id: 21 })
      .expect(200)
      .then(response => {
        const { status, data } = response.body;

        expect(status).toBe(Status.OK);
        expect(Array.isArray(data)).toBeTruthy();
      });
  });

  // afterAll(async () => {
  //   await (pool as Pool)?.close();
  // });
});
