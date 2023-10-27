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
        .get('/hubs/search?query=adipisci&sectionId=9&limit=8')
        .reply(200, { data: {} });
      return sdk.search
        .performSearch('adipisci', { sectionId: 9, limit: 8 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search?query=quas&sectionId=9&limit=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search?query=dolores&sectionId=1&limit=2')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performSearch('dolores', { sectionId: 1, limit: 2 }),
      ).rejects.toThrow();
    });
  });

  describe('test performVoiceSearch', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=vitae&sectionId=5&limit=6')
        .reply(200, { data: {} });
      return sdk.search
        .performVoiceSearch('vitae', { sectionId: 5, limit: 6 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=ab&sectionId=2&limit=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performVoiceSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/hubs/search/voice?query=id&sectionId=5&limit=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performVoiceSearch('id', { sectionId: 5, limit: 4 }),
      ).rejects.toThrow();
    });
  });

  describe('test getSearchResults', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=aspernatur')
        .reply(200, { data: {} });
      return sdk.search
        .getSearchResults('aspernatur')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=quasi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.getSearchResults()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/search?query=ex')
        .reply(404, { data: {} });
      return expect(async () => await sdk.search.getSearchResults('ex')).rejects.toThrow();
    });
  });
});
