import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetTranscodeSessionsResponse } from './models/GetTranscodeSessionsResponse';

import { serializePath } from '../../http/QuerySerializer';

export class SessionsService extends BaseService {
  /**
   * @summary Get Active Sessions
   * @description This will retrieve the "Now Playing" Information of the PMS.

   * @returns {Promise<any>} - The promise with the result
   */
  async getSessions(): Promise<any> {
    const urlEndpoint = '/status/sessions';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
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
   * @summary Get Session History
   * @description This will Retrieve a listing of all history views.

   * @returns {Promise<any>} - The promise with the result
   */
  async getSessionHistory(): Promise<any> {
    const urlEndpoint = '/status/sessions/history/all';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
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
   * @summary Get Transcode Sessions
   * @description Get Transcode Sessions

   * @returns {Promise<Response<GetTranscodeSessionsResponse>>} - The promise with the result
   */
  async getTranscodeSessions(): Promise<Response<GetTranscodeSessionsResponse>> {
    const urlEndpoint = '/transcode/sessions';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
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
   * @summary Stop a Transcode Session
   * @description Stop a Transcode Session

   * @param sessionKey the Key of the transcode session to stop
   * @returns {Promise<any>} - The promise with the result
   */
  async stopTranscodeSession(sessionKey: string): Promise<any> {
    if (sessionKey === undefined) {
      throw new Error('The following parameter is required: sessionKey, cannot be empty or blank');
    }
    let urlEndpoint = '/transcode/sessions/{sessionKey}';
    urlEndpoint = urlEndpoint.replace(
      '{sessionKey}',
      serializePath('simple', false, sessionKey, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
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
