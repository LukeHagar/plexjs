/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type StopAllTasksResponse = {
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
export const StopAllTasksResponse$inboundSchema: z.ZodType<
  StopAllTasksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type StopAllTasksResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const StopAllTasksResponse$outboundSchema: z.ZodType<
  StopAllTasksResponse$Outbound,
  z.ZodTypeDef,
  StopAllTasksResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StopAllTasksResponse$ {
  /** @deprecated use `StopAllTasksResponse$inboundSchema` instead. */
  export const inboundSchema = StopAllTasksResponse$inboundSchema;
  /** @deprecated use `StopAllTasksResponse$outboundSchema` instead. */
  export const outboundSchema = StopAllTasksResponse$outboundSchema;
  /** @deprecated use `StopAllTasksResponse$Outbound` instead. */
  export type Outbound = StopAllTasksResponse$Outbound;
}

export function stopAllTasksResponseToJSON(
  stopAllTasksResponse: StopAllTasksResponse,
): string {
  return JSON.stringify(
    StopAllTasksResponse$outboundSchema.parse(stopAllTasksResponse),
  );
}

export function stopAllTasksResponseFromJSON(
  jsonString: string,
): SafeParseResult<StopAllTasksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StopAllTasksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StopAllTasksResponse' from JSON`,
  );
}
