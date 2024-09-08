/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetPlaylistPlaylistsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetPlaylistPlaylistsResponseBodyData = {
    errors?: Array<GetPlaylistPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetPlaylistPlaylistsResponseBody extends Error {
    errors?: Array<GetPlaylistPlaylistsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetPlaylistPlaylistsResponseBodyData;

    constructor(err: GetPlaylistPlaylistsResponseBodyData) {
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

        this.name = "GetPlaylistPlaylistsResponseBody";
    }
}

export type GetPlaylistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetPlaylistResponseBodyData = {
    errors?: Array<GetPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetPlaylistResponseBody extends Error {
    errors?: Array<GetPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetPlaylistResponseBodyData;

    constructor(err: GetPlaylistResponseBodyData) {
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

        this.name = "GetPlaylistResponseBody";
    }
}

/** @internal */
export const GetPlaylistPlaylistsErrors$inboundSchema: z.ZodType<
    GetPlaylistPlaylistsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type GetPlaylistPlaylistsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetPlaylistPlaylistsErrors$outboundSchema: z.ZodType<
    GetPlaylistPlaylistsErrors$Outbound,
    z.ZodTypeDef,
    GetPlaylistPlaylistsErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistPlaylistsErrors$ {
    /** @deprecated use `GetPlaylistPlaylistsErrors$inboundSchema` instead. */
    export const inboundSchema = GetPlaylistPlaylistsErrors$inboundSchema;
    /** @deprecated use `GetPlaylistPlaylistsErrors$outboundSchema` instead. */
    export const outboundSchema = GetPlaylistPlaylistsErrors$outboundSchema;
    /** @deprecated use `GetPlaylistPlaylistsErrors$Outbound` instead. */
    export type Outbound = GetPlaylistPlaylistsErrors$Outbound;
}

/** @internal */
export const GetPlaylistPlaylistsResponseBody$inboundSchema: z.ZodType<
    GetPlaylistPlaylistsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetPlaylistPlaylistsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetPlaylistPlaylistsResponseBody(remapped);
    });

/** @internal */
export type GetPlaylistPlaylistsResponseBody$Outbound = {
    errors?: Array<GetPlaylistPlaylistsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetPlaylistPlaylistsResponseBody$outboundSchema: z.ZodType<
    GetPlaylistPlaylistsResponseBody$Outbound,
    z.ZodTypeDef,
    GetPlaylistPlaylistsResponseBody
> = z
    .instanceof(GetPlaylistPlaylistsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetPlaylistPlaylistsErrors$outboundSchema)).optional(),
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
export namespace GetPlaylistPlaylistsResponseBody$ {
    /** @deprecated use `GetPlaylistPlaylistsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetPlaylistPlaylistsResponseBody$inboundSchema;
    /** @deprecated use `GetPlaylistPlaylistsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetPlaylistPlaylistsResponseBody$outboundSchema;
    /** @deprecated use `GetPlaylistPlaylistsResponseBody$Outbound` instead. */
    export type Outbound = GetPlaylistPlaylistsResponseBody$Outbound;
}

/** @internal */
export const GetPlaylistErrors$inboundSchema: z.ZodType<GetPlaylistErrors, z.ZodTypeDef, unknown> =
    z.object({
        code: z.number().int().optional(),
        message: z.string().optional(),
        status: z.number().int().optional(),
    });

/** @internal */
export type GetPlaylistErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetPlaylistErrors$outboundSchema: z.ZodType<
    GetPlaylistErrors$Outbound,
    z.ZodTypeDef,
    GetPlaylistErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistErrors$ {
    /** @deprecated use `GetPlaylistErrors$inboundSchema` instead. */
    export const inboundSchema = GetPlaylistErrors$inboundSchema;
    /** @deprecated use `GetPlaylistErrors$outboundSchema` instead. */
    export const outboundSchema = GetPlaylistErrors$outboundSchema;
    /** @deprecated use `GetPlaylistErrors$Outbound` instead. */
    export type Outbound = GetPlaylistErrors$Outbound;
}

/** @internal */
export const GetPlaylistResponseBody$inboundSchema: z.ZodType<
    GetPlaylistResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetPlaylistErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetPlaylistResponseBody(remapped);
    });

/** @internal */
export type GetPlaylistResponseBody$Outbound = {
    errors?: Array<GetPlaylistErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetPlaylistResponseBody$outboundSchema: z.ZodType<
    GetPlaylistResponseBody$Outbound,
    z.ZodTypeDef,
    GetPlaylistResponseBody
> = z
    .instanceof(GetPlaylistResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetPlaylistErrors$outboundSchema)).optional(),
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
export namespace GetPlaylistResponseBody$ {
    /** @deprecated use `GetPlaylistResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetPlaylistResponseBody$inboundSchema;
    /** @deprecated use `GetPlaylistResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetPlaylistResponseBody$outboundSchema;
    /** @deprecated use `GetPlaylistResponseBody$Outbound` instead. */
    export type Outbound = GetPlaylistResponseBody$Outbound;
}
