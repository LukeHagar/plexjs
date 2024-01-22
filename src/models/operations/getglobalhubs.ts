/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
 */
export enum OnlyTransient {
    Zero = 0,
    One = 1,
}

export type GetGlobalHubsRequest = {
    /**
     * The number of items to return with each hub.
     */
    count?: number | undefined;
    /**
     * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
     */
    onlyTransient?: OnlyTransient | undefined;
};

export type GetGlobalHubsMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    titleSort?: string | undefined;
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

export type Hub = {
    hubKey?: string | undefined;
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
    hubIdentifier?: string | undefined;
    context?: string | undefined;
    size?: number | undefined;
    more?: boolean | undefined;
    style?: string | undefined;
    promoted?: boolean | undefined;
    metadata?: Array<GetGlobalHubsMetadata> | undefined;
};

export type GetGlobalHubsMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    identifier?: string | undefined;
    hub?: Array<Hub> | undefined;
};

/**
 * returns global hubs
 */
export type GetGlobalHubsResponseBody = {
    mediaContainer?: GetGlobalHubsMediaContainer | undefined;
};

export type GetGlobalHubsResponse = {
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
     * returns global hubs
     */
    object?: GetGlobalHubsResponseBody | undefined;
};

/** @internal */
export const OnlyTransient$ = z.nativeEnum(OnlyTransient);

/** @internal */
export namespace GetGlobalHubsRequest$ {
    export type Inbound = {
        count?: number | undefined;
        onlyTransient?: OnlyTransient | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().optional(),
            onlyTransient: OnlyTransient$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.onlyTransient === undefined ? null : { onlyTransient: v.onlyTransient }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        onlyTransient?: OnlyTransient | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsRequest> = z
        .object({
            count: z.number().optional(),
            onlyTransient: OnlyTransient$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.onlyTransient === undefined ? null : { onlyTransient: v.onlyTransient }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsMetadata$ {
    export type Inbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        guid?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        titleSort?: string | undefined;
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

    export const inboundSchema: z.ZodType<GetGlobalHubsMetadata, z.ZodTypeDef, Inbound> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            titleSort: z.string().optional(),
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
                ...(v.titleSort === undefined ? null : { titleSort: v.titleSort }),
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
        titleSort?: string | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsMetadata> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            titleSort: z.string().optional(),
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
                ...(v.titleSort === undefined ? null : { titleSort: v.titleSort }),
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
export namespace Hub$ {
    export type Inbound = {
        hubKey?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        hubIdentifier?: string | undefined;
        context?: string | undefined;
        size?: number | undefined;
        more?: boolean | undefined;
        style?: string | undefined;
        promoted?: boolean | undefined;
        Metadata?: Array<GetGlobalHubsMetadata$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<Hub, z.ZodTypeDef, Inbound> = z
        .object({
            hubKey: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            hubIdentifier: z.string().optional(),
            context: z.string().optional(),
            size: z.number().int().optional(),
            more: z.boolean().optional(),
            style: z.string().optional(),
            promoted: z.boolean().optional(),
            Metadata: z.array(z.lazy(() => GetGlobalHubsMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.hubKey === undefined ? null : { hubKey: v.hubKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.hubIdentifier === undefined ? null : { hubIdentifier: v.hubIdentifier }),
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.more === undefined ? null : { more: v.more }),
                ...(v.style === undefined ? null : { style: v.style }),
                ...(v.promoted === undefined ? null : { promoted: v.promoted }),
                ...(v.Metadata === undefined ? null : { metadata: v.Metadata }),
            };
        });

    export type Outbound = {
        hubKey?: string | undefined;
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        hubIdentifier?: string | undefined;
        context?: string | undefined;
        size?: number | undefined;
        more?: boolean | undefined;
        style?: string | undefined;
        promoted?: boolean | undefined;
        Metadata?: Array<GetGlobalHubsMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Hub> = z
        .object({
            hubKey: z.string().optional(),
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            hubIdentifier: z.string().optional(),
            context: z.string().optional(),
            size: z.number().int().optional(),
            more: z.boolean().optional(),
            style: z.string().optional(),
            promoted: z.boolean().optional(),
            metadata: z.array(z.lazy(() => GetGlobalHubsMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.hubKey === undefined ? null : { hubKey: v.hubKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.hubIdentifier === undefined ? null : { hubIdentifier: v.hubIdentifier }),
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.more === undefined ? null : { more: v.more }),
                ...(v.style === undefined ? null : { style: v.style }),
                ...(v.promoted === undefined ? null : { promoted: v.promoted }),
                ...(v.metadata === undefined ? null : { Metadata: v.metadata }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        identifier?: string | undefined;
        Hub?: Array<Hub$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsMediaContainer, z.ZodTypeDef, Inbound> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            Hub: z.array(z.lazy(() => Hub$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.Hub === undefined ? null : { hub: v.Hub }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        identifier?: string | undefined;
        Hub?: Array<Hub$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            hub: z.array(z.lazy(() => Hub$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.hub === undefined ? null : { Hub: v.hub }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetGlobalHubsMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => GetGlobalHubsMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: GetGlobalHubsMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetGlobalHubsMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace GetGlobalHubsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetGlobalHubsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetGlobalHubsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetGlobalHubsResponseBody$.inboundSchema).optional(),
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
        object?: GetGlobalHubsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobalHubsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetGlobalHubsResponseBody$.outboundSchema).optional(),
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
