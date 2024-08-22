/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
 * Get Items Children
 *
 * @remarks
 * This endpoint will return the children of of a library item specified with the ratingKey.
 *
 */
export async function libraryGetMetadataChildren(
    client$: PlexAPICore,
    ratingKey: number,
    includeElements?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        models.GetMetadataChildrenResponse,
        | models.GetMetadataChildrenLibraryResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: models.GetMetadataChildrenRequest = {
        ratingKey: ratingKey,
        includeElements: includeElements,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => models.GetMetadataChildrenRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        ratingKey: encodeSimple$("ratingKey", payload$.ratingKey, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/library/metadata/{ratingKey}/children")(pathParams$);

    const query$ = encodeFormQuery$({
        includeElements: payload$.includeElements,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const accessToken$ = await extractSecurity(client$.options$.accessToken);
    const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
    const context = {
        operationID: "getMetadataChildren",
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
            query: query$,
            body: body$,
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
        models.GetMetadataChildrenResponse,
        | models.GetMetadataChildrenLibraryResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, models.GetMetadataChildrenResponse$inboundSchema, { key: "object" }),
        m$.fail([400, "4XX", "5XX"]),
        m$.jsonErr(401, models.GetMetadataChildrenLibraryResponseBody$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
