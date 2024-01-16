/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type MarkUnplayedRequest = {
    /**
     * The media key to mark as Unplayed
     */
    key: number;
};

export type MarkUnplayedResponse = {
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
export namespace MarkUnplayedRequest$ {
    export type Inbound = {
        key: number;
    };

    export const inboundSchema: z.ZodType<MarkUnplayedRequest, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.number(),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });

    export type Outbound = {
        key: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkUnplayedRequest> = z
        .object({
            key: z.number(),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });
}

/** @internal */
export namespace MarkUnplayedResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<MarkUnplayedResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkUnplayedResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}