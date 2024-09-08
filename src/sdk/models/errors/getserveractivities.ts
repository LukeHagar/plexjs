/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetServerActivitiesActivitiesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetServerActivitiesActivitiesResponseBodyData = {
    errors?: Array<GetServerActivitiesActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetServerActivitiesActivitiesResponseBody extends Error {
    errors?: Array<GetServerActivitiesActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerActivitiesActivitiesResponseBodyData;

    constructor(err: GetServerActivitiesActivitiesResponseBodyData) {
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

        this.name = "GetServerActivitiesActivitiesResponseBody";
    }
}

export type GetServerActivitiesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetServerActivitiesResponseBodyData = {
    errors?: Array<GetServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetServerActivitiesResponseBody extends Error {
    errors?: Array<GetServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerActivitiesResponseBodyData;

    constructor(err: GetServerActivitiesResponseBodyData) {
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

        this.name = "GetServerActivitiesResponseBody";
    }
}

/** @internal */
export const GetServerActivitiesActivitiesErrors$inboundSchema: z.ZodType<
    GetServerActivitiesActivitiesErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type GetServerActivitiesActivitiesErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetServerActivitiesActivitiesErrors$outboundSchema: z.ZodType<
    GetServerActivitiesActivitiesErrors$Outbound,
    z.ZodTypeDef,
    GetServerActivitiesActivitiesErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerActivitiesActivitiesErrors$ {
    /** @deprecated use `GetServerActivitiesActivitiesErrors$inboundSchema` instead. */
    export const inboundSchema = GetServerActivitiesActivitiesErrors$inboundSchema;
    /** @deprecated use `GetServerActivitiesActivitiesErrors$outboundSchema` instead. */
    export const outboundSchema = GetServerActivitiesActivitiesErrors$outboundSchema;
    /** @deprecated use `GetServerActivitiesActivitiesErrors$Outbound` instead. */
    export type Outbound = GetServerActivitiesActivitiesErrors$Outbound;
}

/** @internal */
export const GetServerActivitiesActivitiesResponseBody$inboundSchema: z.ZodType<
    GetServerActivitiesActivitiesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetServerActivitiesActivitiesErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetServerActivitiesActivitiesResponseBody(remapped);
    });

/** @internal */
export type GetServerActivitiesActivitiesResponseBody$Outbound = {
    errors?: Array<GetServerActivitiesActivitiesErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetServerActivitiesActivitiesResponseBody$outboundSchema: z.ZodType<
    GetServerActivitiesActivitiesResponseBody$Outbound,
    z.ZodTypeDef,
    GetServerActivitiesActivitiesResponseBody
> = z
    .instanceof(GetServerActivitiesActivitiesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z
                    .array(z.lazy(() => GetServerActivitiesActivitiesErrors$outboundSchema))
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
export namespace GetServerActivitiesActivitiesResponseBody$ {
    /** @deprecated use `GetServerActivitiesActivitiesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetServerActivitiesActivitiesResponseBody$inboundSchema;
    /** @deprecated use `GetServerActivitiesActivitiesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetServerActivitiesActivitiesResponseBody$outboundSchema;
    /** @deprecated use `GetServerActivitiesActivitiesResponseBody$Outbound` instead. */
    export type Outbound = GetServerActivitiesActivitiesResponseBody$Outbound;
}

/** @internal */
export const GetServerActivitiesErrors$inboundSchema: z.ZodType<
    GetServerActivitiesErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/** @internal */
export type GetServerActivitiesErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetServerActivitiesErrors$outboundSchema: z.ZodType<
    GetServerActivitiesErrors$Outbound,
    z.ZodTypeDef,
    GetServerActivitiesErrors
> = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerActivitiesErrors$ {
    /** @deprecated use `GetServerActivitiesErrors$inboundSchema` instead. */
    export const inboundSchema = GetServerActivitiesErrors$inboundSchema;
    /** @deprecated use `GetServerActivitiesErrors$outboundSchema` instead. */
    export const outboundSchema = GetServerActivitiesErrors$outboundSchema;
    /** @deprecated use `GetServerActivitiesErrors$Outbound` instead. */
    export type Outbound = GetServerActivitiesErrors$Outbound;
}

/** @internal */
export const GetServerActivitiesResponseBody$inboundSchema: z.ZodType<
    GetServerActivitiesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetServerActivitiesErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetServerActivitiesResponseBody(remapped);
    });

/** @internal */
export type GetServerActivitiesResponseBody$Outbound = {
    errors?: Array<GetServerActivitiesErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetServerActivitiesResponseBody$outboundSchema: z.ZodType<
    GetServerActivitiesResponseBody$Outbound,
    z.ZodTypeDef,
    GetServerActivitiesResponseBody
> = z
    .instanceof(GetServerActivitiesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetServerActivitiesErrors$outboundSchema)).optional(),
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
export namespace GetServerActivitiesResponseBody$ {
    /** @deprecated use `GetServerActivitiesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetServerActivitiesResponseBody$inboundSchema;
    /** @deprecated use `GetServerActivitiesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetServerActivitiesResponseBody$outboundSchema;
    /** @deprecated use `GetServerActivitiesResponseBody$Outbound` instead. */
    export type Outbound = GetServerActivitiesResponseBody$Outbound;
}
