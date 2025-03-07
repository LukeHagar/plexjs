/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeBodyForm, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
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
import * as operations from "../sdk/models/operations/index.js";
import { PostUsersSignInDataServerList } from "../sdk/models/operations/postuserssignindata.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get User Sign In Data
 *
 * @remarks
 * Sign in user with username and password and return user data with Plex authentication token
 */
export function authenticationPostUsersSignInData(
  client: PlexAPICore,
  request: operations.PostUsersSignInDataRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.PostUsersSignInDataResponse,
    | errors.PostUsersSignInDataBadRequest
    | errors.PostUsersSignInDataUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: PlexAPICore,
  request: operations.PostUsersSignInDataRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.PostUsersSignInDataResponse,
      | errors.PostUsersSignInDataBadRequest
      | errors.PostUsersSignInDataUnauthorized
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.PostUsersSignInDataRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;

  const body = Object.entries(payload.RequestBody || {}).map(([k, v]) => {
    return encodeBodyForm(k, v, { charEncoding: "percent" });
  }).join("&");

  const baseURL = options?.serverURL
    || pathToFunc(PostUsersSignInDataServerList[0], {
      charEncoding: "percent",
    })();

  const path = pathToFunc("/users/signin")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    "X-Plex-Client-Identifier": encodeSimple(
      "X-Plex-Client-Identifier",
      payload.ClientID,
      { explode: false, charEncoding: "none" },
    ),
    "X-Plex-Product": encodeSimple("X-Plex-Product", payload.ClientName, {
      explode: false,
      charEncoding: "none",
    }),
    "X-Plex-Version": encodeSimple("X-Plex-Version", payload.ClientVersion, {
      explode: false,
      charEncoding: "none",
    }),
    "X-Plex-Device": encodeSimple("X-Plex-Device", payload.DeviceNickname, {
      explode: false,
      charEncoding: "none",
    }),
    "X-Plex-Platform": encodeSimple("X-Plex-Platform", payload.Platform, {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const context = {
    baseURL: baseURL ?? "",
    operationID: "post-users-sign-in-data",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "POST",
    baseURL: baseURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.PostUsersSignInDataResponse,
    | errors.PostUsersSignInDataBadRequest
    | errors.PostUsersSignInDataUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(201, operations.PostUsersSignInDataResponse$inboundSchema, {
      key: "UserPlexAccount",
    }),
    M.jsonErr(400, errors.PostUsersSignInDataBadRequest$inboundSchema),
    M.jsonErr(401, errors.PostUsersSignInDataUnauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
