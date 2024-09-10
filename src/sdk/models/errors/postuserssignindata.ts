/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type PostUsersSignInDataAuthenticationErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type PostUsersSignInDataUnauthorizedData = {
  errors?: Array<PostUsersSignInDataAuthenticationErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class PostUsersSignInDataUnauthorized extends Error {
  errors?: Array<PostUsersSignInDataAuthenticationErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostUsersSignInDataUnauthorizedData;

  constructor(err: PostUsersSignInDataUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "PostUsersSignInDataUnauthorized";
  }
}

export type PostUsersSignInDataErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type PostUsersSignInDataBadRequestData = {
  errors?: Array<PostUsersSignInDataErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class PostUsersSignInDataBadRequest extends Error {
  errors?: Array<PostUsersSignInDataErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostUsersSignInDataBadRequestData;

  constructor(err: PostUsersSignInDataBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "PostUsersSignInDataBadRequest";
  }
}

/** @internal */
export const PostUsersSignInDataAuthenticationErrors$inboundSchema: z.ZodType<
  PostUsersSignInDataAuthenticationErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type PostUsersSignInDataAuthenticationErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const PostUsersSignInDataAuthenticationErrors$outboundSchema: z.ZodType<
  PostUsersSignInDataAuthenticationErrors$Outbound,
  z.ZodTypeDef,
  PostUsersSignInDataAuthenticationErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostUsersSignInDataAuthenticationErrors$ {
  /** @deprecated use `PostUsersSignInDataAuthenticationErrors$inboundSchema` instead. */
  export const inboundSchema =
    PostUsersSignInDataAuthenticationErrors$inboundSchema;
  /** @deprecated use `PostUsersSignInDataAuthenticationErrors$outboundSchema` instead. */
  export const outboundSchema =
    PostUsersSignInDataAuthenticationErrors$outboundSchema;
  /** @deprecated use `PostUsersSignInDataAuthenticationErrors$Outbound` instead. */
  export type Outbound = PostUsersSignInDataAuthenticationErrors$Outbound;
}

/** @internal */
export const PostUsersSignInDataUnauthorized$inboundSchema: z.ZodType<
  PostUsersSignInDataUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(
    z.lazy(() => PostUsersSignInDataAuthenticationErrors$inboundSchema),
  ).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new PostUsersSignInDataUnauthorized(remapped);
  });

/** @internal */
export type PostUsersSignInDataUnauthorized$Outbound = {
  errors?: Array<PostUsersSignInDataAuthenticationErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const PostUsersSignInDataUnauthorized$outboundSchema: z.ZodType<
  PostUsersSignInDataUnauthorized$Outbound,
  z.ZodTypeDef,
  PostUsersSignInDataUnauthorized
> = z.instanceof(PostUsersSignInDataUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => PostUsersSignInDataAuthenticationErrors$outboundSchema),
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
export namespace PostUsersSignInDataUnauthorized$ {
  /** @deprecated use `PostUsersSignInDataUnauthorized$inboundSchema` instead. */
  export const inboundSchema = PostUsersSignInDataUnauthorized$inboundSchema;
  /** @deprecated use `PostUsersSignInDataUnauthorized$outboundSchema` instead. */
  export const outboundSchema = PostUsersSignInDataUnauthorized$outboundSchema;
  /** @deprecated use `PostUsersSignInDataUnauthorized$Outbound` instead. */
  export type Outbound = PostUsersSignInDataUnauthorized$Outbound;
}

/** @internal */
export const PostUsersSignInDataErrors$inboundSchema: z.ZodType<
  PostUsersSignInDataErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type PostUsersSignInDataErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const PostUsersSignInDataErrors$outboundSchema: z.ZodType<
  PostUsersSignInDataErrors$Outbound,
  z.ZodTypeDef,
  PostUsersSignInDataErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostUsersSignInDataErrors$ {
  /** @deprecated use `PostUsersSignInDataErrors$inboundSchema` instead. */
  export const inboundSchema = PostUsersSignInDataErrors$inboundSchema;
  /** @deprecated use `PostUsersSignInDataErrors$outboundSchema` instead. */
  export const outboundSchema = PostUsersSignInDataErrors$outboundSchema;
  /** @deprecated use `PostUsersSignInDataErrors$Outbound` instead. */
  export type Outbound = PostUsersSignInDataErrors$Outbound;
}

/** @internal */
export const PostUsersSignInDataBadRequest$inboundSchema: z.ZodType<
  PostUsersSignInDataBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => PostUsersSignInDataErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new PostUsersSignInDataBadRequest(remapped);
  });

/** @internal */
export type PostUsersSignInDataBadRequest$Outbound = {
  errors?: Array<PostUsersSignInDataErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const PostUsersSignInDataBadRequest$outboundSchema: z.ZodType<
  PostUsersSignInDataBadRequest$Outbound,
  z.ZodTypeDef,
  PostUsersSignInDataBadRequest
> = z.instanceof(PostUsersSignInDataBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => PostUsersSignInDataErrors$outboundSchema))
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
export namespace PostUsersSignInDataBadRequest$ {
  /** @deprecated use `PostUsersSignInDataBadRequest$inboundSchema` instead. */
  export const inboundSchema = PostUsersSignInDataBadRequest$inboundSchema;
  /** @deprecated use `PostUsersSignInDataBadRequest$outboundSchema` instead. */
  export const outboundSchema = PostUsersSignInDataBadRequest$outboundSchema;
  /** @deprecated use `PostUsersSignInDataBadRequest$Outbound` instead. */
  export type Outbound = PostUsersSignInDataBadRequest$Outbound;
}