import nock from 'nock';

import { PlexSDK } from '../../../src';

import { SecurityService } from '../../../src/services/security/Security';

describe('test SecurityService object', () => {
  it('should be an object', () => {
    expect(typeof SecurityService).toBe('function');
  });
});

describe('test Security', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getTransientToken', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/token?type=eaque&scope=commodi')
        .reply(200, { data: {} });
      return sdk.security
        .getTransientToken('eaque', 'commodi')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/token?type=ipsa&scope=laboriosam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.security.getTransientToken()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/token?type=cum&scope=qui')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.security.getTransientToken('cum', 'qui'),
      ).rejects.toThrow();
    });
  });

  describe('test getSourceConnectionInformation', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/resources?source=tempora')
        .reply(200, { data: {} });
      return sdk.security
        .getSourceConnectionInformation('tempora')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/resources?source=temporibus')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.security.getSourceConnectionInformation(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/security/resources?source=deleniti')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.security.getSourceConnectionInformation('deleniti'),
      ).rejects.toThrow();
    });
  });
});
