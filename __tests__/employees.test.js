const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /employees should return a list of employees', async () => {
    const res = await request(app).get('/employees');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        name: 'Adolphe Nason',
        first: 'Adolphe',
        gender: 'M',
        job: 'Financial Analyst',
      },
      {
        name: 'Starla Molineaux',
        first: 'Starla',
        gender: 'F',
        job: 'Associate Professor',
      },
      {
        name: 'Rowen Sedgemore',
        first: 'Rowen',
        gender: 'M',
        job: 'Junior Executive',
      },
      {
        name: 'Gilberto Starbeck',
        first: 'Gilberto',
        gender: 'M',
        job: 'Recruiting Manager',
      },
      {
        name: 'Barbabas Geri',
        first: 'Barbabas',
        gender: 'M',
        job: 'Accountant IV',
      },
      {
        name: 'Frank Lifton',
        first: 'Frank',
        gender: 'M',
        job: 'General Manager',
      },
      {
        name: 'Jocko Reynish',
        first: 'Jocko',
        gender: 'M',
        job: 'Environmental Specialist',
      },
      {
        name: 'Mei Leeburne',
        first: 'Mei',
        gender: 'F',
        job: 'VP Quality Control',
      },
      {
        name: 'Jeremie Bandy',
        first: 'Jeremie',
        gender: 'M',
        job: 'Editor',
      },
      {
        name: 'Kristofer Meatcher',
        first: 'Kristofer',
        gender: 'M',
        job: 'Legal Assistant',
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
