import nock from 'nock';

import { PlexSDK } from '../../../src';

import { ActivitiesService } from '../../../src/services/activities/Activities';

describe('test ActivitiesService object', () => {
  it('should be an object', () => {
    expect(typeof ActivitiesService).toBe('function');
  });
});

describe('test Activities', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getServerActivities', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/activities').reply(200, { data: {} });
      return sdk.activities
        .getServerActivities()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test cancelServerActivities', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/activities/fugit')
        .reply(200, { data: {} });
      return sdk.activities
        .cancelServerActivities('fugit')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/activities/occaecati')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activities.cancelServerActivities()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/activities/tenetur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.activities.cancelServerActivities('tenetur'),
      ).rejects.toThrow();
    });
  });
});
