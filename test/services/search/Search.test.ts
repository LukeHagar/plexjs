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
        .get('/hubs/search?query=fugiat&sectionId=1&limit=3')
        .reply(200, { data: {} });
      return sdk.search
        .performSearch('fugiat', { sectionId: 1, limit: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=ipsam&sectionId=7&limit=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search?query=quibusdam&sectionId=1&limit=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performSearch('quibusdam', { sectionId: 1, limit: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test performVoiceSearch', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=animi&sectionId=7&limit=1')
        .reply(200, { data: {} });
      return sdk.search
        .performVoiceSearch('animi', { sectionId: 7, limit: 1 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=quae&sectionId=6&limit=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.search.performVoiceSearch()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/hubs/search/voice?query=aspernatur&sectionId=5&limit=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.search.performVoiceSearch('aspernatur', { sectionId: 5, limit: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test getSearchResults', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/search?query=doloremque')
        .reply(200, { data: {} });
      return sdk.search
        .getSearchResults('doloremque')
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
        .get('/search?query=placeat')
        .reply(404, { data: {} });
      return expect(async () => await sdk.search.getSearchResults('placeat')).rejects.toThrow();
    });
  });
});
