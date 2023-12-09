import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { GetServerCapabilitiesResponse } from './models/GetServerCapabilitiesResponse';
import { GetAvailableClientsResponse } from './models/GetAvailableClientsResponse';
import { GetDevicesResponse } from './models/GetDevicesResponse';
import { GetServerIdentityResponse } from './models/GetServerIdentityResponse';
import { GetMyPlexAccountResponse } from './models/GetMyPlexAccountResponse';
import { MinSize } from './models/MinSize';
import { Upscale } from './models/Upscale';
import { GetServerListResponse } from './models/GetServerListResponse';

import { serializeQuery } from '../../http/QuerySerializer';

export class ServerService extends BaseService {
  /**
   * @summary Server Capabilities
   * @description Server Capabilities

   * @returns {Promise<Response<GetServerCapabilitiesResponse>>} - The promise with the result
   */
  async getServerCapabilities(): Promise<Response<GetServerCapabilitiesResponse>> {
    const urlEndpoint = '/';
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
   * @summary Get Server Preferences
   * @description Get Server Preferences

   * @returns {Promise<any>} - The promise with the result
   */
  async getServerPreferences(): Promise<any> {
    const urlEndpoint = '/:/prefs';
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
   * @summary Get Available Clients
   * @description Get Available Clients

   * @returns {Promise<Response<GetAvailableClientsResponse>>} - The promise with the result
   */
  async getAvailableClients(): Promise<Response<GetAvailableClientsResponse>> {
    const urlEndpoint = '/clients';
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
   * @summary Get Devices
   * @description Get Devices

   * @returns {Promise<Response<GetDevicesResponse>>} - The promise with the result
   */
  async getDevices(): Promise<Response<GetDevicesResponse>> {
    const urlEndpoint = '/devices';
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
   * @summary Get Server Identity
   * @description Get Server Identity

   * @returns {Promise<Response<GetServerIdentityResponse>>} - The promise with the result
   */
  async getServerIdentity(): Promise<Response<GetServerIdentityResponse>> {
    const urlEndpoint = '/identity';
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
   * @summary Get MyPlex Account
   * @description Returns MyPlex Account Information

   * @returns {Promise<Response<GetMyPlexAccountResponse>>} - The promise with the result
   */
  async getMyPlexAccount(): Promise<Response<GetMyPlexAccountResponse>> {
    const urlEndpoint = '/myplex/account';
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
   * @summary Get a Resized Photo
   * @description Plex's Photo transcoder is used throughout the service to serve images at specified sizes.


   * @param width The width for the resized photo
   * @param height The height for the resized photo
   * @param opacity The opacity for the resized photo
   * @param blur The width for the resized photo
   * @param minSize images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against.
   * @param upscale allow images to be resized beyond native dimensions.
   * @param url path to image within Plex
   * @returns {Promise<any>} - The promise with the result
   */
  async getResizedPhoto(
    width: number,
    height: number,
    opacity: number,
    blur: number,
    minSize: MinSize,
    upscale: Upscale,
    url: string,
  ): Promise<any> {
    if (
      width === undefined ||
      height === undefined ||
      opacity === undefined ||
      blur === undefined ||
      minSize === undefined ||
      upscale === undefined ||
      url === undefined
    ) {
      throw new Error(
        'The following are required parameters: width,height,opacity,blur,minSize,upscale,url, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (width) {
      queryParams.push(serializeQuery('form', true, 'width', width));
    }
    if (height) {
      queryParams.push(serializeQuery('form', true, 'height', height));
    }
    if (opacity) {
      queryParams.push(serializeQuery('form', true, 'opacity', opacity));
    }
    if (blur) {
      queryParams.push(serializeQuery('form', true, 'blur', blur));
    }
    if (minSize) {
      queryParams.push(serializeQuery('form', true, 'minSize', minSize));
    }
    if (upscale) {
      queryParams.push(serializeQuery('form', true, 'upscale', upscale));
    }
    if (url) {
      queryParams.push(serializeQuery('form', true, 'url', url));
    }
    const urlEndpoint = '/photo/:/transcode';
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
   * @summary Get Server List
   * @description Get Server List

   * @returns {Promise<Response<GetServerListResponse>>} - The promise with the result
   */
  async getServerList(): Promise<Response<GetServerListResponse>> {
    const urlEndpoint = '/servers';
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
}
