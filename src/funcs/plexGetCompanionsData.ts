/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
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
import { PlexAPIError } from "../sdk/models/errors/plexapierror.js";
import { ResponseValidationError } from "../sdk/models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import { GetCompanionsDataServerList } from "../sdk/models/operations/getcompanionsdata.js";
import * as operations from "../sdk/models/operations/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Companions Data
 *
 * @remarks
 * Get Companions Data
 */
export function plexGetCompanionsData(
  client: PlexAPICore,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetCompanionsDataResponse,
    | errors.GetCompanionsDataBadRequest
    | errors.GetCompanionsDataUnauthorized
    | PlexAPIError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    options,
  ));
}

async function $do(
  client: PlexAPICore,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetCompanionsDataResponse,
      | errors.GetCompanionsDataBadRequest
      | errors.GetCompanionsDataUnauthorized
      | PlexAPIError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const baseURL = options?.serverURL
    || pathToFunc(GetCompanionsDataServerList[0], {
      charEncoding: "percent",
    })();

  const path = pathToFunc("/companions")();

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: baseURL ?? "",
    operationID: "getCompanionsData",
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
    baseURL: baseURL,
    path: path,
    headers: headers,
    userAgent: client._options.userAgent,
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
    operations.GetCompanionsDataResponse,
    | errors.GetCompanionsDataBadRequest
    | errors.GetCompanionsDataUnauthorized
    | PlexAPIError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.GetCompanionsDataResponse$inboundSchema, {
      key: "responseBodies",
    }),
    M.jsonErr(400, errors.GetCompanionsDataBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetCompanionsDataUnauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
