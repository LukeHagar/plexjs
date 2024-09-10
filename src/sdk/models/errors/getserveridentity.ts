/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * Request Timeout
 */
export type GetServerIdentityRequestTimeoutData = {
  code?: number | undefined;
  message?: string | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Request Timeout
 */
export class GetServerIdentityRequestTimeout extends Error {
  code?: number | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetServerIdentityRequestTimeoutData;

  constructor(err: GetServerIdentityRequestTimeoutData) {
    const message = err.message || "API error occurred";
    super(message);
    this.data$ = err;

    if (err.code != null) this.code = err.code;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetServerIdentityRequestTimeout";
  }
}

/** @internal */
export const GetServerIdentityRequestTimeout$inboundSchema: z.ZodType<
  GetServerIdentityRequestTimeout,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetServerIdentityRequestTimeout(remapped);
  });

/** @internal */
export type GetServerIdentityRequestTimeout$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetServerIdentityRequestTimeout$outboundSchema: z.ZodType<
  GetServerIdentityRequestTimeout$Outbound,
  z.ZodTypeDef,
  GetServerIdentityRequestTimeout
> = z.instanceof(GetServerIdentityRequestTimeout)
  .transform(v => v.data$)
  .pipe(
    z.object({
      code: z.number().int().optional(),
      message: z.string().optional(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
    }).transform((v) => {
      return remap$(v, {
        rawResponse: "RawResponse",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerIdentityRequestTimeout$ {
  /** @deprecated use `GetServerIdentityRequestTimeout$inboundSchema` instead. */
  export const inboundSchema = GetServerIdentityRequestTimeout$inboundSchema;
  /** @deprecated use `GetServerIdentityRequestTimeout$outboundSchema` instead. */
  export const outboundSchema = GetServerIdentityRequestTimeout$outboundSchema;
  /** @deprecated use `GetServerIdentityRequestTimeout$Outbound` instead. */
  export type Outbound = GetServerIdentityRequestTimeout$Outbound;
}