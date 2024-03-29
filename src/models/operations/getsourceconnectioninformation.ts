/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetSourceConnectionInformationRequest = {
    /**
     * The source identifier with an included prefix.
     */
    source: string;
};

export type GetSourceConnectionInformationResponse = {
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
export namespace GetSourceConnectionInformationRequest$ {
    export type Inbound = {
        source: string;
    };

    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            source: z.string(),
        })
        .transform((v) => {
            return {
                source: v.source,
            };
        });

    export type Outbound = {
        source: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationRequest
    > = z
        .object({
            source: z.string(),
        })
        .transform((v) => {
            return {
                source: v.source,
            };
        });
}

/** @internal */
export namespace GetSourceConnectionInformationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetSourceConnectionInformationResponse,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSourceConnectionInformationResponse
    > = z
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
