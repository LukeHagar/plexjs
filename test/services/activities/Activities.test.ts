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
      const scope = nock('http://10.10.10.47:32400').get('/activities').reply(200, { data: {} });
      return sdk.activities
        .getServerActivities()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test cancelServerActivities', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/activities/eaque')
        .reply(200, { data: {} });
      return sdk.activities
        .cancelServerActivities('eaque')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/activities/dolorem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activities.cancelServerActivities()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/activities/corrupti')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.activities.cancelServerActivities('corrupti'),
      ).rejects.toThrow();
    });
  });
});
