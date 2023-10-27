import nock from 'nock';

import { PlexSDK } from '../../../src';

import { VideoService } from '../../../src/services/video/Video';

describe('test VideoService object', () => {
  it('should be an object', () => {
    expect(typeof VideoService).toBe('function');
  });
});

describe('test Video', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test startUniversalTranscode', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=7&path=ut&mediaIndex=4&partIndex=4&protocol=quam&fastSeek=9&directPlay=5&directStream=1&subtitleSize=3&subtites=unde&audioBoost=3&location=amet&mediaBufferSize=4&session=vero&addDebugOverlay=8&autoAdjustQuality=2',
        )
        .reply(200, { data: {} });
      return sdk.video
        .startUniversalTranscode(7, 'ut', 4, 4, 'quam', {
          fastSeek: 9,
          directPlay: 5,
          directStream: 1,
          subtitleSize: 3,
          subtites: 'unde',
          audioBoost: 3,
          location: 'amet',
          mediaBufferSize: 4,
          session: 'vero',
          addDebugOverlay: 8,
          autoAdjustQuality: 2,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=5&path=id&mediaIndex=5&partIndex=3&protocol=commodi&fastSeek=4&directPlay=1&directStream=9&subtitleSize=4&subtites=amet&audioBoost=1&location=eaque&mediaBufferSize=4&session=veritatis&addDebugOverlay=7&autoAdjustQuality=5',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.startUniversalTranscode()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=2&path=cum&mediaIndex=4&partIndex=9&protocol=odit&fastSeek=6&directPlay=7&directStream=3&subtitleSize=7&subtites=amet&audioBoost=5&location=nam&mediaBufferSize=2&session=libero&addDebugOverlay=8&autoAdjustQuality=5',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.startUniversalTranscode(2, 'cum', 4, 9, 'odit', {
            fastSeek: 6,
            directPlay: 7,
            directStream: 3,
            subtitleSize: 7,
            subtites: 'amet',
            audioBoost: 5,
            location: 'nam',
            mediaBufferSize: 2,
            session: 'libero',
            addDebugOverlay: 8,
            autoAdjustQuality: 5,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getTimeline', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=6&key=ullam&state=sunt&hasMDE=6&time=3&duration=8&context=quasiillovoluptatempraesentiumquae&playQueueItemID=8&playBackTime=2&row=7',
        )
        .reply(200, { data: {} });
      return sdk.video
        .getTimeline(6, 'ullam', 'sunt', 6, 3, 8, 'quasi illo voluptatem praesentium quae', 8, 2, 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=3&key=debitis&state=voluptatem&hasMDE=5&time=7&duration=8&context=excepturiquosuscipitundeprovident&playQueueItemID=4&playBackTime=6&row=2',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.getTimeline()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=3&key=veniam&state=ad&hasMDE=5&time=6&duration=4&context=laboriosameligendiaspernaturfugitnihil&playQueueItemID=8&playBackTime=1&row=1',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.getTimeline(
            3,
            'veniam',
            'ad',
            5,
            6,
            4,
            'laboriosam eligendi aspernatur fugit nihil',
            8,
            1,
            1,
          ),
      ).rejects.toThrow();
    });
  });
});
