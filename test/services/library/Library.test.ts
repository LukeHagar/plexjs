import nock from 'nock';

import { PlexSDK } from '../../../src';

import { LibraryService } from '../../../src/services/library/Library';

describe('test LibraryService object', () => {
  it('should be an object', () => {
    expect(typeof LibraryService).toBe('function');
  });
});

describe('test Library', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getFileHash', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=error&type_=1')
        .reply(200, { data: {} });
      return sdk.library
        .getFileHash('error', { type: 1 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=soluta&type_=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getFileHash()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=veritatis&type_=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getFileHash('veritatis', { type: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test getRecentlyAdded', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/recentlyAdded')
        .reply(200, { data: {} });
      return sdk.library.getRecentlyAdded().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibraries', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections')
        .reply(200, { data: {} });
      return sdk.library.getLibraries().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/6?includeDetails=7')
        .reply(200, { data: {} });
      return sdk.library
        .getLibrary(6, { includeDetails: 7 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2?includeDetails=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/1?includeDetails=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibrary(1, { includeDetails: 4 }),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/9')
        .reply(200, { data: {} });
      return sdk.library.deleteLibrary(9).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/2')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary(2)).rejects.toThrow();
    });
  });

  describe('test getLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/4/all?type_=9&filter=porro')
        .reply(200, { data: {} });
      return sdk.library
        .getLibraryItems(4, { type: 9, filter: 'porro' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/1/all?type_=8&filter=pariatur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/all?type_=1&filter=nostrum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibraryItems(3, { type: 1, filter: 'nostrum' }),
      ).rejects.toThrow();
    });
  });

  describe('test refreshLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/6/refresh')
        .reply(200, { data: {} });
      return sdk.library.refreshLibrary(6).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/refresh')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/refresh')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary(3)).rejects.toThrow();
    });
  });

  describe('test getLatestLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2/latest?type_=7&filter=ipsa')
        .reply(200, { data: {} });
      return sdk.library
        .getLatestLibraryItems(2, 7, { filter: 'ipsa' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/latest?type_=4&filter=consectetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLatestLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/latest?type_=9&filter=aliquam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLatestLibraryItems(3, 9, { filter: 'aliquam' }),
      ).rejects.toThrow();
    });
  });

  describe('test getCommonLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2/common?type_=7&filter=doloribus')
        .reply(200, { data: {} });
      return sdk.library
        .getCommonLibraryItems(2, 7, { filter: 'doloribus' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/9/common?type_=2&filter=illum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getCommonLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/8/common?type_=7&filter=nesciunt')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getCommonLibraryItems(8, 7, { filter: 'nesciunt' }),
      ).rejects.toThrow();
    });
  });

  describe('test getMetadata', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/7')
        .reply(200, { data: {} });
      return sdk.library.getMetadata(7).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadata()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/9')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadata(9)).rejects.toThrow();
    });
  });

  describe('test getMetadataChildren', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/4/children')
        .reply(200, { data: {} });
      return sdk.library
        .getMetadataChildren(4)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/3/children')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/4/children')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren(4)).rejects.toThrow();
    });
  });

  describe('test getOnDeck', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/onDeck')
        .reply(200, { data: {} });
      return sdk.library.getOnDeck().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
