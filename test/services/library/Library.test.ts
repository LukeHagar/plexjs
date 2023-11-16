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
        .get('/library/hashes?url=id&type_=5')
        .reply(200, { data: {} });
      return sdk.library
        .getFileHash('id', { type: 5 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=suscipit&type_=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getFileHash()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=optio&type_=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getFileHash('optio', { type: 7 }),
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
        .get('/library/sections/2?includeDetails=1')
        .reply(200, { data: {} });
      return sdk.library
        .getLibrary(2, { includeDetails: 1 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3?includeDetails=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/7?includeDetails=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibrary(7, { includeDetails: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/4')
        .reply(200, { data: {} });
      return sdk.library.deleteLibrary(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/3')
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
        .get('/library/sections/7/all?type_=3&filter=at')
        .reply(200, { data: {} });
      return sdk.library
        .getLibraryItems(7, { type: 3, filter: 'at' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2/all?type_=9&filter=eveniet')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/6/all?type_=3&filter=unde')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibraryItems(6, { type: 3, filter: 'unde' }),
      ).rejects.toThrow();
    });
  });

  describe('test refreshLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/9/refresh')
        .reply(200, { data: {} });
      return sdk.library.refreshLibrary(9).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/5/refresh')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/9/refresh')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary(9)).rejects.toThrow();
    });
  });

  describe('test getLatestLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/4/latest?type_=4&filter=itaque')
        .reply(200, { data: {} });
      return sdk.library
        .getLatestLibraryItems(4, 4, { filter: 'itaque' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/7/latest?type_=6&filter=reprehenderit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLatestLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2/latest?type_=8&filter=maiores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLatestLibraryItems(2, 8, { filter: 'maiores' }),
      ).rejects.toThrow();
    });
  });

  describe('test getCommonLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/common?type_=6&filter=nulla')
        .reply(200, { data: {} });
      return sdk.library
        .getCommonLibraryItems(3, 6, { filter: 'nulla' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/7/common?type_=9&filter=praesentium')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getCommonLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/1/common?type_=6&filter=tenetur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getCommonLibraryItems(1, 6, { filter: 'tenetur' }),
      ).rejects.toThrow();
    });
  });

  describe('test getMetadata', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/6')
        .reply(200, { data: {} });
      return sdk.library.getMetadata(6).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/5')
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
        .get('/library/metadata/8/children')
        .reply(200, { data: {} });
      return sdk.library
        .getMetadataChildren(8)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/2/children')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/9/children')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren(9)).rejects.toThrow();
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
