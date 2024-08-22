/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import {
    encodeBodyForm as encodeBodyForm$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/httpclienterrors.js";
import * as models from "../models/index.js";
import { PostUsersSigninDataOpServerList } from "../models/postuserssignindataop.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Get User SignIn Data
 *
 * @remarks
 * Sign in user with username and password and return user data with Plex authentication token
 */
export async function userPostUsersSigninData(
    client$: PlexAPICore,
    xPlexClientIdentifier?: string | undefined,
    requestBody?: models.PostUsersSigninDataRequestBody | undefined,
    options?: RequestOptions & { serverURL?: string }
): Promise<
    Result<
        models.PostUsersSigninDataResponse,
        | models.PostUsersSigninDataResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: models.PostUsersSigninDataRequest = {
        xPlexClientIdentifier: xPlexClientIdentifier,
        requestBody: requestBody,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => models.PostUsersSigninDataRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = Object.entries(payload$.RequestBody || {})
        .map(([k, v]) => {
            return encodeBodyForm$(k, v, { charEncoding: "percent" });
        })
        .join("&");

    const baseURL$ =
        options?.serverURL ||
        pathToFunc(PostUsersSigninDataOpServerList[0], { charEncoding: "percent" })();

    const path$ = pathToFunc("/users/signin")();

    const headers$ = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "X-Plex-Client-Identifier": encodeSimple$(
            "X-Plex-Client-Identifier",
            payload$["X-Plex-Client-Identifier"] ?? client$.options$.xPlexClientIdentifier,
            { explode: false, charEncoding: "none" }
        ),
    });

    const context = {
        operationID: "post-users-signin-data",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "POST",
            baseURL: baseURL$,
            path: path$,
            headers: headers$,
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
        models.PostUsersSigninDataResponse,
        | models.PostUsersSigninDataResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(201, models.PostUsersSigninDataResponse$inboundSchema, { key: "UserPlexAccount" }),
        m$.fail([400, "4XX", "5XX"]),
        m$.jsonErr(401, models.PostUsersSigninDataResponseBody$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
