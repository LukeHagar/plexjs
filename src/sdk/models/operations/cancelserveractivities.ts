/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CancelServerActivitiesRequest = {
  /**
   * The UUID of the activity to cancel.
   */
  activityUUID: string;
};

export type CancelServerActivitiesResponse = {
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
export const CancelServerActivitiesRequest$inboundSchema: z.ZodType<
  CancelServerActivitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  activityUUID: z.string(),
});

/** @internal */
export type CancelServerActivitiesRequest$Outbound = {
  activityUUID: string;
};

/** @internal */
export const CancelServerActivitiesRequest$outboundSchema: z.ZodType<
  CancelServerActivitiesRequest$Outbound,
  z.ZodTypeDef,
  CancelServerActivitiesRequest
> = z.object({
  activityUUID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelServerActivitiesRequest$ {
  /** @deprecated use `CancelServerActivitiesRequest$inboundSchema` instead. */
  export const inboundSchema = CancelServerActivitiesRequest$inboundSchema;
  /** @deprecated use `CancelServerActivitiesRequest$outboundSchema` instead. */
  export const outboundSchema = CancelServerActivitiesRequest$outboundSchema;
  /** @deprecated use `CancelServerActivitiesRequest$Outbound` instead. */
  export type Outbound = CancelServerActivitiesRequest$Outbound;
}

export function cancelServerActivitiesRequestToJSON(
  cancelServerActivitiesRequest: CancelServerActivitiesRequest,
): string {
  return JSON.stringify(
    CancelServerActivitiesRequest$outboundSchema.parse(
      cancelServerActivitiesRequest,
    ),
  );
}

export function cancelServerActivitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<CancelServerActivitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelServerActivitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelServerActivitiesRequest' from JSON`,
  );
}

/** @internal */
export const CancelServerActivitiesResponse$inboundSchema: z.ZodType<
  CancelServerActivitiesResponse,
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
export type CancelServerActivitiesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CancelServerActivitiesResponse$outboundSchema: z.ZodType<
  CancelServerActivitiesResponse$Outbound,
  z.ZodTypeDef,
  CancelServerActivitiesResponse
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
export namespace CancelServerActivitiesResponse$ {
  /** @deprecated use `CancelServerActivitiesResponse$inboundSchema` instead. */
  export const inboundSchema = CancelServerActivitiesResponse$inboundSchema;
  /** @deprecated use `CancelServerActivitiesResponse$outboundSchema` instead. */
  export const outboundSchema = CancelServerActivitiesResponse$outboundSchema;
  /** @deprecated use `CancelServerActivitiesResponse$Outbound` instead. */
  export type Outbound = CancelServerActivitiesResponse$Outbound;
}

export function cancelServerActivitiesResponseToJSON(
  cancelServerActivitiesResponse: CancelServerActivitiesResponse,
): string {
  return JSON.stringify(
    CancelServerActivitiesResponse$outboundSchema.parse(
      cancelServerActivitiesResponse,
    ),
  );
}

export function cancelServerActivitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<CancelServerActivitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelServerActivitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelServerActivitiesResponse' from JSON`,
  );
}
