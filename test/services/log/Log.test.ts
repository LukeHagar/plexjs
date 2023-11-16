import nock from 'nock';

import { PlexSDK } from '../../../src';

import { LogService } from '../../../src/services/log/Log';

describe('test LogService object', () => {
  it('should be an object', () => {
    expect(typeof LogService).toBe('function');
  });
});

describe('test Log', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test logLine', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/log?level=6&message=architecto&source=molestias')
        .reply(200, { data: {} });
      return sdk.log
        .logLine(6, 'architecto', 'molestias')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/log?level=8&message=at&source=ratione')
        .reply(200, { data: {} });
      return expect(async () => await sdk.log.logLine()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/log?level=3&message=commodi&source=neque')
        .reply(404, { data: {} });
      return expect(async () => await sdk.log.logLine(3, 'commodi', 'neque')).rejects.toThrow();
    });
  });

  describe('test logMultiLine', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').post('/log').reply(200, { data: {} });
      return sdk.log.logMultiLine().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test enablePaperTrail', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/log/networked').reply(200, { data: {} });
      return sdk.log.enablePaperTrail().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
