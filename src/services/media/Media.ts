import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { serializeQuery } from '../../http/QuerySerializer';

export class MediaService extends BaseService {
  /**
   * @summary Mark Media Played
   * @description This will mark the provided media key as Played.

   * @param key The media key to mark as played
   * @returns {Promise<any>} - The promise with the result
   */
  async markPlayed(key: number): Promise<any> {
    if (key === undefined) {
      throw new Error('The following parameter is required: key, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    const urlEndpoint = '/:/scrobble';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
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
   * @summary Mark Media Unplayed
   * @description This will mark the provided media key as Unplayed.

   * @param key The media key to mark as Unplayed
   * @returns {Promise<any>} - The promise with the result
   */
  async markUnplayed(key: number): Promise<any> {
    if (key === undefined) {
      throw new Error('The following parameter is required: key, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    const urlEndpoint = '/:/unscrobble';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
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
   * @summary Update Media Play Progress
   * @description This API command can be used to update the play progress of a media item.


   * @param key the media key
   * @param time The time, in milliseconds, used to set the media playback progress.
   * @param state The playback state of the media item.
   * @returns {Promise<any>} - The promise with the result
   */
  async updatePlayProgress(key: string, time: number, state: string): Promise<any> {
    if (key === undefined || time === undefined || state === undefined) {
      throw new Error(
        'The following are required parameters: key,time,state, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (time) {
      queryParams.push(serializeQuery('form', true, 'time', time));
    }
    if (state) {
      queryParams.push(serializeQuery('form', true, 'state', state));
    }
    const urlEndpoint = '/:/progress';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      { key, time, state },
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
