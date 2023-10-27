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
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/token?type_=consectetur&scope=sed')
        .reply(200, { data: {} });
      return sdk.security
        .getTransientToken('consectetur', 'sed')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/token?type_=laborum&scope=est')
        .reply(200, { data: {} });
      return expect(async () => await sdk.security.getTransientToken()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/token?type_=debitis&scope=tempora')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.security.getTransientToken('debitis', 'tempora'),
      ).rejects.toThrow();
    });
  });

  describe('test getSourceConnectionInformation', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/resources?source=quod')
        .reply(200, { data: {} });
      return sdk.security
        .getSourceConnectionInformation('quod')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/resources?source=repudiandae')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.security.getSourceConnectionInformation(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/security/resources?source=similique')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.security.getSourceConnectionInformation('similique'),
      ).rejects.toThrow();
    });
  });
});
