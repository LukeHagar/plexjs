/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetSourceConnectionInformationRequest = {
    /**
     * The source identifier with an included prefix.
     */
    source: string;
};

export type GetSourceConnectionInformationErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetSourceConnectionInformationResponseBodyData = {
    errors?: Array<GetSourceConnectionInformationErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetSourceConnectionInformationResponseBody extends Error {
    errors?: Array<GetSourceConnectionInformationErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSourceConnectionInformationResponseBodyData;

    constructor(err: GetSourceConnectionInformationResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetSourceConnectionInformationResponseBody";
    }
}

export type GetSourceConnectionInformationResponse = {
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
export namespace GetSourceConnectionInformationRequest$ {
    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        source: z.string(),
    });

    export type Outbound = {
        source: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationRequest
    > = z.object({
        source: z.string(),
    });
}

/** @internal */
export namespace GetSourceConnectionInformationErrors$ {
    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationErrors,
        z.ZodTypeDef,
        unknown
    > = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationErrors
    > = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetSourceConnectionInformationResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            errors: z
                .array(z.lazy(() => GetSourceConnectionInformationErrors$.inboundSchema))
                .optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetSourceConnectionInformationResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetSourceConnectionInformationErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationResponseBody
    > = z
        .instanceof(GetSourceConnectionInformationResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => GetSourceConnectionInformationErrors$.outboundSchema))
                        .optional(),
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
}

/** @internal */
export namespace GetSourceConnectionInformationResponse$ {
    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationResponse,
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

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationResponse
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
}
