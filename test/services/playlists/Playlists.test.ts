import nock from 'nock';

import { PlexSDK } from '../../../src';

import { PlaylistsService } from '../../../src/services/playlists/Playlists';

describe('test PlaylistsService object', () => {
  it('should be an object', () => {
    expect(typeof PlaylistsService).toBe('function');
  });
});

describe('test Playlists', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test createPlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists?title=ipsum&type_=dicta&smart=6&uri=tenetur&playQueueID=8')
        .reply(200, { data: {} });
      return sdk.playlists
        .createPlaylist('ipsum', 'dicta', 6, { uri: 'tenetur', playQueueID: 8 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists?title=ab&type_=voluptas&smart=3&uri=ullam&playQueueID=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.createPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists?title=distinctio&type_=nobis&smart=2&uri=aut&playQueueID=7')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.playlists.createPlaylist('distinctio', 'nobis', 2, {
            uri: 'aut',
            playQueueID: 7,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getPlaylists', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/all?playlistType=deserunt&smart=3')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylists({ playlistType: 'deserunt', smart: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getPlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/4').reply(200, { data: {} });
      return sdk.playlists.getPlaylist(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/1').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/5').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist(5)).rejects.toThrow();
    });
  });

  describe('test updatePlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/1').reply(200, { data: {} });
      return sdk.playlists.updatePlaylist(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/6').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/6').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist(6)).rejects.toThrow();
    });
  });

  describe('test deletePlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/1')
        .reply(200, { data: {} });
      return sdk.playlists.deletePlaylist(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/7')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist(7)).rejects.toThrow();
    });
  });

  describe('test getPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/1/items?type_=4')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylistContents(1, 4)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/2/items?type_=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/9/items?type_=9')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents(9, 9)).rejects.toThrow();
    });
  });

  describe('test addPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/5/items?uri=repellendus&playQueueID=7')
        .reply(200, { data: {} });
      return sdk.playlists
        .addPlaylistContents(5, 'repellendus', 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/4/items?uri=ipsum&playQueueID=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.addPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/3/items?uri=iusto&playQueueID=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.addPlaylistContents(3, 'iusto', 1),
      ).rejects.toThrow();
    });
  });

  describe('test clearPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/8/items')
        .reply(200, { data: {} });
      return sdk.playlists
        .clearPlaylistContents(8)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/1/items')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/8/items')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents(8)).rejects.toThrow();
    });
  });

  describe('test uploadPlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=omnis&force=7')
        .reply(200, { data: {} });
      return sdk.playlists
        .uploadPlaylist('omnis', 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=consequatur&force=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=explicabo&force=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.uploadPlaylist('explicabo', 3),
      ).rejects.toThrow();
    });
  });
});
