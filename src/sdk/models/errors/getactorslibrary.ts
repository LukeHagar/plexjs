/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PlexAPIError } from "./plexapierror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetActorsLibraryLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetActorsLibraryUnauthorizedData = {
  errors?: Array<GetActorsLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetActorsLibraryUnauthorized extends PlexAPIError {
  errors?: Array<GetActorsLibraryLibraryErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetActorsLibraryUnauthorizedData;

  constructor(
    err: GetActorsLibraryUnauthorizedData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "GetActorsLibraryUnauthorized";
  }
}

export type GetActorsLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetActorsLibraryBadRequestData = {
  errors?: Array<GetActorsLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetActorsLibraryBadRequest extends PlexAPIError {
  errors?: Array<GetActorsLibraryErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetActorsLibraryBadRequestData;

  constructor(
    err: GetActorsLibraryBadRequestData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "GetActorsLibraryBadRequest";
  }
}

/** @internal */
export const GetActorsLibraryLibraryErrors$inboundSchema: z.ZodType<
  GetActorsLibraryLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetActorsLibraryLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetActorsLibraryLibraryErrors$outboundSchema: z.ZodType<
  GetActorsLibraryLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetActorsLibraryLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActorsLibraryLibraryErrors$ {
  /** @deprecated use `GetActorsLibraryLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetActorsLibraryLibraryErrors$inboundSchema;
  /** @deprecated use `GetActorsLibraryLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetActorsLibraryLibraryErrors$outboundSchema;
  /** @deprecated use `GetActorsLibraryLibraryErrors$Outbound` instead. */
  export type Outbound = GetActorsLibraryLibraryErrors$Outbound;
}

export function getActorsLibraryLibraryErrorsToJSON(
  getActorsLibraryLibraryErrors: GetActorsLibraryLibraryErrors,
): string {
  return JSON.stringify(
    GetActorsLibraryLibraryErrors$outboundSchema.parse(
      getActorsLibraryLibraryErrors,
    ),
  );
}

export function getActorsLibraryLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetActorsLibraryLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetActorsLibraryLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetActorsLibraryLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetActorsLibraryUnauthorized$inboundSchema: z.ZodType<
  GetActorsLibraryUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetActorsLibraryLibraryErrors$inboundSchema))
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

    return new GetActorsLibraryUnauthorized(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetActorsLibraryUnauthorized$Outbound = {
  errors?: Array<GetActorsLibraryLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetActorsLibraryUnauthorized$outboundSchema: z.ZodType<
  GetActorsLibraryUnauthorized$Outbound,
  z.ZodTypeDef,
  GetActorsLibraryUnauthorized
> = z.instanceof(GetActorsLibraryUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetActorsLibraryLibraryErrors$outboundSchema),
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
export namespace GetActorsLibraryUnauthorized$ {
  /** @deprecated use `GetActorsLibraryUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetActorsLibraryUnauthorized$inboundSchema;
  /** @deprecated use `GetActorsLibraryUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetActorsLibraryUnauthorized$outboundSchema;
  /** @deprecated use `GetActorsLibraryUnauthorized$Outbound` instead. */
  export type Outbound = GetActorsLibraryUnauthorized$Outbound;
}

/** @internal */
export const GetActorsLibraryErrors$inboundSchema: z.ZodType<
  GetActorsLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetActorsLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetActorsLibraryErrors$outboundSchema: z.ZodType<
  GetActorsLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetActorsLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActorsLibraryErrors$ {
  /** @deprecated use `GetActorsLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetActorsLibraryErrors$inboundSchema;
  /** @deprecated use `GetActorsLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetActorsLibraryErrors$outboundSchema;
  /** @deprecated use `GetActorsLibraryErrors$Outbound` instead. */
  export type Outbound = GetActorsLibraryErrors$Outbound;
}

export function getActorsLibraryErrorsToJSON(
  getActorsLibraryErrors: GetActorsLibraryErrors,
): string {
  return JSON.stringify(
    GetActorsLibraryErrors$outboundSchema.parse(getActorsLibraryErrors),
  );
}

export function getActorsLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetActorsLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetActorsLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetActorsLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetActorsLibraryBadRequest$inboundSchema: z.ZodType<
  GetActorsLibraryBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetActorsLibraryErrors$inboundSchema))
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

    return new GetActorsLibraryBadRequest(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetActorsLibraryBadRequest$Outbound = {
  errors?: Array<GetActorsLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetActorsLibraryBadRequest$outboundSchema: z.ZodType<
  GetActorsLibraryBadRequest$Outbound,
  z.ZodTypeDef,
  GetActorsLibraryBadRequest
> = z.instanceof(GetActorsLibraryBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetActorsLibraryErrors$outboundSchema))
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
export namespace GetActorsLibraryBadRequest$ {
  /** @deprecated use `GetActorsLibraryBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetActorsLibraryBadRequest$inboundSchema;
  /** @deprecated use `GetActorsLibraryBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetActorsLibraryBadRequest$outboundSchema;
  /** @deprecated use `GetActorsLibraryBadRequest$Outbound` instead. */
  export type Outbound = GetActorsLibraryBadRequest$Outbound;
}
