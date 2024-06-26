/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetButlerTasksErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetButlerTasksButlerResponseBodyData = {
    errors?: Array<GetButlerTasksErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetButlerTasksButlerResponseBody extends Error {
    errors?: Array<GetButlerTasksErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetButlerTasksButlerResponseBodyData;

    constructor(err: GetButlerTasksButlerResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetButlerTasksButlerResponseBody";
    }
}

export type ButlerTask = {
    name?: string | undefined;
    interval?: number | undefined;
    scheduleRandomized?: boolean | undefined;
    enabled?: boolean | undefined;
    title?: string | undefined;
    description?: string | undefined;
};

export type ButlerTasks = {
    butlerTask?: Array<ButlerTask> | undefined;
};

/**
 * All butler tasks
 */
export type GetButlerTasksResponseBody = {
    butlerTasks?: ButlerTasks | undefined;
};

export type GetButlerTasksResponse = {
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
     * All butler tasks
     */
    object?: GetButlerTasksResponseBody | undefined;
};

/** @internal */
export namespace GetButlerTasksErrors$ {
    export const inboundSchema: z.ZodType<GetButlerTasksErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetButlerTasksErrors> = z.object(
        {
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        }
    );
}

/** @internal */
export namespace GetButlerTasksButlerResponseBody$ {
    export const inboundSchema: z.ZodType<GetButlerTasksButlerResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                errors: z.array(z.lazy(() => GetButlerTasksErrors$.inboundSchema)).optional(),
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                const remapped = remap$(v, {
                    RawResponse: "rawResponse",
                });

                return new GetButlerTasksButlerResponseBody(remapped);
            });

    export type Outbound = {
        errors?: Array<GetButlerTasksErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetButlerTasksButlerResponseBody
    > = z
        .instanceof(GetButlerTasksButlerResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetButlerTasksErrors$.outboundSchema)).optional(),
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
}

/** @internal */
export namespace ButlerTask$ {
    export const inboundSchema: z.ZodType<ButlerTask, z.ZodTypeDef, unknown> = z.object({
        name: z.string().optional(),
        interval: z.number().optional(),
        scheduleRandomized: z.boolean().optional(),
        enabled: z.boolean().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
    });

    export type Outbound = {
        name?: string | undefined;
        interval?: number | undefined;
        scheduleRandomized?: boolean | undefined;
        enabled?: boolean | undefined;
        title?: string | undefined;
        description?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ButlerTask> = z.object({
        name: z.string().optional(),
        interval: z.number().optional(),
        scheduleRandomized: z.boolean().optional(),
        enabled: z.boolean().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
    });
}

/** @internal */
export namespace ButlerTasks$ {
    export const inboundSchema: z.ZodType<ButlerTasks, z.ZodTypeDef, unknown> = z
        .object({
            ButlerTask: z.array(z.lazy(() => ButlerTask$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ButlerTask: "butlerTask",
            });
        });

    export type Outbound = {
        ButlerTask?: Array<ButlerTask$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ButlerTasks> = z
        .object({
            butlerTask: z.array(z.lazy(() => ButlerTask$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                butlerTask: "ButlerTask",
            });
        });
}

/** @internal */
export namespace GetButlerTasksResponseBody$ {
    export const inboundSchema: z.ZodType<GetButlerTasksResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            ButlerTasks: z.lazy(() => ButlerTasks$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ButlerTasks: "butlerTasks",
            });
        });

    export type Outbound = {
        ButlerTasks?: ButlerTasks$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetButlerTasksResponseBody> = z
        .object({
            butlerTasks: z.lazy(() => ButlerTasks$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                butlerTasks: "ButlerTasks",
            });
        });
}

/** @internal */
export namespace GetButlerTasksResponse$ {
    export const inboundSchema: z.ZodType<GetButlerTasksResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetButlerTasksResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetButlerTasksResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetButlerTasksResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetButlerTasksResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
