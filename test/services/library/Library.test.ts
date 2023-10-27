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
        .get('/library/hashes?url=officia&type_=7')
        .reply(200, { data: {} });
      return sdk.library
        .getFileHash('officia', { type: 7 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/hashes?url=molestiae&type_=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getFileHash()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/hashes?url=perferendis&type_=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getFileHash('perferendis', { type: 6 }),
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
        .get('/library/sections/3?includeDetails=2')
        .reply(200, { data: {} });
      return sdk.library
        .getLibrary(3, { includeDetails: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4?includeDetails=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/9?includeDetails=2')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibrary(9, { includeDetails: 2 }),
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
        .delete('/library/sections/7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/library/sections/8')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.deleteLibrary(8)).rejects.toThrow();
    });
  });

  describe('test getLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/1/all?type_=6&filter=consequuntur')
        .reply(200, { data: {} });
      return sdk.library
        .getLibraryItems(1, { type: 6, filter: 'consequuntur' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/1/all?type_=5&filter=reiciendis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4/all?type_=5&filter=similique')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLibraryItems(4, { type: 5, filter: 'similique' }),
      ).rejects.toThrow();
    });
  });

  describe('test refreshLibrary', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/4/refresh')
        .reply(200, { data: {} });
      return sdk.library.refreshLibrary(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
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
        .get('/library/sections/6/latest?type_=1&filter=repudiandae')
        .reply(200, { data: {} });
      return sdk.library
        .getLatestLibraryItems(6, 1, { filter: 'repudiandae' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/7/latest?type_=1&filter=repellendus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getLatestLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/1/latest?type_=2&filter=consequuntur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getLatestLibraryItems(1, 2, { filter: 'consequuntur' }),
      ).rejects.toThrow();
    });
  });

  describe('test getCommonLibraryItems', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/2/common?type_=4&filter=neque')
        .reply(200, { data: {} });
      return sdk.library
        .getCommonLibraryItems(2, 4, { filter: 'neque' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/7/common?type_=4&filter=dolorum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getCommonLibraryItems()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/sections/9/common?type_=2&filter=iusto')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.library.getCommonLibraryItems(9, 2, { filter: 'iusto' }),
      ).rejects.toThrow();
    });
  });

  describe('test getMetadata', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/6')
        .reply(200, { data: {} });
      return sdk.library.getMetadata(6).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadata()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/6')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadata(6)).rejects.toThrow();
    });
  });

  describe('test getMetadataChildren', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/3/children')
        .reply(200, { data: {} });
      return sdk.library
        .getMetadataChildren(3)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/1/children')
        .reply(200, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/library/metadata/8/children')
        .reply(404, { data: {} });
      return expect(async () => await sdk.library.getMetadataChildren(8)).rejects.toThrow();
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
