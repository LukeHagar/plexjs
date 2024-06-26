/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetServerListErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetServerListServerResponseBodyData = {
    errors?: Array<GetServerListErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetServerListServerResponseBody extends Error {
    errors?: Array<GetServerListErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetServerListServerResponseBodyData;

    constructor(err: GetServerListServerResponseBodyData) {
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

        this.name = "GetServerListServerResponseBody";
    }
}

export type GetServerListServer = {
    name?: string | undefined;
    host?: string | undefined;
    address?: string | undefined;
    port?: number | undefined;
    machineIdentifier?: string | undefined;
    version?: string | undefined;
};

export type GetServerListMediaContainer = {
    size?: number | undefined;
    server?: Array<GetServerListServer> | undefined;
};

/**
 * List of Servers
 */
export type GetServerListResponseBody = {
    mediaContainer?: GetServerListMediaContainer | undefined;
};

export type GetServerListResponse = {
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
     * List of Servers
     */
    object?: GetServerListResponseBody | undefined;
};

/** @internal */
export namespace GetServerListErrors$ {
    export const inboundSchema: z.ZodType<GetServerListErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerListErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetServerListServerResponseBody$ {
    export const inboundSchema: z.ZodType<GetServerListServerResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                errors: z.array(z.lazy(() => GetServerListErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                const remapped = remap$(v, {
                    RawResponse: "rawResponse",
                });

                return new GetServerListServerResponseBody(remapped);
            });

    export type Outbound = {
        errors?: Array<GetServerListErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetServerListServerResponseBody
    > = z
        .instanceof(GetServerListServerResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetServerListErrors$.outboundSchema)).optional(),
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
export namespace GetServerListServer$ {
    export const inboundSchema: z.ZodType<GetServerListServer, z.ZodTypeDef, unknown> = z.object({
        name: z.string().optional(),
        host: z.string().optional(),
        address: z.string().optional(),
        port: z.number().optional(),
        machineIdentifier: z.string().optional(),
        version: z.string().optional(),
    });

    export type Outbound = {
        name?: string | undefined;
        host?: string | undefined;
        address?: string | undefined;
        port?: number | undefined;
        machineIdentifier?: string | undefined;
        version?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerListServer> = z.object({
        name: z.string().optional(),
        host: z.string().optional(),
        address: z.string().optional(),
        port: z.number().optional(),
        machineIdentifier: z.string().optional(),
        version: z.string().optional(),
    });
}

/** @internal */
export namespace GetServerListMediaContainer$ {
    export const inboundSchema: z.ZodType<GetServerListMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().optional(),
            Server: z.array(z.lazy(() => GetServerListServer$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Server: "server",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        Server?: Array<GetServerListServer$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerListMediaContainer> = z
        .object({
            size: z.number().optional(),
            server: z.array(z.lazy(() => GetServerListServer$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                server: "Server",
            });
        });
}

/** @internal */
export namespace GetServerListResponseBody$ {
    export const inboundSchema: z.ZodType<GetServerListResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetServerListMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetServerListMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerListResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetServerListMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetServerListResponse$ {
    export const inboundSchema: z.ZodType<GetServerListResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetServerListResponseBody$.inboundSchema).optional(),
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
        object?: GetServerListResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerListResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetServerListResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
