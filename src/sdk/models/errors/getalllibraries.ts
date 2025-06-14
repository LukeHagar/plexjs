/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PlexAPIError } from "./plexapierror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetAllLibrariesLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetAllLibrariesUnauthorizedData = {
  errors?: Array<GetAllLibrariesLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetAllLibrariesUnauthorized extends PlexAPIError {
  errors?: Array<GetAllLibrariesLibraryErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetAllLibrariesUnauthorizedData;

  constructor(
    err: GetAllLibrariesUnauthorizedData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "GetAllLibrariesUnauthorized";
  }
}

export type GetAllLibrariesErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetAllLibrariesBadRequestData = {
  errors?: Array<GetAllLibrariesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetAllLibrariesBadRequest extends PlexAPIError {
  errors?: Array<GetAllLibrariesErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetAllLibrariesBadRequestData;

  constructor(
    err: GetAllLibrariesBadRequestData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "GetAllLibrariesBadRequest";
  }
}

/** @internal */
export const GetAllLibrariesLibraryErrors$inboundSchema: z.ZodType<
  GetAllLibrariesLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetAllLibrariesLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetAllLibrariesLibraryErrors$outboundSchema: z.ZodType<
  GetAllLibrariesLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLibrariesLibraryErrors$ {
  /** @deprecated use `GetAllLibrariesLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesLibraryErrors$inboundSchema;
  /** @deprecated use `GetAllLibrariesLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesLibraryErrors$outboundSchema;
  /** @deprecated use `GetAllLibrariesLibraryErrors$Outbound` instead. */
  export type Outbound = GetAllLibrariesLibraryErrors$Outbound;
}

export function getAllLibrariesLibraryErrorsToJSON(
  getAllLibrariesLibraryErrors: GetAllLibrariesLibraryErrors,
): string {
  return JSON.stringify(
    GetAllLibrariesLibraryErrors$outboundSchema.parse(
      getAllLibrariesLibraryErrors,
    ),
  );
}

export function getAllLibrariesLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesUnauthorized$inboundSchema: z.ZodType<
  GetAllLibrariesUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetAllLibrariesLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetAllLibrariesUnauthorized(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetAllLibrariesUnauthorized$Outbound = {
  errors?: Array<GetAllLibrariesLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetAllLibrariesUnauthorized$outboundSchema: z.ZodType<
  GetAllLibrariesUnauthorized$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesUnauthorized
> = z.instanceof(GetAllLibrariesUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetAllLibrariesLibraryErrors$outboundSchema))
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
export namespace GetAllLibrariesUnauthorized$ {
  /** @deprecated use `GetAllLibrariesUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesUnauthorized$inboundSchema;
  /** @deprecated use `GetAllLibrariesUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesUnauthorized$outboundSchema;
  /** @deprecated use `GetAllLibrariesUnauthorized$Outbound` instead. */
  export type Outbound = GetAllLibrariesUnauthorized$Outbound;
}

/** @internal */
export const GetAllLibrariesErrors$inboundSchema: z.ZodType<
  GetAllLibrariesErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetAllLibrariesErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetAllLibrariesErrors$outboundSchema: z.ZodType<
  GetAllLibrariesErrors$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLibrariesErrors$ {
  /** @deprecated use `GetAllLibrariesErrors$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesErrors$inboundSchema;
  /** @deprecated use `GetAllLibrariesErrors$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesErrors$outboundSchema;
  /** @deprecated use `GetAllLibrariesErrors$Outbound` instead. */
  export type Outbound = GetAllLibrariesErrors$Outbound;
}

export function getAllLibrariesErrorsToJSON(
  getAllLibrariesErrors: GetAllLibrariesErrors,
): string {
  return JSON.stringify(
    GetAllLibrariesErrors$outboundSchema.parse(getAllLibrariesErrors),
  );
}

export function getAllLibrariesErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesErrors' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesBadRequest$inboundSchema: z.ZodType<
  GetAllLibrariesBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetAllLibrariesErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetAllLibrariesBadRequest(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetAllLibrariesBadRequest$Outbound = {
  errors?: Array<GetAllLibrariesErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetAllLibrariesBadRequest$outboundSchema: z.ZodType<
  GetAllLibrariesBadRequest$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesBadRequest
> = z.instanceof(GetAllLibrariesBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetAllLibrariesErrors$outboundSchema))
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
export namespace GetAllLibrariesBadRequest$ {
  /** @deprecated use `GetAllLibrariesBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesBadRequest$inboundSchema;
  /** @deprecated use `GetAllLibrariesBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesBadRequest$outboundSchema;
  /** @deprecated use `GetAllLibrariesBadRequest$Outbound` instead. */
  export type Outbound = GetAllLibrariesBadRequest$Outbound;
}
