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
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/hashes?url=voluptatem&type_=2')
        .reply(200, { data: {} });
      return sdk.library
        .getFileHash('voluptatem', { type: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/hashes?url=velit&type_=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getFileHash()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/hashes?url=quis&type_=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getFileHash('quis', { type: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test getRecentlyAdded', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/recentlyAdded')
        .reply(200, { data: {} });
      return sdk.library.getRecentlyAdded().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibraries', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections')
        .reply(200, { data: {} });
      return sdk.library.getLibraries().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getLibrary', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4?includeDetails=7')
        .reply(200, { data: {} });
      return sdk.library
        .getLibrary(4, { includeDetails: 7 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/5?includeDetails=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/6?includeDetails=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibrary(6, { includeDetails: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test deleteLibrary', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/library/sections/2')
        .reply(200, { data: {} });
      return sdk.library.deleteLibrary(2).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/library/sections/8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/library/sections/3')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary(3)).rejects.toThrow();
    });
  });

  describe('test getLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4/all?type_=9&filter=totam')
        .reply(200, { data: {} });
      return sdk.library
        .getLibraryItems(4, { type: 9, filter: 'totam' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/9/all?type_=5&filter=esse')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/3/all?type_=4&filter=porro')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibraryItems(3, { type: 4, filter: 'porro' }),
      ).rejects.toThrow();
    });
  });

  describe('test refreshLibrary', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/3/refresh')
        .reply(200, { data: {} });
      return sdk.library.refreshLibrary(3).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/6/refresh')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/9/refresh')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.refreshLibrary(9)).rejects.toThrow();
    });
  });

  describe('test getLatestLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/3/latest?type_=9&filter=eligendi')
        .reply(200, { data: {} });
      return sdk.library
        .getLatestLibraryItems(3, 9, { filter: 'eligendi' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4/latest?type_=4&filter=ea')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLatestLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/2/latest?type_=7&filter=possimus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLatestLibraryItems(2, 7, { filter: 'possimus' }),
      ).rejects.toThrow();
    });
  });

  describe('test getCommonLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/7/common?type_=5&filter=consequatur')
        .reply(200, { data: {} });
      return sdk.library
        .getCommonLibraryItems(7, 5, { filter: 'consequatur' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/9/common?type_=2&filter=quia')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getCommonLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/2/common?type_=3&filter=animi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getCommonLibraryItems(2, 3, { filter: 'animi' }),
      ).rejects.toThrow();
    });
  });

  describe('test getMetadata', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/4')
        .reply(200, { data: {} });
      return sdk.library.getMetadata(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadata()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/9')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadata(9)).rejects.toThrow();
    });
  });

  describe('test getMetadataChildren', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/2/children')
        .reply(200, { data: {} });
      return sdk.library
        .getMetadataChildren(2)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/4/children')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/9/children')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren(9)).rejects.toThrow();
    });
  });

  describe('test getOnDeck', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/onDeck')
        .reply(200, { data: {} });
      return sdk.library.getOnDeck().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });
});
