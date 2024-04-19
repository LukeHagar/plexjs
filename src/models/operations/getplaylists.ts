/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * limit to a type of playlist.
 */
export enum PlaylistType {
    Audio = "audio",
    Video = "video",
    Photo = "photo",
}

/**
 * type of playlists to return (default is all).
 */
export enum QueryParamSmart {
    Zero = 0,
    One = 1,
}

export type GetPlaylistsRequest = {
    /**
     * limit to a type of playlist.
     */
    playlistType?: PlaylistType | undefined;
    /**
     * type of playlists to return (default is all).
     */
    smart?: QueryParamSmart | undefined;
};

export type GetPlaylistsMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    summary?: string | undefined;
    smart?: boolean | undefined;
    playlistType?: string | undefined;
    composite?: string | undefined;
    icon?: string | undefined;
    viewCount?: number | undefined;
    lastViewedAt?: number | undefined;
    duration?: number | undefined;
    leafCount?: number | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

export type GetPlaylistsMediaContainer = {
    size?: number | undefined;
    metadata?: Array<GetPlaylistsMetadata> | undefined;
};

/**
 * returns all playlists
 */
export type GetPlaylistsResponseBody = {
    mediaContainer?: GetPlaylistsMediaContainer | undefined;
};

export type GetPlaylistsResponse = {
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
    /**
     * returns all playlists
     */
    object?: GetPlaylistsResponseBody | undefined;
};

/** @internal */
export const PlaylistType$: z.ZodNativeEnum<typeof PlaylistType> = z.nativeEnum(PlaylistType);

/** @internal */
export const QueryParamSmart$: z.ZodNativeEnum<typeof QueryParamSmart> =
    z.nativeEnum(QueryParamSmart);

/** @internal */
export namespace GetPlaylistsRequest$ {
    export type Inbound = {
        playlistType?: PlaylistType | undefined;
        smart?: QueryParamSmart | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            playlistType: PlaylistType$.optional(),
            smart: QueryParamSmart$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.playlistType === undefined ? null : { playlistType: v.playlistType }),
                ...(v.smart === undefined ? null : { smart: v.smart }),
            };
        });

    export type Outbound = {
        playlistType?: PlaylistType | undefined;
        smart?: QueryParamSmart | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistsRequest> = z
        .object({
            playlistType: PlaylistType$.optional(),
            smart: QueryParamSmart$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.playlistType === undefined ? null : { playlistType: v.playlistType }),
                ...(v.smart === undefined ? null : { smart: v.smart }),
            };
        });
}

/** @internal */
export namespace GetPlaylistsMetadata$ {
    export type Inbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        guid?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        summary?: string | undefined;
        smart?: boolean | undefined;
        playlistType?: string | undefined;
        composite?: string | undefined;
        icon?: string | undefined;
        viewCount?: number | undefined;
        lastViewedAt?: number | undefined;
        duration?: number | undefined;
        leafCount?: number | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistsMetadata, z.ZodTypeDef, Inbound> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            summary: z.string().optional(),
            smart: z.boolean().optional(),
            playlistType: z.string().optional(),
            composite: z.string().optional(),
            icon: z.string().optional(),
            viewCount: z.number().int().optional(),
            lastViewedAt: z.number().int().optional(),
            duration: z.number().int().optional(),
            leafCount: z.number().int().optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.smart === undefined ? null : { smart: v.smart }),
                ...(v.playlistType === undefined ? null : { playlistType: v.playlistType }),
                ...(v.composite === undefined ? null : { composite: v.composite }),
                ...(v.icon === undefined ? null : { icon: v.icon }),
                ...(v.viewCount === undefined ? null : { viewCount: v.viewCount }),
                ...(v.lastViewedAt === undefined ? null : { lastViewedAt: v.lastViewedAt }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.leafCount === undefined ? null : { leafCount: v.leafCount }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        guid?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        summary?: string | undefined;
        smart?: boolean | undefined;
        playlistType?: string | undefined;
        composite?: string | undefined;
        icon?: string | undefined;
        viewCount?: number | undefined;
        lastViewedAt?: number | undefined;
        duration?: number | undefined;
        leafCount?: number | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistsMetadata> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            summary: z.string().optional(),
            smart: z.boolean().optional(),
            playlistType: z.string().optional(),
            composite: z.string().optional(),
            icon: z.string().optional(),
            viewCount: z.number().int().optional(),
            lastViewedAt: z.number().int().optional(),
            duration: z.number().int().optional(),
            leafCount: z.number().int().optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.smart === undefined ? null : { smart: v.smart }),
                ...(v.playlistType === undefined ? null : { playlistType: v.playlistType }),
                ...(v.composite === undefined ? null : { composite: v.composite }),
                ...(v.icon === undefined ? null : { icon: v.icon }),
                ...(v.viewCount === undefined ? null : { viewCount: v.viewCount }),
                ...(v.lastViewedAt === undefined ? null : { lastViewedAt: v.lastViewedAt }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.leafCount === undefined ? null : { leafCount: v.leafCount }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace GetPlaylistsMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        Metadata?: Array<GetPlaylistsMetadata$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistsMediaContainer, z.ZodTypeDef, Inbound> = z
        .object({
            size: z.number().int().optional(),
            Metadata: z.array(z.lazy(() => GetPlaylistsMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.Metadata === undefined ? null : { metadata: v.Metadata }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        Metadata?: Array<GetPlaylistsMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistsMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            metadata: z.array(z.lazy(() => GetPlaylistsMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.metadata === undefined ? null : { Metadata: v.metadata }),
            };
        });
}

/** @internal */
export namespace GetPlaylistsResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetPlaylistsMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => GetPlaylistsMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: GetPlaylistsMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistsResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetPlaylistsMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace GetPlaylistsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetPlaylistsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetPlaylistsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetPlaylistsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetPlaylistsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetPlaylistsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
