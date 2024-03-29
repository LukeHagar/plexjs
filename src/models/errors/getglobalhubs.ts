/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetGlobalHubsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetGlobalHubsResponseBodyData = {
    errors?: Array<GetGlobalHubsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetGlobalHubsResponseBody extends Error {
    errors?: Array<GetGlobalHubsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetGlobalHubsResponseBodyData;

    constructor(err: GetGlobalHubsResponseBodyData) {
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

        this.name = "GetGlobalHubsResponseBody";
    }
}

/** @internal */
export namespace GetGlobalHubsErrors$ {
    export type Inbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsErrors, z.ZodTypeDef, Inbound> = z
        .object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsErrors> = z
        .object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsResponseBody$ {
    export type Inbound = {
        errors?: Array<GetGlobalHubsErrors$.Inbound> | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            errors: z.array(z.lazy(() => GetGlobalHubsErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new GetGlobalHubsResponseBody({
                ...(v.errors === undefined ? null : { errors: v.errors }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });

    export type Outbound = {
        errors?: Array<GetGlobalHubsErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsResponseBody> = z
        .instanceof(GetGlobalHubsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetGlobalHubsErrors$.outboundSchema)).optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.errors === undefined ? null : { errors: v.errors }),
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
