/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type MarkUnplayedRequest = {
  /**
   * The media key to mark as Unplayed
   */
  key: number;
};

export type MarkUnplayedResponse = {
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
export const MarkUnplayedRequest$inboundSchema: z.ZodType<
  MarkUnplayedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.number(),
});

/** @internal */
export type MarkUnplayedRequest$Outbound = {
  key: number;
};

/** @internal */
export const MarkUnplayedRequest$outboundSchema: z.ZodType<
  MarkUnplayedRequest$Outbound,
  z.ZodTypeDef,
  MarkUnplayedRequest
> = z.object({
  key: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkUnplayedRequest$ {
  /** @deprecated use `MarkUnplayedRequest$inboundSchema` instead. */
  export const inboundSchema = MarkUnplayedRequest$inboundSchema;
  /** @deprecated use `MarkUnplayedRequest$outboundSchema` instead. */
  export const outboundSchema = MarkUnplayedRequest$outboundSchema;
  /** @deprecated use `MarkUnplayedRequest$Outbound` instead. */
  export type Outbound = MarkUnplayedRequest$Outbound;
}

/** @internal */
export const MarkUnplayedResponse$inboundSchema: z.ZodType<
  MarkUnplayedResponse,
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
export type MarkUnplayedResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarkUnplayedResponse$outboundSchema: z.ZodType<
  MarkUnplayedResponse$Outbound,
  z.ZodTypeDef,
  MarkUnplayedResponse
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
export namespace MarkUnplayedResponse$ {
  /** @deprecated use `MarkUnplayedResponse$inboundSchema` instead. */
  export const inboundSchema = MarkUnplayedResponse$inboundSchema;
  /** @deprecated use `MarkUnplayedResponse$outboundSchema` instead. */
  export const outboundSchema = MarkUnplayedResponse$outboundSchema;
  /** @deprecated use `MarkUnplayedResponse$Outbound` instead. */
  export type Outbound = MarkUnplayedResponse$Outbound;
}