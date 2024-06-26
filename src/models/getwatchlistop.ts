/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { RFCDate } from "../types/rfcdate.js";
import * as z from "zod";

export const GetWatchlistOpServerList = [
    /**
     * The plex metadata provider server
     */
    "https://metadata.provider.plex.tv",
] as const;

/**
 * Filter
 */
export enum PathParamFilter {
    All = "all",
    Available = "available",
    Released = "released",
}

/**
 * The type of library to filter. Can be "movie" or "show", or all if not present.
 *
 * @remarks
 *
 */
export enum Libtype {
    Movie = "movie",
    Show = "show",
}

/**
 * include collections in the results
 *
 * @remarks
 *
 */
export enum IncludeCollections {
    One = 1,
    Zero = 0,
}

/**
 * include external media in the results
 *
 * @remarks
 *
 */
export enum IncludeExternalMedia {
    One = 1,
    Zero = 0,
}

export type GetWatchlistRequest = {
    /**
     * Filter
     */
    filter: PathParamFilter;
    /**
     * In the format "field:dir". Available fields are "watchlistedAt" (Added At),
     *
     * @remarks
     * "titleSort" (Title), "originallyAvailableAt" (Release Date), or "rating" (Critic Rating).
     * "dir" can be "asc" or "desc"
     *
     */
    sort?: string | undefined;
    /**
     * The type of library to filter. Can be "movie" or "show", or all if not present.
     *
     * @remarks
     *
     */
    libtype?: Libtype | undefined;
    /**
     * The number of items to return. If not specified, all items will be returned.
     *
     * @remarks
     * If the number of items exceeds the limit, the response will be paginated.
     *
     */
    maxresults?: number | undefined;
    /**
     * include collections in the results
     *
     * @remarks
     *
     */
    includeCollections?: IncludeCollections | undefined;
    /**
     * include external media in the results
     *
     * @remarks
     *
     */
    includeExternalMedia?: IncludeExternalMedia | undefined;
    /**
     * User Token
     */
    xPlexToken: string;
    /**
     * The index of the first item to return. If not specified, the first item will be returned.
     *
     * @remarks
     * If the number of items exceeds the limit, the response will be paginated.
     *
     */
    xPlexContainerStart?: number | undefined;
    /**
     * The number of items to return. If not specified, all items will be returned.
     *
     * @remarks
     * If the number of items exceeds the limit, the response will be paginated.
     *
     */
    xPlexContainerSize?: number | undefined;
};

export type GetWatchlistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetWatchlistWatchlistResponseBodyData = {
    errors?: Array<GetWatchlistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetWatchlistWatchlistResponseBody extends Error {
    errors?: Array<GetWatchlistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetWatchlistWatchlistResponseBodyData;

    constructor(err: GetWatchlistWatchlistResponseBodyData) {
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

        this.name = "GetWatchlistWatchlistResponseBody";
    }
}

export type Image = {
    alt?: string | undefined;
    type?: string | undefined;
    url?: string | undefined;
};

export type Metadata = {
    art?: string | undefined;
    guid?: string | undefined;
    key?: string | undefined;
    ratingKey?: string | undefined;
    studio?: string | undefined;
    tagline?: string | undefined;
    type?: string | undefined;
    thumb?: string | undefined;
    addedAt?: number | undefined;
    duration?: number | undefined;
    publicPagesURL?: string | undefined;
    slug?: string | undefined;
    userState?: boolean | undefined;
    title?: string | undefined;
    contentRating?: string | undefined;
    originallyAvailableAt?: RFCDate | undefined;
    year?: number | undefined;
    image?: Array<Image> | undefined;
    banner?: string | undefined;
    rating?: number | undefined;
    expiresAt?: number | undefined;
    originalTitle?: string | undefined;
    audienceRating?: number | undefined;
    audienceRatingImage?: string | undefined;
    ratingImage?: string | undefined;
    imdbRatingCount?: number | undefined;
    subtype?: string | undefined;
    theme?: string | undefined;
    leafCount?: number | undefined;
    childCount?: number | undefined;
    isContinuingSeries?: boolean | undefined;
    skipChildren?: boolean | undefined;
    availabilityId?: string | undefined;
    streamingMediaId?: string | undefined;
    playableKey?: string | undefined;
};

/**
 * Watchlist Data
 */
export type GetWatchlistResponseBody = {
    librarySectionID?: string | undefined;
    librarySectionTitle?: string | undefined;
    offset?: number | undefined;
    totalSize?: number | undefined;
    identifier?: string | undefined;
    size?: number | undefined;
    metadata?: Array<Metadata> | undefined;
};

export type GetWatchlistResponse = {
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
     * Watchlist Data
     */
    object?: GetWatchlistResponseBody | undefined;
};

/** @internal */
export namespace PathParamFilter$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PathParamFilter> =
        z.nativeEnum(PathParamFilter);
    export const outboundSchema: z.ZodNativeEnum<typeof PathParamFilter> = inboundSchema;
}

/** @internal */
export namespace Libtype$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Libtype> = z.nativeEnum(Libtype);
    export const outboundSchema: z.ZodNativeEnum<typeof Libtype> = inboundSchema;
}

/** @internal */
export namespace IncludeCollections$ {
    export const inboundSchema: z.ZodNativeEnum<typeof IncludeCollections> =
        z.nativeEnum(IncludeCollections);
    export const outboundSchema: z.ZodNativeEnum<typeof IncludeCollections> = inboundSchema;
}

/** @internal */
export namespace IncludeExternalMedia$ {
    export const inboundSchema: z.ZodNativeEnum<typeof IncludeExternalMedia> =
        z.nativeEnum(IncludeExternalMedia);
    export const outboundSchema: z.ZodNativeEnum<typeof IncludeExternalMedia> = inboundSchema;
}

/** @internal */
export namespace GetWatchlistRequest$ {
    export const inboundSchema: z.ZodType<GetWatchlistRequest, z.ZodTypeDef, unknown> = z
        .object({
            filter: PathParamFilter$.inboundSchema,
            sort: z.string().optional(),
            libtype: Libtype$.inboundSchema.optional(),
            maxresults: z.number().int().optional(),
            includeCollections: IncludeCollections$.inboundSchema.optional(),
            includeExternalMedia: IncludeExternalMedia$.inboundSchema.optional(),
            "X-Plex-Token": z.string(),
            "X-Plex-Container-Start": z.number().int().optional(),
            "X-Plex-Container-Size": z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Plex-Token": "xPlexToken",
                "X-Plex-Container-Start": "xPlexContainerStart",
                "X-Plex-Container-Size": "xPlexContainerSize",
            });
        });

    export type Outbound = {
        filter: string;
        sort?: string | undefined;
        libtype?: string | undefined;
        maxresults?: number | undefined;
        includeCollections?: number | undefined;
        includeExternalMedia?: number | undefined;
        "X-Plex-Token": string;
        "X-Plex-Container-Start"?: number | undefined;
        "X-Plex-Container-Size"?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWatchlistRequest> = z
        .object({
            filter: PathParamFilter$.outboundSchema,
            sort: z.string().optional(),
            libtype: Libtype$.outboundSchema.optional(),
            maxresults: z.number().int().optional(),
            includeCollections: IncludeCollections$.outboundSchema.optional(),
            includeExternalMedia: IncludeExternalMedia$.outboundSchema.optional(),
            xPlexToken: z.string(),
            xPlexContainerStart: z.number().int().optional(),
            xPlexContainerSize: z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xPlexToken: "X-Plex-Token",
                xPlexContainerStart: "X-Plex-Container-Start",
                xPlexContainerSize: "X-Plex-Container-Size",
            });
        });
}

/** @internal */
export namespace GetWatchlistErrors$ {
    export const inboundSchema: z.ZodType<GetWatchlistErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWatchlistErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetWatchlistWatchlistResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetWatchlistWatchlistResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            errors: z.array(z.lazy(() => GetWatchlistErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetWatchlistWatchlistResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetWatchlistErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetWatchlistWatchlistResponseBody
    > = z
        .instanceof(GetWatchlistWatchlistResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetWatchlistErrors$.outboundSchema)).optional(),
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
export namespace Image$ {
    export const inboundSchema: z.ZodType<Image, z.ZodTypeDef, unknown> = z.object({
        alt: z.string().optional(),
        type: z.string().optional(),
        url: z.string().optional(),
    });

    export type Outbound = {
        alt?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Image> = z.object({
        alt: z.string().optional(),
        type: z.string().optional(),
        url: z.string().optional(),
    });
}

/** @internal */
export namespace Metadata$ {
    export const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown> = z
        .object({
            art: z.string().optional(),
            guid: z.string().optional(),
            key: z.string().optional(),
            ratingKey: z.string().optional(),
            studio: z.string().optional(),
            tagline: z.string().optional(),
            type: z.string().optional(),
            thumb: z.string().optional(),
            addedAt: z.number().int().optional(),
            duration: z.number().int().optional(),
            publicPagesURL: z.string().optional(),
            slug: z.string().optional(),
            userState: z.boolean().optional(),
            title: z.string().optional(),
            contentRating: z.string().optional(),
            originallyAvailableAt: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            year: z.number().int().optional(),
            Image: z.array(z.lazy(() => Image$.inboundSchema)).optional(),
            banner: z.string().optional(),
            rating: z.number().optional(),
            expiresAt: z.number().int().optional(),
            originalTitle: z.string().optional(),
            audienceRating: z.number().optional(),
            audienceRatingImage: z.string().optional(),
            ratingImage: z.string().optional(),
            imdbRatingCount: z.number().int().optional(),
            subtype: z.string().optional(),
            theme: z.string().optional(),
            leafCount: z.number().int().optional(),
            childCount: z.number().int().optional(),
            isContinuingSeries: z.boolean().optional(),
            skipChildren: z.boolean().optional(),
            availabilityId: z.string().optional(),
            streamingMediaId: z.string().optional(),
            playableKey: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Image: "image",
            });
        });

    export type Outbound = {
        art?: string | undefined;
        guid?: string | undefined;
        key?: string | undefined;
        ratingKey?: string | undefined;
        studio?: string | undefined;
        tagline?: string | undefined;
        type?: string | undefined;
        thumb?: string | undefined;
        addedAt?: number | undefined;
        duration?: number | undefined;
        publicPagesURL?: string | undefined;
        slug?: string | undefined;
        userState?: boolean | undefined;
        title?: string | undefined;
        contentRating?: string | undefined;
        originallyAvailableAt?: string | undefined;
        year?: number | undefined;
        Image?: Array<Image$.Outbound> | undefined;
        banner?: string | undefined;
        rating?: number | undefined;
        expiresAt?: number | undefined;
        originalTitle?: string | undefined;
        audienceRating?: number | undefined;
        audienceRatingImage?: string | undefined;
        ratingImage?: string | undefined;
        imdbRatingCount?: number | undefined;
        subtype?: string | undefined;
        theme?: string | undefined;
        leafCount?: number | undefined;
        childCount?: number | undefined;
        isContinuingSeries?: boolean | undefined;
        skipChildren?: boolean | undefined;
        availabilityId?: string | undefined;
        streamingMediaId?: string | undefined;
        playableKey?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metadata> = z
        .object({
            art: z.string().optional(),
            guid: z.string().optional(),
            key: z.string().optional(),
            ratingKey: z.string().optional(),
            studio: z.string().optional(),
            tagline: z.string().optional(),
            type: z.string().optional(),
            thumb: z.string().optional(),
            addedAt: z.number().int().optional(),
            duration: z.number().int().optional(),
            publicPagesURL: z.string().optional(),
            slug: z.string().optional(),
            userState: z.boolean().optional(),
            title: z.string().optional(),
            contentRating: z.string().optional(),
            originallyAvailableAt: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            year: z.number().int().optional(),
            image: z.array(z.lazy(() => Image$.outboundSchema)).optional(),
            banner: z.string().optional(),
            rating: z.number().optional(),
            expiresAt: z.number().int().optional(),
            originalTitle: z.string().optional(),
            audienceRating: z.number().optional(),
            audienceRatingImage: z.string().optional(),
            ratingImage: z.string().optional(),
            imdbRatingCount: z.number().int().optional(),
            subtype: z.string().optional(),
            theme: z.string().optional(),
            leafCount: z.number().int().optional(),
            childCount: z.number().int().optional(),
            isContinuingSeries: z.boolean().optional(),
            skipChildren: z.boolean().optional(),
            availabilityId: z.string().optional(),
            streamingMediaId: z.string().optional(),
            playableKey: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                image: "Image",
            });
        });
}

/** @internal */
export namespace GetWatchlistResponseBody$ {
    export const inboundSchema: z.ZodType<GetWatchlistResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            librarySectionID: z.string().optional(),
            librarySectionTitle: z.string().optional(),
            offset: z.number().int().optional(),
            totalSize: z.number().int().optional(),
            identifier: z.string().optional(),
            size: z.number().int().optional(),
            Metadata: z.array(z.lazy(() => Metadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Metadata: "metadata",
            });
        });

    export type Outbound = {
        librarySectionID?: string | undefined;
        librarySectionTitle?: string | undefined;
        offset?: number | undefined;
        totalSize?: number | undefined;
        identifier?: string | undefined;
        size?: number | undefined;
        Metadata?: Array<Metadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWatchlistResponseBody> = z
        .object({
            librarySectionID: z.string().optional(),
            librarySectionTitle: z.string().optional(),
            offset: z.number().int().optional(),
            totalSize: z.number().int().optional(),
            identifier: z.string().optional(),
            size: z.number().int().optional(),
            metadata: z.array(z.lazy(() => Metadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                metadata: "Metadata",
            });
        });
}

/** @internal */
export namespace GetWatchlistResponse$ {
    export const inboundSchema: z.ZodType<GetWatchlistResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetWatchlistResponseBody$.inboundSchema).optional(),
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
        object?: GetWatchlistResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWatchlistResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetWatchlistResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
