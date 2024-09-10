/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetTranscodeSessionsSessionsErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetTranscodeSessionsUnauthorizedData = {
  errors?: Array<GetTranscodeSessionsSessionsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetTranscodeSessionsUnauthorized extends Error {
  errors?: Array<GetTranscodeSessionsSessionsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetTranscodeSessionsUnauthorizedData;

  constructor(err: GetTranscodeSessionsUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetTranscodeSessionsUnauthorized";
  }
}

export type GetTranscodeSessionsErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetTranscodeSessionsBadRequestData = {
  errors?: Array<GetTranscodeSessionsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetTranscodeSessionsBadRequest extends Error {
  errors?: Array<GetTranscodeSessionsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetTranscodeSessionsBadRequestData;

  constructor(err: GetTranscodeSessionsBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetTranscodeSessionsBadRequest";
  }
}

/** @internal */
export const GetTranscodeSessionsSessionsErrors$inboundSchema: z.ZodType<
  GetTranscodeSessionsSessionsErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetTranscodeSessionsSessionsErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetTranscodeSessionsSessionsErrors$outboundSchema: z.ZodType<
  GetTranscodeSessionsSessionsErrors$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsSessionsErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTranscodeSessionsSessionsErrors$ {
  /** @deprecated use `GetTranscodeSessionsSessionsErrors$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsSessionsErrors$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsSessionsErrors$outboundSchema` instead. */
  export const outboundSchema =
    GetTranscodeSessionsSessionsErrors$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsSessionsErrors$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsSessionsErrors$Outbound;
}

/** @internal */
export const GetTranscodeSessionsUnauthorized$inboundSchema: z.ZodType<
  GetTranscodeSessionsUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(
    z.lazy(() => GetTranscodeSessionsSessionsErrors$inboundSchema),
  ).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetTranscodeSessionsUnauthorized(remapped);
  });

/** @internal */
export type GetTranscodeSessionsUnauthorized$Outbound = {
  errors?: Array<GetTranscodeSessionsSessionsErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetTranscodeSessionsUnauthorized$outboundSchema: z.ZodType<
  GetTranscodeSessionsUnauthorized$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsUnauthorized
> = z.instanceof(GetTranscodeSessionsUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetTranscodeSessionsSessionsErrors$outboundSchema),
      ).optional(),
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
export namespace GetTranscodeSessionsUnauthorized$ {
  /** @deprecated use `GetTranscodeSessionsUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsUnauthorized$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetTranscodeSessionsUnauthorized$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsUnauthorized$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsUnauthorized$Outbound;
}

/** @internal */
export const GetTranscodeSessionsErrors$inboundSchema: z.ZodType<
  GetTranscodeSessionsErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetTranscodeSessionsErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetTranscodeSessionsErrors$outboundSchema: z.ZodType<
  GetTranscodeSessionsErrors$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTranscodeSessionsErrors$ {
  /** @deprecated use `GetTranscodeSessionsErrors$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsErrors$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsErrors$outboundSchema` instead. */
  export const outboundSchema = GetTranscodeSessionsErrors$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsErrors$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsErrors$Outbound;
}

/** @internal */
export const GetTranscodeSessionsBadRequest$inboundSchema: z.ZodType<
  GetTranscodeSessionsBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetTranscodeSessionsErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetTranscodeSessionsBadRequest(remapped);
  });

/** @internal */
export type GetTranscodeSessionsBadRequest$Outbound = {
  errors?: Array<GetTranscodeSessionsErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetTranscodeSessionsBadRequest$outboundSchema: z.ZodType<
  GetTranscodeSessionsBadRequest$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsBadRequest
> = z.instanceof(GetTranscodeSessionsBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetTranscodeSessionsErrors$outboundSchema))
        .optional(),
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
export namespace GetTranscodeSessionsBadRequest$ {
  /** @deprecated use `GetTranscodeSessionsBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsBadRequest$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetTranscodeSessionsBadRequest$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsBadRequest$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsBadRequest$Outbound;
}