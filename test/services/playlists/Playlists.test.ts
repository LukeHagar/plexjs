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
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=non&type=autem&smart=9&uri=ea&playQueueID=5')
        .reply(200, { data: {} });
      return sdk.playlists
        .createPlaylist('non', 'autem', 9, { uri: 'ea', playQueueID: 5 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=ullam&type=similique&smart=1&uri=numquam&playQueueID=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.createPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=quis&type=inventore&smart=4&uri=facere&playQueueID=7')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.playlists.createPlaylist('quis', 'inventore', 4, {
            uri: 'facere',
            playQueueID: 7,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getPlaylists', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/all?playlistType=laborum&smart=2')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylists({ playlistType: 'laborum', smart: 2 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/8').reply(200, { data: {} });
      return sdk.playlists.getPlaylist(8).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/6').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/6').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist(6)).rejects.toThrow();
    });
  });

  describe('test updatePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/6').reply(200, { data: {} });
      return sdk.playlists.updatePlaylist(6).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/1').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/8').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist(8)).rejects.toThrow();
    });
  });

  describe('test deletePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/2')
        .reply(200, { data: {} });
      return sdk.playlists.deletePlaylist(2).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/4')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist(4)).rejects.toThrow();
    });
  });

  describe('test getPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/7/items?type=1')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylistContents(7, 1)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/9/items?type=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/8/items?type=9')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents(8, 9)).rejects.toThrow();
    });
  });

  describe('test addPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/8/items?uri=amet&playQueueID=2')
        .reply(200, { data: {} });
      return sdk.playlists
        .addPlaylistContents(8, 'amet', 2)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/9/items?uri=id&playQueueID=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.addPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/5/items?uri=ea&playQueueID=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.addPlaylistContents(5, 'ea', 1),
      ).rejects.toThrow();
    });
  });

  describe('test clearPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/3/items')
        .reply(200, { data: {} });
      return sdk.playlists
        .clearPlaylistContents(3)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/6/items')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/4/items')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents(4)).rejects.toThrow();
    });
  });

  describe('test uploadPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=minus&force=7')
        .reply(200, { data: {} });
      return sdk.playlists
        .uploadPlaylist('minus', 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=non&force=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=similique&force=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.uploadPlaylist('similique', 8),
      ).rejects.toThrow();
    });
  });
});
