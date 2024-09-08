/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetSearchResultsSearchErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetSearchResultsSearchResponseBodyData = {
    errors?: Array<GetSearchResultsSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetSearchResultsSearchResponseBody extends Error {
    errors?: Array<GetSearchResultsSearchErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSearchResultsSearchResponseBodyData;

    constructor(err: GetSearchResultsSearchResponseBodyData) {
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

        this.name = "GetSearchResultsSearchResponseBody";
    }
}

export type GetSearchResultsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetSearchResultsResponseBodyData = {
    errors?: Array<GetSearchResultsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetSearchResultsResponseBody extends Error {
    errors?: Array<GetSearchResultsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSearchResultsResponseBodyData;

    constructor(err: GetSearchResultsResponseBodyData) {
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

        this.name = "GetSearchResultsResponseBody";
    }
}

/** @internal */
export const GetSearchResultsSearchErrors$inboundSchema: z.ZodType<
    GetSearchResultsSearchErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type GetSearchResultsSearchErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetSearchResultsSearchErrors$outboundSchema: z.ZodType<
    GetSearchResultsSearchErrors$Outbound,
    z.ZodTypeDef,
    GetSearchResultsSearchErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsSearchErrors$ {
    /** @deprecated use `GetSearchResultsSearchErrors$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsSearchErrors$inboundSchema;
    /** @deprecated use `GetSearchResultsSearchErrors$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsSearchErrors$outboundSchema;
    /** @deprecated use `GetSearchResultsSearchErrors$Outbound` instead. */
    export type Outbound = GetSearchResultsSearchErrors$Outbound;
}

/** @internal */
export const GetSearchResultsSearchResponseBody$inboundSchema: z.ZodType<
    GetSearchResultsSearchResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetSearchResultsSearchErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetSearchResultsSearchResponseBody(remapped);
    });

/** @internal */
export type GetSearchResultsSearchResponseBody$Outbound = {
    errors?: Array<GetSearchResultsSearchErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetSearchResultsSearchResponseBody$outboundSchema: z.ZodType<
    GetSearchResultsSearchResponseBody$Outbound,
    z.ZodTypeDef,
    GetSearchResultsSearchResponseBody
> = z
    .instanceof(GetSearchResultsSearchResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z
                    .array(z.lazy(() => GetSearchResultsSearchErrors$outboundSchema))
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
export namespace GetSearchResultsSearchResponseBody$ {
    /** @deprecated use `GetSearchResultsSearchResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsSearchResponseBody$inboundSchema;
    /** @deprecated use `GetSearchResultsSearchResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsSearchResponseBody$outboundSchema;
    /** @deprecated use `GetSearchResultsSearchResponseBody$Outbound` instead. */
    export type Outbound = GetSearchResultsSearchResponseBody$Outbound;
}

/** @internal */
export const GetSearchResultsErrors$inboundSchema: z.ZodType<
    GetSearchResultsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type GetSearchResultsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetSearchResultsErrors$outboundSchema: z.ZodType<
    GetSearchResultsErrors$Outbound,
    z.ZodTypeDef,
    GetSearchResultsErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsErrors$ {
    /** @deprecated use `GetSearchResultsErrors$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsErrors$inboundSchema;
    /** @deprecated use `GetSearchResultsErrors$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsErrors$outboundSchema;
    /** @deprecated use `GetSearchResultsErrors$Outbound` instead. */
    export type Outbound = GetSearchResultsErrors$Outbound;
}

/** @internal */
export const GetSearchResultsResponseBody$inboundSchema: z.ZodType<
    GetSearchResultsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetSearchResultsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetSearchResultsResponseBody(remapped);
    });

/** @internal */
export type GetSearchResultsResponseBody$Outbound = {
    errors?: Array<GetSearchResultsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetSearchResultsResponseBody$outboundSchema: z.ZodType<
    GetSearchResultsResponseBody$Outbound,
    z.ZodTypeDef,
    GetSearchResultsResponseBody
> = z
    .instanceof(GetSearchResultsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetSearchResultsErrors$outboundSchema)).optional(),
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
export namespace GetSearchResultsResponseBody$ {
    /** @deprecated use `GetSearchResultsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsResponseBody$inboundSchema;
    /** @deprecated use `GetSearchResultsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsResponseBody$outboundSchema;
    /** @deprecated use `GetSearchResultsResponseBody$Outbound` instead. */
    export type Outbound = GetSearchResultsResponseBody$Outbound;
}
