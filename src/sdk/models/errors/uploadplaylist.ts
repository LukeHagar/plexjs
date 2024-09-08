/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type UploadPlaylistPlaylistsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type UploadPlaylistPlaylistsResponseBodyData = {
    errors?: Array<UploadPlaylistPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class UploadPlaylistPlaylistsResponseBody extends Error {
    errors?: Array<UploadPlaylistPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: UploadPlaylistPlaylistsResponseBodyData;

    constructor(err: UploadPlaylistPlaylistsResponseBodyData) {
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

        this.name = "UploadPlaylistPlaylistsResponseBody";
    }
}

export type UploadPlaylistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type UploadPlaylistResponseBodyData = {
    errors?: Array<UploadPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class UploadPlaylistResponseBody extends Error {
    errors?: Array<UploadPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: UploadPlaylistResponseBodyData;

    constructor(err: UploadPlaylistResponseBodyData) {
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

        this.name = "UploadPlaylistResponseBody";
    }
}

/** @internal */
export const UploadPlaylistPlaylistsErrors$inboundSchema: z.ZodType<
    UploadPlaylistPlaylistsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type UploadPlaylistPlaylistsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const UploadPlaylistPlaylistsErrors$outboundSchema: z.ZodType<
    UploadPlaylistPlaylistsErrors$Outbound,
    z.ZodTypeDef,
    UploadPlaylistPlaylistsErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadPlaylistPlaylistsErrors$ {
    /** @deprecated use `UploadPlaylistPlaylistsErrors$inboundSchema` instead. */
    export const inboundSchema = UploadPlaylistPlaylistsErrors$inboundSchema;
    /** @deprecated use `UploadPlaylistPlaylistsErrors$outboundSchema` instead. */
    export const outboundSchema = UploadPlaylistPlaylistsErrors$outboundSchema;
    /** @deprecated use `UploadPlaylistPlaylistsErrors$Outbound` instead. */
    export type Outbound = UploadPlaylistPlaylistsErrors$Outbound;
}

/** @internal */
export const UploadPlaylistPlaylistsResponseBody$inboundSchema: z.ZodType<
    UploadPlaylistPlaylistsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => UploadPlaylistPlaylistsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new UploadPlaylistPlaylistsResponseBody(remapped);
    });

/** @internal */
export type UploadPlaylistPlaylistsResponseBody$Outbound = {
    errors?: Array<UploadPlaylistPlaylistsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const UploadPlaylistPlaylistsResponseBody$outboundSchema: z.ZodType<
    UploadPlaylistPlaylistsResponseBody$Outbound,
    z.ZodTypeDef,
    UploadPlaylistPlaylistsResponseBody
> = z
    .instanceof(UploadPlaylistPlaylistsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z
                    .array(z.lazy(() => UploadPlaylistPlaylistsErrors$outboundSchema))
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
export namespace UploadPlaylistPlaylistsResponseBody$ {
    /** @deprecated use `UploadPlaylistPlaylistsResponseBody$inboundSchema` instead. */
    export const inboundSchema = UploadPlaylistPlaylistsResponseBody$inboundSchema;
    /** @deprecated use `UploadPlaylistPlaylistsResponseBody$outboundSchema` instead. */
    export const outboundSchema = UploadPlaylistPlaylistsResponseBody$outboundSchema;
    /** @deprecated use `UploadPlaylistPlaylistsResponseBody$Outbound` instead. */
    export type Outbound = UploadPlaylistPlaylistsResponseBody$Outbound;
}

/** @internal */
export const UploadPlaylistErrors$inboundSchema: z.ZodType<
    UploadPlaylistErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type UploadPlaylistErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const UploadPlaylistErrors$outboundSchema: z.ZodType<
    UploadPlaylistErrors$Outbound,
    z.ZodTypeDef,
    UploadPlaylistErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadPlaylistErrors$ {
    /** @deprecated use `UploadPlaylistErrors$inboundSchema` instead. */
    export const inboundSchema = UploadPlaylistErrors$inboundSchema;
    /** @deprecated use `UploadPlaylistErrors$outboundSchema` instead. */
    export const outboundSchema = UploadPlaylistErrors$outboundSchema;
    /** @deprecated use `UploadPlaylistErrors$Outbound` instead. */
    export type Outbound = UploadPlaylistErrors$Outbound;
}

/** @internal */
export const UploadPlaylistResponseBody$inboundSchema: z.ZodType<
    UploadPlaylistResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => UploadPlaylistErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new UploadPlaylistResponseBody(remapped);
    });

/** @internal */
export type UploadPlaylistResponseBody$Outbound = {
    errors?: Array<UploadPlaylistErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const UploadPlaylistResponseBody$outboundSchema: z.ZodType<
    UploadPlaylistResponseBody$Outbound,
    z.ZodTypeDef,
    UploadPlaylistResponseBody
> = z
    .instanceof(UploadPlaylistResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => UploadPlaylistErrors$outboundSchema)).optional(),
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
export namespace UploadPlaylistResponseBody$ {
    /** @deprecated use `UploadPlaylistResponseBody$inboundSchema` instead. */
    export const inboundSchema = UploadPlaylistResponseBody$inboundSchema;
    /** @deprecated use `UploadPlaylistResponseBody$outboundSchema` instead. */
    export const outboundSchema = UploadPlaylistResponseBody$outboundSchema;
    /** @deprecated use `UploadPlaylistResponseBody$Outbound` instead. */
    export type Outbound = UploadPlaylistResponseBody$Outbound;
}
