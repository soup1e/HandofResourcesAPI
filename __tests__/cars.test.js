const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /cars should return a list of cars', async () => {
    const res = await request(app).get('/cars');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: '1',
        brand: 'Toyota',
        name: 'GR86',
        year: 2022,
      },
      {
        id: '2',
        brand: 'Nissan',
        name: 'Z',
        year: 2023,
      },
      {
        id: '3',
        brand: 'Mercedes-Benz',
        name: 'C-Class',
        year: 2008,
      },
      {
        id: '4',
        brand: 'Volvo',
        name: 'S40',
        year: 2003,
      },
      {
        id: '5',
        brand: 'Maserati',
        name: 'Quattroporte',
        year: 1984,
      },
      {
        id: '6',
        brand: 'Oldsmobile',
        name: 'Silhouette',
        year: 2001,
      },
      {
        id: '7',
        brand: 'Ford',
        name: 'E150',
        year: 2009,
      },
      {
        id: '8',
        brand: 'GMC',
        name: 'Yukon XL 2500',
        year: 2010,
      },
      {
        id: '9',
        brand: 'Mitsubishi',
        name: 'Lancer Evolution',
        year: 2005,
      },
      {
        id: '10',
        brand: 'Hyundai',
        name: 'Accent',
        year: 1996,
      },
      {
        id: '11',
        brand: 'Suzuki',
        name: 'Swift',
        year: 1988,
      },
      {
        id: '12',
        brand: 'Acura',
        name: 'TL',
        year: 2004,
      },
    ]);
  });

  it('GET /id should return a single car', async () => {
    const res = await request(app).get('/cars/1');
    expect(res.status).toBe(200);
    const expected = {
      id: '1',
      brand: 'Toyota',
      name: 'GR86',
      year: 2022,
    };
    expect(res.body).toEqual(expected);
  });

  it('POST /cars should create new car in database', async () => {
    const supra = {
      brand: 'Toyota',
      name: 'GR Supra',
      year: 2023,
    };
    const res = await request(app).post('/cars').send(supra);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...supra,
    });
  });

  it('PUT /cars/:id should update car', async () => {
    const res = await request(app).put('/cars/1').send({
      year: 2023,
    });
    expect(res.status).toBe(200);
    expect(res.body.year).toBe('2023');
  });
  afterAll(() => {
    pool.end();
  });
});
