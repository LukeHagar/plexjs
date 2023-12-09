import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { Download } from './models/Download';
import { Tonight } from './models/Tonight';
import { Skip } from './models/Skip';

import { serializeQuery } from '../../http/QuerySerializer';

export class UpdaterService extends BaseService {
  /**
   * @summary Querying status of updates
   * @description Querying status of updates

   * @returns {Promise<any>} - The promise with the result
   */
  async getUpdateStatus(): Promise<any> {
    const urlEndpoint = '/updater/status';
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
   * @summary Checking for updates
   * @description Checking for updates

   * @param optionalParams - Optional parameters
   * @param optionalParams.download - Indicate that you want to start download any updates found.
   * @returns {Promise<any>} - The promise with the result
   */
  async checkForUpdates(optionalParams: { download?: Download } = {}): Promise<any> {
    const { download } = optionalParams;

    const queryParams: string[] = [];
    if (download) {
      queryParams.push(serializeQuery('form', true, 'download', download));
    }
    const urlEndpoint = '/updater/check';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.put(
      finalUrl,
      { download },
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
   * @summary Apply Updates
   * @description Note that these two parameters are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed


   * @param optionalParams - Optional parameters
   * @param optionalParams.tonight - Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install
   * @param optionalParams.skip - Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.
   * @returns {Promise<any>} - The promise with the result
   */
  async applyUpdates(optionalParams: { tonight?: Tonight; skip?: Skip } = {}): Promise<any> {
    const { tonight, skip } = optionalParams;

    const queryParams: string[] = [];
    if (tonight) {
      queryParams.push(serializeQuery('form', true, 'tonight', tonight));
    }
    if (skip) {
      queryParams.push(serializeQuery('form', true, 'skip', skip));
    }
    const urlEndpoint = '/updater/apply';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.put(
      finalUrl,
      { tonight, skip },
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
