/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ClearPlaylistContentsPlaylistsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type ClearPlaylistContentsPlaylistsResponseBodyData = {
    errors?: Array<ClearPlaylistContentsPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class ClearPlaylistContentsPlaylistsResponseBody extends Error {
    errors?: Array<ClearPlaylistContentsPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: ClearPlaylistContentsPlaylistsResponseBodyData;

    constructor(err: ClearPlaylistContentsPlaylistsResponseBodyData) {
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

        this.name = "ClearPlaylistContentsPlaylistsResponseBody";
    }
}

export type ClearPlaylistContentsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type ClearPlaylistContentsResponseBodyData = {
    errors?: Array<ClearPlaylistContentsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class ClearPlaylistContentsResponseBody extends Error {
    errors?: Array<ClearPlaylistContentsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: ClearPlaylistContentsResponseBodyData;

    constructor(err: ClearPlaylistContentsResponseBodyData) {
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

        this.name = "ClearPlaylistContentsResponseBody";
    }
}

/** @internal */
export const ClearPlaylistContentsPlaylistsErrors$inboundSchema: z.ZodType<
    ClearPlaylistContentsPlaylistsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type ClearPlaylistContentsPlaylistsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const ClearPlaylistContentsPlaylistsErrors$outboundSchema: z.ZodType<
    ClearPlaylistContentsPlaylistsErrors$Outbound,
    z.ZodTypeDef,
    ClearPlaylistContentsPlaylistsErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClearPlaylistContentsPlaylistsErrors$ {
    /** @deprecated use `ClearPlaylistContentsPlaylistsErrors$inboundSchema` instead. */
    export const inboundSchema = ClearPlaylistContentsPlaylistsErrors$inboundSchema;
    /** @deprecated use `ClearPlaylistContentsPlaylistsErrors$outboundSchema` instead. */
    export const outboundSchema = ClearPlaylistContentsPlaylistsErrors$outboundSchema;
    /** @deprecated use `ClearPlaylistContentsPlaylistsErrors$Outbound` instead. */
    export type Outbound = ClearPlaylistContentsPlaylistsErrors$Outbound;
}

/** @internal */
export const ClearPlaylistContentsPlaylistsResponseBody$inboundSchema: z.ZodType<
    ClearPlaylistContentsPlaylistsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z
            .array(z.lazy(() => ClearPlaylistContentsPlaylistsErrors$inboundSchema))
            .optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new ClearPlaylistContentsPlaylistsResponseBody(remapped);
    });

/** @internal */
export type ClearPlaylistContentsPlaylistsResponseBody$Outbound = {
    errors?: Array<ClearPlaylistContentsPlaylistsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const ClearPlaylistContentsPlaylistsResponseBody$outboundSchema: z.ZodType<
    ClearPlaylistContentsPlaylistsResponseBody$Outbound,
    z.ZodTypeDef,
    ClearPlaylistContentsPlaylistsResponseBody
> = z
    .instanceof(ClearPlaylistContentsPlaylistsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z
                    .array(z.lazy(() => ClearPlaylistContentsPlaylistsErrors$outboundSchema))
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClearPlaylistContentsPlaylistsResponseBody$ {
    /** @deprecated use `ClearPlaylistContentsPlaylistsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ClearPlaylistContentsPlaylistsResponseBody$inboundSchema;
    /** @deprecated use `ClearPlaylistContentsPlaylistsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ClearPlaylistContentsPlaylistsResponseBody$outboundSchema;
    /** @deprecated use `ClearPlaylistContentsPlaylistsResponseBody$Outbound` instead. */
    export type Outbound = ClearPlaylistContentsPlaylistsResponseBody$Outbound;
}

/** @internal */
export const ClearPlaylistContentsErrors$inboundSchema: z.ZodType<
    ClearPlaylistContentsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type ClearPlaylistContentsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const ClearPlaylistContentsErrors$outboundSchema: z.ZodType<
    ClearPlaylistContentsErrors$Outbound,
    z.ZodTypeDef,
    ClearPlaylistContentsErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClearPlaylistContentsErrors$ {
    /** @deprecated use `ClearPlaylistContentsErrors$inboundSchema` instead. */
    export const inboundSchema = ClearPlaylistContentsErrors$inboundSchema;
    /** @deprecated use `ClearPlaylistContentsErrors$outboundSchema` instead. */
    export const outboundSchema = ClearPlaylistContentsErrors$outboundSchema;
    /** @deprecated use `ClearPlaylistContentsErrors$Outbound` instead. */
    export type Outbound = ClearPlaylistContentsErrors$Outbound;
}

/** @internal */
export const ClearPlaylistContentsResponseBody$inboundSchema: z.ZodType<
    ClearPlaylistContentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => ClearPlaylistContentsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new ClearPlaylistContentsResponseBody(remapped);
    });

/** @internal */
export type ClearPlaylistContentsResponseBody$Outbound = {
    errors?: Array<ClearPlaylistContentsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const ClearPlaylistContentsResponseBody$outboundSchema: z.ZodType<
    ClearPlaylistContentsResponseBody$Outbound,
    z.ZodTypeDef,
    ClearPlaylistContentsResponseBody
> = z
    .instanceof(ClearPlaylistContentsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z
                    .array(z.lazy(() => ClearPlaylistContentsErrors$outboundSchema))
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClearPlaylistContentsResponseBody$ {
    /** @deprecated use `ClearPlaylistContentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ClearPlaylistContentsResponseBody$inboundSchema;
    /** @deprecated use `ClearPlaylistContentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ClearPlaylistContentsResponseBody$outboundSchema;
    /** @deprecated use `ClearPlaylistContentsResponseBody$Outbound` instead. */
    export type Outbound = ClearPlaylistContentsResponseBody$Outbound;
}
