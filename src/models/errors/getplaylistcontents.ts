/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetPlaylistContentsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetPlaylistContentsResponseBodyData = {
    errors?: Array<GetPlaylistContentsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetPlaylistContentsResponseBody extends Error {
    errors?: Array<GetPlaylistContentsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetPlaylistContentsResponseBodyData;

    constructor(err: GetPlaylistContentsResponseBodyData) {
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

        this.name = "GetPlaylistContentsResponseBody";
    }
}

/** @internal */
export namespace GetPlaylistContentsErrors$ {
    export type Inbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistContentsErrors, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistContentsErrors> = z
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
export namespace GetPlaylistContentsResponseBody$ {
    export type Inbound = {
        errors?: Array<GetPlaylistContentsErrors$.Inbound> | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistContentsResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                errors: z.array(z.lazy(() => GetPlaylistContentsErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                return new GetPlaylistContentsResponseBody({
                    ...(v.errors === undefined ? null : { errors: v.errors }),
                    ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                });
            });

    export type Outbound = {
        errors?: Array<GetPlaylistContentsErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPlaylistContentsResponseBody
    > = z
        .instanceof(GetPlaylistContentsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => GetPlaylistContentsErrors$.outboundSchema))
                        .optional(),
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
