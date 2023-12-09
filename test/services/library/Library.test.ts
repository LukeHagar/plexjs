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
        .get('/library/hashes?url=sequi&type=2')
        .reply(200, { data: {} });
      return sdk.library
        .getFileHash('sequi', { type_: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=voluptatum&type=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getFileHash()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/hashes?url=officiis&type=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getFileHash('officiis', { type_: 7 }),
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
        .get('/library/sections/1?includeDetails=4')
        .reply(200, { data: {} });
      return sdk.library
        .getLibrary(1, { includeDetails: 4 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3?includeDetails=2')
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
        .delete('/library/sections/2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/library/sections/5')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary(5)).rejects.toThrow();
    });
  });

  describe('test getLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/3/all?type=3&filter=accusamus')
        .reply(200, { data: {} });
      return sdk.library
        .getLibraryItems(3, { type_: 3, filter: 'accusamus' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/6/all?type=7&filter=fuga')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/5/all?type=9&filter=maiores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibraryItems(5, { type_: 9, filter: 'maiores' }),
      ).rejects.toThrow();
    });
  });

  describe('test refreshLibrary', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/5/refresh')
        .reply(200, { data: {} });
      return sdk.library.refreshLibrary(5).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/7/refresh')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/5/refresh')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary(5)).rejects.toThrow();
    });
  });

  describe('test getLatestLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/2/latest?type=3&filter=explicabo')
        .reply(200, { data: {} });
      return sdk.library
        .getLatestLibraryItems(2, 3, { filter: 'explicabo' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/5/latest?type=2&filter=adipisci')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLatestLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/6/latest?type=5&filter=minus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLatestLibraryItems(6, 5, { filter: 'minus' }),
      ).rejects.toThrow();
    });
  });

  describe('test getCommonLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/7/common?type=1&filter=eveniet')
        .reply(200, { data: {} });
      return sdk.library
        .getCommonLibraryItems(7, 1, { filter: 'eveniet' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/1/common?type=7&filter=voluptatibus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getCommonLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/sections/8/common?type=1&filter=soluta')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getCommonLibraryItems(8, 1, { filter: 'soluta' }),
      ).rejects.toThrow();
    });
  });

  describe('test getMetadata', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/4')
        .reply(200, { data: {} });
      return sdk.library.getMetadata(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadata()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/4')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadata(4)).rejects.toThrow();
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
        .get('/library/metadata/4/children')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/library/metadata/2/children')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren(2)).rejects.toThrow();
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
