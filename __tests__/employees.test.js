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
        id: '1',
        name: 'Adolphe Nason',
        first: 'Adolphe',
        gender: 'M',
        job: 'Financial Analyst',
      },
      {
        id: '2',
        name: 'Starla Molineaux',
        first: 'Starla',
        gender: 'F',
        job: 'Associate Professor',
      },
      {
        id: '3',
        name: 'Rowen Sedgemore',
        first: 'Rowen',
        gender: 'M',
        job: 'Junior Executive',
      },
      {
        id: '4',
        name: 'Gilberto Starbeck',
        first: 'Gilberto',
        gender: 'M',
        job: 'Recruiting Manager',
      },
      {
        id: '5',
        name: 'Barbabas Geri',
        first: 'Barbabas',
        gender: 'M',
        job: 'Accountant IV',
      },
      {
        id: '6',
        name: 'Frank Lifton',
        first: 'Frank',
        gender: 'M',
        job: 'General Manager',
      },
      {
        id: '7',
        name: 'Jocko Reynish',
        first: 'Jocko',
        gender: 'M',
        job: 'Environmental Specialist',
      },
      {
        id: '8',
        name: 'Mei Leeburne',
        first: 'Mei',
        gender: 'F',
        job: 'VP Quality Control',
      },
      {
        id: '9',
        name: 'Jeremie Bandy',
        first: 'Jeremie',
        gender: 'M',
        job: 'Editor',
      },
      {
        id: '10',
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
