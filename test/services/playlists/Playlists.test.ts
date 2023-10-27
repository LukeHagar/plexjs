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
        .post('/playlists?title=porro&type_=fugiat&smart=9&uri=nihil&playQueueID=6')
        .reply(200, { data: {} });
      return sdk.playlists
        .createPlaylist('porro', 'fugiat', 9, { uri: 'nihil', playQueueID: 6 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=perspiciatis&type_=maxime&smart=7&uri=minima&playQueueID=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.createPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists?title=nam&type_=excepturi&smart=9&uri=iusto&playQueueID=5')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.playlists.createPlaylist('nam', 'excepturi', 9, {
            uri: 'iusto',
            playQueueID: 5,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getPlaylists', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/all?playlistType=eveniet&smart=9')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylists({ playlistType: 'eveniet', smart: 9 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/4').reply(200, { data: {} });
      return sdk.playlists.getPlaylist(4).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/4').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').get('/playlists/1').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylist(1)).rejects.toThrow();
    });
  });

  describe('test updatePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/3').reply(200, { data: {} });
      return sdk.playlists.updatePlaylist(3).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/6').reply(200, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400').put('/playlists/4').reply(404, { data: {} });
      return expect(async () => await sdk.playlists.updatePlaylist(4)).rejects.toThrow();
    });
  });

  describe('test deletePlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/8')
        .reply(200, { data: {} });
      return sdk.playlists.deletePlaylist(8).then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/1')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.deletePlaylist(1)).rejects.toThrow();
    });
  });

  describe('test getPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/5/items?type_=1')
        .reply(200, { data: {} });
      return sdk.playlists
        .getPlaylistContents(5, 1)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/2/items?type_=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get('/playlists/9/items?type_=2')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.getPlaylistContents(9, 2)).rejects.toThrow();
    });
  });

  describe('test addPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/4/items?uri=veniam&playQueueID=1')
        .reply(200, { data: {} });
      return sdk.playlists
        .addPlaylistContents(4, 'veniam', 1)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/1/items?uri=similique&playQueueID=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.addPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .put('/playlists/5/items?uri=similique&playQueueID=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.playlists.addPlaylistContents(5, 'similique', 8),
      ).rejects.toThrow();
    });
  });

  describe('test clearPlaylistContents', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/1/items')
        .reply(200, { data: {} });
      return sdk.playlists
        .clearPlaylistContents(1)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/9/items')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .delete('/playlists/5/items')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.clearPlaylistContents(5)).rejects.toThrow();
    });
  });

  describe('test uploadPlaylist', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=a&force=5')
        .reply(200, { data: {} });
      return sdk.playlists
        .uploadPlaylist('a', 5)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=facere&force=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .post('/playlists/upload?path=animi&force=5')
        .reply(404, { data: {} });
      return expect(async () => await sdk.playlists.uploadPlaylist('animi', 5)).rejects.toThrow();
    });
  });
});
