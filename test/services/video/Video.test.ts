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
          '/video/:/transcode/universal/start.mpd?hasMDE=8&path=harum&mediaIndex=9&partIndex=3&protocol=id&fastSeek=4&directPlay=4&directStream=8&subtitleSize=9&subtites=laudantium&audioBoost=5&location=harum&mediaBufferSize=7&session=possimus&addDebugOverlay=8&autoAdjustQuality=2',
        )
        .reply(200, { data: {} });
      return sdk.video
        .startUniversalTranscode(8, 'harum', 9, 3, 'id', {
          fastSeek: 4,
          directPlay: 4,
          directStream: 8,
          subtitleSize: 9,
          subtites: 'laudantium',
          audioBoost: 5,
          location: 'harum',
          mediaBufferSize: 7,
          session: 'possimus',
          addDebugOverlay: 8,
          autoAdjustQuality: 2,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=3&path=voluptatibus&mediaIndex=5&partIndex=1&protocol=harum&fastSeek=2&directPlay=3&directStream=5&subtitleSize=6&subtites=repellendus&audioBoost=6&location=cum&mediaBufferSize=5&session=praesentium&addDebugOverlay=4&autoAdjustQuality=5',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.startUniversalTranscode()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=4&path=sed&mediaIndex=6&partIndex=3&protocol=tempora&fastSeek=5&directPlay=8&directStream=6&subtitleSize=2&subtites=delectus&audioBoost=7&location=porro&mediaBufferSize=2&session=rem&addDebugOverlay=9&autoAdjustQuality=7',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.startUniversalTranscode(4, 'sed', 6, 3, 'tempora', {
            fastSeek: 5,
            directPlay: 8,
            directStream: 6,
            subtitleSize: 2,
            subtites: 'delectus',
            audioBoost: 7,
            location: 'porro',
            mediaBufferSize: 2,
            session: 'rem',
            addDebugOverlay: 9,
            autoAdjustQuality: 7,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getTimeline', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=1&key=placeat&state=tempore&hasMDE=7&time=2&duration=8&context=ducimusdoloresnostrumeosimpedit&playQueueItemID=5&playBackTime=1&row=5',
        )
        .reply(200, { data: {} });
      return sdk.video
        .getTimeline(
          1,
          'placeat',
          'tempore',
          7,
          2,
          8,
          'ducimus dolores nostrum eos impedit',
          5,
          1,
          5,
        )
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=1&key=quidem&state=quo&hasMDE=1&time=8&duration=2&context=aspernatureumdignissimosatqueassumenda&playQueueItemID=6&playBackTime=4&row=6',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.getTimeline()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get(
          '/:/timeline?ratingKey=3&key=facilis&state=ipsum&hasMDE=7&time=5&duration=6&context=earumimpeditnequeisteanimi&playQueueItemID=9&playBackTime=2&row=7',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.getTimeline(
            3,
            'facilis',
            'ipsum',
            7,
            5,
            6,
            'earum impedit neque iste animi',
            9,
            2,
            7,
          ),
      ).rejects.toThrow();
    });
  });
});
