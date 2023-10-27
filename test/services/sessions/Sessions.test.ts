import nock from 'nock';

import { PlexSDK } from '../../../src';

import { SessionsService } from '../../../src/services/sessions/Sessions';

describe('test SessionsService object', () => {
  it('should be an object', () => {
    expect(typeof SessionsService).toBe('function');
  });
});

describe('test Sessions', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getSessions', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/status/sessions')
        .reply(200, { data: {} });
      return sdk.sessions.getSessions().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getSessionHistory', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/status/sessions/history/all')
        .reply(200, { data: {} });
      return sdk.sessions
        .getSessionHistory()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getTranscodeSessions', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/transcode/sessions')
        .reply(200, { data: {} });
      return sdk.sessions
        .getTranscodeSessions()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test stopTranscodeSession', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/transcode/sessions/odit')
        .reply(200, { data: {} });
      return sdk.sessions
        .stopTranscodeSession('odit')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/transcode/sessions/porro')
        .reply(200, { data: {} });
      return expect(async () => await sdk.sessions.stopTranscodeSession()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/transcode/sessions/minima')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.sessions.stopTranscodeSession('minima'),
      ).rejects.toThrow();
    });
  });
});
