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
        .get('/:/scrobble?key=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markPlayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/scrobble?key=1')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markPlayed(1)).rejects.toThrow();
    });
  });

  describe('test markUnplayed', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=8')
        .reply(200, { data: {} });
      return sdk.media.markUnplayed(8).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markUnplayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/:/unscrobble?key=7')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markUnplayed(7)).rejects.toThrow();
    });
  });

  describe('test updatePlayProgress', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=exercitationem&time=6&state=eum')
        .reply(200, { data: {} });
      return sdk.media
        .updatePlayProgress('exercitationem', 6, 'eum')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=consectetur&time=1&state=ratione')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.updatePlayProgress()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/:/progress?key=illum&time=1&state=ullam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.media.updatePlayProgress('illum', 1, 'ullam'),
      ).rejects.toThrow();
    });
  });
});
