/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetMetadataRequest = {
    /**
     * the id of the library item to return the children of.
     */
    ratingKey: number;
};

export type GetMetadataResponse = {
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
export namespace GetMetadataRequest$ {
    export type Inbound = {
        ratingKey: number;
    };

    export const inboundSchema: z.ZodType<GetMetadataRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ratingKey: z.number(),
        })
        .transform((v) => {
            return {
                ratingKey: v.ratingKey,
            };
        });

    export type Outbound = {
        ratingKey: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMetadataRequest> = z
        .object({
            ratingKey: z.number(),
        })
        .transform((v) => {
            return {
                ratingKey: v.ratingKey,
            };
        });
}

/** @internal */
export namespace GetMetadataResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetMetadataResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMetadataResponse> = z
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
