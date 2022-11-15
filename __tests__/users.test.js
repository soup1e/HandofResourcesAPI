const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /users should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: '1',
        email: 'kprestwich0@constantcontact.com',
        username: 'bchampionnet0',
        password: '2SMDddm9Tix',
        ip: '2.122.246.150',
      },
      {
        id: '2',
        email: 'gbrearton1@quantcast.com',
        username: 'aslimme1',
        password: 'KaLiJxf',
        ip: '23.4.210.165',
      },
      {
        id: '3',
        email: 'asenussi2@shop-pro.jp',
        username: 'ljirsa2',
        password: '62XUGTJEQ',
        ip: '157.157.112.236',
      },
      {
        id: '4',
        email: 'lgregor3@ebay.com',
        username: 'slodeke3',
        password: 'Q6vQdI1i',
        ip: '170.14.21.184',
      },
      {
        id: '5',
        email: 'rcathee4@thetimes.co.uk',
        username: 'jcowderay4',
        password: 'Jl7gjP',
        ip: '204.139.229.230',
      },
      {
        id: '6',
        email: 'lwreifordb@canalblog.com',
        username: 'fduckerb',
        password: 'Tns44ldaGy',
        ip: '21.232.135.220',
      },
    ]);
  });

  it('GET /users should return a single user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    const expected = {
      id: '1',
      email: 'kprestwich0@constantcontact.com',
      username: 'bchampionnet0',
      password: '2SMDddm9Tix',
      ip: '2.122.246.150',
    };
    expect(res.body).toEqual(expected);
  });

  it('POST /users should create new user in database', async () => {
    const bob = {
      email: 'bobthebuilder@wecanfixit.com',
      username: 'bmoney1017',
      password: 'builderman1!',
      ip: '1.107.200.302',
    };
    const res = await request(app).post('/users').send(bob);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...bob,
    });
  });

  it('PUT /users/:id should update users', async () => {
    const res = await request(app).put('/users/1').send({
      password: 'swagboss1@',
    });
    expect(res.status).toBe(200);
    expect(res.body.password).toBe('swagboss1@');
  });

  it('DELETE /users/:id should delete users', async () => {
    const expected = await request(app).get('/users/2');
    const res = await request(app).delete('/users/2');
    expect(res.body).toEqual(expected.body);
  });

  afterAll(() => {
    pool.end();
  });
});
