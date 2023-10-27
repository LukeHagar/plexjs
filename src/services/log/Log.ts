import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { Level } from './models/Level';

import { serializeQuery } from '../../http/QuerySerializer';

export class LogService extends BaseService {
  /**
   * @summary Logging a single line message.
   * @description This endpoint will write a single-line log message, including a level and source to the main Plex Media Server log.


   * @param level An integer log level to write to the PMS log with.  
0: Error  
1: Warning  
2: Info 
3: Debug  
4: Verbose

   * @param message The text of the message to write to the log.
   * @param source a string indicating the source of the message.
   * @returns {Promise<any>} - The promise with the result
   */
  async logLine(level: Level, message: string, source: string): Promise<any> {
    if (level === undefined || message === undefined || source === undefined) {
      throw new Error(
        'The following are required parameters: level,message,source, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (level) {
      queryParams.push(serializeQuery('form', true, 'level', level));
    }
    if (message) {
      queryParams.push(serializeQuery('form', true, 'message', message));
    }
    if (source) {
      queryParams.push(serializeQuery('form', true, 'source', source));
    }
    const urlEndpoint = '/log';
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

  /**
   * @summary Logging a multi-line message
   * @description This endpoint will write multiple lines to the main Plex Media Server log in a single request. It takes a set of query strings as would normally sent to the above GET endpoint as a linefeed-separated block of POST data. The parameters for each query string match as above.


   * @returns {Promise<any>} - The promise with the result
   */
  async logMultiLine(): Promise<any> {
    const urlEndpoint = '/log';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
    const response: any = await this.httpClient.post(
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
   * @summary Enabling Papertrail
   * @description This endpoint will enable all Plex Media Serverlogs to be sent to the Papertrail networked logging site for a period of time.


   * @returns {Promise<any>} - The promise with the result
   */
  async enablePaperTrail(): Promise<any> {
    const urlEndpoint = '/log/networked';
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
