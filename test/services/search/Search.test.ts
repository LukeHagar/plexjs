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
        .get('/hubs/search?query=id&sectionId=6&limit=5')
        .reply(200, { data: {} });
      return sdk.search
        .performSearch('id', { sectionId: 6, limit: 5 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=officia&sectionId=1&limit=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=exercitationem&sectionId=4&limit=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performSearch('exercitationem', { sectionId: 4, limit: 4 }),
      ).rejects.toThrow();
    });
  });

  describe('test performVoiceSearch', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=odit&sectionId=8&limit=5')
        .reply(200, { data: {} });
      return sdk.search
        .performVoiceSearch('odit', { sectionId: 8, limit: 5 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=vel&sectionId=1&limit=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performVoiceSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=minima&sectionId=7&limit=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performVoiceSearch('minima', { sectionId: 7, limit: 4 }),
      ).rejects.toThrow();
    });
  });

  describe('test getSearchResults', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=tenetur')
        .reply(200, { data: {} });
      return sdk.search
        .getSearchResults('tenetur')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=facere')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.getSearchResults()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=sequi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.search.getSearchResults('sequi')).rejects.toThrow();
    });
  });
});
