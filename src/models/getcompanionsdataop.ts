/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export const GetCompanionsDataOpServerList = ["https://plex.tv/api/v2"] as const;

export type GetCompanionsDataErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetCompanionsDataResponseBodyData = {
    errors?: Array<GetCompanionsDataErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetCompanionsDataResponseBody extends Error {
    errors?: Array<GetCompanionsDataErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetCompanionsDataResponseBodyData;

    constructor(err: GetCompanionsDataResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.name = "GetCompanionsDataResponseBody";
    }
}

export type ResponseBody = {
    identifier: string;
    baseURL: string;
    title: string;
    linkURL: string;
    provides: string;
    /**
     * The plex authtoken used to identify with
     */
    token: string;
};

export type GetCompanionsDataResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Companions Data
     */
    responseBodies?: Array<ResponseBody> | undefined;
};

/** @internal */
export const GetCompanionsDataErrors$inboundSchema: z.ZodType<
    GetCompanionsDataErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type GetCompanionsDataErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetCompanionsDataErrors$outboundSchema: z.ZodType<
    GetCompanionsDataErrors$Outbound,
    z.ZodTypeDef,
    GetCompanionsDataErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanionsDataErrors$ {
    /** @deprecated use `GetCompanionsDataErrors$inboundSchema` instead. */
    export const inboundSchema = GetCompanionsDataErrors$inboundSchema;
    /** @deprecated use `GetCompanionsDataErrors$outboundSchema` instead. */
    export const outboundSchema = GetCompanionsDataErrors$outboundSchema;
    /** @deprecated use `GetCompanionsDataErrors$Outbound` instead. */
    export type Outbound = GetCompanionsDataErrors$Outbound;
}

/** @internal */
export const GetCompanionsDataResponseBody$inboundSchema: z.ZodType<
    GetCompanionsDataResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetCompanionsDataErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetCompanionsDataResponseBody(remapped);
    });

/** @internal */
export type GetCompanionsDataResponseBody$Outbound = {
    errors?: Array<GetCompanionsDataErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetCompanionsDataResponseBody$outboundSchema: z.ZodType<
    GetCompanionsDataResponseBody$Outbound,
    z.ZodTypeDef,
    GetCompanionsDataResponseBody
> = z
    .instanceof(GetCompanionsDataResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetCompanionsDataErrors$outboundSchema)).optional(),
                rawResponse: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    rawResponse: "RawResponse",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanionsDataResponseBody$ {
    /** @deprecated use `GetCompanionsDataResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetCompanionsDataResponseBody$inboundSchema;
    /** @deprecated use `GetCompanionsDataResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetCompanionsDataResponseBody$outboundSchema;
    /** @deprecated use `GetCompanionsDataResponseBody$Outbound` instead. */
    export type Outbound = GetCompanionsDataResponseBody$Outbound;
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown> = z.object({
    identifier: z.string(),
    baseURL: z.string(),
    title: z.string(),
    linkURL: z.string(),
    provides: z.string(),
    token: z.string(),
});

/** @internal */
export type ResponseBody$Outbound = {
    identifier: string;
    baseURL: string;
    title: string;
    linkURL: string;
    provides: string;
    token: string;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
    ResponseBody$Outbound,
    z.ZodTypeDef,
    ResponseBody
> = z.object({
    identifier: z.string(),
    baseURL: z.string(),
    title: z.string(),
    linkURL: z.string(),
    provides: z.string(),
    token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
    /** @deprecated use `ResponseBody$inboundSchema` instead. */
    export const inboundSchema = ResponseBody$inboundSchema;
    /** @deprecated use `ResponseBody$outboundSchema` instead. */
    export const outboundSchema = ResponseBody$outboundSchema;
    /** @deprecated use `ResponseBody$Outbound` instead. */
    export type Outbound = ResponseBody$Outbound;
}

/** @internal */
export const GetCompanionsDataResponse$inboundSchema: z.ZodType<
    GetCompanionsDataResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        responseBodies: z.array(z.lazy(() => ResponseBody$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetCompanionsDataResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    responseBodies?: Array<ResponseBody$Outbound> | undefined;
};

/** @internal */
export const GetCompanionsDataResponse$outboundSchema: z.ZodType<
    GetCompanionsDataResponse$Outbound,
    z.ZodTypeDef,
    GetCompanionsDataResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        responseBodies: z.array(z.lazy(() => ResponseBody$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanionsDataResponse$ {
    /** @deprecated use `GetCompanionsDataResponse$inboundSchema` instead. */
    export const inboundSchema = GetCompanionsDataResponse$inboundSchema;
    /** @deprecated use `GetCompanionsDataResponse$outboundSchema` instead. */
    export const outboundSchema = GetCompanionsDataResponse$outboundSchema;
    /** @deprecated use `GetCompanionsDataResponse$Outbound` instead. */
    export type Outbound = GetCompanionsDataResponse$Outbound;
}
