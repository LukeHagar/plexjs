/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostMediaArtsRequest = {
  /**
   * the id of the library item to return the posters of.
   */
  ratingKey: number;
  /**
   * The URL of the image, if uploading a remote image
   */
  url?: string | undefined;
  /**
   * The contents of the image, if uploading a local file
   */
  requestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

export type PostMediaArtsResponse = {
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
export const PostMediaArtsRequest$inboundSchema: z.ZodType<
  PostMediaArtsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ratingKey: z.number().int(),
  url: z.string().optional(),
  RequestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostMediaArtsRequest$Outbound = {
  ratingKey: number;
  url?: string | undefined;
  RequestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const PostMediaArtsRequest$outboundSchema: z.ZodType<
  PostMediaArtsRequest$Outbound,
  z.ZodTypeDef,
  PostMediaArtsRequest
> = z.object({
  ratingKey: z.number().int(),
  url: z.string().optional(),
  requestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostMediaArtsRequest$ {
  /** @deprecated use `PostMediaArtsRequest$inboundSchema` instead. */
  export const inboundSchema = PostMediaArtsRequest$inboundSchema;
  /** @deprecated use `PostMediaArtsRequest$outboundSchema` instead. */
  export const outboundSchema = PostMediaArtsRequest$outboundSchema;
  /** @deprecated use `PostMediaArtsRequest$Outbound` instead. */
  export type Outbound = PostMediaArtsRequest$Outbound;
}

export function postMediaArtsRequestToJSON(
  postMediaArtsRequest: PostMediaArtsRequest,
): string {
  return JSON.stringify(
    PostMediaArtsRequest$outboundSchema.parse(postMediaArtsRequest),
  );
}

export function postMediaArtsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostMediaArtsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostMediaArtsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostMediaArtsRequest' from JSON`,
  );
}

/** @internal */
export const PostMediaArtsResponse$inboundSchema: z.ZodType<
  PostMediaArtsResponse,
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
export type PostMediaArtsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const PostMediaArtsResponse$outboundSchema: z.ZodType<
  PostMediaArtsResponse$Outbound,
  z.ZodTypeDef,
  PostMediaArtsResponse
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
export namespace PostMediaArtsResponse$ {
  /** @deprecated use `PostMediaArtsResponse$inboundSchema` instead. */
  export const inboundSchema = PostMediaArtsResponse$inboundSchema;
  /** @deprecated use `PostMediaArtsResponse$outboundSchema` instead. */
  export const outboundSchema = PostMediaArtsResponse$outboundSchema;
  /** @deprecated use `PostMediaArtsResponse$Outbound` instead. */
  export type Outbound = PostMediaArtsResponse$Outbound;
}

export function postMediaArtsResponseToJSON(
  postMediaArtsResponse: PostMediaArtsResponse,
): string {
  return JSON.stringify(
    PostMediaArtsResponse$outboundSchema.parse(postMediaArtsResponse),
  );
}

export function postMediaArtsResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostMediaArtsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostMediaArtsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostMediaArtsResponse' from JSON`,
  );
}
