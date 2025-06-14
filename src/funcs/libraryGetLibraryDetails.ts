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
import { PlexAPIError } from "../sdk/models/errors/plexapierror.js";
import { ResponseValidationError } from "../sdk/models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Library Details
 *
 * @remarks
 * ## Library Details Endpoint
 *
 * This endpoint provides comprehensive details about the library, focusing on organizational aspects rather than the content itself.
 *
 * The details include:
 *
 * ### Directories
 * Organized into three categories:
 *
 * - **Primary Directories**:
 *   - Used in some clients for quick access to media subsets (e.g., "All", "On Deck").
 *   - Most can be replicated via media queries.
 *   - Customizable by users.
 *
 * - **Secondary Directories**:
 *   - Marked with `secondary="1"`.
 *   - Used in older clients for structured navigation.
 *
 * - **Special Directories**:
 *   - Includes a "By Folder" entry for filesystem-based browsing.
 *   - Contains an obsolete `search="1"` entry for on-the-fly search dialog creation.
 *
 * ### Types
 * Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:
 *
 * - **Type Object Attributes**:
 *   - `key`: Endpoint for the media list of this type.
 *   - `type`: Metadata type (if standard Plex type).
 *   - `title`: Title for this content type (e.g., "Movies").
 *
 * - **Filter Objects**:
 *   - Subset of the media query language.
 *   - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.
 *
 * - **Sort Objects**:
 *   - Description of sort fields.
 *   - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.
 *
 * > **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.
 */
export function libraryGetLibraryDetails(
  client: PlexAPICore,
  sectionKey: number,
  includeDetails?: operations.IncludeDetails | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetLibraryDetailsResponse,
    | errors.GetLibraryDetailsBadRequest
    | errors.GetLibraryDetailsUnauthorized
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
    sectionKey,
    includeDetails,
    options,
  ));
}

async function $do(
  client: PlexAPICore,
  sectionKey: number,
  includeDetails?: operations.IncludeDetails | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetLibraryDetailsResponse,
      | errors.GetLibraryDetailsBadRequest
      | errors.GetLibraryDetailsUnauthorized
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
  const input: operations.GetLibraryDetailsRequest = {
    sectionKey: sectionKey,
    includeDetails: includeDetails,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetLibraryDetailsRequest$outboundSchema.parse(value),
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

  const path = pathToFunc("/library/sections/{sectionKey}")(pathParams);

  const query = encodeFormQuery({
    "includeDetails": payload.includeDetails,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get-library-details",
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
    operations.GetLibraryDetailsResponse,
    | errors.GetLibraryDetailsBadRequest
    | errors.GetLibraryDetailsUnauthorized
    | PlexAPIError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.GetLibraryDetailsResponse$inboundSchema, {
      key: "object",
    }),
    M.jsonErr(400, errors.GetLibraryDetailsBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetLibraryDetailsUnauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
