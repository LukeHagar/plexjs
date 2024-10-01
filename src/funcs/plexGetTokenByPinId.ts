/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
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
import { GetTokenByPinIdServerList } from "../sdk/models/operations/gettokenbypinid.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Access Token by PinId
 *
 * @remarks
 * Retrieve an Access Token from Plex.tv after the Pin has been authenticated
 */
export async function plexGetTokenByPinId(
  client: PlexAPICore,
  request: operations.GetTokenByPinIdRequest,
  options?: RequestOptions & { serverURL?: string },
): Promise<
  Result<
    operations.GetTokenByPinIdResponse,
    | errors.GetTokenByPinIdBadRequest
    | errors.GetTokenByPinIdResponseBody
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
    (value) => operations.GetTokenByPinIdRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const baseURL = options?.serverURL
    || pathToFunc(GetTokenByPinIdServerList[0], { charEncoding: "percent" })();

  const pathParams = {
    pinID: encodeSimple("pinID", payload.pinID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/pins/{pinID}")(pathParams);

  const query = encodeFormQuery({
    "X-Plex-Client-Identifier": client._options.clientID,
    "X-Plex-Client-Identifier": payload.ClientID,
    "X-Plex-Device": client._options.deviceName,
    "X-Plex-Device": payload.DeviceName,
    "X-Plex-Platform": payload.ClientPlatform,
    "X-Plex-Platform": client._options.clientPlatform,
    "X-Plex-Product": client._options.clientName,
    "X-Plex-Product": payload.ClientName,
    "X-Plex-Version": payload.ClientVersion,
    "X-Plex-Version": client._options.clientVersion,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const context = {
    operationID: "getTokenByPinId",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client._createRequest(context, {
    method: "GET",
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
    errorCodes: ["400", "404", "4XX", "5XX"],
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
    operations.GetTokenByPinIdResponse,
    | errors.GetTokenByPinIdBadRequest
    | errors.GetTokenByPinIdResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetTokenByPinIdResponse$inboundSchema, {
      key: "AuthPinContainer",
    }),
    M.jsonErr(400, errors.GetTokenByPinIdBadRequest$inboundSchema),
    M.jsonErr(404, errors.GetTokenByPinIdResponseBody$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
