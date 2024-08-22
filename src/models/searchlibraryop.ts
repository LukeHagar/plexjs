/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

/**
 * Plex content type to search for
 */
export enum Type {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export type SearchLibraryRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * Plex content type to search for
     */
    type: Type;
};

export type SearchLibraryErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type SearchLibraryLibraryResponseBodyData = {
    errors?: Array<SearchLibraryErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class SearchLibraryLibraryResponseBody extends Error {
    errors?: Array<SearchLibraryErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: SearchLibraryLibraryResponseBodyData;

    constructor(err: SearchLibraryLibraryResponseBodyData) {
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

        this.name = "SearchLibraryLibraryResponseBody";
    }
}

export type SearchLibraryMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    parentRatingKey?: string | undefined;
    guid?: string | undefined;
    parentGuid?: string | undefined;
    parentStudio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    parentKey?: string | undefined;
    parentTitle?: string | undefined;
    summary?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    parentYear?: number | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    parentThumb?: string | undefined;
    parentTheme?: string | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

export type SearchLibraryMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    art?: string | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    nocache?: boolean | undefined;
    thumb?: string | undefined;
    title1?: string | undefined;
    title2?: string | undefined;
    viewGroup?: string | undefined;
    viewMode?: number | undefined;
    metadata?: Array<SearchLibraryMetadata> | undefined;
};

/**
 * The contents of the library by section and type
 */
export type SearchLibraryResponseBody = {
    mediaContainer?: SearchLibraryMediaContainer | undefined;
};

export type SearchLibraryResponse = {
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
     * The contents of the library by section and type
     */
    object?: SearchLibraryResponseBody | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> = Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    export const inboundSchema = Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const SearchLibraryRequest$inboundSchema: z.ZodType<
    SearchLibraryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    sectionId: z.number().int(),
    type: Type$inboundSchema,
});

/** @internal */
export type SearchLibraryRequest$Outbound = {
    sectionId: number;
    type: number;
};

/** @internal */
export const SearchLibraryRequest$outboundSchema: z.ZodType<
    SearchLibraryRequest$Outbound,
    z.ZodTypeDef,
    SearchLibraryRequest
> = z.object({
    sectionId: z.number().int(),
    type: Type$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchLibraryRequest$ {
    /** @deprecated use `SearchLibraryRequest$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryRequest$inboundSchema;
    /** @deprecated use `SearchLibraryRequest$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryRequest$outboundSchema;
    /** @deprecated use `SearchLibraryRequest$Outbound` instead. */
    export type Outbound = SearchLibraryRequest$Outbound;
}

/** @internal */
export const SearchLibraryErrors$inboundSchema: z.ZodType<
    SearchLibraryErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type SearchLibraryErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const SearchLibraryErrors$outboundSchema: z.ZodType<
    SearchLibraryErrors$Outbound,
    z.ZodTypeDef,
    SearchLibraryErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchLibraryErrors$ {
    /** @deprecated use `SearchLibraryErrors$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryErrors$inboundSchema;
    /** @deprecated use `SearchLibraryErrors$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryErrors$outboundSchema;
    /** @deprecated use `SearchLibraryErrors$Outbound` instead. */
    export type Outbound = SearchLibraryErrors$Outbound;
}

/** @internal */
export const SearchLibraryLibraryResponseBody$inboundSchema: z.ZodType<
    SearchLibraryLibraryResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => SearchLibraryErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new SearchLibraryLibraryResponseBody(remapped);
    });

/** @internal */
export type SearchLibraryLibraryResponseBody$Outbound = {
    errors?: Array<SearchLibraryErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const SearchLibraryLibraryResponseBody$outboundSchema: z.ZodType<
    SearchLibraryLibraryResponseBody$Outbound,
    z.ZodTypeDef,
    SearchLibraryLibraryResponseBody
> = z
    .instanceof(SearchLibraryLibraryResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => SearchLibraryErrors$outboundSchema)).optional(),
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
export namespace SearchLibraryLibraryResponseBody$ {
    /** @deprecated use `SearchLibraryLibraryResponseBody$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryLibraryResponseBody$inboundSchema;
    /** @deprecated use `SearchLibraryLibraryResponseBody$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryLibraryResponseBody$outboundSchema;
    /** @deprecated use `SearchLibraryLibraryResponseBody$Outbound` instead. */
    export type Outbound = SearchLibraryLibraryResponseBody$Outbound;
}

/** @internal */
export const SearchLibraryMetadata$inboundSchema: z.ZodType<
    SearchLibraryMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({
    ratingKey: z.string().optional(),
    key: z.string().optional(),
    parentRatingKey: z.string().optional(),
    guid: z.string().optional(),
    parentGuid: z.string().optional(),
    parentStudio: z.string().optional(),
    type: z.string().optional(),
    title: z.string().optional(),
    parentKey: z.string().optional(),
    parentTitle: z.string().optional(),
    summary: z.string().optional(),
    index: z.number().int().optional(),
    parentIndex: z.number().int().optional(),
    parentYear: z.number().int().optional(),
    thumb: z.string().optional(),
    art: z.string().optional(),
    parentThumb: z.string().optional(),
    parentTheme: z.string().optional(),
    addedAt: z.number().int().optional(),
    updatedAt: z.number().int().optional(),
});

/** @internal */
export type SearchLibraryMetadata$Outbound = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    parentRatingKey?: string | undefined;
    guid?: string | undefined;
    parentGuid?: string | undefined;
    parentStudio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    parentKey?: string | undefined;
    parentTitle?: string | undefined;
    summary?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    parentYear?: number | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    parentThumb?: string | undefined;
    parentTheme?: string | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

/** @internal */
export const SearchLibraryMetadata$outboundSchema: z.ZodType<
    SearchLibraryMetadata$Outbound,
    z.ZodTypeDef,
    SearchLibraryMetadata
> = z.object({
    ratingKey: z.string().optional(),
    key: z.string().optional(),
    parentRatingKey: z.string().optional(),
    guid: z.string().optional(),
    parentGuid: z.string().optional(),
    parentStudio: z.string().optional(),
    type: z.string().optional(),
    title: z.string().optional(),
    parentKey: z.string().optional(),
    parentTitle: z.string().optional(),
    summary: z.string().optional(),
    index: z.number().int().optional(),
    parentIndex: z.number().int().optional(),
    parentYear: z.number().int().optional(),
    thumb: z.string().optional(),
    art: z.string().optional(),
    parentThumb: z.string().optional(),
    parentTheme: z.string().optional(),
    addedAt: z.number().int().optional(),
    updatedAt: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchLibraryMetadata$ {
    /** @deprecated use `SearchLibraryMetadata$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryMetadata$inboundSchema;
    /** @deprecated use `SearchLibraryMetadata$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryMetadata$outboundSchema;
    /** @deprecated use `SearchLibraryMetadata$Outbound` instead. */
    export type Outbound = SearchLibraryMetadata$Outbound;
}

/** @internal */
export const SearchLibraryMediaContainer$inboundSchema: z.ZodType<
    SearchLibraryMediaContainer,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        size: z.number().int().optional(),
        allowSync: z.boolean().optional(),
        art: z.string().optional(),
        identifier: z.string().optional(),
        mediaTagPrefix: z.string().optional(),
        mediaTagVersion: z.number().int().optional(),
        nocache: z.boolean().optional(),
        thumb: z.string().optional(),
        title1: z.string().optional(),
        title2: z.string().optional(),
        viewGroup: z.string().optional(),
        viewMode: z.number().int().optional(),
        Metadata: z.array(z.lazy(() => SearchLibraryMetadata$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Metadata: "metadata",
        });
    });

/** @internal */
export type SearchLibraryMediaContainer$Outbound = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    art?: string | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    nocache?: boolean | undefined;
    thumb?: string | undefined;
    title1?: string | undefined;
    title2?: string | undefined;
    viewGroup?: string | undefined;
    viewMode?: number | undefined;
    Metadata?: Array<SearchLibraryMetadata$Outbound> | undefined;
};

/** @internal */
export const SearchLibraryMediaContainer$outboundSchema: z.ZodType<
    SearchLibraryMediaContainer$Outbound,
    z.ZodTypeDef,
    SearchLibraryMediaContainer
> = z
    .object({
        size: z.number().int().optional(),
        allowSync: z.boolean().optional(),
        art: z.string().optional(),
        identifier: z.string().optional(),
        mediaTagPrefix: z.string().optional(),
        mediaTagVersion: z.number().int().optional(),
        nocache: z.boolean().optional(),
        thumb: z.string().optional(),
        title1: z.string().optional(),
        title2: z.string().optional(),
        viewGroup: z.string().optional(),
        viewMode: z.number().int().optional(),
        metadata: z.array(z.lazy(() => SearchLibraryMetadata$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            metadata: "Metadata",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchLibraryMediaContainer$ {
    /** @deprecated use `SearchLibraryMediaContainer$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryMediaContainer$inboundSchema;
    /** @deprecated use `SearchLibraryMediaContainer$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryMediaContainer$outboundSchema;
    /** @deprecated use `SearchLibraryMediaContainer$Outbound` instead. */
    export type Outbound = SearchLibraryMediaContainer$Outbound;
}

/** @internal */
export const SearchLibraryResponseBody$inboundSchema: z.ZodType<
    SearchLibraryResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MediaContainer: z.lazy(() => SearchLibraryMediaContainer$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            MediaContainer: "mediaContainer",
        });
    });

/** @internal */
export type SearchLibraryResponseBody$Outbound = {
    MediaContainer?: SearchLibraryMediaContainer$Outbound | undefined;
};

/** @internal */
export const SearchLibraryResponseBody$outboundSchema: z.ZodType<
    SearchLibraryResponseBody$Outbound,
    z.ZodTypeDef,
    SearchLibraryResponseBody
> = z
    .object({
        mediaContainer: z.lazy(() => SearchLibraryMediaContainer$outboundSchema).optional(),
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
export namespace SearchLibraryResponseBody$ {
    /** @deprecated use `SearchLibraryResponseBody$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryResponseBody$inboundSchema;
    /** @deprecated use `SearchLibraryResponseBody$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryResponseBody$outboundSchema;
    /** @deprecated use `SearchLibraryResponseBody$Outbound` instead. */
    export type Outbound = SearchLibraryResponseBody$Outbound;
}

/** @internal */
export const SearchLibraryResponse$inboundSchema: z.ZodType<
    SearchLibraryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => SearchLibraryResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type SearchLibraryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: SearchLibraryResponseBody$Outbound | undefined;
};

/** @internal */
export const SearchLibraryResponse$outboundSchema: z.ZodType<
    SearchLibraryResponse$Outbound,
    z.ZodTypeDef,
    SearchLibraryResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => SearchLibraryResponseBody$outboundSchema).optional(),
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
export namespace SearchLibraryResponse$ {
    /** @deprecated use `SearchLibraryResponse$inboundSchema` instead. */
    export const inboundSchema = SearchLibraryResponse$inboundSchema;
    /** @deprecated use `SearchLibraryResponse$outboundSchema` instead. */
    export const outboundSchema = SearchLibraryResponse$outboundSchema;
    /** @deprecated use `SearchLibraryResponse$Outbound` instead. */
    export type Outbound = SearchLibraryResponse$Outbound;
}
