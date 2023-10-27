import nock from 'nock';

import { PlexSDK } from '../../../src';

import { MediaService } from '../../../src/services/media/Media';

describe('test MediaService object', () => {
  it('should be an object', () => {
    expect(typeof MediaService).toBe('function');
  });
});

describe('test Media', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test markPlayed', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/scrobble?key=3')
        .reply(200, { data: {} });
      return sdk.media.markPlayed(3).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/scrobble?key=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markPlayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/scrobble?key=8')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markPlayed(8)).rejects.toThrow();
    });
  });

  describe('test markUnplayed', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=9')
        .reply(200, { data: {} });
      return sdk.media.markUnplayed(9).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markUnplayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=6')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markUnplayed(6)).rejects.toThrow();
    });
  });

  describe('test updatePlayProgress', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=ad&time=1&state=tenetur')
        .reply(200, { data: {} });
      return sdk.media
        .updatePlayProgress('ad', 1, 'tenetur')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=nostrum&time=2&state=nostrum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.updatePlayProgress()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=ab&time=3&state=impedit')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.media.updatePlayProgress('ab', 3, 'impedit'),
      ).rejects.toThrow();
    });
  });
});
