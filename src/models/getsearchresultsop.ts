/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetSearchResultsRequest = {
    /**
     * The search query string to use
     */
    query: string;
};

export type GetSearchResultsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetSearchResultsSearchResponseBodyData = {
    errors?: Array<GetSearchResultsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetSearchResultsSearchResponseBody extends Error {
    errors?: Array<GetSearchResultsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSearchResultsSearchResponseBodyData;

    constructor(err: GetSearchResultsSearchResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.name = "GetSearchResultsSearchResponseBody";
    }
}

export type GetSearchResultsPart = {
    id?: number | undefined;
    key?: string | undefined;
    duration?: number | undefined;
    file?: string | undefined;
    size?: number | undefined;
    audioProfile?: string | undefined;
    container?: string | undefined;
    videoProfile?: string | undefined;
};

export type GetSearchResultsMedia = {
    id?: number | undefined;
    duration?: number | undefined;
    bitrate?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    aspectRatio?: number | undefined;
    audioChannels?: number | undefined;
    audioCodec?: string | undefined;
    videoCodec?: string | undefined;
    videoResolution?: number | undefined;
    container?: string | undefined;
    videoFrameRate?: string | undefined;
    audioProfile?: string | undefined;
    videoProfile?: string | undefined;
    part?: Array<GetSearchResultsPart> | undefined;
};

export type GetSearchResultsGenre = {
    tag?: string | undefined;
};

export type GetSearchResultsDirector = {
    tag?: string | undefined;
};

export type GetSearchResultsWriter = {
    tag?: string | undefined;
};

export type GetSearchResultsCountry = {
    tag?: string | undefined;
};

export type GetSearchResultsRole = {
    tag?: string | undefined;
};

export type GetSearchResultsMetadata = {
    allowSync?: boolean | undefined;
    librarySectionID?: number | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionUUID?: string | undefined;
    personal?: boolean | undefined;
    sourceTitle?: string | undefined;
    ratingKey?: number | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    studio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    contentRating?: string | undefined;
    summary?: string | undefined;
    rating?: number | undefined;
    audienceRating?: number | undefined;
    year?: number | undefined;
    tagline?: string | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    duration?: number | undefined;
    originallyAvailableAt?: Date | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
    audienceRatingImage?: string | undefined;
    chapterSource?: string | undefined;
    primaryExtraKey?: string | undefined;
    ratingImage?: string | undefined;
    media?: Array<GetSearchResultsMedia> | undefined;
    genre?: Array<GetSearchResultsGenre> | undefined;
    director?: Array<GetSearchResultsDirector> | undefined;
    writer?: Array<GetSearchResultsWriter> | undefined;
    country?: Array<GetSearchResultsCountry> | undefined;
    role?: Array<GetSearchResultsRole> | undefined;
};

export type Provider = {
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
};

export type GetSearchResultsMediaContainer = {
    size?: number | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    metadata?: Array<GetSearchResultsMetadata> | undefined;
    provider?: Array<Provider> | undefined;
};

/**
 * Search Results
 */
export type GetSearchResultsResponseBody = {
    mediaContainer?: GetSearchResultsMediaContainer | undefined;
};

export type GetSearchResultsResponse = {
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
     * Search Results
     */
    object?: GetSearchResultsResponseBody | undefined;
};

/** @internal */
export const GetSearchResultsRequest$inboundSchema: z.ZodType<
    GetSearchResultsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    query: z.string(),
});

/** @internal */
export type GetSearchResultsRequest$Outbound = {
    query: string;
};

/** @internal */
export const GetSearchResultsRequest$outboundSchema: z.ZodType<
    GetSearchResultsRequest$Outbound,
    z.ZodTypeDef,
    GetSearchResultsRequest
> = z.object({
    query: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsRequest$ {
    /** @deprecated use `GetSearchResultsRequest$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsRequest$inboundSchema;
    /** @deprecated use `GetSearchResultsRequest$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsRequest$outboundSchema;
    /** @deprecated use `GetSearchResultsRequest$Outbound` instead. */
    export type Outbound = GetSearchResultsRequest$Outbound;
}

/** @internal */
export const GetSearchResultsErrors$inboundSchema: z.ZodType<
    GetSearchResultsErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type GetSearchResultsErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetSearchResultsErrors$outboundSchema: z.ZodType<
    GetSearchResultsErrors$Outbound,
    z.ZodTypeDef,
    GetSearchResultsErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsErrors$ {
    /** @deprecated use `GetSearchResultsErrors$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsErrors$inboundSchema;
    /** @deprecated use `GetSearchResultsErrors$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsErrors$outboundSchema;
    /** @deprecated use `GetSearchResultsErrors$Outbound` instead. */
    export type Outbound = GetSearchResultsErrors$Outbound;
}

/** @internal */
export const GetSearchResultsSearchResponseBody$inboundSchema: z.ZodType<
    GetSearchResultsSearchResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetSearchResultsErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetSearchResultsSearchResponseBody(remapped);
    });

/** @internal */
export type GetSearchResultsSearchResponseBody$Outbound = {
    errors?: Array<GetSearchResultsErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetSearchResultsSearchResponseBody$outboundSchema: z.ZodType<
    GetSearchResultsSearchResponseBody$Outbound,
    z.ZodTypeDef,
    GetSearchResultsSearchResponseBody
> = z
    .instanceof(GetSearchResultsSearchResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetSearchResultsErrors$outboundSchema)).optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsSearchResponseBody$ {
    /** @deprecated use `GetSearchResultsSearchResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsSearchResponseBody$inboundSchema;
    /** @deprecated use `GetSearchResultsSearchResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsSearchResponseBody$outboundSchema;
    /** @deprecated use `GetSearchResultsSearchResponseBody$Outbound` instead. */
    export type Outbound = GetSearchResultsSearchResponseBody$Outbound;
}

/** @internal */
export const GetSearchResultsPart$inboundSchema: z.ZodType<
    GetSearchResultsPart,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.number().optional(),
    key: z.string().optional(),
    duration: z.number().optional(),
    file: z.string().optional(),
    size: z.number().optional(),
    audioProfile: z.string().optional(),
    container: z.string().optional(),
    videoProfile: z.string().optional(),
});

/** @internal */
export type GetSearchResultsPart$Outbound = {
    id?: number | undefined;
    key?: string | undefined;
    duration?: number | undefined;
    file?: string | undefined;
    size?: number | undefined;
    audioProfile?: string | undefined;
    container?: string | undefined;
    videoProfile?: string | undefined;
};

/** @internal */
export const GetSearchResultsPart$outboundSchema: z.ZodType<
    GetSearchResultsPart$Outbound,
    z.ZodTypeDef,
    GetSearchResultsPart
> = z.object({
    id: z.number().optional(),
    key: z.string().optional(),
    duration: z.number().optional(),
    file: z.string().optional(),
    size: z.number().optional(),
    audioProfile: z.string().optional(),
    container: z.string().optional(),
    videoProfile: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsPart$ {
    /** @deprecated use `GetSearchResultsPart$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsPart$inboundSchema;
    /** @deprecated use `GetSearchResultsPart$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsPart$outboundSchema;
    /** @deprecated use `GetSearchResultsPart$Outbound` instead. */
    export type Outbound = GetSearchResultsPart$Outbound;
}

/** @internal */
export const GetSearchResultsMedia$inboundSchema: z.ZodType<
    GetSearchResultsMedia,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.number().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        aspectRatio: z.number().optional(),
        audioChannels: z.number().optional(),
        audioCodec: z.string().optional(),
        videoCodec: z.string().optional(),
        videoResolution: z.number().optional(),
        container: z.string().optional(),
        videoFrameRate: z.string().optional(),
        audioProfile: z.string().optional(),
        videoProfile: z.string().optional(),
        Part: z.array(z.lazy(() => GetSearchResultsPart$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Part: "part",
        });
    });

/** @internal */
export type GetSearchResultsMedia$Outbound = {
    id?: number | undefined;
    duration?: number | undefined;
    bitrate?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    aspectRatio?: number | undefined;
    audioChannels?: number | undefined;
    audioCodec?: string | undefined;
    videoCodec?: string | undefined;
    videoResolution?: number | undefined;
    container?: string | undefined;
    videoFrameRate?: string | undefined;
    audioProfile?: string | undefined;
    videoProfile?: string | undefined;
    Part?: Array<GetSearchResultsPart$Outbound> | undefined;
};

/** @internal */
export const GetSearchResultsMedia$outboundSchema: z.ZodType<
    GetSearchResultsMedia$Outbound,
    z.ZodTypeDef,
    GetSearchResultsMedia
> = z
    .object({
        id: z.number().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        aspectRatio: z.number().optional(),
        audioChannels: z.number().optional(),
        audioCodec: z.string().optional(),
        videoCodec: z.string().optional(),
        videoResolution: z.number().optional(),
        container: z.string().optional(),
        videoFrameRate: z.string().optional(),
        audioProfile: z.string().optional(),
        videoProfile: z.string().optional(),
        part: z.array(z.lazy(() => GetSearchResultsPart$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            part: "Part",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsMedia$ {
    /** @deprecated use `GetSearchResultsMedia$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsMedia$inboundSchema;
    /** @deprecated use `GetSearchResultsMedia$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsMedia$outboundSchema;
    /** @deprecated use `GetSearchResultsMedia$Outbound` instead. */
    export type Outbound = GetSearchResultsMedia$Outbound;
}

/** @internal */
export const GetSearchResultsGenre$inboundSchema: z.ZodType<
    GetSearchResultsGenre,
    z.ZodTypeDef,
    unknown
> = z.object({
    tag: z.string().optional(),
});

/** @internal */
export type GetSearchResultsGenre$Outbound = {
    tag?: string | undefined;
};

/** @internal */
export const GetSearchResultsGenre$outboundSchema: z.ZodType<
    GetSearchResultsGenre$Outbound,
    z.ZodTypeDef,
    GetSearchResultsGenre
> = z.object({
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsGenre$ {
    /** @deprecated use `GetSearchResultsGenre$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsGenre$inboundSchema;
    /** @deprecated use `GetSearchResultsGenre$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsGenre$outboundSchema;
    /** @deprecated use `GetSearchResultsGenre$Outbound` instead. */
    export type Outbound = GetSearchResultsGenre$Outbound;
}

/** @internal */
export const GetSearchResultsDirector$inboundSchema: z.ZodType<
    GetSearchResultsDirector,
    z.ZodTypeDef,
    unknown
> = z.object({
    tag: z.string().optional(),
});

/** @internal */
export type GetSearchResultsDirector$Outbound = {
    tag?: string | undefined;
};

/** @internal */
export const GetSearchResultsDirector$outboundSchema: z.ZodType<
    GetSearchResultsDirector$Outbound,
    z.ZodTypeDef,
    GetSearchResultsDirector
> = z.object({
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsDirector$ {
    /** @deprecated use `GetSearchResultsDirector$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsDirector$inboundSchema;
    /** @deprecated use `GetSearchResultsDirector$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsDirector$outboundSchema;
    /** @deprecated use `GetSearchResultsDirector$Outbound` instead. */
    export type Outbound = GetSearchResultsDirector$Outbound;
}

/** @internal */
export const GetSearchResultsWriter$inboundSchema: z.ZodType<
    GetSearchResultsWriter,
    z.ZodTypeDef,
    unknown
> = z.object({
    tag: z.string().optional(),
});

/** @internal */
export type GetSearchResultsWriter$Outbound = {
    tag?: string | undefined;
};

/** @internal */
export const GetSearchResultsWriter$outboundSchema: z.ZodType<
    GetSearchResultsWriter$Outbound,
    z.ZodTypeDef,
    GetSearchResultsWriter
> = z.object({
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsWriter$ {
    /** @deprecated use `GetSearchResultsWriter$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsWriter$inboundSchema;
    /** @deprecated use `GetSearchResultsWriter$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsWriter$outboundSchema;
    /** @deprecated use `GetSearchResultsWriter$Outbound` instead. */
    export type Outbound = GetSearchResultsWriter$Outbound;
}

/** @internal */
export const GetSearchResultsCountry$inboundSchema: z.ZodType<
    GetSearchResultsCountry,
    z.ZodTypeDef,
    unknown
> = z.object({
    tag: z.string().optional(),
});

/** @internal */
export type GetSearchResultsCountry$Outbound = {
    tag?: string | undefined;
};

/** @internal */
export const GetSearchResultsCountry$outboundSchema: z.ZodType<
    GetSearchResultsCountry$Outbound,
    z.ZodTypeDef,
    GetSearchResultsCountry
> = z.object({
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsCountry$ {
    /** @deprecated use `GetSearchResultsCountry$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsCountry$inboundSchema;
    /** @deprecated use `GetSearchResultsCountry$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsCountry$outboundSchema;
    /** @deprecated use `GetSearchResultsCountry$Outbound` instead. */
    export type Outbound = GetSearchResultsCountry$Outbound;
}

/** @internal */
export const GetSearchResultsRole$inboundSchema: z.ZodType<
    GetSearchResultsRole,
    z.ZodTypeDef,
    unknown
> = z.object({
    tag: z.string().optional(),
});

/** @internal */
export type GetSearchResultsRole$Outbound = {
    tag?: string | undefined;
};

/** @internal */
export const GetSearchResultsRole$outboundSchema: z.ZodType<
    GetSearchResultsRole$Outbound,
    z.ZodTypeDef,
    GetSearchResultsRole
> = z.object({
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsRole$ {
    /** @deprecated use `GetSearchResultsRole$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsRole$inboundSchema;
    /** @deprecated use `GetSearchResultsRole$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsRole$outboundSchema;
    /** @deprecated use `GetSearchResultsRole$Outbound` instead. */
    export type Outbound = GetSearchResultsRole$Outbound;
}

/** @internal */
export const GetSearchResultsMetadata$inboundSchema: z.ZodType<
    GetSearchResultsMetadata,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        allowSync: z.boolean().optional(),
        librarySectionID: z.number().optional(),
        librarySectionTitle: z.string().optional(),
        librarySectionUUID: z.string().optional(),
        personal: z.boolean().optional(),
        sourceTitle: z.string().optional(),
        ratingKey: z.number().optional(),
        key: z.string().optional(),
        guid: z.string().optional(),
        studio: z.string().optional(),
        type: z.string().optional(),
        title: z.string().optional(),
        contentRating: z.string().optional(),
        summary: z.string().optional(),
        rating: z.number().optional(),
        audienceRating: z.number().optional(),
        year: z.number().optional(),
        tagline: z.string().optional(),
        thumb: z.string().optional(),
        art: z.string().optional(),
        duration: z.number().optional(),
        originallyAvailableAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        addedAt: z.number().optional(),
        updatedAt: z.number().optional(),
        audienceRatingImage: z.string().optional(),
        chapterSource: z.string().optional(),
        primaryExtraKey: z.string().optional(),
        ratingImage: z.string().optional(),
        Media: z.array(z.lazy(() => GetSearchResultsMedia$inboundSchema)).optional(),
        Genre: z.array(z.lazy(() => GetSearchResultsGenre$inboundSchema)).optional(),
        Director: z.array(z.lazy(() => GetSearchResultsDirector$inboundSchema)).optional(),
        Writer: z.array(z.lazy(() => GetSearchResultsWriter$inboundSchema)).optional(),
        Country: z.array(z.lazy(() => GetSearchResultsCountry$inboundSchema)).optional(),
        Role: z.array(z.lazy(() => GetSearchResultsRole$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Media: "media",
            Genre: "genre",
            Director: "director",
            Writer: "writer",
            Country: "country",
            Role: "role",
        });
    });

/** @internal */
export type GetSearchResultsMetadata$Outbound = {
    allowSync?: boolean | undefined;
    librarySectionID?: number | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionUUID?: string | undefined;
    personal?: boolean | undefined;
    sourceTitle?: string | undefined;
    ratingKey?: number | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    studio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    contentRating?: string | undefined;
    summary?: string | undefined;
    rating?: number | undefined;
    audienceRating?: number | undefined;
    year?: number | undefined;
    tagline?: string | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    duration?: number | undefined;
    originallyAvailableAt?: string | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
    audienceRatingImage?: string | undefined;
    chapterSource?: string | undefined;
    primaryExtraKey?: string | undefined;
    ratingImage?: string | undefined;
    Media?: Array<GetSearchResultsMedia$Outbound> | undefined;
    Genre?: Array<GetSearchResultsGenre$Outbound> | undefined;
    Director?: Array<GetSearchResultsDirector$Outbound> | undefined;
    Writer?: Array<GetSearchResultsWriter$Outbound> | undefined;
    Country?: Array<GetSearchResultsCountry$Outbound> | undefined;
    Role?: Array<GetSearchResultsRole$Outbound> | undefined;
};

/** @internal */
export const GetSearchResultsMetadata$outboundSchema: z.ZodType<
    GetSearchResultsMetadata$Outbound,
    z.ZodTypeDef,
    GetSearchResultsMetadata
> = z
    .object({
        allowSync: z.boolean().optional(),
        librarySectionID: z.number().optional(),
        librarySectionTitle: z.string().optional(),
        librarySectionUUID: z.string().optional(),
        personal: z.boolean().optional(),
        sourceTitle: z.string().optional(),
        ratingKey: z.number().optional(),
        key: z.string().optional(),
        guid: z.string().optional(),
        studio: z.string().optional(),
        type: z.string().optional(),
        title: z.string().optional(),
        contentRating: z.string().optional(),
        summary: z.string().optional(),
        rating: z.number().optional(),
        audienceRating: z.number().optional(),
        year: z.number().optional(),
        tagline: z.string().optional(),
        thumb: z.string().optional(),
        art: z.string().optional(),
        duration: z.number().optional(),
        originallyAvailableAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        addedAt: z.number().optional(),
        updatedAt: z.number().optional(),
        audienceRatingImage: z.string().optional(),
        chapterSource: z.string().optional(),
        primaryExtraKey: z.string().optional(),
        ratingImage: z.string().optional(),
        media: z.array(z.lazy(() => GetSearchResultsMedia$outboundSchema)).optional(),
        genre: z.array(z.lazy(() => GetSearchResultsGenre$outboundSchema)).optional(),
        director: z.array(z.lazy(() => GetSearchResultsDirector$outboundSchema)).optional(),
        writer: z.array(z.lazy(() => GetSearchResultsWriter$outboundSchema)).optional(),
        country: z.array(z.lazy(() => GetSearchResultsCountry$outboundSchema)).optional(),
        role: z.array(z.lazy(() => GetSearchResultsRole$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            media: "Media",
            genre: "Genre",
            director: "Director",
            writer: "Writer",
            country: "Country",
            role: "Role",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsMetadata$ {
    /** @deprecated use `GetSearchResultsMetadata$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsMetadata$inboundSchema;
    /** @deprecated use `GetSearchResultsMetadata$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsMetadata$outboundSchema;
    /** @deprecated use `GetSearchResultsMetadata$Outbound` instead. */
    export type Outbound = GetSearchResultsMetadata$Outbound;
}

/** @internal */
export const Provider$inboundSchema: z.ZodType<Provider, z.ZodTypeDef, unknown> = z.object({
    key: z.string().optional(),
    title: z.string().optional(),
    type: z.string().optional(),
});

/** @internal */
export type Provider$Outbound = {
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
};

/** @internal */
export const Provider$outboundSchema: z.ZodType<Provider$Outbound, z.ZodTypeDef, Provider> =
    z.object({
        key: z.string().optional(),
        title: z.string().optional(),
        type: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Provider$ {
    /** @deprecated use `Provider$inboundSchema` instead. */
    export const inboundSchema = Provider$inboundSchema;
    /** @deprecated use `Provider$outboundSchema` instead. */
    export const outboundSchema = Provider$outboundSchema;
    /** @deprecated use `Provider$Outbound` instead. */
    export type Outbound = Provider$Outbound;
}

/** @internal */
export const GetSearchResultsMediaContainer$inboundSchema: z.ZodType<
    GetSearchResultsMediaContainer,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        size: z.number().optional(),
        identifier: z.string().optional(),
        mediaTagPrefix: z.string().optional(),
        mediaTagVersion: z.number().optional(),
        Metadata: z.array(z.lazy(() => GetSearchResultsMetadata$inboundSchema)).optional(),
        Provider: z.array(z.lazy(() => Provider$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Metadata: "metadata",
            Provider: "provider",
        });
    });

/** @internal */
export type GetSearchResultsMediaContainer$Outbound = {
    size?: number | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    Metadata?: Array<GetSearchResultsMetadata$Outbound> | undefined;
    Provider?: Array<Provider$Outbound> | undefined;
};

/** @internal */
export const GetSearchResultsMediaContainer$outboundSchema: z.ZodType<
    GetSearchResultsMediaContainer$Outbound,
    z.ZodTypeDef,
    GetSearchResultsMediaContainer
> = z
    .object({
        size: z.number().optional(),
        identifier: z.string().optional(),
        mediaTagPrefix: z.string().optional(),
        mediaTagVersion: z.number().optional(),
        metadata: z.array(z.lazy(() => GetSearchResultsMetadata$outboundSchema)).optional(),
        provider: z.array(z.lazy(() => Provider$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            metadata: "Metadata",
            provider: "Provider",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsMediaContainer$ {
    /** @deprecated use `GetSearchResultsMediaContainer$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsMediaContainer$inboundSchema;
    /** @deprecated use `GetSearchResultsMediaContainer$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsMediaContainer$outboundSchema;
    /** @deprecated use `GetSearchResultsMediaContainer$Outbound` instead. */
    export type Outbound = GetSearchResultsMediaContainer$Outbound;
}

/** @internal */
export const GetSearchResultsResponseBody$inboundSchema: z.ZodType<
    GetSearchResultsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MediaContainer: z.lazy(() => GetSearchResultsMediaContainer$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            MediaContainer: "mediaContainer",
        });
    });

/** @internal */
export type GetSearchResultsResponseBody$Outbound = {
    MediaContainer?: GetSearchResultsMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetSearchResultsResponseBody$outboundSchema: z.ZodType<
    GetSearchResultsResponseBody$Outbound,
    z.ZodTypeDef,
    GetSearchResultsResponseBody
> = z
    .object({
        mediaContainer: z.lazy(() => GetSearchResultsMediaContainer$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            mediaContainer: "MediaContainer",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsResponseBody$ {
    /** @deprecated use `GetSearchResultsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsResponseBody$inboundSchema;
    /** @deprecated use `GetSearchResultsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsResponseBody$outboundSchema;
    /** @deprecated use `GetSearchResultsResponseBody$Outbound` instead. */
    export type Outbound = GetSearchResultsResponseBody$Outbound;
}

/** @internal */
export const GetSearchResultsResponse$inboundSchema: z.ZodType<
    GetSearchResultsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => GetSearchResultsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetSearchResultsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetSearchResultsResponseBody$Outbound | undefined;
};

/** @internal */
export const GetSearchResultsResponse$outboundSchema: z.ZodType<
    GetSearchResultsResponse$Outbound,
    z.ZodTypeDef,
    GetSearchResultsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => GetSearchResultsResponseBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSearchResultsResponse$ {
    /** @deprecated use `GetSearchResultsResponse$inboundSchema` instead. */
    export const inboundSchema = GetSearchResultsResponse$inboundSchema;
    /** @deprecated use `GetSearchResultsResponse$outboundSchema` instead. */
    export const outboundSchema = GetSearchResultsResponse$outboundSchema;
    /** @deprecated use `GetSearchResultsResponse$Outbound` instead. */
    export type Outbound = GetSearchResultsResponse$Outbound;
}
