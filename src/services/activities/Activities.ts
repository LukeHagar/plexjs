import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetServerActivitiesResponse } from './models/GetServerActivitiesResponse';

import { serializePath } from '../../http/QuerySerializer';

export class ActivitiesService extends BaseService {
  /**
   * @summary Get Server Activities
   * @description Get Server Activities

   * @returns {Promise<Response<GetServerActivitiesResponse>>} - The promise with the result
   */
  async getServerActivities(): Promise<Response<GetServerActivitiesResponse>> {
    const urlEndpoint = '/activities';
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

  /**
   * @summary Cancel Server Activities
   * @description Cancel Server Activities

   * @param activityUUID The UUID of the activity to cancel.
   * @returns {Promise<any>} - The promise with the result
   */
  async cancelServerActivities(activityUuid: string): Promise<any> {
    if (activityUuid === undefined) {
      throw new Error(
        'The following parameter is required: activityUuid, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/activities/{activityUUID}';
    urlEndpoint = urlEndpoint.replace(
      '{activityUUID}',
      encodeURIComponent(serializePath('simple', false, activityUuid, undefined)),
    );
    const finalUrl = `${this.baseUrl + urlEndpoint}`;
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
