import nock from 'nock';

import { PlexSDK } from '../../../src';

import { ButlerService } from '../../../src/services/butler/Butler';

describe('test ButlerService object', () => {
  it('should be an object', () => {
    expect(typeof ButlerService).toBe('function');
  });
});

describe('test Butler', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getButlerTasks', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/butler').reply(200, { data: {} });
      return sdk.butler.getButlerTasks().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test startAllTasks', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').post('/butler').reply(200, { data: {} });
      return sdk.butler.startAllTasks().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test stopAllTasks', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').delete('/butler').reply(200, { data: {} });
      return sdk.butler.stopAllTasks().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test startTask', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').post('/butler/error').reply(200, { data: {} });
      return sdk.butler.startTask('error').then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/butler/magnam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.butler.startTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/butler/cumque')
        .reply(404, { data: {} });
      return expect(async () => await sdk.butler.startTask('cumque')).rejects.toThrow();
    });
  });

  describe('test stopTask', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/butler/delectus')
        .reply(200, { data: {} });
      return sdk.butler.stopTask('delectus').then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/butler/repudiandae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.butler.stopTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/butler/iusto')
        .reply(404, { data: {} });
      return expect(async () => await sdk.butler.stopTask('iusto')).rejects.toThrow();
    });
  });
});
