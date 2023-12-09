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
      const scope = nock('http://10.10.10.47:32400').get('/').reply(200, { data: {} });
      return sdk.server
        .getServerCapabilities()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getServerPreferences', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/:/prefs').reply(200, { data: {} });
      return sdk.server
        .getServerPreferences()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getAvailableClients', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/clients').reply(200, { data: {} });
      return sdk.server
        .getAvailableClients()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getDevices', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/devices').reply(200, { data: {} });
      return sdk.server.getDevices().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getServerIdentity', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/identity').reply(200, { data: {} });
      return sdk.server.getServerIdentity().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getMyPlexAccount', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/myplex/account')
        .reply(200, { data: {} });
      return sdk.server.getMyPlexAccount().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getResizedPhoto', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/photo/:/transcode?width=4812092983&height=7&opacity=4&blur=3&minSize=7&upscale=5&url=eius',
        )
        .reply(200, { data: {} });
      return sdk.server
        .getResizedPhoto(4812092983, 7, 4, 3, 7, 5, 'eius')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/photo/:/transcode?width=4674351221&height=8&opacity=1&blur=3&minSize=2&upscale=3&url=hic',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.server.getResizedPhoto()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/photo/:/transcode?width=2192802438&height=6&opacity=7&blur=1&minSize=9&upscale=5&url=commodi',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.server.getResizedPhoto(2192802438, 6, 7, 1, 9, 5, 'commodi'),
      ).rejects.toThrow();
    });
  });

  describe('test getServerList', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/servers').reply(200, { data: {} });
      return sdk.server.getServerList().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
