/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type MarkPlayedErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type MarkPlayedResponseBodyData = {
    errors?: Array<MarkPlayedErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class MarkPlayedResponseBody extends Error {
    errors?: Array<MarkPlayedErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: MarkPlayedResponseBodyData;

    constructor(err: MarkPlayedResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "MarkPlayedResponseBody";
    }
}

/** @internal */
export namespace MarkPlayedErrors$ {
    export type Inbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const inboundSchema: z.ZodType<MarkPlayedErrors, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkPlayedErrors> = z
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
export namespace MarkPlayedResponseBody$ {
    export type Inbound = {
        errors?: Array<MarkPlayedErrors$.Inbound> | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<MarkPlayedResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            errors: z.array(z.lazy(() => MarkPlayedErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new MarkPlayedResponseBody({
                ...(v.errors === undefined ? null : { errors: v.errors }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        errors?: Array<MarkPlayedErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkPlayedResponseBody> = z
        .instanceof(MarkPlayedResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => MarkPlayedErrors$.outboundSchema)).optional(),
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
