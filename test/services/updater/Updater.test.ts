import nock from 'nock';

import { PlexSDK } from '../../../src';

import { UpdaterService } from '../../../src/services/updater/Updater';

describe('test UpdaterService object', () => {
  it('should be an object', () => {
    expect(typeof UpdaterService).toBe('function');
  });
});

describe('test Updater', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getUpdateStatus', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/updater/status')
        .reply(200, { data: {} });
      return sdk.updater.getUpdateStatus().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test checkForUpdates', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/updater/check?download=foo')
        .reply(200, { data: {} });
      return sdk.updater
        .checkForUpdates({ download: 'foo' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test applyUpdates', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/updater/apply?tonight=foo&skip=foo')
        .reply(200, { data: {} });
      return sdk.updater
        .applyUpdates({ tonight: 'foo', skip: 'foo' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
