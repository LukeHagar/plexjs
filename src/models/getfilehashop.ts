/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetFileHashRequest = {
    /**
     * This is the path to the local file, must be prefixed by `file://`
     */
    url: string;
    /**
     * Item type
     */
    type?: number | undefined;
};

export type GetFileHashErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetFileHashResponseBodyData = {
    errors?: Array<GetFileHashErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetFileHashResponseBody extends Error {
    errors?: Array<GetFileHashErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetFileHashResponseBodyData;

    constructor(err: GetFileHashResponseBodyData) {
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

        this.name = "GetFileHashResponseBody";
    }
}

export type GetFileHashResponse = {
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
};

/** @internal */
export const GetFileHashRequest$inboundSchema: z.ZodType<
    GetFileHashRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
    type: z.number().optional(),
});

/** @internal */
export type GetFileHashRequest$Outbound = {
    url: string;
    type?: number | undefined;
};

/** @internal */
export const GetFileHashRequest$outboundSchema: z.ZodType<
    GetFileHashRequest$Outbound,
    z.ZodTypeDef,
    GetFileHashRequest
> = z.object({
    url: z.string(),
    type: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFileHashRequest$ {
    /** @deprecated use `GetFileHashRequest$inboundSchema` instead. */
    export const inboundSchema = GetFileHashRequest$inboundSchema;
    /** @deprecated use `GetFileHashRequest$outboundSchema` instead. */
    export const outboundSchema = GetFileHashRequest$outboundSchema;
    /** @deprecated use `GetFileHashRequest$Outbound` instead. */
    export type Outbound = GetFileHashRequest$Outbound;
}

/** @internal */
export const GetFileHashErrors$inboundSchema: z.ZodType<GetFileHashErrors, z.ZodTypeDef, unknown> =
    z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

/** @internal */
export type GetFileHashErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetFileHashErrors$outboundSchema: z.ZodType<
    GetFileHashErrors$Outbound,
    z.ZodTypeDef,
    GetFileHashErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFileHashErrors$ {
    /** @deprecated use `GetFileHashErrors$inboundSchema` instead. */
    export const inboundSchema = GetFileHashErrors$inboundSchema;
    /** @deprecated use `GetFileHashErrors$outboundSchema` instead. */
    export const outboundSchema = GetFileHashErrors$outboundSchema;
    /** @deprecated use `GetFileHashErrors$Outbound` instead. */
    export type Outbound = GetFileHashErrors$Outbound;
}

/** @internal */
export const GetFileHashResponseBody$inboundSchema: z.ZodType<
    GetFileHashResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetFileHashErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetFileHashResponseBody(remapped);
    });

/** @internal */
export type GetFileHashResponseBody$Outbound = {
    errors?: Array<GetFileHashErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetFileHashResponseBody$outboundSchema: z.ZodType<
    GetFileHashResponseBody$Outbound,
    z.ZodTypeDef,
    GetFileHashResponseBody
> = z
    .instanceof(GetFileHashResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetFileHashErrors$outboundSchema)).optional(),
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
export namespace GetFileHashResponseBody$ {
    /** @deprecated use `GetFileHashResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetFileHashResponseBody$inboundSchema;
    /** @deprecated use `GetFileHashResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetFileHashResponseBody$outboundSchema;
    /** @deprecated use `GetFileHashResponseBody$Outbound` instead. */
    export type Outbound = GetFileHashResponseBody$Outbound;
}

/** @internal */
export const GetFileHashResponse$inboundSchema: z.ZodType<
    GetFileHashResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetFileHashResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetFileHashResponse$outboundSchema: z.ZodType<
    GetFileHashResponse$Outbound,
    z.ZodTypeDef,
    GetFileHashResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
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
export namespace GetFileHashResponse$ {
    /** @deprecated use `GetFileHashResponse$inboundSchema` instead. */
    export const inboundSchema = GetFileHashResponse$inboundSchema;
    /** @deprecated use `GetFileHashResponse$outboundSchema` instead. */
    export const outboundSchema = GetFileHashResponse$outboundSchema;
    /** @deprecated use `GetFileHashResponse$Outbound` instead. */
    export type Outbound = GetFileHashResponse$Outbound;
}
