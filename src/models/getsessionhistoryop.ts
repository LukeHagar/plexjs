/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { RFCDate } from "../types/rfcdate.js";
import * as z from "zod";

/**
 * Filters content by field and direction/equality
 *
 * @remarks
 * (Unknown if viewedAt is the only supported column)
 *
 */
export type Filter = {};

export type GetSessionHistoryRequest = {
    /**
     * Sorts the results by the specified field followed by the direction (asc, desc)
     *
     * @remarks
     *
     */
    sort?: string | undefined;
    /**
     * Filter results by those that are related to a specific users id
     *
     * @remarks
     *
     */
    accountId?: number | undefined;
    /**
     * Filters content by field and direction/equality
     *
     * @remarks
     * (Unknown if viewedAt is the only supported column)
     *
     */
    filter?: Filter | undefined;
    /**
     * Filters the results based on the id of a valid library section
     *
     * @remarks
     *
     */
    librarySectionID?: number | undefined;
};

export type GetSessionHistoryErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetSessionHistorySessionsResponseBodyData = {
    errors?: Array<GetSessionHistoryErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetSessionHistorySessionsResponseBody extends Error {
    errors?: Array<GetSessionHistoryErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSessionHistorySessionsResponseBodyData;

    constructor(err: GetSessionHistorySessionsResponseBodyData) {
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

        this.name = "GetSessionHistorySessionsResponseBody";
    }
}

export type GetSessionHistoryMetadata = {
    historyKey?: string | undefined;
    key?: string | undefined;
    ratingKey?: string | undefined;
    librarySectionID?: string | undefined;
    parentKey?: string | undefined;
    grandparentKey?: string | undefined;
    title?: string | undefined;
    grandparentTitle?: string | undefined;
    type?: string | undefined;
    thumb?: string | undefined;
    parentThumb?: string | undefined;
    grandparentThumb?: string | undefined;
    grandparentArt?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    originallyAvailableAt?: RFCDate | undefined;
    viewedAt?: number | undefined;
    accountID?: number | undefined;
    deviceID?: number | undefined;
};

export type GetSessionHistoryMediaContainer = {
    size?: number | undefined;
    metadata?: Array<GetSessionHistoryMetadata> | undefined;
};

/**
 * List of Plex Sessions
 */
export type GetSessionHistoryResponseBody = {
    mediaContainer?: GetSessionHistoryMediaContainer | undefined;
};

export type GetSessionHistoryResponse = {
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
     * List of Plex Sessions
     */
    object?: GetSessionHistoryResponseBody | undefined;
};

/** @internal */
export const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Filter$Outbound = {};

/** @internal */
export const Filter$outboundSchema: z.ZodType<Filter$Outbound, z.ZodTypeDef, Filter> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
    /** @deprecated use `Filter$inboundSchema` instead. */
    export const inboundSchema = Filter$inboundSchema;
    /** @deprecated use `Filter$outboundSchema` instead. */
    export const outboundSchema = Filter$outboundSchema;
    /** @deprecated use `Filter$Outbound` instead. */
    export type Outbound = Filter$Outbound;
}

/** @internal */
export const GetSessionHistoryRequest$inboundSchema: z.ZodType<
    GetSessionHistoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    sort: z.string().optional(),
    accountId: z.number().int().optional(),
    filter: z.lazy(() => Filter$inboundSchema).optional(),
    librarySectionID: z.number().int().optional(),
});

/** @internal */
export type GetSessionHistoryRequest$Outbound = {
    sort?: string | undefined;
    accountId?: number | undefined;
    filter?: Filter$Outbound | undefined;
    librarySectionID?: number | undefined;
};

/** @internal */
export const GetSessionHistoryRequest$outboundSchema: z.ZodType<
    GetSessionHistoryRequest$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryRequest
> = z.object({
    sort: z.string().optional(),
    accountId: z.number().int().optional(),
    filter: z.lazy(() => Filter$outboundSchema).optional(),
    librarySectionID: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionHistoryRequest$ {
    /** @deprecated use `GetSessionHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryRequest$inboundSchema;
    /** @deprecated use `GetSessionHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryRequest$outboundSchema;
    /** @deprecated use `GetSessionHistoryRequest$Outbound` instead. */
    export type Outbound = GetSessionHistoryRequest$Outbound;
}

/** @internal */
export const GetSessionHistoryErrors$inboundSchema: z.ZodType<
    GetSessionHistoryErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type GetSessionHistoryErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const GetSessionHistoryErrors$outboundSchema: z.ZodType<
    GetSessionHistoryErrors$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionHistoryErrors$ {
    /** @deprecated use `GetSessionHistoryErrors$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryErrors$inboundSchema;
    /** @deprecated use `GetSessionHistoryErrors$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryErrors$outboundSchema;
    /** @deprecated use `GetSessionHistoryErrors$Outbound` instead. */
    export type Outbound = GetSessionHistoryErrors$Outbound;
}

/** @internal */
export const GetSessionHistorySessionsResponseBody$inboundSchema: z.ZodType<
    GetSessionHistorySessionsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => GetSessionHistoryErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new GetSessionHistorySessionsResponseBody(remapped);
    });

/** @internal */
export type GetSessionHistorySessionsResponseBody$Outbound = {
    errors?: Array<GetSessionHistoryErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const GetSessionHistorySessionsResponseBody$outboundSchema: z.ZodType<
    GetSessionHistorySessionsResponseBody$Outbound,
    z.ZodTypeDef,
    GetSessionHistorySessionsResponseBody
> = z
    .instanceof(GetSessionHistorySessionsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => GetSessionHistoryErrors$outboundSchema)).optional(),
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
export namespace GetSessionHistorySessionsResponseBody$ {
    /** @deprecated use `GetSessionHistorySessionsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistorySessionsResponseBody$inboundSchema;
    /** @deprecated use `GetSessionHistorySessionsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistorySessionsResponseBody$outboundSchema;
    /** @deprecated use `GetSessionHistorySessionsResponseBody$Outbound` instead. */
    export type Outbound = GetSessionHistorySessionsResponseBody$Outbound;
}

/** @internal */
export const GetSessionHistoryMetadata$inboundSchema: z.ZodType<
    GetSessionHistoryMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({
    historyKey: z.string().optional(),
    key: z.string().optional(),
    ratingKey: z.string().optional(),
    librarySectionID: z.string().optional(),
    parentKey: z.string().optional(),
    grandparentKey: z.string().optional(),
    title: z.string().optional(),
    grandparentTitle: z.string().optional(),
    type: z.string().optional(),
    thumb: z.string().optional(),
    parentThumb: z.string().optional(),
    grandparentThumb: z.string().optional(),
    grandparentArt: z.string().optional(),
    index: z.number().int().optional(),
    parentIndex: z.number().int().optional(),
    originallyAvailableAt: z
        .string()
        .transform((v) => new RFCDate(v))
        .optional(),
    viewedAt: z.number().int().optional(),
    accountID: z.number().int().optional(),
    deviceID: z.number().int().optional(),
});

/** @internal */
export type GetSessionHistoryMetadata$Outbound = {
    historyKey?: string | undefined;
    key?: string | undefined;
    ratingKey?: string | undefined;
    librarySectionID?: string | undefined;
    parentKey?: string | undefined;
    grandparentKey?: string | undefined;
    title?: string | undefined;
    grandparentTitle?: string | undefined;
    type?: string | undefined;
    thumb?: string | undefined;
    parentThumb?: string | undefined;
    grandparentThumb?: string | undefined;
    grandparentArt?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    originallyAvailableAt?: string | undefined;
    viewedAt?: number | undefined;
    accountID?: number | undefined;
    deviceID?: number | undefined;
};

/** @internal */
export const GetSessionHistoryMetadata$outboundSchema: z.ZodType<
    GetSessionHistoryMetadata$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryMetadata
> = z.object({
    historyKey: z.string().optional(),
    key: z.string().optional(),
    ratingKey: z.string().optional(),
    librarySectionID: z.string().optional(),
    parentKey: z.string().optional(),
    grandparentKey: z.string().optional(),
    title: z.string().optional(),
    grandparentTitle: z.string().optional(),
    type: z.string().optional(),
    thumb: z.string().optional(),
    parentThumb: z.string().optional(),
    grandparentThumb: z.string().optional(),
    grandparentArt: z.string().optional(),
    index: z.number().int().optional(),
    parentIndex: z.number().int().optional(),
    originallyAvailableAt: z
        .instanceof(RFCDate)
        .transform((v) => v.toString())
        .optional(),
    viewedAt: z.number().int().optional(),
    accountID: z.number().int().optional(),
    deviceID: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionHistoryMetadata$ {
    /** @deprecated use `GetSessionHistoryMetadata$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryMetadata$inboundSchema;
    /** @deprecated use `GetSessionHistoryMetadata$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryMetadata$outboundSchema;
    /** @deprecated use `GetSessionHistoryMetadata$Outbound` instead. */
    export type Outbound = GetSessionHistoryMetadata$Outbound;
}

/** @internal */
export const GetSessionHistoryMediaContainer$inboundSchema: z.ZodType<
    GetSessionHistoryMediaContainer,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        size: z.number().int().optional(),
        Metadata: z.array(z.lazy(() => GetSessionHistoryMetadata$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Metadata: "metadata",
        });
    });

/** @internal */
export type GetSessionHistoryMediaContainer$Outbound = {
    size?: number | undefined;
    Metadata?: Array<GetSessionHistoryMetadata$Outbound> | undefined;
};

/** @internal */
export const GetSessionHistoryMediaContainer$outboundSchema: z.ZodType<
    GetSessionHistoryMediaContainer$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryMediaContainer
> = z
    .object({
        size: z.number().int().optional(),
        metadata: z.array(z.lazy(() => GetSessionHistoryMetadata$outboundSchema)).optional(),
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
export namespace GetSessionHistoryMediaContainer$ {
    /** @deprecated use `GetSessionHistoryMediaContainer$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryMediaContainer$inboundSchema;
    /** @deprecated use `GetSessionHistoryMediaContainer$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryMediaContainer$outboundSchema;
    /** @deprecated use `GetSessionHistoryMediaContainer$Outbound` instead. */
    export type Outbound = GetSessionHistoryMediaContainer$Outbound;
}

/** @internal */
export const GetSessionHistoryResponseBody$inboundSchema: z.ZodType<
    GetSessionHistoryResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MediaContainer: z.lazy(() => GetSessionHistoryMediaContainer$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            MediaContainer: "mediaContainer",
        });
    });

/** @internal */
export type GetSessionHistoryResponseBody$Outbound = {
    MediaContainer?: GetSessionHistoryMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetSessionHistoryResponseBody$outboundSchema: z.ZodType<
    GetSessionHistoryResponseBody$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryResponseBody
> = z
    .object({
        mediaContainer: z.lazy(() => GetSessionHistoryMediaContainer$outboundSchema).optional(),
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
export namespace GetSessionHistoryResponseBody$ {
    /** @deprecated use `GetSessionHistoryResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryResponseBody$inboundSchema;
    /** @deprecated use `GetSessionHistoryResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryResponseBody$outboundSchema;
    /** @deprecated use `GetSessionHistoryResponseBody$Outbound` instead. */
    export type Outbound = GetSessionHistoryResponseBody$Outbound;
}

/** @internal */
export const GetSessionHistoryResponse$inboundSchema: z.ZodType<
    GetSessionHistoryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        object: z.lazy(() => GetSessionHistoryResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetSessionHistoryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetSessionHistoryResponseBody$Outbound | undefined;
};

/** @internal */
export const GetSessionHistoryResponse$outboundSchema: z.ZodType<
    GetSessionHistoryResponse$Outbound,
    z.ZodTypeDef,
    GetSessionHistoryResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        object: z.lazy(() => GetSessionHistoryResponseBody$outboundSchema).optional(),
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
export namespace GetSessionHistoryResponse$ {
    /** @deprecated use `GetSessionHistoryResponse$inboundSchema` instead. */
    export const inboundSchema = GetSessionHistoryResponse$inboundSchema;
    /** @deprecated use `GetSessionHistoryResponse$outboundSchema` instead. */
    export const outboundSchema = GetSessionHistoryResponse$outboundSchema;
    /** @deprecated use `GetSessionHistoryResponse$Outbound` instead. */
    export type Outbound = GetSessionHistoryResponse$Outbound;
}
