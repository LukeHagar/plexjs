/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetSourceConnectionInformationAuthenticationErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetSourceConnectionInformationUnauthorizedData = {
  errors?:
    | Array<GetSourceConnectionInformationAuthenticationErrors>
    | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetSourceConnectionInformationUnauthorized extends Error {
  errors?:
    | Array<GetSourceConnectionInformationAuthenticationErrors>
    | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetSourceConnectionInformationUnauthorizedData;

  constructor(err: GetSourceConnectionInformationUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetSourceConnectionInformationUnauthorized";
  }
}

export type GetSourceConnectionInformationErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetSourceConnectionInformationBadRequestData = {
  errors?: Array<GetSourceConnectionInformationErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetSourceConnectionInformationBadRequest extends Error {
  errors?: Array<GetSourceConnectionInformationErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetSourceConnectionInformationBadRequestData;

  constructor(err: GetSourceConnectionInformationBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetSourceConnectionInformationBadRequest";
  }
}

/** @internal */
export const GetSourceConnectionInformationAuthenticationErrors$inboundSchema:
  z.ZodType<
    GetSourceConnectionInformationAuthenticationErrors,
    z.ZodTypeDef,
    unknown
  > = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
  });

/** @internal */
export type GetSourceConnectionInformationAuthenticationErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetSourceConnectionInformationAuthenticationErrors$outboundSchema:
  z.ZodType<
    GetSourceConnectionInformationAuthenticationErrors$Outbound,
    z.ZodTypeDef,
    GetSourceConnectionInformationAuthenticationErrors
  > = z.object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    status: z.number().int().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSourceConnectionInformationAuthenticationErrors$ {
  /** @deprecated use `GetSourceConnectionInformationAuthenticationErrors$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationAuthenticationErrors$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationAuthenticationErrors$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationAuthenticationErrors$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationAuthenticationErrors$Outbound` instead. */
  export type Outbound =
    GetSourceConnectionInformationAuthenticationErrors$Outbound;
}

/** @internal */
export const GetSourceConnectionInformationUnauthorized$inboundSchema:
  z.ZodType<GetSourceConnectionInformationUnauthorized, z.ZodTypeDef, unknown> =
    z.object({
      errors: z.array(
        z.lazy(() =>
          GetSourceConnectionInformationAuthenticationErrors$inboundSchema
        ),
      ).optional(),
      RawResponse: z.instanceof(Response).optional(),
    })
      .transform((v) => {
        const remapped = remap$(v, {
          "RawResponse": "rawResponse",
        });

        return new GetSourceConnectionInformationUnauthorized(remapped);
      });

/** @internal */
export type GetSourceConnectionInformationUnauthorized$Outbound = {
  errors?:
    | Array<GetSourceConnectionInformationAuthenticationErrors$Outbound>
    | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetSourceConnectionInformationUnauthorized$outboundSchema:
  z.ZodType<
    GetSourceConnectionInformationUnauthorized$Outbound,
    z.ZodTypeDef,
    GetSourceConnectionInformationUnauthorized
  > = z.instanceof(GetSourceConnectionInformationUnauthorized)
    .transform(v => v.data$)
    .pipe(
      z.object({
        errors: z.array(z.lazy(() =>
          GetSourceConnectionInformationAuthenticationErrors$outboundSchema
        )).optional(),
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
export namespace GetSourceConnectionInformationUnauthorized$ {
  /** @deprecated use `GetSourceConnectionInformationUnauthorized$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationUnauthorized$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationUnauthorized$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationUnauthorized$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationUnauthorized$Outbound` instead. */
  export type Outbound = GetSourceConnectionInformationUnauthorized$Outbound;
}

/** @internal */
export const GetSourceConnectionInformationErrors$inboundSchema: z.ZodType<
  GetSourceConnectionInformationErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetSourceConnectionInformationErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetSourceConnectionInformationErrors$outboundSchema: z.ZodType<
  GetSourceConnectionInformationErrors$Outbound,
  z.ZodTypeDef,
  GetSourceConnectionInformationErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSourceConnectionInformationErrors$ {
  /** @deprecated use `GetSourceConnectionInformationErrors$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationErrors$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationErrors$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationErrors$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationErrors$Outbound` instead. */
  export type Outbound = GetSourceConnectionInformationErrors$Outbound;
}

/** @internal */
export const GetSourceConnectionInformationBadRequest$inboundSchema: z.ZodType<
  GetSourceConnectionInformationBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(
    z.lazy(() => GetSourceConnectionInformationErrors$inboundSchema),
  ).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetSourceConnectionInformationBadRequest(remapped);
  });

/** @internal */
export type GetSourceConnectionInformationBadRequest$Outbound = {
  errors?: Array<GetSourceConnectionInformationErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetSourceConnectionInformationBadRequest$outboundSchema: z.ZodType<
  GetSourceConnectionInformationBadRequest$Outbound,
  z.ZodTypeDef,
  GetSourceConnectionInformationBadRequest
> = z.instanceof(GetSourceConnectionInformationBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetSourceConnectionInformationErrors$outboundSchema),
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
export namespace GetSourceConnectionInformationBadRequest$ {
  /** @deprecated use `GetSourceConnectionInformationBadRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetSourceConnectionInformationBadRequest$inboundSchema;
  /** @deprecated use `GetSourceConnectionInformationBadRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetSourceConnectionInformationBadRequest$outboundSchema;
  /** @deprecated use `GetSourceConnectionInformationBadRequest$Outbound` instead. */
  export type Outbound = GetSourceConnectionInformationBadRequest$Outbound;
}