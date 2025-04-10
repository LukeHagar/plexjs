/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { plexGetCompanionsData } from "../funcs/plexGetCompanionsData.js";
import { plexGetGeoData } from "../funcs/plexGetGeoData.js";
import { plexGetHomeData } from "../funcs/plexGetHomeData.js";
import { plexGetPin } from "../funcs/plexGetPin.js";
import { plexGetServerResources } from "../funcs/plexGetServerResources.js";
import { plexGetTokenByPinId } from "../funcs/plexGetTokenByPinId.js";
import { plexGetUserFriends } from "../funcs/plexGetUserFriends.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Plex extends ClientSDK {
  /**
   * Get Companions Data
   *
   * @remarks
   * Get Companions Data
   */
  async getCompanionsData(
    options?: RequestOptions,
  ): Promise<operations.GetCompanionsDataResponse> {
    return unwrapAsync(plexGetCompanionsData(
      this,
      options,
    ));
  }

  /**
   * Get list of friends of the user logged in
   *
   * @remarks
   * Get friends of provided auth token.
   */
  async getUserFriends(
    options?: RequestOptions,
  ): Promise<operations.GetUserFriendsResponse> {
    return unwrapAsync(plexGetUserFriends(
      this,
      options,
    ));
  }

  /**
   * Get Geo Data
   *
   * @remarks
   * Returns the geolocation and locale data of the caller
   */
  async getGeoData(
    options?: RequestOptions,
  ): Promise<operations.GetGeoDataResponse> {
    return unwrapAsync(plexGetGeoData(
      this,
      options,
    ));
  }

  /**
   * Get Plex Home Data
   *
   * @remarks
   * Retrieves the home data for the authenticated user, including details like home ID, name, guest access information, and subscription status.
   */
  async getHomeData(
    options?: RequestOptions,
  ): Promise<operations.GetHomeDataResponse> {
    return unwrapAsync(plexGetHomeData(
      this,
      options,
    ));
  }

  /**
   * Get Server Resources
   *
   * @remarks
   * Get Plex server access tokens and server connections
   */
  async getServerResources(
    clientID: string,
    includeHttps?: operations.IncludeHttps | undefined,
    includeRelay?: operations.IncludeRelay | undefined,
    includeIPv6?: operations.IncludeIPv6 | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetServerResourcesResponse> {
    return unwrapAsync(plexGetServerResources(
      this,
      clientID,
      includeHttps,
      includeRelay,
      includeIPv6,
      options,
    ));
  }

  /**
   * Get a Pin
   *
   * @remarks
   * Retrieve a Pin ID from Plex.tv to use for authentication flows
   */
  async getPin(
    request: operations.GetPinRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPinResponse> {
    return unwrapAsync(plexGetPin(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Access Token by PinId
   *
   * @remarks
   * Retrieve an Access Token from Plex.tv after the Pin has been authenticated
   */
  async getTokenByPinId(
    request: operations.GetTokenByPinIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetTokenByPinIdResponse> {
    return unwrapAsync(plexGetTokenByPinId(
      this,
      request,
      options,
    ));
  }
}
