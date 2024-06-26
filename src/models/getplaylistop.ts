/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetPlaylistRequest = {
    /**
     * the ID of the playlist
     */
    playlistID: number;
};

export type GetPlaylistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetPlaylistPlaylistsResponseBodyData = {
    errors?: Array<GetPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetPlaylistPlaylistsResponseBody extends Error {
    errors?: Array<GetPlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetPlaylistPlaylistsResponseBodyData;

    constructor(err: GetPlaylistPlaylistsResponseBodyData) {
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

        this.name = "GetPlaylistPlaylistsResponseBody";
    }
}

export type GetPlaylistMetadata = {
    content?: string | undefined;
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
    duration?: number | undefined;
    leafCount?: number | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

export type GetPlaylistMediaContainer = {
    size?: number | undefined;
    metadata?: Array<GetPlaylistMetadata> | undefined;
};

/**
 * The playlist
 */
export type GetPlaylistResponseBody = {
    mediaContainer?: GetPlaylistMediaContainer | undefined;
};

export type GetPlaylistResponse = {
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
     * The playlist
     */
    object?: GetPlaylistResponseBody | undefined;
};

/** @internal */
export namespace GetPlaylistRequest$ {
    export const inboundSchema: z.ZodType<GetPlaylistRequest, z.ZodTypeDef, unknown> = z.object({
        playlistID: z.number(),
    });

    export type Outbound = {
        playlistID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistRequest> = z.object({
        playlistID: z.number(),
    });
}

/** @internal */
export namespace GetPlaylistErrors$ {
    export const inboundSchema: z.ZodType<GetPlaylistErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetPlaylistPlaylistsResponseBody$ {
    export const inboundSchema: z.ZodType<GetPlaylistPlaylistsResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                errors: z.array(z.lazy(() => GetPlaylistErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                const remapped = remap$(v, {
                    RawResponse: "rawResponse",
                });

                return new GetPlaylistPlaylistsResponseBody(remapped);
            });

    export type Outbound = {
        errors?: Array<GetPlaylistErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPlaylistPlaylistsResponseBody
    > = z
        .instanceof(GetPlaylistPlaylistsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetPlaylistErrors$.outboundSchema)).optional(),
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
export namespace GetPlaylistMetadata$ {
    export const inboundSchema: z.ZodType<GetPlaylistMetadata, z.ZodTypeDef, unknown> = z.object({
        content: z.string().optional(),
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
        duration: z.number().int().optional(),
        leafCount: z.number().int().optional(),
        addedAt: z.number().int().optional(),
        updatedAt: z.number().int().optional(),
    });

    export type Outbound = {
        content?: string | undefined;
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
        duration?: number | undefined;
        leafCount?: number | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistMetadata> = z.object({
        content: z.string().optional(),
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
        duration: z.number().int().optional(),
        leafCount: z.number().int().optional(),
        addedAt: z.number().int().optional(),
        updatedAt: z.number().int().optional(),
    });
}

/** @internal */
export namespace GetPlaylistMediaContainer$ {
    export const inboundSchema: z.ZodType<GetPlaylistMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().int().optional(),
            Metadata: z.array(z.lazy(() => GetPlaylistMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Metadata: "metadata",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        Metadata?: Array<GetPlaylistMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            metadata: z.array(z.lazy(() => GetPlaylistMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                metadata: "Metadata",
            });
        });
}

/** @internal */
export namespace GetPlaylistResponseBody$ {
    export const inboundSchema: z.ZodType<GetPlaylistResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetPlaylistMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetPlaylistMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetPlaylistMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetPlaylistResponse$ {
    export const inboundSchema: z.ZodType<GetPlaylistResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetPlaylistResponseBody$.inboundSchema).optional(),
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
        object?: GetPlaylistResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPlaylistResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetPlaylistResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
