import nock from 'nock';

import { PlexSDK } from '../../../src';

import { ServerService } from '../../../src/services/server/Server';

describe('test ServerService object', () => {
  it('should be an object', () => {
    expect(typeof ServerService).toBe('function');
  });
});

describe('test Server', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getServerCapabilities', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/').reply(200, { data: {} });
      return sdk.server
        .getServerCapabilities()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getServerPreferences', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/:/prefs').reply(200, { data: {} });
      return sdk.server
        .getServerPreferences()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getAvailableClients', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/clients').reply(200, { data: {} });
      return sdk.server
        .getAvailableClients()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getDevices', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/devices').reply(200, { data: {} });
      return sdk.server.getDevices().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getServerIdentity', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/identity').reply(200, { data: {} });
      return sdk.server.getServerIdentity().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getMyPlexAccount', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/myplex/account')
        .reply(200, { data: {} });
      return sdk.server.getMyPlexAccount().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getResizedPhoto', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/photo/:/transcode?width=9234993610&height=6&opacity=1&blur=5&minSize=6&upscale=4&url=ab',
        )
        .reply(200, { data: {} });
      return sdk.server
        .getResizedPhoto(9234993610, 6, 1, 5, 6, 4, 'ab')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/photo/:/transcode?width=8995296218&height=6&opacity=5&blur=4&minSize=4&upscale=3&url=perferendis',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.server.getResizedPhoto()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/photo/:/transcode?width=7861841002&height=3&opacity=9&blur=3&minSize=9&upscale=9&url=esse',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.server.getResizedPhoto(7861841002, 3, 9, 3, 9, 9, 'esse'),
      ).rejects.toThrow();
    });
  });

  describe('test getServerList', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/servers').reply(200, { data: {} });
      return sdk.server.getServerList().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
