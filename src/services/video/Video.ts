import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { State } from './models/State';

import { serializeQuery } from '../../http/QuerySerializer';

export class VideoService extends BaseService {
  /**
   * @summary Start Universal Transcode
   * @description Begin a Universal Transcode Session

   * @param hasMDE Whether the media item has MDE
   * @param path The path to the media item to transcode
   * @param mediaIndex The index of the media item to transcode
   * @param partIndex The index of the part to transcode
   * @param protocol The protocol to use for the transcode session
   * @param optionalParams - Optional parameters
   * @param optionalParams.fastSeek - Whether to use fast seek or not
   * @param optionalParams.directPlay - Whether to use direct play or not
   * @param optionalParams.directStream - Whether to use direct stream or not
   * @param optionalParams.subtitleSize - The size of the subtitles
   * @param optionalParams.subtites - The subtitles
   * @param optionalParams.audioBoost - The audio boost
   * @param optionalParams.location - The location of the transcode session
   * @param optionalParams.mediaBufferSize - The size of the media buffer
   * @param optionalParams.session - The session ID
   * @param optionalParams.addDebugOverlay - Whether to add a debug overlay or not
   * @param optionalParams.autoAdjustQuality - Whether to auto adjust quality or not
   * @returns {Promise<any>} - The promise with the result
   */
  async startUniversalTranscode(
    hasMde: number,
    path: string,
    mediaIndex: number,
    partIndex: number,
    protocol: string,
    optionalParams: {
      fastSeek?: number;
      directPlay?: number;
      directStream?: number;
      subtitleSize?: number;
      subtites?: string;
      audioBoost?: number;
      location?: string;
      mediaBufferSize?: number;
      session?: string;
      addDebugOverlay?: number;
      autoAdjustQuality?: number;
    } = {},
  ): Promise<any> {
    const {
      fastSeek,
      directPlay,
      directStream,
      subtitleSize,
      subtites,
      audioBoost,
      location,
      mediaBufferSize,
      session,
      addDebugOverlay,
      autoAdjustQuality,
    } = optionalParams;
    if (
      hasMde === undefined ||
      path === undefined ||
      mediaIndex === undefined ||
      partIndex === undefined ||
      protocol === undefined
    ) {
      throw new Error(
        'The following are required parameters: hasMde,path,mediaIndex,partIndex,protocol, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (hasMde) {
      queryParams.push(serializeQuery('form', true, 'hasMDE', hasMde));
    }
    if (path) {
      queryParams.push(serializeQuery('form', true, 'path', path));
    }
    if (mediaIndex) {
      queryParams.push(serializeQuery('form', true, 'mediaIndex', mediaIndex));
    }
    if (partIndex) {
      queryParams.push(serializeQuery('form', true, 'partIndex', partIndex));
    }
    if (protocol) {
      queryParams.push(serializeQuery('form', true, 'protocol', protocol));
    }
    if (fastSeek) {
      queryParams.push(serializeQuery('form', true, 'fastSeek', fastSeek));
    }
    if (directPlay) {
      queryParams.push(serializeQuery('form', true, 'directPlay', directPlay));
    }
    if (directStream) {
      queryParams.push(serializeQuery('form', true, 'directStream', directStream));
    }
    if (subtitleSize) {
      queryParams.push(serializeQuery('form', true, 'subtitleSize', subtitleSize));
    }
    if (subtites) {
      queryParams.push(serializeQuery('form', true, 'subtites', subtites));
    }
    if (audioBoost) {
      queryParams.push(serializeQuery('form', true, 'audioBoost', audioBoost));
    }
    if (location) {
      queryParams.push(serializeQuery('form', true, 'location', location));
    }
    if (mediaBufferSize) {
      queryParams.push(serializeQuery('form', true, 'mediaBufferSize', mediaBufferSize));
    }
    if (session) {
      queryParams.push(serializeQuery('form', true, 'session', session));
    }
    if (addDebugOverlay) {
      queryParams.push(serializeQuery('form', true, 'addDebugOverlay', addDebugOverlay));
    }
    if (autoAdjustQuality) {
      queryParams.push(serializeQuery('form', true, 'autoAdjustQuality', autoAdjustQuality));
    }
    const urlEndpoint = '/video/:/transcode/universal/start.mpd';
    const urlParams = queryParams.length > 0 ? `?${encodeURI(queryParams.join('&'))}` : '';
    const finalUrl = `${this.baseUrl + urlEndpoint}${urlParams}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }

  /**
   * @summary Get the timeline for a media item
   * @description Get the timeline for a media item

   * @param ratingKey The rating key of the media item
   * @param key The key of the media item to get the timeline for
   * @param state The state of the media item
   * @param hasMDE Whether the media item has MDE
   * @param time The time of the media item
   * @param duration The duration of the media item
   * @param context The context of the media item
   * @param playQueueItemID The play queue item ID of the media item
   * @param playBackTime The playback time of the media item
   * @param row The row of the media item
   * @returns {Promise<any>} - The promise with the result
   */
  async getTimeline(
    ratingKey: number,
    key: string,
    state: State,
    hasMde: number,
    time: number,
    duration: number,
    context: string,
    playQueueItemId: number,
    playBackTime: number,
    row: number,
  ): Promise<any> {
    if (
      ratingKey === undefined ||
      key === undefined ||
      state === undefined ||
      hasMde === undefined ||
      time === undefined ||
      duration === undefined ||
      context === undefined ||
      playQueueItemId === undefined ||
      playBackTime === undefined ||
      row === undefined
    ) {
      throw new Error(
        'The following are required parameters: ratingKey,key,state,hasMde,time,duration,context,playQueueItemId,playBackTime,row, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (ratingKey) {
      queryParams.push(serializeQuery('form', true, 'ratingKey', ratingKey));
    }
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (state) {
      queryParams.push(serializeQuery('form', true, 'state', state));
    }
    if (hasMde) {
      queryParams.push(serializeQuery('form', true, 'hasMDE', hasMde));
    }
    if (time) {
      queryParams.push(serializeQuery('form', true, 'time', time));
    }
    if (duration) {
      queryParams.push(serializeQuery('form', true, 'duration', duration));
    }
    if (context) {
      queryParams.push(serializeQuery('form', true, 'context', context));
    }
    if (playQueueItemId) {
      queryParams.push(serializeQuery('form', true, 'playQueueItemID', playQueueItemId));
    }
    if (playBackTime) {
      queryParams.push(serializeQuery('form', true, 'playBackTime', playBackTime));
    }
    if (row) {
      queryParams.push(serializeQuery('form', true, 'row', row));
    }
    const urlEndpoint = '/:/timeline';
    const finalUrl = `${this.baseUrl + urlEndpoint}?${encodeURI(queryParams.join('&'))}`;
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }
}
