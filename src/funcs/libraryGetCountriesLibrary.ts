/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
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
 * Get Countries of library media
 *
 * @remarks
 * Retrieves a list of all the countries that are found for the media in this library.
 */
export function libraryGetCountriesLibrary(
  client: PlexAPICore,
  sectionKey: number,
  type: operations.GetCountriesLibraryQueryParamType,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetCountriesLibraryResponse,
    | errors.GetCountriesLibraryBadRequest
    | errors.GetCountriesLibraryUnauthorized
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
    sectionKey,
    type,
    options,
  ));
}

async function $do(
  client: PlexAPICore,
  sectionKey: number,
  type: operations.GetCountriesLibraryQueryParamType,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetCountriesLibraryResponse,
      | errors.GetCountriesLibraryBadRequest
      | errors.GetCountriesLibraryUnauthorized
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
  const input: operations.GetCountriesLibraryRequest = {
    sectionKey: sectionKey,
    type: type,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.GetCountriesLibraryRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    sectionKey: encodeSimple("sectionKey", payload.sectionKey, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/library/sections/{sectionKey}/country")(pathParams);

  const query = encodeFormQuery({
    "type": payload.type,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get-countries-library",
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
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "404", "4XX", "5XX"],
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
    operations.GetCountriesLibraryResponse,
    | errors.GetCountriesLibraryBadRequest
    | errors.GetCountriesLibraryUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetCountriesLibraryResponse$inboundSchema, {
      key: "object",
    }),
    M.jsonErr(400, errors.GetCountriesLibraryBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetCountriesLibraryUnauthorized$inboundSchema),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
