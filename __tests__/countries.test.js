const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /countries should return a list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: '1',
        country: 'China',
        currency: 'Yuan Renminbi',
        countrycode: 'CN',
        currencycode: 'CNY',
        timezone: 'Asia/Chongqing',
      },
      {
        id: '2',
        country: 'Marshall Islands',
        currency: 'Dollar',
        countrycode: 'MH',
        currencycode: 'USD',
        timezone: 'Pacific/Majuro',
      },
      {
        id: '3',
        country: 'Brazil',
        currency: 'Real',
        countrycode: 'BR',
        currencycode: 'BRL',
        timezone: 'America/Sao_Paulo',
      },
      {
        id: '4',
        country: 'United States',
        currency: 'Dollar',
        countrycode: 'US',
        currencycode: 'USD',
        timezone: 'America/Los_Angeles',
      },
      {
        id: '5',
        country: 'China',
        currency: 'Yuan Renminbi',
        countrycode: 'CN',
        currencycode: 'CNY',
        timezone: 'Asia/Shanghai',
      },
      {
        id: '6',
        country: 'United States',
        currency: 'Dollar',
        countrycode: 'US',
        currencycode: 'USD',
        timezone: 'America/Chicago',
      },
      {
        id: '7',
        country: 'France',
        currency: 'Euro',
        countrycode: 'FR',
        currencycode: 'EUR',
        timezone: 'Europe/Paris',
      },
      {
        id: '8',
        country: 'Indonesia',
        currency: 'Rupiah',
        countrycode: 'ID',
        currencycode: 'IDR',
        timezone: 'Asia/Jakarta',
      },
      {
        id: '9',
        country: 'Hungary',
        currency: 'Forint',
        countrycode: 'HU',
        currencycode: 'HUF',
        timezone: 'Europe/Budapest',
      },
      {
        id: '10',
        country: 'Argentina',
        currency: 'Peso',
        countrycode: 'AR',
        currencycode: 'ARS',
        timezone: 'America/Argentina/Salta',
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
