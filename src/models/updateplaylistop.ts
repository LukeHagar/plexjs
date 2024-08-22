/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type UpdatePlaylistRequest = {
    /**
     * the ID of the playlist
     */
    playlistID: number;
    /**
     * name of the playlist
     */
    title?: string | undefined;
    /**
     * summary description of the playlist
     */
    summary?: string | undefined;
};

export type UpdatePlaylistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type UpdatePlaylistResponseBodyData = {
    errors?: Array<UpdatePlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class UpdatePlaylistResponseBody extends Error {
    errors?: Array<UpdatePlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdatePlaylistResponseBodyData;

    constructor(err: UpdatePlaylistResponseBodyData) {
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

        this.name = "UpdatePlaylistResponseBody";
    }
}

export type UpdatePlaylistResponse = {
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
};

/** @internal */
export const UpdatePlaylistRequest$inboundSchema: z.ZodType<
    UpdatePlaylistRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    playlistID: z.number(),
    title: z.string().optional(),
    summary: z.string().optional(),
});

/** @internal */
export type UpdatePlaylistRequest$Outbound = {
    playlistID: number;
    title?: string | undefined;
    summary?: string | undefined;
};

/** @internal */
export const UpdatePlaylistRequest$outboundSchema: z.ZodType<
    UpdatePlaylistRequest$Outbound,
    z.ZodTypeDef,
    UpdatePlaylistRequest
> = z.object({
    playlistID: z.number(),
    title: z.string().optional(),
    summary: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePlaylistRequest$ {
    /** @deprecated use `UpdatePlaylistRequest$inboundSchema` instead. */
    export const inboundSchema = UpdatePlaylistRequest$inboundSchema;
    /** @deprecated use `UpdatePlaylistRequest$outboundSchema` instead. */
    export const outboundSchema = UpdatePlaylistRequest$outboundSchema;
    /** @deprecated use `UpdatePlaylistRequest$Outbound` instead. */
    export type Outbound = UpdatePlaylistRequest$Outbound;
}

/** @internal */
export const UpdatePlaylistErrors$inboundSchema: z.ZodType<
    UpdatePlaylistErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/** @internal */
export type UpdatePlaylistErrors$Outbound = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/** @internal */
export const UpdatePlaylistErrors$outboundSchema: z.ZodType<
    UpdatePlaylistErrors$Outbound,
    z.ZodTypeDef,
    UpdatePlaylistErrors
> = z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    status: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePlaylistErrors$ {
    /** @deprecated use `UpdatePlaylistErrors$inboundSchema` instead. */
    export const inboundSchema = UpdatePlaylistErrors$inboundSchema;
    /** @deprecated use `UpdatePlaylistErrors$outboundSchema` instead. */
    export const outboundSchema = UpdatePlaylistErrors$outboundSchema;
    /** @deprecated use `UpdatePlaylistErrors$Outbound` instead. */
    export type Outbound = UpdatePlaylistErrors$Outbound;
}

/** @internal */
export const UpdatePlaylistResponseBody$inboundSchema: z.ZodType<
    UpdatePlaylistResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        errors: z.array(z.lazy(() => UpdatePlaylistErrors$inboundSchema)).optional(),
        RawResponse: z.instanceof(Response).optional(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new UpdatePlaylistResponseBody(remapped);
    });

/** @internal */
export type UpdatePlaylistResponseBody$Outbound = {
    errors?: Array<UpdatePlaylistErrors$Outbound> | undefined;
    RawResponse?: never | undefined;
};

/** @internal */
export const UpdatePlaylistResponseBody$outboundSchema: z.ZodType<
    UpdatePlaylistResponseBody$Outbound,
    z.ZodTypeDef,
    UpdatePlaylistResponseBody
> = z
    .instanceof(UpdatePlaylistResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                errors: z.array(z.lazy(() => UpdatePlaylistErrors$outboundSchema)).optional(),
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
export namespace UpdatePlaylistResponseBody$ {
    /** @deprecated use `UpdatePlaylistResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdatePlaylistResponseBody$inboundSchema;
    /** @deprecated use `UpdatePlaylistResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdatePlaylistResponseBody$outboundSchema;
    /** @deprecated use `UpdatePlaylistResponseBody$Outbound` instead. */
    export type Outbound = UpdatePlaylistResponseBody$Outbound;
}

/** @internal */
export const UpdatePlaylistResponse$inboundSchema: z.ZodType<
    UpdatePlaylistResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdatePlaylistResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdatePlaylistResponse$outboundSchema: z.ZodType<
    UpdatePlaylistResponse$Outbound,
    z.ZodTypeDef,
    UpdatePlaylistResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
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
export namespace UpdatePlaylistResponse$ {
    /** @deprecated use `UpdatePlaylistResponse$inboundSchema` instead. */
    export const inboundSchema = UpdatePlaylistResponse$inboundSchema;
    /** @deprecated use `UpdatePlaylistResponse$outboundSchema` instead. */
    export const outboundSchema = UpdatePlaylistResponse$outboundSchema;
    /** @deprecated use `UpdatePlaylistResponse$Outbound` instead. */
    export type Outbound = UpdatePlaylistResponse$Outbound;
}
