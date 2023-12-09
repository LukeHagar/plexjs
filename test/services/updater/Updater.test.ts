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
      const scope = nock('http://10.10.10.47:32400')
        .get('/updater/status')
        .reply(200, { data: {} });
      return sdk.updater.getUpdateStatus().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test checkForUpdates', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/updater/check?download=3')
        .reply(200, { data: {} });
      return sdk.updater
        .checkForUpdates({ download: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test applyUpdates', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/updater/apply?tonight=8&skip=2')
        .reply(200, { data: {} });
      return sdk.updater
        .applyUpdates({ tonight: 8, skip: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
