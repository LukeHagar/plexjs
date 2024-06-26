/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type StartUniversalTranscodeRequest = {
    /**
     * Whether the media item has MDE
     */
    hasMDE: number;
    /**
     * The path to the media item to transcode
     */
    path: string;
    /**
     * The index of the media item to transcode
     */
    mediaIndex: number;
    /**
     * The index of the part to transcode
     */
    partIndex: number;
    /**
     * The protocol to use for the transcode session
     */
    protocol: string;
    /**
     * Whether to use fast seek or not
     */
    fastSeek?: number | undefined;
    /**
     * Whether to use direct play or not
     */
    directPlay?: number | undefined;
    /**
     * Whether to use direct stream or not
     */
    directStream?: number | undefined;
    /**
     * The size of the subtitles
     */
    subtitleSize?: number | undefined;
    /**
     * The subtitles
     */
    subtites?: string | undefined;
    /**
     * The audio boost
     */
    audioBoost?: number | undefined;
    /**
     * The location of the transcode session
     */
    location?: string | undefined;
    /**
     * The size of the media buffer
     */
    mediaBufferSize?: number | undefined;
    /**
     * The session ID
     */
    session?: string | undefined;
    /**
     * Whether to add a debug overlay or not
     */
    addDebugOverlay?: number | undefined;
    /**
     * Whether to auto adjust quality or not
     */
    autoAdjustQuality?: number | undefined;
};

export type StartUniversalTranscodeErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type StartUniversalTranscodeResponseBodyData = {
    errors?: Array<StartUniversalTranscodeErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class StartUniversalTranscodeResponseBody extends Error {
    errors?: Array<StartUniversalTranscodeErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: StartUniversalTranscodeResponseBodyData;

    constructor(err: StartUniversalTranscodeResponseBodyData) {
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

        this.name = "StartUniversalTranscodeResponseBody";
    }
}

export type StartUniversalTranscodeResponse = {
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
export namespace StartUniversalTranscodeRequest$ {
    export const inboundSchema: z.ZodType<StartUniversalTranscodeRequest, z.ZodTypeDef, unknown> =
        z.object({
            hasMDE: z.number(),
            path: z.string(),
            mediaIndex: z.number(),
            partIndex: z.number(),
            protocol: z.string(),
            fastSeek: z.number().optional(),
            directPlay: z.number().optional(),
            directStream: z.number().optional(),
            subtitleSize: z.number().optional(),
            subtites: z.string().optional(),
            audioBoost: z.number().optional(),
            location: z.string().optional(),
            mediaBufferSize: z.number().optional(),
            session: z.string().optional(),
            addDebugOverlay: z.number().optional(),
            autoAdjustQuality: z.number().optional(),
        });

    export type Outbound = {
        hasMDE: number;
        path: string;
        mediaIndex: number;
        partIndex: number;
        protocol: string;
        fastSeek?: number | undefined;
        directPlay?: number | undefined;
        directStream?: number | undefined;
        subtitleSize?: number | undefined;
        subtites?: string | undefined;
        audioBoost?: number | undefined;
        location?: string | undefined;
        mediaBufferSize?: number | undefined;
        session?: string | undefined;
        addDebugOverlay?: number | undefined;
        autoAdjustQuality?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartUniversalTranscodeRequest> =
        z.object({
            hasMDE: z.number(),
            path: z.string(),
            mediaIndex: z.number(),
            partIndex: z.number(),
            protocol: z.string(),
            fastSeek: z.number().optional(),
            directPlay: z.number().optional(),
            directStream: z.number().optional(),
            subtitleSize: z.number().optional(),
            subtites: z.string().optional(),
            audioBoost: z.number().optional(),
            location: z.string().optional(),
            mediaBufferSize: z.number().optional(),
            session: z.string().optional(),
            addDebugOverlay: z.number().optional(),
            autoAdjustQuality: z.number().optional(),
        });
}

/** @internal */
export namespace StartUniversalTranscodeErrors$ {
    export const inboundSchema: z.ZodType<StartUniversalTranscodeErrors, z.ZodTypeDef, unknown> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartUniversalTranscodeErrors> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });
}

/** @internal */
export namespace StartUniversalTranscodeResponseBody$ {
    export const inboundSchema: z.ZodType<
        StartUniversalTranscodeResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            errors: z.array(z.lazy(() => StartUniversalTranscodeErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new StartUniversalTranscodeResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<StartUniversalTranscodeErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StartUniversalTranscodeResponseBody
    > = z
        .instanceof(StartUniversalTranscodeResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => StartUniversalTranscodeErrors$.outboundSchema))
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
export namespace StartUniversalTranscodeResponse$ {
    export const inboundSchema: z.ZodType<StartUniversalTranscodeResponse, z.ZodTypeDef, unknown> =
        z
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
        StartUniversalTranscodeResponse
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
