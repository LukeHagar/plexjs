/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PlexAPIError } from "./plexapierror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ApplyUpdatesUpdaterErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type ApplyUpdatesUnauthorizedData = {
  errors?: Array<ApplyUpdatesUpdaterErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class ApplyUpdatesUnauthorized extends PlexAPIError {
  errors?: Array<ApplyUpdatesUpdaterErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: ApplyUpdatesUnauthorizedData;

  constructor(
    err: ApplyUpdatesUnauthorizedData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "ApplyUpdatesUnauthorized";
  }
}

export type ApplyUpdatesErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type ApplyUpdatesBadRequestData = {
  errors?: Array<ApplyUpdatesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class ApplyUpdatesBadRequest extends PlexAPIError {
  errors?: Array<ApplyUpdatesErrors> | undefined;

  /** The original data that was passed to this error instance. */
  data$: ApplyUpdatesBadRequestData;

  constructor(
    err: ApplyUpdatesBadRequestData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.errors != null) this.errors = err.errors;

    this.name = "ApplyUpdatesBadRequest";
  }
}

/** @internal */
export const ApplyUpdatesUpdaterErrors$inboundSchema: z.ZodType<
  ApplyUpdatesUpdaterErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type ApplyUpdatesUpdaterErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const ApplyUpdatesUpdaterErrors$outboundSchema: z.ZodType<
  ApplyUpdatesUpdaterErrors$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesUpdaterErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesUpdaterErrors$ {
  /** @deprecated use `ApplyUpdatesUpdaterErrors$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesUpdaterErrors$inboundSchema;
  /** @deprecated use `ApplyUpdatesUpdaterErrors$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesUpdaterErrors$outboundSchema;
  /** @deprecated use `ApplyUpdatesUpdaterErrors$Outbound` instead. */
  export type Outbound = ApplyUpdatesUpdaterErrors$Outbound;
}

export function applyUpdatesUpdaterErrorsToJSON(
  applyUpdatesUpdaterErrors: ApplyUpdatesUpdaterErrors,
): string {
  return JSON.stringify(
    ApplyUpdatesUpdaterErrors$outboundSchema.parse(applyUpdatesUpdaterErrors),
  );
}

export function applyUpdatesUpdaterErrorsFromJSON(
  jsonString: string,
): SafeParseResult<ApplyUpdatesUpdaterErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplyUpdatesUpdaterErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplyUpdatesUpdaterErrors' from JSON`,
  );
}

/** @internal */
export const ApplyUpdatesUnauthorized$inboundSchema: z.ZodType<
  ApplyUpdatesUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => ApplyUpdatesUpdaterErrors$inboundSchema))
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

    return new ApplyUpdatesUnauthorized(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ApplyUpdatesUnauthorized$Outbound = {
  errors?: Array<ApplyUpdatesUpdaterErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const ApplyUpdatesUnauthorized$outboundSchema: z.ZodType<
  ApplyUpdatesUnauthorized$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesUnauthorized
> = z.instanceof(ApplyUpdatesUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => ApplyUpdatesUpdaterErrors$outboundSchema))
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
export namespace ApplyUpdatesUnauthorized$ {
  /** @deprecated use `ApplyUpdatesUnauthorized$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesUnauthorized$inboundSchema;
  /** @deprecated use `ApplyUpdatesUnauthorized$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesUnauthorized$outboundSchema;
  /** @deprecated use `ApplyUpdatesUnauthorized$Outbound` instead. */
  export type Outbound = ApplyUpdatesUnauthorized$Outbound;
}

/** @internal */
export const ApplyUpdatesErrors$inboundSchema: z.ZodType<
  ApplyUpdatesErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type ApplyUpdatesErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const ApplyUpdatesErrors$outboundSchema: z.ZodType<
  ApplyUpdatesErrors$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesErrors$ {
  /** @deprecated use `ApplyUpdatesErrors$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesErrors$inboundSchema;
  /** @deprecated use `ApplyUpdatesErrors$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesErrors$outboundSchema;
  /** @deprecated use `ApplyUpdatesErrors$Outbound` instead. */
  export type Outbound = ApplyUpdatesErrors$Outbound;
}

export function applyUpdatesErrorsToJSON(
  applyUpdatesErrors: ApplyUpdatesErrors,
): string {
  return JSON.stringify(
    ApplyUpdatesErrors$outboundSchema.parse(applyUpdatesErrors),
  );
}

export function applyUpdatesErrorsFromJSON(
  jsonString: string,
): SafeParseResult<ApplyUpdatesErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplyUpdatesErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplyUpdatesErrors' from JSON`,
  );
}

/** @internal */
export const ApplyUpdatesBadRequest$inboundSchema: z.ZodType<
  ApplyUpdatesBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => ApplyUpdatesErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new ApplyUpdatesBadRequest(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ApplyUpdatesBadRequest$Outbound = {
  errors?: Array<ApplyUpdatesErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const ApplyUpdatesBadRequest$outboundSchema: z.ZodType<
  ApplyUpdatesBadRequest$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesBadRequest
> = z.instanceof(ApplyUpdatesBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => ApplyUpdatesErrors$outboundSchema))
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
export namespace ApplyUpdatesBadRequest$ {
  /** @deprecated use `ApplyUpdatesBadRequest$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesBadRequest$inboundSchema;
  /** @deprecated use `ApplyUpdatesBadRequest$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesBadRequest$outboundSchema;
  /** @deprecated use `ApplyUpdatesBadRequest$Outbound` instead. */
  export type Outbound = ApplyUpdatesBadRequest$Outbound;
}
