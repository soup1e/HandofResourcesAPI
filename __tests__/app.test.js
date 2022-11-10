const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /apps should return a list of apps', async () => {
    const res = await request(app).get('/apps');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      app: expect.any(String),
      version: expect.any(String),
      bundleid: expect.any(String),
      filename: expect.any(String),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
