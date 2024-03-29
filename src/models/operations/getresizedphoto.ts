/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against.
 */
export enum MinSize {
    Zero = 0,
    One = 1,
}

/**
 * allow images to be resized beyond native dimensions.
 */
export enum Upscale {
    Zero = 0,
    One = 1,
}

export type GetResizedPhotoRequest = {
    /**
     * The width for the resized photo
     */
    width: number;
    /**
     * The height for the resized photo
     */
    height: number;
    /**
     * The opacity for the resized photo
     */
    opacity?: number | undefined;
    /**
     * The width for the resized photo
     */
    blur: number;
    /**
     * images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against.
     */
    minSize: MinSize;
    /**
     * allow images to be resized beyond native dimensions.
     */
    upscale: Upscale;
    /**
     * path to image within Plex
     */
    url: string;
};

export type GetResizedPhotoResponse = {
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
export const MinSize$ = z.nativeEnum(MinSize);

/** @internal */
export const Upscale$ = z.nativeEnum(Upscale);

/** @internal */
export namespace GetResizedPhotoRequest$ {
    export type Inbound = {
        width: number;
        height: number;
        opacity?: number | undefined;
        blur: number;
        minSize: MinSize;
        upscale: Upscale;
        url: string;
    };

    export const inboundSchema: z.ZodType<GetResizedPhotoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            width: z.number(),
            height: z.number(),
            opacity: z.number().int().default(100),
            blur: z.number(),
            minSize: MinSize$,
            upscale: Upscale$,
            url: z.string(),
        })
        .transform((v) => {
            return {
                width: v.width,
                height: v.height,
                opacity: v.opacity,
                blur: v.blur,
                minSize: v.minSize,
                upscale: v.upscale,
                url: v.url,
            };
        });

    export type Outbound = {
        width: number;
        height: number;
        opacity: number;
        blur: number;
        minSize: MinSize;
        upscale: Upscale;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetResizedPhotoRequest> = z
        .object({
            width: z.number(),
            height: z.number(),
            opacity: z.number().int().default(100),
            blur: z.number(),
            minSize: MinSize$,
            upscale: Upscale$,
            url: z.string(),
        })
        .transform((v) => {
            return {
                width: v.width,
                height: v.height,
                opacity: v.opacity,
                blur: v.blur,
                minSize: v.minSize,
                upscale: v.upscale,
                url: v.url,
            };
        });
}

/** @internal */
export namespace GetResizedPhotoResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetResizedPhotoResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetResizedPhotoResponse> = z
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
