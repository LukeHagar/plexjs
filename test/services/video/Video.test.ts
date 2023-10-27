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
          '/video/:/transcode/universal/start.mpd?hasMDE=2&path=officiis&mediaIndex=8&partIndex=2&protocol=minima&fastSeek=6&directPlay=9&directStream=3&subtitleSize=8&subtites=aut&audioBoost=5&location=porro&mediaBufferSize=4&session=deserunt&addDebugOverlay=4&autoAdjustQuality=2',
        )
        .reply(200, { data: {} });
      return sdk.video
        .startUniversalTranscode(2, 'officiis', 8, 2, 'minima', {
          fastSeek: 6,
          directPlay: 9,
          directStream: 3,
          subtitleSize: 8,
          subtites: 'aut',
          audioBoost: 5,
          location: 'porro',
          mediaBufferSize: 4,
          session: 'deserunt',
          addDebugOverlay: 4,
          autoAdjustQuality: 2,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=9&path=tempora&mediaIndex=6&partIndex=1&protocol=laudantium&fastSeek=4&directPlay=5&directStream=2&subtitleSize=6&subtites=eveniet&audioBoost=7&location=iure&mediaBufferSize=8&session=modi&addDebugOverlay=9&autoAdjustQuality=5',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.startUniversalTranscode()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=8&path=officia&mediaIndex=6&partIndex=7&protocol=hic&fastSeek=6&directPlay=2&directStream=6&subtitleSize=6&subtites=veniam&audioBoost=5&location=sunt&mediaBufferSize=5&session=inventore&addDebugOverlay=9&autoAdjustQuality=5',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.startUniversalTranscode(8, 'officia', 6, 7, 'hic', {
            fastSeek: 6,
            directPlay: 2,
            directStream: 6,
            subtitleSize: 6,
            subtites: 'veniam',
            audioBoost: 5,
            location: 'sunt',
            mediaBufferSize: 5,
            session: 'inventore',
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
          '/:/timeline?ratingKey=3&key=dolor&state=consequatur&hasMDE=8&time=4&duration=7&context=possimusducimusdoloribusnequequibusdam&playQueueItemID=3&playBackTime=5&row=4',
        )
        .reply(200, { data: {} });
      return sdk.video
        .getTimeline(
          3,
          'dolor',
          'consequatur',
          8,
          4,
          7,
          'possimus ducimus doloribus neque quibusdam',
          3,
          5,
          4,
        )
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=8&key=cumque&state=earum&hasMDE=3&time=7&duration=2&context=debitisquisquamquaeeasunt&playQueueItemID=3&playBackTime=2&row=2',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.getTimeline()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=6&key=voluptate&state=alias&hasMDE=6&time=3&duration=6&context=assumendaconsequaturaliquidnatussaepe&playQueueItemID=2&playBackTime=9&row=3',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.getTimeline(
            6,
            'voluptate',
            'alias',
            6,
            3,
            6,
            'assumenda consequatur aliquid natus saepe',
            2,
            9,
            3,
          ),
      ).rejects.toThrow();
    });
  });
});
