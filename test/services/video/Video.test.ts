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
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=3&path=itaque&mediaIndex=7&partIndex=2&protocol=perspiciatis&fastSeek=3&directPlay=1&directStream=2&subtitleSize=3&subtites=alias&audioBoost=7&location=voluptas&mediaBufferSize=8&session=aliquam&addDebugOverlay=2&autoAdjustQuality=2',
        )
        .reply(200, { data: {} });
      return sdk.video
        .startUniversalTranscode(3, 'itaque', 7, 2, 'perspiciatis', {
          fastSeek: 3,
          directPlay: 1,
          directStream: 2,
          subtitleSize: 3,
          subtites: 'alias',
          audioBoost: 7,
          location: 'voluptas',
          mediaBufferSize: 8,
          session: 'aliquam',
          addDebugOverlay: 2,
          autoAdjustQuality: 2,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=5&path=consequuntur&mediaIndex=8&partIndex=3&protocol=magnam&fastSeek=5&directPlay=2&directStream=5&subtitleSize=5&subtites=aut&audioBoost=7&location=optio&mediaBufferSize=1&session=deserunt&addDebugOverlay=2&autoAdjustQuality=4',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.startUniversalTranscode()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=5&path=cum&mediaIndex=5&partIndex=2&protocol=vel&fastSeek=9&directPlay=4&directStream=7&subtitleSize=7&subtites=earum&audioBoost=1&location=voluptatem&mediaBufferSize=2&session=quis&addDebugOverlay=9&autoAdjustQuality=5',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.startUniversalTranscode(5, 'cum', 5, 2, 'vel', {
            fastSeek: 9,
            directPlay: 4,
            directStream: 7,
            subtitleSize: 7,
            subtites: 'earum',
            audioBoost: 1,
            location: 'voluptatem',
            mediaBufferSize: 2,
            session: 'quis',
            addDebugOverlay: 9,
            autoAdjustQuality: 5,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getTimeline', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=9&key=quos&state=reiciendis&hasMDE=1&time=2&duration=8&context=nisieosnobisaliassequi&playQueueItemID=9&playBackTime=6&row=8',
        )
        .reply(200, { data: {} });
      return sdk.video
        .getTimeline(9, 'quos', 'reiciendis', 1, 2, 8, 'nisi eos nobis alias sequi', 9, 6, 8)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=8&key=non&state=earum&hasMDE=3&time=9&duration=4&context=magnamoptioeaoccaecatieum&playQueueItemID=8&playBackTime=6&row=9',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.getTimeline()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=5&key=maiores&state=nam&hasMDE=6&time=2&duration=7&context=illumdeseruntoditoccaecatiplaceat&playQueueItemID=6&playBackTime=8&row=3',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.getTimeline(
            5,
            'maiores',
            'nam',
            6,
            2,
            7,
            'illum deserunt odit occaecati placeat',
            6,
            8,
            3,
          ),
      ).rejects.toThrow();
    });
  });
});
