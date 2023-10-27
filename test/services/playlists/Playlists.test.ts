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
        .post('/playlists?title=harum&type_=excepturi&smart=9&uri=nisi&playQueueID=5')
        .reply(200, { data: {} });
      return sdk.playlists
        .createPlaylist('harum', 'excepturi', 9, { uri: 'nisi', playQueueID: 5 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists?title=eligendi&type_=tempora&smart=9&uri=eaque&playQueueID=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.createPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists?title=placeat&type_=vitae&smart=5&uri=voluptatum&playQueueID=2')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.playlists.createPlaylist('placeat', 'vitae', 5, {
            uri: 'voluptatum',
            playQueueID: 2,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getPlaylists', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/all?playlistType=repellendus&smart=8')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylists({ playlistType: 'repellendus', smart: 8 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getPlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/7').reply(200, { data: {} });
      return sdk.playlists.getPlaylist(7).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/8').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}').get('/playlists/1').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist(1)).rejects.toThrow();
    });
  });

  describe('test updatePlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/7').reply(200, { data: {} });
      return sdk.playlists.updatePlaylist(7).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/7').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}').put('/playlists/3').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist(3)).rejects.toThrow();
    });
  });

  describe('test deletePlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/7')
        .reply(200, { data: {} });
      return sdk.playlists.deletePlaylist(7).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/5')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist(5)).rejects.toThrow();
    });
  });

  describe('test getPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/1/items?type_=7')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylistContents(1, 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/2/items?type_=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/playlists/6/items?type_=4')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents(6, 4)).rejects.toThrow();
    });
  });

  describe('test addPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/6/items?uri=deleniti&playQueueID=5')
        .reply(200, { data: {} });
      return sdk.playlists
        .addPlaylistContents(6, 'deleniti', 5)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/3/items?uri=asperiores&playQueueID=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.addPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .put('/playlists/4/items?uri=itaque&playQueueID=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.addPlaylistContents(4, 'itaque', 6),
      ).rejects.toThrow();
    });
  });

  describe('test clearPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/4/items')
        .reply(200, { data: {} });
      return sdk.playlists
        .clearPlaylistContents(4)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/7/items')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/playlists/1/items')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents(1)).rejects.toThrow();
    });
  });

  describe('test uploadPlaylist', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=nesciunt&force=5')
        .reply(200, { data: {} });
      return sdk.playlists
        .uploadPlaylist('nesciunt', 5)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=ex&force=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .post('/playlists/upload?path=eaque&force=8')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist('eaque', 8)).rejects.toThrow();
    });
  });
});
