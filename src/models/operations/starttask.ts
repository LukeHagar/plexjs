/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * the name of the task to be started.
 */
export enum TaskName {
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

export type StartTaskRequest = {
    /**
     * the name of the task to be started.
     */
    taskName: TaskName;
};

export type StartTaskResponse = {
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
export const TaskName$ = z.nativeEnum(TaskName);

/** @internal */
export namespace StartTaskRequest$ {
    export type Inbound = {
        taskName: TaskName;
    };

    export const inboundSchema: z.ZodType<StartTaskRequest, z.ZodTypeDef, Inbound> = z
        .object({
            taskName: TaskName$,
        })
        .transform((v) => {
            return {
                taskName: v.taskName,
            };
        });

    export type Outbound = {
        taskName: TaskName;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartTaskRequest> = z
        .object({
            taskName: TaskName$,
        })
        .transform((v) => {
            return {
                taskName: v.taskName,
            };
        });
}

/** @internal */
export namespace StartTaskResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StartTaskResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartTaskResponse> = z
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
