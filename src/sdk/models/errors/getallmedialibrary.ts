/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetAllMediaLibraryLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetAllMediaLibraryUnauthorizedData = {
  errors?: Array<GetAllMediaLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetAllMediaLibraryUnauthorized extends Error {
  errors?: Array<GetAllMediaLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetAllMediaLibraryUnauthorizedData;

  constructor(err: GetAllMediaLibraryUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetAllMediaLibraryUnauthorized";
  }
}

export type GetAllMediaLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetAllMediaLibraryBadRequestData = {
  errors?: Array<GetAllMediaLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetAllMediaLibraryBadRequest extends Error {
  errors?: Array<GetAllMediaLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetAllMediaLibraryBadRequestData;

  constructor(err: GetAllMediaLibraryBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetAllMediaLibraryBadRequest";
  }
}

/** @internal */
export const GetAllMediaLibraryLibraryErrors$inboundSchema: z.ZodType<
  GetAllMediaLibraryLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetAllMediaLibraryLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetAllMediaLibraryLibraryErrors$outboundSchema: z.ZodType<
  GetAllMediaLibraryLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetAllMediaLibraryLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllMediaLibraryLibraryErrors$ {
  /** @deprecated use `GetAllMediaLibraryLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetAllMediaLibraryLibraryErrors$inboundSchema;
  /** @deprecated use `GetAllMediaLibraryLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetAllMediaLibraryLibraryErrors$outboundSchema;
  /** @deprecated use `GetAllMediaLibraryLibraryErrors$Outbound` instead. */
  export type Outbound = GetAllMediaLibraryLibraryErrors$Outbound;
}

export function getAllMediaLibraryLibraryErrorsToJSON(
  getAllMediaLibraryLibraryErrors: GetAllMediaLibraryLibraryErrors,
): string {
  return JSON.stringify(
    GetAllMediaLibraryLibraryErrors$outboundSchema.parse(
      getAllMediaLibraryLibraryErrors,
    ),
  );
}

export function getAllMediaLibraryLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetAllMediaLibraryLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllMediaLibraryLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllMediaLibraryLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetAllMediaLibraryUnauthorized$inboundSchema: z.ZodType<
  GetAllMediaLibraryUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetAllMediaLibraryLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetAllMediaLibraryUnauthorized(remapped);
  });

/** @internal */
export type GetAllMediaLibraryUnauthorized$Outbound = {
  errors?: Array<GetAllMediaLibraryLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetAllMediaLibraryUnauthorized$outboundSchema: z.ZodType<
  GetAllMediaLibraryUnauthorized$Outbound,
  z.ZodTypeDef,
  GetAllMediaLibraryUnauthorized
> = z.instanceof(GetAllMediaLibraryUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetAllMediaLibraryLibraryErrors$outboundSchema),
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
export namespace GetAllMediaLibraryUnauthorized$ {
  /** @deprecated use `GetAllMediaLibraryUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetAllMediaLibraryUnauthorized$inboundSchema;
  /** @deprecated use `GetAllMediaLibraryUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetAllMediaLibraryUnauthorized$outboundSchema;
  /** @deprecated use `GetAllMediaLibraryUnauthorized$Outbound` instead. */
  export type Outbound = GetAllMediaLibraryUnauthorized$Outbound;
}

/** @internal */
export const GetAllMediaLibraryErrors$inboundSchema: z.ZodType<
  GetAllMediaLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetAllMediaLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetAllMediaLibraryErrors$outboundSchema: z.ZodType<
  GetAllMediaLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetAllMediaLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllMediaLibraryErrors$ {
  /** @deprecated use `GetAllMediaLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetAllMediaLibraryErrors$inboundSchema;
  /** @deprecated use `GetAllMediaLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetAllMediaLibraryErrors$outboundSchema;
  /** @deprecated use `GetAllMediaLibraryErrors$Outbound` instead. */
  export type Outbound = GetAllMediaLibraryErrors$Outbound;
}

export function getAllMediaLibraryErrorsToJSON(
  getAllMediaLibraryErrors: GetAllMediaLibraryErrors,
): string {
  return JSON.stringify(
    GetAllMediaLibraryErrors$outboundSchema.parse(getAllMediaLibraryErrors),
  );
}

export function getAllMediaLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetAllMediaLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllMediaLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllMediaLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetAllMediaLibraryBadRequest$inboundSchema: z.ZodType<
  GetAllMediaLibraryBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetAllMediaLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetAllMediaLibraryBadRequest(remapped);
  });

/** @internal */
export type GetAllMediaLibraryBadRequest$Outbound = {
  errors?: Array<GetAllMediaLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetAllMediaLibraryBadRequest$outboundSchema: z.ZodType<
  GetAllMediaLibraryBadRequest$Outbound,
  z.ZodTypeDef,
  GetAllMediaLibraryBadRequest
> = z.instanceof(GetAllMediaLibraryBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetAllMediaLibraryErrors$outboundSchema))
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
export namespace GetAllMediaLibraryBadRequest$ {
  /** @deprecated use `GetAllMediaLibraryBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllMediaLibraryBadRequest$inboundSchema;
  /** @deprecated use `GetAllMediaLibraryBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllMediaLibraryBadRequest$outboundSchema;
  /** @deprecated use `GetAllMediaLibraryBadRequest$Outbound` instead. */
  export type Outbound = GetAllMediaLibraryBadRequest$Outbound;
}
