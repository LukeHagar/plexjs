/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * An integer log level to write to the PMS log with.
 *
 * @remarks
 * 0: Error
 * 1: Warning
 * 2: Info
 * 3: Debug
 * 4: Verbose
 *
 */
export enum Level {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export type LogLineRequest = {
    /**
     * An integer log level to write to the PMS log with.
     *
     * @remarks
     * 0: Error
     * 1: Warning
     * 2: Info
     * 3: Debug
     * 4: Verbose
     *
     */
    level: Level;
    /**
     * The text of the message to write to the log.
     */
    message: string;
    /**
     * a string indicating the source of the message.
     */
    source: string;
};

export type LogLineResponse = {
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
export const Level$ = z.nativeEnum(Level);

/** @internal */
export namespace LogLineRequest$ {
    export type Inbound = {
        level: Level;
        message: string;
        source: string;
    };

    export const inboundSchema: z.ZodType<LogLineRequest, z.ZodTypeDef, Inbound> = z
        .object({
            level: Level$,
            message: z.string(),
            source: z.string(),
        })
        .transform((v) => {
            return {
                level: v.level,
                message: v.message,
                source: v.source,
            };
        });

    export type Outbound = {
        level: Level;
        message: string;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogLineRequest> = z
        .object({
            level: Level$,
            message: z.string(),
            source: z.string(),
        })
        .transform((v) => {
            return {
                level: v.level,
                message: v.message,
                source: v.source,
            };
        });
}

/** @internal */
export namespace LogLineResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<LogLineResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogLineResponse> = z
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
