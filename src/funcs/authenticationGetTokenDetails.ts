/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import * as m$ from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import { GetTokenDetailsServerList } from "../sdk/models/operations/gettokendetails.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Token Details
 *
 * @remarks
 * Get the User data from the provided X-Plex-Token
 */
export async function authenticationGetTokenDetails(
  client$: PlexAPICore,
  options?: RequestOptions & { serverURL?: string },
): Promise<
  Result<
    operations.GetTokenDetailsResponse,
    | errors.GetTokenDetailsBadRequest
    | errors.GetTokenDetailsUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const baseURL$ = options?.serverURL
    || pathToFunc(GetTokenDetailsServerList[0], { charEncoding: "percent" })();

  const path$ = pathToFunc("/user")();

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const accessToken$ = await extractSecurity(client$.options$.accessToken);
  const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
  const context = {
    operationID: "getTokenDetails",
    oAuth2Scopes: [],
    securitySource: client$.options$.accessToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    baseURL: baseURL$,
    path: path$,
    headers: headers$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.GetTokenDetailsResponse,
    | errors.GetTokenDetailsBadRequest
    | errors.GetTokenDetailsUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetTokenDetailsResponse$inboundSchema, {
      key: "UserPlexAccount",
    }),
    m$.jsonErr(400, errors.GetTokenDetailsBadRequest$inboundSchema),
    m$.jsonErr(401, errors.GetTokenDetailsUnauthorized$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}