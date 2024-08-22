/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

/**
 * Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install
 */
export enum Tonight {
    Zero = 0,
    One = 1,
}

/**
 * Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.
 */
export enum Skip {
    Zero = 0,
    One = 1,
}

export type ApplyUpdatesRequest = {
    /**
     * Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install
     */
    tonight?: Tonight | undefined;
    /**
     * Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.
     */
    skip?: Skip | undefined;
};

export type ApplyUpdatesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type ApplyUpdatesResponseBodyData = {
    errors?: Array<ApplyUpdatesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class ApplyUpdatesResponseBody extends Error {
    errors?: Array<ApplyUpdatesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: ApplyUpdatesResponseBodyData;

    constructor(err: ApplyUpdatesResponseBodyData) {
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

        this.name = "ApplyUpdatesResponseBody";
    }
}

export type ApplyUpdatesResponse = {
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
export const Tonight$inboundSchema: z.ZodNativeEnum<typeof Tonight> = z.nativeEnum(Tonight);

/** @internal */
export const Tonight$outboundSchema: z.ZodNativeEnum<typeof Tonight> = Tonight$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tonight$ {
    /** @deprecated use `Tonight$inboundSchema` instead. */
    export const inboundSchema = Tonight$inboundSchema;
    /** @deprecated use `Tonight$outboundSchema` instead. */
    export const outboundSchema = Tonight$outboundSchema;
}

/** @internal */
export const Skip$inboundSchema: z.ZodNativeEnum<typeof Skip> = z.nativeEnum(Skip);

/** @internal */
export const Skip$outboundSchema: z.ZodNativeEnum<typeof Skip> = Skip$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Skip$ {
    /** @deprecated use `Skip$inboundSchema` instead. */
    export const inboundSchema = Skip$inboundSchema;
    /** @deprecated use `Skip$outboundSchema` instead. */
    export const outboundSchema = Skip$outboundSchema;
}

/** @internal */
export const ApplyUpdatesRequest$inboundSchema: z.ZodType<
    ApplyUpdatesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    tonight: Tonight$inboundSchema.optional(),
    skip: Skip$inboundSchema.optional(),
});

/** @internal */
export type ApplyUpdatesRequest$Outbound = {
    tonight?: number | undefined;
    skip?: number | undefined;
};

/** @internal */
export const ApplyUpdatesRequest$outboundSchema: z.ZodType<
    ApplyUpdatesRequest$Outbound,
    z.ZodTypeDef,
    ApplyUpdatesRequest
> = z.object({
    tonight: Tonight$outboundSchema.optional(),
    skip: Skip$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesRequest$ {
    /** @deprecated use `ApplyUpdatesRequest$inboundSchema` instead. */
    export const inboundSchema = ApplyUpdatesRequest$inboundSchema;
    /** @deprecated use `ApplyUpdatesRequest$outboundSchema` instead. */
    export const outboundSchema = ApplyUpdatesRequest$outboundSchema;
    /** @deprecated use `ApplyUpdatesRequest$Outbound` instead. */
    export type Outbound = ApplyUpdatesRequest$Outbound;
}

/** @internal */
export const ApplyUpdatesErrors$inboundSchema: z.ZodType<
    ApplyUpdatesErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type ApplyUpdatesErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const ApplyUpdatesErrors$outboundSchema: z.ZodType<
    ApplyUpdatesErrors$Outbound,
    z.ZodTypeDef,
    ApplyUpdatesErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesErrors$ {
    /** @deprecated use `ApplyUpdatesErrors$inboundSchema` instead. */
    export const inboundSchema = ApplyUpdatesErrors$inboundSchema;
    /** @deprecated use `ApplyUpdatesErrors$outboundSchema` instead. */
    export const outboundSchema = ApplyUpdatesErrors$outboundSchema;
    /** @deprecated use `ApplyUpdatesErrors$Outbound` instead. */
    export type Outbound = ApplyUpdatesErrors$Outbound;
}

/** @internal */
export const ApplyUpdatesResponseBody$inboundSchema: z.ZodType<
    ApplyUpdatesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => ApplyUpdatesErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new ApplyUpdatesResponseBody(remapped);
    });

/** @internal */
export type ApplyUpdatesResponseBody$Outbound = {
    errors?: Array<ApplyUpdatesErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const ApplyUpdatesResponseBody$outboundSchema: z.ZodType<
    ApplyUpdatesResponseBody$Outbound,
    z.ZodTypeDef,
    ApplyUpdatesResponseBody
> = z
    .instanceof(ApplyUpdatesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => ApplyUpdatesErrors$outboundSchema)).optional(),
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
export namespace ApplyUpdatesResponseBody$ {
    /** @deprecated use `ApplyUpdatesResponseBody$inboundSchema` instead. */
    export const inboundSchema = ApplyUpdatesResponseBody$inboundSchema;
    /** @deprecated use `ApplyUpdatesResponseBody$outboundSchema` instead. */
    export const outboundSchema = ApplyUpdatesResponseBody$outboundSchema;
    /** @deprecated use `ApplyUpdatesResponseBody$Outbound` instead. */
    export type Outbound = ApplyUpdatesResponseBody$Outbound;
}

/** @internal */
export const ApplyUpdatesResponse$inboundSchema: z.ZodType<
    ApplyUpdatesResponse,
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
export type ApplyUpdatesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const ApplyUpdatesResponse$outboundSchema: z.ZodType<
    ApplyUpdatesResponse$Outbound,
    z.ZodTypeDef,
    ApplyUpdatesResponse
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
export namespace ApplyUpdatesResponse$ {
    /** @deprecated use `ApplyUpdatesResponse$inboundSchema` instead. */
    export const inboundSchema = ApplyUpdatesResponse$inboundSchema;
    /** @deprecated use `ApplyUpdatesResponse$outboundSchema` instead. */
    export const outboundSchema = ApplyUpdatesResponse$outboundSchema;
    /** @deprecated use `ApplyUpdatesResponse$Outbound` instead. */
    export type Outbound = ApplyUpdatesResponse$Outbound;
}
