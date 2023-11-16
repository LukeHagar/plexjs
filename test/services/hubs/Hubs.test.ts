import nock from 'nock';

import { PlexSDK } from '../../../src';

import { HubsService } from '../../../src/services/hubs/Hubs';

describe('test HubsService object', () => {
  it('should be an object', () => {
    expect(typeof HubsService).toBe('function');
  });
});

describe('test Hubs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getGlobalHubs', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs?count=2&onlyTransient=7')
        .reply(200, { data: {} });
      return sdk.hubs
        .getGlobalHubs({ count: 2, onlyTransient: 7 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibraryHubs', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/sections/6?count=6&onlyTransient=4')
        .reply(200, { data: {} });
      return sdk.hubs
        .getLibraryHubs(6, { count: 6, onlyTransient: 4 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/sections/9?count=1&onlyTransient=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.hubs.getLibraryHubs()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/sections/8?count=8&onlyTransient=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.hubs.getLibraryHubs(8, { count: 8, onlyTransient: 7 }),
      ).rejects.toThrow();
    });
  });
});
