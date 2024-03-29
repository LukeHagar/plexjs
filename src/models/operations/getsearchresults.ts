/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetSearchResultsRequest = {
    /**
     * The search query string to use
     */
    query: string;
};

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
export namespace GetSearchResultsRequest$ {
    export type Inbound = {
        query: string;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            query: z.string(),
        })
        .transform((v) => {
            return {
                query: v.query,
            };
        });

    export type Outbound = {
        query: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsRequest> = z
        .object({
            query: z.string(),
        })
        .transform((v) => {
            return {
                query: v.query,
            };
        });
}

/** @internal */
export namespace GetSearchResultsPart$ {
    export type Inbound = {
        id?: number | undefined;
        key?: string | undefined;
        duration?: number | undefined;
        file?: string | undefined;
        size?: number | undefined;
        audioProfile?: string | undefined;
        container?: string | undefined;
        videoProfile?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsPart, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().optional(),
            key: z.string().optional(),
            duration: z.number().optional(),
            file: z.string().optional(),
            size: z.number().optional(),
            audioProfile: z.string().optional(),
            container: z.string().optional(),
            videoProfile: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.file === undefined ? null : { file: v.file }),
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.audioProfile === undefined ? null : { audioProfile: v.audioProfile }),
                ...(v.container === undefined ? null : { container: v.container }),
                ...(v.videoProfile === undefined ? null : { videoProfile: v.videoProfile }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        key?: string | undefined;
        duration?: number | undefined;
        file?: string | undefined;
        size?: number | undefined;
        audioProfile?: string | undefined;
        container?: string | undefined;
        videoProfile?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsPart> = z
        .object({
            id: z.number().optional(),
            key: z.string().optional(),
            duration: z.number().optional(),
            file: z.string().optional(),
            size: z.number().optional(),
            audioProfile: z.string().optional(),
            container: z.string().optional(),
            videoProfile: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.file === undefined ? null : { file: v.file }),
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.audioProfile === undefined ? null : { audioProfile: v.audioProfile }),
                ...(v.container === undefined ? null : { container: v.container }),
                ...(v.videoProfile === undefined ? null : { videoProfile: v.videoProfile }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsMedia$ {
    export type Inbound = {
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
        Part?: Array<GetSearchResultsPart$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsMedia, z.ZodTypeDef, Inbound> = z
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
            Part: z.array(z.lazy(() => GetSearchResultsPart$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.bitrate === undefined ? null : { bitrate: v.bitrate }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.aspectRatio === undefined ? null : { aspectRatio: v.aspectRatio }),
                ...(v.audioChannels === undefined ? null : { audioChannels: v.audioChannels }),
                ...(v.audioCodec === undefined ? null : { audioCodec: v.audioCodec }),
                ...(v.videoCodec === undefined ? null : { videoCodec: v.videoCodec }),
                ...(v.videoResolution === undefined
                    ? null
                    : { videoResolution: v.videoResolution }),
                ...(v.container === undefined ? null : { container: v.container }),
                ...(v.videoFrameRate === undefined ? null : { videoFrameRate: v.videoFrameRate }),
                ...(v.audioProfile === undefined ? null : { audioProfile: v.audioProfile }),
                ...(v.videoProfile === undefined ? null : { videoProfile: v.videoProfile }),
                ...(v.Part === undefined ? null : { part: v.Part }),
            };
        });

    export type Outbound = {
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
        Part?: Array<GetSearchResultsPart$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsMedia> = z
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
            part: z.array(z.lazy(() => GetSearchResultsPart$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.bitrate === undefined ? null : { bitrate: v.bitrate }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.aspectRatio === undefined ? null : { aspectRatio: v.aspectRatio }),
                ...(v.audioChannels === undefined ? null : { audioChannels: v.audioChannels }),
                ...(v.audioCodec === undefined ? null : { audioCodec: v.audioCodec }),
                ...(v.videoCodec === undefined ? null : { videoCodec: v.videoCodec }),
                ...(v.videoResolution === undefined
                    ? null
                    : { videoResolution: v.videoResolution }),
                ...(v.container === undefined ? null : { container: v.container }),
                ...(v.videoFrameRate === undefined ? null : { videoFrameRate: v.videoFrameRate }),
                ...(v.audioProfile === undefined ? null : { audioProfile: v.audioProfile }),
                ...(v.videoProfile === undefined ? null : { videoProfile: v.videoProfile }),
                ...(v.part === undefined ? null : { Part: v.part }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsGenre$ {
    export type Inbound = {
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsGenre, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsGenre> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsDirector$ {
    export type Inbound = {
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsDirector, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsDirector> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsWriter$ {
    export type Inbound = {
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsWriter, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsWriter> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsCountry$ {
    export type Inbound = {
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsCountry, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsCountry> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsRole$ {
    export type Inbound = {
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsRole, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsRole> = z
        .object({
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsMetadata$ {
    export type Inbound = {
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
        Media?: Array<GetSearchResultsMedia$.Inbound> | undefined;
        Genre?: Array<GetSearchResultsGenre$.Inbound> | undefined;
        Director?: Array<GetSearchResultsDirector$.Inbound> | undefined;
        Writer?: Array<GetSearchResultsWriter$.Inbound> | undefined;
        Country?: Array<GetSearchResultsCountry$.Inbound> | undefined;
        Role?: Array<GetSearchResultsRole$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsMetadata, z.ZodTypeDef, Inbound> = z
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
            Media: z.array(z.lazy(() => GetSearchResultsMedia$.inboundSchema)).optional(),
            Genre: z.array(z.lazy(() => GetSearchResultsGenre$.inboundSchema)).optional(),
            Director: z.array(z.lazy(() => GetSearchResultsDirector$.inboundSchema)).optional(),
            Writer: z.array(z.lazy(() => GetSearchResultsWriter$.inboundSchema)).optional(),
            Country: z.array(z.lazy(() => GetSearchResultsCountry$.inboundSchema)).optional(),
            Role: z.array(z.lazy(() => GetSearchResultsRole$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
                ...(v.librarySectionTitle === undefined
                    ? null
                    : { librarySectionTitle: v.librarySectionTitle }),
                ...(v.librarySectionUUID === undefined
                    ? null
                    : { librarySectionUUID: v.librarySectionUUID }),
                ...(v.personal === undefined ? null : { personal: v.personal }),
                ...(v.sourceTitle === undefined ? null : { sourceTitle: v.sourceTitle }),
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.studio === undefined ? null : { studio: v.studio }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.contentRating === undefined ? null : { contentRating: v.contentRating }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.rating === undefined ? null : { rating: v.rating }),
                ...(v.audienceRating === undefined ? null : { audienceRating: v.audienceRating }),
                ...(v.year === undefined ? null : { year: v.year }),
                ...(v.tagline === undefined ? null : { tagline: v.tagline }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.originallyAvailableAt === undefined
                    ? null
                    : { originallyAvailableAt: v.originallyAvailableAt }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.audienceRatingImage === undefined
                    ? null
                    : { audienceRatingImage: v.audienceRatingImage }),
                ...(v.chapterSource === undefined ? null : { chapterSource: v.chapterSource }),
                ...(v.primaryExtraKey === undefined
                    ? null
                    : { primaryExtraKey: v.primaryExtraKey }),
                ...(v.ratingImage === undefined ? null : { ratingImage: v.ratingImage }),
                ...(v.Media === undefined ? null : { media: v.Media }),
                ...(v.Genre === undefined ? null : { genre: v.Genre }),
                ...(v.Director === undefined ? null : { director: v.Director }),
                ...(v.Writer === undefined ? null : { writer: v.Writer }),
                ...(v.Country === undefined ? null : { country: v.Country }),
                ...(v.Role === undefined ? null : { role: v.Role }),
            };
        });

    export type Outbound = {
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
        Media?: Array<GetSearchResultsMedia$.Outbound> | undefined;
        Genre?: Array<GetSearchResultsGenre$.Outbound> | undefined;
        Director?: Array<GetSearchResultsDirector$.Outbound> | undefined;
        Writer?: Array<GetSearchResultsWriter$.Outbound> | undefined;
        Country?: Array<GetSearchResultsCountry$.Outbound> | undefined;
        Role?: Array<GetSearchResultsRole$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsMetadata> = z
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
            media: z.array(z.lazy(() => GetSearchResultsMedia$.outboundSchema)).optional(),
            genre: z.array(z.lazy(() => GetSearchResultsGenre$.outboundSchema)).optional(),
            director: z.array(z.lazy(() => GetSearchResultsDirector$.outboundSchema)).optional(),
            writer: z.array(z.lazy(() => GetSearchResultsWriter$.outboundSchema)).optional(),
            country: z.array(z.lazy(() => GetSearchResultsCountry$.outboundSchema)).optional(),
            role: z.array(z.lazy(() => GetSearchResultsRole$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
                ...(v.librarySectionTitle === undefined
                    ? null
                    : { librarySectionTitle: v.librarySectionTitle }),
                ...(v.librarySectionUUID === undefined
                    ? null
                    : { librarySectionUUID: v.librarySectionUUID }),
                ...(v.personal === undefined ? null : { personal: v.personal }),
                ...(v.sourceTitle === undefined ? null : { sourceTitle: v.sourceTitle }),
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.studio === undefined ? null : { studio: v.studio }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.contentRating === undefined ? null : { contentRating: v.contentRating }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.rating === undefined ? null : { rating: v.rating }),
                ...(v.audienceRating === undefined ? null : { audienceRating: v.audienceRating }),
                ...(v.year === undefined ? null : { year: v.year }),
                ...(v.tagline === undefined ? null : { tagline: v.tagline }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.originallyAvailableAt === undefined
                    ? null
                    : { originallyAvailableAt: v.originallyAvailableAt }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.audienceRatingImage === undefined
                    ? null
                    : { audienceRatingImage: v.audienceRatingImage }),
                ...(v.chapterSource === undefined ? null : { chapterSource: v.chapterSource }),
                ...(v.primaryExtraKey === undefined
                    ? null
                    : { primaryExtraKey: v.primaryExtraKey }),
                ...(v.ratingImage === undefined ? null : { ratingImage: v.ratingImage }),
                ...(v.media === undefined ? null : { Media: v.media }),
                ...(v.genre === undefined ? null : { Genre: v.genre }),
                ...(v.director === undefined ? null : { Director: v.director }),
                ...(v.writer === undefined ? null : { Writer: v.writer }),
                ...(v.country === undefined ? null : { Country: v.country }),
                ...(v.role === undefined ? null : { Role: v.role }),
            };
        });
}

/** @internal */
export namespace Provider$ {
    export type Inbound = {
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Provider, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Provider> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        Metadata?: Array<GetSearchResultsMetadata$.Inbound> | undefined;
        Provider?: Array<Provider$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsMediaContainer, z.ZodTypeDef, Inbound> = z
        .object({
            size: z.number().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().optional(),
            Metadata: z.array(z.lazy(() => GetSearchResultsMetadata$.inboundSchema)).optional(),
            Provider: z.array(z.lazy(() => Provider$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.mediaTagPrefix === undefined ? null : { mediaTagPrefix: v.mediaTagPrefix }),
                ...(v.mediaTagVersion === undefined
                    ? null
                    : { mediaTagVersion: v.mediaTagVersion }),
                ...(v.Metadata === undefined ? null : { metadata: v.Metadata }),
                ...(v.Provider === undefined ? null : { provider: v.Provider }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        Metadata?: Array<GetSearchResultsMetadata$.Outbound> | undefined;
        Provider?: Array<Provider$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsMediaContainer> =
        z
            .object({
                size: z.number().optional(),
                identifier: z.string().optional(),
                mediaTagPrefix: z.string().optional(),
                mediaTagVersion: z.number().optional(),
                metadata: z
                    .array(z.lazy(() => GetSearchResultsMetadata$.outboundSchema))
                    .optional(),
                provider: z.array(z.lazy(() => Provider$.outboundSchema)).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.size === undefined ? null : { size: v.size }),
                    ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                    ...(v.mediaTagPrefix === undefined
                        ? null
                        : { mediaTagPrefix: v.mediaTagPrefix }),
                    ...(v.mediaTagVersion === undefined
                        ? null
                        : { mediaTagVersion: v.mediaTagVersion }),
                    ...(v.metadata === undefined ? null : { Metadata: v.metadata }),
                    ...(v.provider === undefined ? null : { Provider: v.provider }),
                };
            });
}

/** @internal */
export namespace GetSearchResultsResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetSearchResultsMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => GetSearchResultsMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: GetSearchResultsMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetSearchResultsMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace GetSearchResultsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetSearchResultsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSearchResultsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetSearchResultsResponseBody$.inboundSchema).optional(),
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
        object?: GetSearchResultsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResultsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetSearchResultsResponseBody$.outboundSchema).optional(),
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
