/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { activitiesCancelServerActivities } from "../funcs/activitiesCancelServerActivities.js";
import { activitiesGetServerActivities } from "../funcs/activitiesGetServerActivities.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Activities extends ClientSDK {
  /**
   * Get Server Activities
   *
   * @remarks
   * Get Server Activities
   */
  async getServerActivities(
    options?: RequestOptions,
  ): Promise<operations.GetServerActivitiesResponse> {
    return unwrapAsync(activitiesGetServerActivities(
      this,
      options,
    ));
  }

  /**
   * Cancel Server Activities
   *
   * @remarks
   * Cancel Server Activities
   */
  async cancelServerActivities(
    activityUUID: string,
    options?: RequestOptions,
  ): Promise<operations.CancelServerActivitiesResponse> {
    return unwrapAsync(activitiesCancelServerActivities(
      this,
      activityUUID,
      options,
    ));
  }
}
