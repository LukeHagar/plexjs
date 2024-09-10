/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetDevicesServerErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetDevicesUnauthorizedData = {
  errors?: Array<GetDevicesServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetDevicesUnauthorized extends Error {
  errors?: Array<GetDevicesServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetDevicesUnauthorizedData;

  constructor(err: GetDevicesUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetDevicesUnauthorized";
  }
}

export type GetDevicesErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetDevicesBadRequestData = {
  errors?: Array<GetDevicesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetDevicesBadRequest extends Error {
  errors?: Array<GetDevicesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetDevicesBadRequestData;

  constructor(err: GetDevicesBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetDevicesBadRequest";
  }
}

/** @internal */
export const GetDevicesServerErrors$inboundSchema: z.ZodType<
  GetDevicesServerErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetDevicesServerErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetDevicesServerErrors$outboundSchema: z.ZodType<
  GetDevicesServerErrors$Outbound,
  z.ZodTypeDef,
  GetDevicesServerErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDevicesServerErrors$ {
  /** @deprecated use `GetDevicesServerErrors$inboundSchema` instead. */
  export const inboundSchema = GetDevicesServerErrors$inboundSchema;
  /** @deprecated use `GetDevicesServerErrors$outboundSchema` instead. */
  export const outboundSchema = GetDevicesServerErrors$outboundSchema;
  /** @deprecated use `GetDevicesServerErrors$Outbound` instead. */
  export type Outbound = GetDevicesServerErrors$Outbound;
}

/** @internal */
export const GetDevicesUnauthorized$inboundSchema: z.ZodType<
  GetDevicesUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetDevicesServerErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetDevicesUnauthorized(remapped);
  });

/** @internal */
export type GetDevicesUnauthorized$Outbound = {
  errors?: Array<GetDevicesServerErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetDevicesUnauthorized$outboundSchema: z.ZodType<
  GetDevicesUnauthorized$Outbound,
  z.ZodTypeDef,
  GetDevicesUnauthorized
> = z.instanceof(GetDevicesUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetDevicesServerErrors$outboundSchema))
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
export namespace GetDevicesUnauthorized$ {
  /** @deprecated use `GetDevicesUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetDevicesUnauthorized$inboundSchema;
  /** @deprecated use `GetDevicesUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetDevicesUnauthorized$outboundSchema;
  /** @deprecated use `GetDevicesUnauthorized$Outbound` instead. */
  export type Outbound = GetDevicesUnauthorized$Outbound;
}

/** @internal */
export const GetDevicesErrors$inboundSchema: z.ZodType<
  GetDevicesErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetDevicesErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetDevicesErrors$outboundSchema: z.ZodType<
  GetDevicesErrors$Outbound,
  z.ZodTypeDef,
  GetDevicesErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDevicesErrors$ {
  /** @deprecated use `GetDevicesErrors$inboundSchema` instead. */
  export const inboundSchema = GetDevicesErrors$inboundSchema;
  /** @deprecated use `GetDevicesErrors$outboundSchema` instead. */
  export const outboundSchema = GetDevicesErrors$outboundSchema;
  /** @deprecated use `GetDevicesErrors$Outbound` instead. */
  export type Outbound = GetDevicesErrors$Outbound;
}

/** @internal */
export const GetDevicesBadRequest$inboundSchema: z.ZodType<
  GetDevicesBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetDevicesErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetDevicesBadRequest(remapped);
  });

/** @internal */
export type GetDevicesBadRequest$Outbound = {
  errors?: Array<GetDevicesErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetDevicesBadRequest$outboundSchema: z.ZodType<
  GetDevicesBadRequest$Outbound,
  z.ZodTypeDef,
  GetDevicesBadRequest
> = z.instanceof(GetDevicesBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetDevicesErrors$outboundSchema)).optional(),
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
export namespace GetDevicesBadRequest$ {
  /** @deprecated use `GetDevicesBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetDevicesBadRequest$inboundSchema;
  /** @deprecated use `GetDevicesBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetDevicesBadRequest$outboundSchema;
  /** @deprecated use `GetDevicesBadRequest$Outbound` instead. */
  export type Outbound = GetDevicesBadRequest$Outbound;
}