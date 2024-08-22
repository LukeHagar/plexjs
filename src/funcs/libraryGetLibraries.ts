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
} from "../models/httpclienterrors.js";
import * as models from "../models/index.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Get All Libraries
 *
 * @remarks
 * A library section (commonly referred to as just a library) is a collection of media.
 * Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media.
 * For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.
 *
 * Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts.
 * This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).
 *
 */
export async function libraryGetLibraries(
    client$: PlexAPICore,
    options?: RequestOptions
): Promise<
    Result<
        models.GetLibrariesResponse,
        | models.GetLibrariesLibraryResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const path$ = pathToFunc("/library/sections")();

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const accessToken$ = await extractSecurity(client$.options$.accessToken);
    const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
    const context = {
        operationID: "getLibraries",
        oAuth2Scopes: [],
        securitySource: client$.options$.accessToken,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        models.GetLibrariesResponse,
        | models.GetLibrariesLibraryResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, models.GetLibrariesResponse$inboundSchema, { key: "object" }),
        m$.fail([400, "4XX", "5XX"]),
        m$.jsonErr(401, models.GetLibrariesLibraryResponseBody$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
