/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetLibraryItemsRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * item type
     */
    type?: number | undefined;
    /**
     * the filter parameter
     */
    filter?: string | undefined;
};

export type GetLibraryItemsResponse = {
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
export namespace GetLibraryItemsRequest$ {
    export type Inbound = {
        sectionId: number;
        type?: number | undefined;
        filter?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetLibraryItemsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            sectionId: z.number(),
            type: z.number().optional(),
            filter: z.string().optional(),
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });

    export type Outbound = {
        sectionId: number;
        type?: number | undefined;
        filter?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryItemsRequest> = z
        .object({
            sectionId: z.number(),
            type: z.number().optional(),
            filter: z.string().optional(),
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });
}

/** @internal */
export namespace GetLibraryItemsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetLibraryItemsResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryItemsResponse> = z
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