/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * type of playlist to create
 */
export enum TypeT {
    Audio = "audio",
    Video = "video",
    Photo = "photo",
}

/**
 * whether the playlist is smart or not
 */
export enum Smart {
    Zero = 0,
    One = 1,
}

export type CreatePlaylistRequest = {
    /**
     * name of the playlist
     */
    title: string;
    /**
     * type of playlist to create
     */
    type: TypeT;
    /**
     * whether the playlist is smart or not
     */
    smart: Smart;
    /**
     * the content URI for the playlist
     */
    uri?: string | undefined;
    /**
     * the play queue to copy to a playlist
     */
    playQueueID?: number | undefined;
};

export type CreatePlaylistResponse = {
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
export const TypeT$ = z.nativeEnum(TypeT);

/** @internal */
export const Smart$ = z.nativeEnum(Smart);

/** @internal */
export namespace CreatePlaylistRequest$ {
    export type Inbound = {
        title: string;
        type: TypeT;
        smart: Smart;
        uri?: string | undefined;
        playQueueID?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePlaylistRequest, z.ZodTypeDef, Inbound> = z
        .object({
            title: z.string(),
            type: TypeT$,
            smart: Smart$,
            uri: z.string().optional(),
            playQueueID: z.number().optional(),
        })
        .transform((v) => {
            return {
                title: v.title,
                type: v.type,
                smart: v.smart,
                ...(v.uri === undefined ? null : { uri: v.uri }),
                ...(v.playQueueID === undefined ? null : { playQueueID: v.playQueueID }),
            };
        });

    export type Outbound = {
        title: string;
        type: TypeT;
        smart: Smart;
        uri?: string | undefined;
        playQueueID?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePlaylistRequest> = z
        .object({
            title: z.string(),
            type: TypeT$,
            smart: Smart$,
            uri: z.string().optional(),
            playQueueID: z.number().optional(),
        })
        .transform((v) => {
            return {
                title: v.title,
                type: v.type,
                smart: v.smart,
                ...(v.uri === undefined ? null : { uri: v.uri }),
                ...(v.playQueueID === undefined ? null : { playQueueID: v.playQueueID }),
            };
        });
}

/** @internal */
export namespace CreatePlaylistResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreatePlaylistResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePlaylistResponse> = z
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
