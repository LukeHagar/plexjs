/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

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
export const GetSourceConnectionInformationRequest$inboundSchema: z.ZodType<
  GetSourceConnectionInformationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  source: z.string(),
});

/** @internal */
export type GetSourceConnectionInformationRequest$Outbound = {
  source: string;
};

/** @internal */
export const GetSourceConnectionInformationRequest$outboundSchema: z.ZodType<
  GetSourceConnectionInformationRequest$Outbound,
  z.ZodTypeDef,
  GetSourceConnectionInformationRequest
> = z.object({
  source: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSourceConnectionInformationRequest$ {
  /** @deprecated use `GetSourceConnectionInformationRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationRequest$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationRequest$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationRequest$Outbound` instead. */
  export type Outbound = GetSourceConnectionInformationRequest$Outbound;
}

/** @internal */
export const GetSourceConnectionInformationResponse$inboundSchema: z.ZodType<
  GetSourceConnectionInformationResponse,
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
export type GetSourceConnectionInformationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetSourceConnectionInformationResponse$outboundSchema: z.ZodType<
  GetSourceConnectionInformationResponse$Outbound,
  z.ZodTypeDef,
  GetSourceConnectionInformationResponse
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
export namespace GetSourceConnectionInformationResponse$ {
  /** @deprecated use `GetSourceConnectionInformationResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationResponse$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationResponse$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationResponse$Outbound` instead. */
  export type Outbound = GetSourceConnectionInformationResponse$Outbound;
}