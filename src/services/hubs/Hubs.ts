import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { OnlyTransient } from './models/OnlyTransient';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class HubsService extends BaseService {
  /**
   * @summary Get Global Hubs
   * @description Get Global Hubs filtered by the parameters provided.

   * @param optionalParams - Optional parameters
   * @param optionalParams.count - The number of items to return with each hub.
   * @param optionalParams.onlyTransient - Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
   * @returns {Promise<any>} - The promise with the result
   */
  async getGlobalHubs(
    optionalParams: { count?: number; onlyTransient?: OnlyTransient } = {},
  ): Promise<any> {
    const { count, onlyTransient } = optionalParams;

    const queryParams: string[] = [];
    if (count) {
      queryParams.push(serializeQuery('form', true, 'count', count));
    }
    if (onlyTransient) {
      queryParams.push(serializeQuery('form', true, 'onlyTransient', onlyTransient));
    }
    const urlEndpoint = '/hubs';
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
   * @summary Get library specific hubs
   * @description This endpoint will return a list of library specific hubs


   * @param sectionId the Id of the library to query
   * @param optionalParams - Optional parameters
   * @param optionalParams.count - The number of items to return with each hub.
   * @param optionalParams.onlyTransient - Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
   * @returns {Promise<any>} - The promise with the result
   */
  async getLibraryHubs(
    sectionId: number,
    optionalParams: { count?: number; onlyTransient?: OnlyTransient } = {},
  ): Promise<any> {
    const { count, onlyTransient } = optionalParams;
    if (sectionId === undefined) {
      throw new Error('The following parameter is required: sectionId, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/hubs/sections/{sectionId}';
    urlEndpoint = urlEndpoint.replace(
      '{sectionId}',
      encodeURIComponent(serializePath('simple', false, sectionId, undefined)),
    );
    if (count) {
      queryParams.push(serializeQuery('form', true, 'count', count));
    }
    if (onlyTransient) {
      queryParams.push(serializeQuery('form', true, 'onlyTransient', onlyTransient));
    }
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
}
