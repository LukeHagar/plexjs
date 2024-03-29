/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
export const State$ = z.nativeEnum(State);

/** @internal */
export namespace GetTimelineRequest$ {
    export type Inbound = {
        ratingKey: number;
        key: string;
        state: State;
        hasMDE: number;
        time: number;
        duration: number;
        context: string;
        playQueueItemID: number;
        playBackTime: number;
        row: number;
    };

    export const inboundSchema: z.ZodType<GetTimelineRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ratingKey: z.number(),
            key: z.string(),
            state: State$,
            hasMDE: z.number(),
            time: z.number(),
            duration: z.number(),
            context: z.string(),
            playQueueItemID: z.number(),
            playBackTime: z.number(),
            row: z.number(),
        })
        .transform((v) => {
            return {
                ratingKey: v.ratingKey,
                key: v.key,
                state: v.state,
                hasMDE: v.hasMDE,
                time: v.time,
                duration: v.duration,
                context: v.context,
                playQueueItemID: v.playQueueItemID,
                playBackTime: v.playBackTime,
                row: v.row,
            };
        });

    export type Outbound = {
        ratingKey: number;
        key: string;
        state: State;
        hasMDE: number;
        time: number;
        duration: number;
        context: string;
        playQueueItemID: number;
        playBackTime: number;
        row: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimelineRequest> = z
        .object({
            ratingKey: z.number(),
            key: z.string(),
            state: State$,
            hasMDE: z.number(),
            time: z.number(),
            duration: z.number(),
            context: z.string(),
            playQueueItemID: z.number(),
            playBackTime: z.number(),
            row: z.number(),
        })
        .transform((v) => {
            return {
                ratingKey: v.ratingKey,
                key: v.key,
                state: v.state,
                hasMDE: v.hasMDE,
                time: v.time,
                duration: v.duration,
                context: v.context,
                playQueueItemID: v.playQueueItemID,
                playBackTime: v.playBackTime,
                row: v.row,
            };
        });
}

/** @internal */
export namespace GetTimelineResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetTimelineResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
