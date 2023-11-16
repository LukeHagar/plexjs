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
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=sint&sectionId=1&limit=3')
        .reply(200, { data: {} });
      return sdk.search
        .performSearch('sint', { sectionId: 1, limit: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=illum&sectionId=6&limit=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=aspernatur&sectionId=3&limit=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performSearch('aspernatur', { sectionId: 3, limit: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test performVoiceSearch', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=et&sectionId=9&limit=9')
        .reply(200, { data: {} });
      return sdk.search
        .performVoiceSearch('et', { sectionId: 9, limit: 9 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=dicta&sectionId=9&limit=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performVoiceSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=saepe&sectionId=1&limit=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performVoiceSearch('saepe', { sectionId: 1, limit: 7 }),
      ).rejects.toThrow();
    });
  });

  describe('test getSearchResults', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=non')
        .reply(200, { data: {} });
      return sdk.search
        .getSearchResults('non')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=repellendus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.getSearchResults()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=aliquid')
        .reply(404, { data: {} });
      return expect(async () => await sdk.search.getSearchResults('aliquid')).rejects.toThrow();
    });
  });
});
