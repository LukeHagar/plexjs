/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

/**
 * The state of the media item
 */
export enum State {
    Playing = "playing",
    Paused = "paused",
    Stopped = "stopped",
}

export type GetTimelineRequest = {
    /**
     * The rating key of the media item
     */
    ratingKey: number;
    /**
     * The key of the media item to get the timeline for
     */
    key: string;
    /**
     * The state of the media item
     */
    state: State;
    /**
     * Whether the media item has MDE
     */
    hasMDE: number;
    /**
     * The time of the media item
     */
    time: number;
    /**
     * The duration of the media item
     */
    duration: number;
    /**
     * The context of the media item
     */
    context: string;
    /**
     * The play queue item ID of the media item
     */
    playQueueItemID: number;
    /**
     * The playback time of the media item
     */
    playBackTime: number;
    /**
     * The row of the media item
     */
    row: number;
};

export type GetTimelineErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetTimelineResponseBodyData = {
    errors?: Array<GetTimelineErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetTimelineResponseBody extends Error {
    errors?: Array<GetTimelineErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetTimelineResponseBodyData;

    constructor(err: GetTimelineResponseBodyData) {
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

        this.name = "GetTimelineResponseBody";
    }
}

export type GetTimelineResponse = {
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
export namespace State$ {
    export const inboundSchema: z.ZodNativeEnum<typeof State> = z.nativeEnum(State);
    export const outboundSchema: z.ZodNativeEnum<typeof State> = inboundSchema;
}

/** @internal */
export namespace GetTimelineRequest$ {
    export const inboundSchema: z.ZodType<GetTimelineRequest, z.ZodTypeDef, unknown> = z.object({
        ratingKey: z.number(),
        key: z.string(),
        state: State$.inboundSchema,
        hasMDE: z.number(),
        time: z.number(),
        duration: z.number(),
        context: z.string(),
        playQueueItemID: z.number(),
        playBackTime: z.number(),
        row: z.number(),
    });

    export type Outbound = {
        ratingKey: number;
        key: string;
        state: string;
        hasMDE: number;
        time: number;
        duration: number;
        context: string;
        playQueueItemID: number;
        playBackTime: number;
        row: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimelineRequest> = z.object({
        ratingKey: z.number(),
        key: z.string(),
        state: State$.outboundSchema,
        hasMDE: z.number(),
        time: z.number(),
        duration: z.number(),
        context: z.string(),
        playQueueItemID: z.number(),
        playBackTime: z.number(),
        row: z.number(),
    });
}

/** @internal */
export namespace GetTimelineErrors$ {
    export const inboundSchema: z.ZodType<GetTimelineErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimelineErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetTimelineResponseBody$ {
    export const inboundSchema: z.ZodType<GetTimelineResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => GetTimelineErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetTimelineResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetTimelineErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimelineResponseBody> = z
        .instanceof(GetTimelineResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetTimelineErrors$.outboundSchema)).optional(),
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
export namespace GetTimelineResponse$ {
    export const inboundSchema: z.ZodType<GetTimelineResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimelineResponse> = z
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
