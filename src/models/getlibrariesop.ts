/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetLibrariesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetLibrariesLibraryResponseBodyData = {
    errors?: Array<GetLibrariesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetLibrariesLibraryResponseBody extends Error {
    errors?: Array<GetLibrariesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetLibrariesLibraryResponseBodyData;

    constructor(err: GetLibrariesLibraryResponseBodyData) {
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

        this.name = "GetLibrariesLibraryResponseBody";
    }
}

export type GetLibrariesLocation = {
    id?: number | undefined;
    path?: string | undefined;
};

export type GetLibrariesDirectory = {
    allowSync?: boolean | undefined;
    art?: string | undefined;
    composite?: string | undefined;
    filters?: boolean | undefined;
    refreshing?: boolean | undefined;
    thumb?: string | undefined;
    key?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    agent?: string | undefined;
    scanner?: string | undefined;
    language?: string | undefined;
    uuid?: string | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    scannedAt?: number | undefined;
    content?: boolean | undefined;
    directory?: boolean | undefined;
    contentChangedAt?: number | undefined;
    hidden?: number | undefined;
    location?: Array<GetLibrariesLocation> | undefined;
};

export type GetLibrariesMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    title1?: string | undefined;
    directory?: Array<GetLibrariesDirectory> | undefined;
};

/**
 * The libraries available on the Server
 */
export type GetLibrariesResponseBody = {
    mediaContainer?: GetLibrariesMediaContainer | undefined;
};

export type GetLibrariesResponse = {
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
     * The libraries available on the Server
     */
    object?: GetLibrariesResponseBody | undefined;
};

/** @internal */
export namespace GetLibrariesErrors$ {
    export const inboundSchema: z.ZodType<GetLibrariesErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetLibrariesLibraryResponseBody$ {
    export const inboundSchema: z.ZodType<GetLibrariesLibraryResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                errors: z.array(z.lazy(() => GetLibrariesErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                const remapped = remap$(v, {
                    RawResponse: "rawResponse",
                });

                return new GetLibrariesLibraryResponseBody(remapped);
            });

    export type Outbound = {
        errors?: Array<GetLibrariesErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetLibrariesLibraryResponseBody
    > = z
        .instanceof(GetLibrariesLibraryResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetLibrariesErrors$.outboundSchema)).optional(),
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
export namespace GetLibrariesLocation$ {
    export const inboundSchema: z.ZodType<GetLibrariesLocation, z.ZodTypeDef, unknown> = z.object({
        id: z.number().int().optional(),
        path: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        path?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesLocation> = z.object(
        {
            id: z.number().int().optional(),
            path: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetLibrariesDirectory$ {
    export const inboundSchema: z.ZodType<GetLibrariesDirectory, z.ZodTypeDef, unknown> = z
        .object({
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            composite: z.string().optional(),
            filters: z.boolean().optional(),
            refreshing: z.boolean().optional(),
            thumb: z.string().optional(),
            key: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            agent: z.string().optional(),
            scanner: z.string().optional(),
            language: z.string().optional(),
            uuid: z.string().optional(),
            updatedAt: z.number().int().optional(),
            createdAt: z.number().int().optional(),
            scannedAt: z.number().int().optional(),
            content: z.boolean().optional(),
            directory: z.boolean().optional(),
            contentChangedAt: z.number().int().optional(),
            hidden: z.number().int().optional(),
            Location: z.array(z.lazy(() => GetLibrariesLocation$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Location: "location",
            });
        });

    export type Outbound = {
        allowSync?: boolean | undefined;
        art?: string | undefined;
        composite?: string | undefined;
        filters?: boolean | undefined;
        refreshing?: boolean | undefined;
        thumb?: string | undefined;
        key?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        agent?: string | undefined;
        scanner?: string | undefined;
        language?: string | undefined;
        uuid?: string | undefined;
        updatedAt?: number | undefined;
        createdAt?: number | undefined;
        scannedAt?: number | undefined;
        content?: boolean | undefined;
        directory?: boolean | undefined;
        contentChangedAt?: number | undefined;
        hidden?: number | undefined;
        Location?: Array<GetLibrariesLocation$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesDirectory> = z
        .object({
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            composite: z.string().optional(),
            filters: z.boolean().optional(),
            refreshing: z.boolean().optional(),
            thumb: z.string().optional(),
            key: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            agent: z.string().optional(),
            scanner: z.string().optional(),
            language: z.string().optional(),
            uuid: z.string().optional(),
            updatedAt: z.number().int().optional(),
            createdAt: z.number().int().optional(),
            scannedAt: z.number().int().optional(),
            content: z.boolean().optional(),
            directory: z.boolean().optional(),
            contentChangedAt: z.number().int().optional(),
            hidden: z.number().int().optional(),
            location: z.array(z.lazy(() => GetLibrariesLocation$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                location: "Location",
            });
        });
}

/** @internal */
export namespace GetLibrariesMediaContainer$ {
    export const inboundSchema: z.ZodType<GetLibrariesMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            title1: z.string().optional(),
            Directory: z.array(z.lazy(() => GetLibrariesDirectory$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Directory: "directory",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        title1?: string | undefined;
        Directory?: Array<GetLibrariesDirectory$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            title1: z.string().optional(),
            directory: z.array(z.lazy(() => GetLibrariesDirectory$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                directory: "Directory",
            });
        });
}

/** @internal */
export namespace GetLibrariesResponseBody$ {
    export const inboundSchema: z.ZodType<GetLibrariesResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetLibrariesMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetLibrariesMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetLibrariesMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetLibrariesResponse$ {
    export const inboundSchema: z.ZodType<GetLibrariesResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetLibrariesResponseBody$.inboundSchema).optional(),
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
        object?: GetLibrariesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibrariesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetLibrariesResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
