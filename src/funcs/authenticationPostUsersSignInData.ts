/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeBodyForm, encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
import { Result } from "../sdk/types/fp.js";

/**
 * Get User Sign In Data
 *
 * @remarks
 * Sign in user with username and password and return user data with Plex authentication token
 */
export async function authenticationPostUsersSignInData(
  client: PlexAPICore,
  request: operations.PostUsersSignInDataRequest,
  options?: RequestOptions & { serverURL?: string },
): Promise<
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
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations.PostUsersSignInDataRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
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

  const query = encodeFormQuery({
    "X-Plex-Client-Identifier": client._options.clientID,
    "X-Plex-Client-Identifier": payload.ClientID,
    "X-Plex-Device": payload.DeviceName,
    "X-Plex-Device": client._options.deviceName,
    "X-Plex-Platform": client._options.clientPlatform,
    "X-Plex-Platform": payload.ClientPlatform,
    "X-Plex-Product": client._options.clientName,
    "X-Plex-Product": payload.ClientName,
    "X-Plex-Version": payload.ClientVersion,
    "X-Plex-Version": client._options.clientVersion,
  });

  const headers = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  });

  const context = {
    operationID: "post-users-sign-in-data",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client._createRequest(context, {
    method: "POST",
    baseURL: baseURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
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
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
