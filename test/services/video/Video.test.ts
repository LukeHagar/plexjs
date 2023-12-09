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
          '/video/:/transcode/universal/start.mpd?hasMDE=2&path=eveniet&mediaIndex=3&partIndex=9&protocol=accusamus&fastSeek=8&directPlay=6&directStream=3&subtitleSize=4&subtites=cupiditate&audioBoost=7&location=nam&mediaBufferSize=1&session=corrupti&addDebugOverlay=4&autoAdjustQuality=5',
        )
        .reply(200, { data: {} });
      return sdk.video
        .startUniversalTranscode(2, 'eveniet', 3, 9, 'accusamus', {
          fastSeek: 8,
          directPlay: 6,
          directStream: 3,
          subtitleSize: 4,
          subtites: 'cupiditate',
          audioBoost: 7,
          location: 'nam',
          mediaBufferSize: 1,
          session: 'corrupti',
          addDebugOverlay: 4,
          autoAdjustQuality: 5,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=6&path=inventore&mediaIndex=6&partIndex=3&protocol=aliquid&fastSeek=5&directPlay=4&directStream=8&subtitleSize=5&subtites=sed&audioBoost=5&location=optio&mediaBufferSize=6&session=repellat&addDebugOverlay=2&autoAdjustQuality=7',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.startUniversalTranscode()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/video/:/transcode/universal/start.mpd?hasMDE=6&path=fugit&mediaIndex=2&partIndex=1&protocol=iste&fastSeek=2&directPlay=3&directStream=5&subtitleSize=5&subtites=officiis&audioBoost=3&location=alias&mediaBufferSize=9&session=incidunt&addDebugOverlay=3&autoAdjustQuality=9',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.startUniversalTranscode(6, 'fugit', 2, 1, 'iste', {
            fastSeek: 2,
            directPlay: 3,
            directStream: 5,
            subtitleSize: 5,
            subtites: 'officiis',
            audioBoost: 3,
            location: 'alias',
            mediaBufferSize: 9,
            session: 'incidunt',
            addDebugOverlay: 3,
            autoAdjustQuality: 9,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getTimeline', () => {
    test('test api call', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=5&key=sapiente&state=nihil&hasMDE=3&time=4&duration=9&context=illoaliasrerummodiminus&playQueueItemID=3&playBackTime=6&row=7',
        )
        .reply(200, { data: {} });
      return sdk.video
        .getTimeline(5, 'sapiente', 'nihil', 3, 4, 9, 'illo alias rerum modi minus', 3, 6, 7)
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=7&key=reiciendis&state=veniam&hasMDE=9&time=5&duration=6&context=quamremeiusremmaiores&playQueueItemID=1&playBackTime=2&row=1',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.video.getTimeline()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://10.10.10.47:32400')
        .get(
          '/:/timeline?ratingKey=6&key=quasi&state=natus&hasMDE=6&time=7&duration=4&context=accusamusmollitiaaperiamsequidoloremque&playQueueItemID=4&playBackTime=3&row=3',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.video.getTimeline(
            6,
            'quasi',
            'natus',
            6,
            7,
            4,
            'accusamus mollitia aperiam sequi doloremque',
            4,
            3,
            3,
          ),
      ).rejects.toThrow();
    });
  });
});
