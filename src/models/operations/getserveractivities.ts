/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Context = {
    librarySectionID?: string | undefined;
};

export type Activity = {
    uuid?: string | undefined;
    type?: string | undefined;
    cancellable?: boolean | undefined;
    userID?: number | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    progress?: number | undefined;
    context?: Context | undefined;
};

export type GetServerActivitiesMediaContainer = {
    size?: number | undefined;
    activity?: Array<Activity> | undefined;
};

/**
 * The Server Activities
 */
export type GetServerActivitiesResponseBody = {
    mediaContainer?: GetServerActivitiesMediaContainer | undefined;
};

export type GetServerActivitiesResponse = {
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
     * The Server Activities
     */
    object?: GetServerActivitiesResponseBody | undefined;
};

/** @internal */
export namespace Context$ {
    export type Inbound = {
        librarySectionID?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Context, z.ZodTypeDef, Inbound> = z
        .object({
            librarySectionID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
            };
        });

    export type Outbound = {
        librarySectionID?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Context> = z
        .object({
            librarySectionID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.librarySectionID === undefined
                    ? null
                    : { librarySectionID: v.librarySectionID }),
            };
        });
}

/** @internal */
export namespace Activity$ {
    export type Inbound = {
        uuid?: string | undefined;
        type?: string | undefined;
        cancellable?: boolean | undefined;
        userID?: number | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
        progress?: number | undefined;
        Context?: Context$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Activity, z.ZodTypeDef, Inbound> = z
        .object({
            uuid: z.string().optional(),
            type: z.string().optional(),
            cancellable: z.boolean().optional(),
            userID: z.number().optional(),
            title: z.string().optional(),
            subtitle: z.string().optional(),
            progress: z.number().optional(),
            Context: z.lazy(() => Context$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.uuid === undefined ? null : { uuid: v.uuid }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.cancellable === undefined ? null : { cancellable: v.cancellable }),
                ...(v.userID === undefined ? null : { userID: v.userID }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.subtitle === undefined ? null : { subtitle: v.subtitle }),
                ...(v.progress === undefined ? null : { progress: v.progress }),
                ...(v.Context === undefined ? null : { context: v.Context }),
            };
        });

    export type Outbound = {
        uuid?: string | undefined;
        type?: string | undefined;
        cancellable?: boolean | undefined;
        userID?: number | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
        progress?: number | undefined;
        Context?: Context$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Activity> = z
        .object({
            uuid: z.string().optional(),
            type: z.string().optional(),
            cancellable: z.boolean().optional(),
            userID: z.number().optional(),
            title: z.string().optional(),
            subtitle: z.string().optional(),
            progress: z.number().optional(),
            context: z.lazy(() => Context$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.uuid === undefined ? null : { uuid: v.uuid }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.cancellable === undefined ? null : { cancellable: v.cancellable }),
                ...(v.userID === undefined ? null : { userID: v.userID }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.subtitle === undefined ? null : { subtitle: v.subtitle }),
                ...(v.progress === undefined ? null : { progress: v.progress }),
                ...(v.context === undefined ? null : { Context: v.context }),
            };
        });
}

/** @internal */
export namespace GetServerActivitiesMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        Activity?: Array<Activity$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetServerActivitiesMediaContainer,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            size: z.number().optional(),
            Activity: z.array(z.lazy(() => Activity$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.Activity === undefined ? null : { activity: v.Activity }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        Activity?: Array<Activity$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetServerActivitiesMediaContainer
    > = z
        .object({
            size: z.number().optional(),
            activity: z.array(z.lazy(() => Activity$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.activity === undefined ? null : { Activity: v.activity }),
            };
        });
}

/** @internal */
export namespace GetServerActivitiesResponseBody$ {
    export type Inbound = {
        MediaContainer?: GetServerActivitiesMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerActivitiesResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                MediaContainer: z
                    .lazy(() => GetServerActivitiesMediaContainer$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.MediaContainer === undefined
                        ? null
                        : { mediaContainer: v.MediaContainer }),
                };
            });

    export type Outbound = {
        MediaContainer?: GetServerActivitiesMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetServerActivitiesResponseBody
    > = z
        .object({
            mediaContainer: z
                .lazy(() => GetServerActivitiesMediaContainer$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace GetServerActivitiesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetServerActivitiesResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetServerActivitiesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetServerActivitiesResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetServerActivitiesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServerActivitiesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetServerActivitiesResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}