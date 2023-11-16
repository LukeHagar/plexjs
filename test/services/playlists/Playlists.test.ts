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
        .post('/playlists?title=dicta&type_=incidunt&smart=4&uri=expedita&playQueueID=9')
        .reply(200, { data: {} });
      return sdk.playlists
        .createPlaylist('dicta', 'incidunt', 4, { uri: 'expedita', playQueueID: 9 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=quibusdam&type_=nobis&smart=3&uri=ad&playQueueID=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.createPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=vel&type_=facilis&smart=3&uri=amet&playQueueID=6')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.playlists.createPlaylist('vel', 'facilis', 3, { uri: 'amet', playQueueID: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test getPlaylists', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/all?playlistType=quasi&smart=4')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylists({ playlistType: 'quasi', smart: 4 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/9').reply(200, { data: {} });
      return sdk.playlists.getPlaylist(9).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/8').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/7').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist(7)).rejects.toThrow();
    });
  });

  describe('test updatePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/1').reply(200, { data: {} });
      return sdk.playlists.updatePlaylist(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/6').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/2').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist(2)).rejects.toThrow();
    });
  });

  describe('test deletePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/1')
        .reply(200, { data: {} });
      return sdk.playlists.deletePlaylist(1).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/3')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist(3)).rejects.toThrow();
    });
  });

  describe('test getPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/4/items?type_=2')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylistContents(4, 2)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/3/items?type_=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/9/items?type_=8')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents(9, 8)).rejects.toThrow();
    });
  });

  describe('test addPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/4/items?uri=praesentium&playQueueID=9')
        .reply(200, { data: {} });
      return sdk.playlists
        .addPlaylistContents(4, 'praesentium', 9)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/7/items?uri=temporibus&playQueueID=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.addPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/8/items?uri=praesentium&playQueueID=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.addPlaylistContents(8, 'praesentium', 9),
      ).rejects.toThrow();
    });
  });

  describe('test clearPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/5/items')
        .reply(200, { data: {} });
      return sdk.playlists
        .clearPlaylistContents(5)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/7/items')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/2/items')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents(2)).rejects.toThrow();
    });
  });

  describe('test uploadPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=cumque&force=9')
        .reply(200, { data: {} });
      return sdk.playlists
        .uploadPlaylist('cumque', 9)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=nemo&force=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=recusandae&force=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.uploadPlaylist('recusandae', 6),
      ).rejects.toThrow();
    });
  });
});
