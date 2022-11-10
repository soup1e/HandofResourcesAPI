const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const commandConvert = require('cross-env/src/command.js');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /apps should return a list of apps', async () => {
    const res = await request(app).get('/apps');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: '1',
        app: 'Alpha',
        version: '7.3',
        bundleid: 'gov.ftc.Y-Solowarm',
        filename: 'MattisEgestas.ppt',
      },
      {
        id: '2',
        app: 'Bytecard',
        version: '6.24',
        bundleid: 'com.blogtalkradio.Daltfresh',
        filename: 'Sapien.avi',
      },
      {
        id: '3',
        app: 'Tresom',
        version: '6.9.0',
        bundleid: 'org.mozilla.Regrant',
        filename: 'Ornare.avi',
      },
      {
        id: '4',
        app: 'Opela',
        version: '7.64',
        bundleid: 'com.netscape.Toughjoyfax',
        filename: 'Eget.jpeg',
      },
      {
        id: '5',
        app: 'Zaam-Dox',
        version: '8.88',
        bundleid: 'com.ihg.Zontrax',
        filename: 'BlanditUltricesEnim.mov',
      },
      {
        id: '6',
        app: 'Bytecard',
        version: '9.0',
        bundleid: 'com.netvibes.Holdlamis',
        filename: 'UrnaUtTellus.mp3',
      },
      {
        id: '7',
        app: 'Voyatouch',
        version: '9.4',
        bundleid: 'org.slashdot.Veribet',
        filename: 'Posuere.avi',
      },
      {
        id: '8',
        app: 'Veribet',
        version: '0.64',
        bundleid: 'com.github.Treeflex',
        filename: 'VivamusInFelis.mp3',
      },
      {
        id: '9',
        app: 'Temp',
        version: '0.8.0',
        bundleid: 'com.wikia.Sub-Ex',
        filename: 'Sociis.ppt',
      },
      {
        id: '10',
        app: 'Tresom',
        version: '2.9.3',
        bundleid: 'jp.ameblo.Cardify',
        filename: 'LacusCurabiturAt.xls',
      },
      {
        id: '11',
        app: 'Hatity',
        version: '3.6.7',
        bundleid: 'com.parallels.Sonair',
        filename: 'AcConsequat.gif',
      },
      {
        id: '12',
        app: 'Tin',
        version: '0.20',
        bundleid: 'pl.google.Zoolab',
        filename: 'VelitVivamus.mp3',
      },
    ]);
  });

  it('GET /id should return a single app', async () => {
    const res = await request(app).get('/apps/1');
    expect(res.status).toBe(200);
    const expected = {
      id: '1',
      app: 'Alpha',
      version: '7.3',
      bundleid: 'gov.ftc.Y-Solowarm',
      filename: 'MattisEgestas.ppt',
    };
    expect(res.body).toEqual(expected);
  });

  it('POST /apps should create new app in database', async () => {
    const altstore = {
      app: 'AltStore',
      version: '1.5.1',
      bundleid: 'com.H9XY65GVL2.com.sam.AltStore',
      filename: 'AltStore_1.5.1.ipa',
    };
    const res = await (await request(app).post('/apps')).send(altstore);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...altstore,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
