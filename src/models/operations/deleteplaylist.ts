/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeletePlaylistRequest = {
    /**
     * the ID of the playlist
     */
    playlistID: number;
};

export type DeletePlaylistResponse = {
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
export namespace DeletePlaylistRequest$ {
    export type Inbound = {
        playlistID: number;
    };

    export const inboundSchema: z.ZodType<DeletePlaylistRequest, z.ZodTypeDef, Inbound> = z
        .object({
            playlistID: z.number(),
        })
        .transform((v) => {
            return {
                playlistID: v.playlistID,
            };
        });

    export type Outbound = {
        playlistID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePlaylistRequest> = z
        .object({
            playlistID: z.number(),
        })
        .transform((v) => {
            return {
                playlistID: v.playlistID,
            };
        });
}

/** @internal */
export namespace DeletePlaylistResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeletePlaylistResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePlaylistResponse> = z
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
