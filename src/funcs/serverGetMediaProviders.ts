/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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
import * as operations from "../sdk/models/operations/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Media Providers
 *
 * @remarks
 * Retrieves media providers and their features from the Plex server.
 */
export function serverGetMediaProviders(
  client: PlexAPICore,
  xPlexToken: string,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetMediaProvidersResponse,
    | errors.GetMediaProvidersBadRequest
    | errors.GetMediaProvidersUnauthorized
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
    xPlexToken,
    options,
  ));
}

async function $do(
  client: PlexAPICore,
  xPlexToken: string,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetMediaProvidersResponse,
      | errors.GetMediaProvidersBadRequest
      | errors.GetMediaProvidersUnauthorized
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
  const input: operations.GetMediaProvidersRequest = {
    xPlexToken: xPlexToken,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetMediaProvidersRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/media/providers")();

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "X-Plex-Token": encodeSimple("X-Plex-Token", payload["X-Plex-Token"], {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get-media-providers",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.accessToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
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
    operations.GetMediaProvidersResponse,
    | errors.GetMediaProvidersBadRequest
    | errors.GetMediaProvidersUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetMediaProvidersResponse$inboundSchema, {
      key: "object",
    }),
    M.jsonErr(400, errors.GetMediaProvidersBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetMediaProvidersUnauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
