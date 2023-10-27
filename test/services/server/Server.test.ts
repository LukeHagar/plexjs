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
          '/photo/:/transcode?width=1002254168&height=9&opacity=8&blur=9&minSize=6&upscale=2&url=quibusdam',
        )
        .reply(200, { data: {} });
      return sdk.server
        .getResizedPhoto(1002254168, 9, 8, 9, 6, 2, 'quibusdam')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/photo/:/transcode?width=9612381291&height=3&opacity=2&blur=4&minSize=1&upscale=8&url=modi',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.server.getResizedPhoto()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/photo/:/transcode?width=2629629187&height=7&opacity=6&blur=9&minSize=9&upscale=7&url=sunt',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.server.getResizedPhoto(2629629187, 7, 6, 9, 9, 7, 'sunt'),
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
