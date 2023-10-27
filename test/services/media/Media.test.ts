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
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/scrobble?key=1')
        .reply(200, { data: {} });
      return sdk.media.markPlayed(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/scrobble?key=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markPlayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/scrobble?key=1')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markPlayed(1)).rejects.toThrow();
    });
  });

  describe('test markUnplayed', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=1')
        .reply(200, { data: {} });
      return sdk.media.markUnplayed(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markUnplayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=9')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markUnplayed(9)).rejects.toThrow();
    });
  });

  describe('test updatePlayProgress', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=inventore&time=5&state=dolor')
        .reply(200, { data: {} });
      return sdk.media
        .updatePlayProgress('inventore', 5, 'dolor')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=officia&time=6&state=laboriosam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.updatePlayProgress()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=illum&time=8&state=nostrum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.media.updatePlayProgress('illum', 8, 'nostrum'),
      ).rejects.toThrow();
    });
  });
});
