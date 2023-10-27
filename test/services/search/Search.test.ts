import nock from 'nock';

import { PlexSDK } from '../../../src';

import { SearchService } from '../../../src/services/search/Search';

describe('test SearchService object', () => {
  it('should be an object', () => {
    expect(typeof SearchService).toBe('function');
  });
});

describe('test Search', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test performSearch', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search?query=exercitationem&sectionId=2&limit=2')
        .reply(200, { data: {} });
      return sdk.search
        .performSearch('exercitationem', { sectionId: 2, limit: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search?query=officiis&sectionId=2&limit=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search?query=perferendis&sectionId=2&limit=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performSearch('perferendis', { sectionId: 2, limit: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test performVoiceSearch', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=minus&sectionId=5&limit=1')
        .reply(200, { data: {} });
      return sdk.search
        .performVoiceSearch('minus', { sectionId: 5, limit: 1 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=sed&sectionId=1&limit=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performVoiceSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=exercitationem&sectionId=7&limit=9')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.search.performVoiceSearch('exercitationem', { sectionId: 7, limit: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test getSearchResults', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=harum')
        .reply(200, { data: {} });
      return sdk.search
        .getSearchResults('harum')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=atque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.getSearchResults()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=qui')
        .reply(404, { data: {} });
      return expect(async () => await sdk.search.getSearchResults('qui')).rejects.toThrow();
    });
  });
});
