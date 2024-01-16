/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The name of the task to be started.
 */
export enum PathParamTaskName {
    BackupDatabase = "BackupDatabase",
    BuildGracenoteCollections = "BuildGracenoteCollections",
    CheckForUpdates = "CheckForUpdates",
    CleanOldBundles = "CleanOldBundles",
    CleanOldCacheFiles = "CleanOldCacheFiles",
    DeepMediaAnalysis = "DeepMediaAnalysis",
    GenerateAutoTags = "GenerateAutoTags",
    GenerateChapterThumbs = "GenerateChapterThumbs",
    GenerateMediaIndexFiles = "GenerateMediaIndexFiles",
    OptimizeDatabase = "OptimizeDatabase",
    RefreshLibraries = "RefreshLibraries",
    RefreshLocalMedia = "RefreshLocalMedia",
    RefreshPeriodicMetadata = "RefreshPeriodicMetadata",
    UpgradeMediaAnalysis = "UpgradeMediaAnalysis",
}

export type StopTaskRequest = {
    /**
     * The name of the task to be started.
     */
    taskName: PathParamTaskName;
};

export type StopTaskResponse = {
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
export const PathParamTaskName$ = z.nativeEnum(PathParamTaskName);

/** @internal */
export namespace StopTaskRequest$ {
    export type Inbound = {
        taskName: PathParamTaskName;
    };

    export const inboundSchema: z.ZodType<StopTaskRequest, z.ZodTypeDef, Inbound> = z
        .object({
            taskName: PathParamTaskName$,
        })
        .transform((v) => {
            return {
                taskName: v.taskName,
            };
        });

    export type Outbound = {
        taskName: PathParamTaskName;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopTaskRequest> = z
        .object({
            taskName: PathParamTaskName$,
        })
        .transform((v) => {
            return {
                taskName: v.taskName,
            };
        });
}

/** @internal */
export namespace StopTaskResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StopTaskResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopTaskResponse> = z
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