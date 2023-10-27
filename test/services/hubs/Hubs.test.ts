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
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs?count=5&onlyTransient=3')
        .reply(200, { data: {} });
      return sdk.hubs
        .getGlobalHubs({ count: 5, onlyTransient: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibraryHubs', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/sections/2?count=9&onlyTransient=2')
        .reply(200, { data: {} });
      return sdk.hubs
        .getLibraryHubs(2, { count: 9, onlyTransient: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/sections/6?count=7&onlyTransient=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.hubs.getLibraryHubs()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/sections/2?count=6&onlyTransient=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.hubs.getLibraryHubs(2, { count: 6, onlyTransient: 8 }),
      ).rejects.toThrow();
    });
  });
});
