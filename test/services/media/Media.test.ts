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
        .get('/:/scrobble?key=9')
        .reply(200, { data: {} });
      return sdk.media.markPlayed(9).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/scrobble?key=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markPlayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/scrobble?key=2')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markPlayed(2)).rejects.toThrow();
    });
  });

  describe('test markUnplayed', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=6')
        .reply(200, { data: {} });
      return sdk.media.markUnplayed(6).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.markUnplayed()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/:/unscrobble?key=2')
        .reply(404, { data: {} });
      return expect(async () => await sdk.media.markUnplayed(2)).rejects.toThrow();
    });
  });

  describe('test updatePlayProgress', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=minus&time=6&state=consequuntur')
        .reply(200, { data: {} });
      return sdk.media
        .updatePlayProgress('minus', 6, 'consequuntur')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=excepturi&time=1&state=pariatur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.media.updatePlayProgress()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/:/progress?key=dolores&time=6&state=reiciendis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.media.updatePlayProgress('dolores', 6, 'reiciendis'),
      ).rejects.toThrow();
    });
  });
});
