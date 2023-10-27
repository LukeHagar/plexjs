import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { SecurityType } from './models/SecurityType';
import { Scope } from './models/Scope';

import { serializeQuery } from '../../http/QuerySerializer';

export class SecurityService extends BaseService {
  /**
   * @summary Get a Transient Token.
   * @description This endpoint provides the caller with a temporary token with the same access level as the caller's token. These tokens are valid for up to 48 hours and are destroyed if the server instance is restarted.


   * @param type_ `delegation` - This is the only supported `type` parameter.
   * @param scope `all` - This is the only supported `scope` parameter.
   * @returns {Promise<any>} - The promise with the result
   */
  async getTransientToken(type: SecurityType, scope: Scope): Promise<any> {
    if (type === undefined || scope === undefined) {
      throw new Error(
        'The following are required parameters: type,scope, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (type) {
      queryParams.push(serializeQuery('form', true, 'type_', type));
    }
    if (scope) {
      queryParams.push(serializeQuery('form', true, 'scope', scope));
    }
    const urlEndpoint = '/security/token';
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
   * @summary Get Source Connection Information
   * @description If a caller requires connection details and a transient token for a source that is known to the server, for example a cloud media provider or shared PMS, then this endpoint can be called. This endpoint is only accessible with either an admin token or a valid transient token generated from an admin token.
Note: requires Plex Media Server >= 1.15.4.


   * @param source The source identifier with an included prefix.
   * @returns {Promise<any>} - The promise with the result
   */
  async getSourceConnectionInformation(source: string): Promise<any> {
    if (source === undefined) {
      throw new Error('The following parameter is required: source, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (source) {
      queryParams.push(serializeQuery('form', true, 'source', source));
    }
    const urlEndpoint = '/security/resources';
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
