/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of media to retrieve or filter by.
 *
 * @remarks
 * 1 = movie
 * 2 = show
 * 3 = season
 * 4 = episode
 * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
 */
export enum GetCountriesLibraryQueryParamType {
  Movie = 1,
  TvShow = 2,
  Season = 3,
  Episode = 4,
  Audio = 8,
  Album = 9,
  Track = 10,
}
/**
 * The type of media to retrieve or filter by.
 *
 * @remarks
 * 1 = movie
 * 2 = show
 * 3 = season
 * 4 = episode
 * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
 */
export type GetCountriesLibraryQueryParamTypeOpen = OpenEnum<
  typeof GetCountriesLibraryQueryParamType
>;

export type GetCountriesLibraryRequest = {
  /**
   * The unique key of the Plex library.
   *
   * @remarks
   * Note: This is unique in the context of the Plex server.
   */
  sectionKey: number;
  /**
   * The type of media to retrieve or filter by.
   *
   * @remarks
   * 1 = movie
   * 2 = show
   * 3 = season
   * 4 = episode
   * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
   */
  type: GetCountriesLibraryQueryParamTypeOpen;
};

export type GetCountriesLibraryDirectory = {
  fastKey: string;
  key: string;
  title: string;
};

export type GetCountriesLibraryMediaContainer = {
  /**
   * Number of media items returned in this response.
   */
  size: number;
  /**
   * Indicates whether syncing is allowed.
   */
  allowSync: boolean;
  /**
   * URL for the background artwork of the media container.
   */
  art: string;
  /**
   * The content type or mode.
   */
  content: string;
  /**
   * An plugin identifier for the media container.
   */
  identifier: string;
  /**
   * The prefix used for media tag resource paths.
   */
  mediaTagPrefix: string;
  /**
   * The version number for media tags.
   */
  mediaTagVersion: number;
  /**
   * Specifies whether caching is disabled.
   */
  nocache: boolean;
  /**
   * URL for the thumbnail image of the media container.
   */
  thumb: string;
  /**
   * The primary title of the media container.
   */
  title1: string;
  /**
   * The secondary title of the media container.
   */
  title2: string;
  /**
   * Identifier for the view group layout.
   */
  viewGroup: string;
  directory?: Array<GetCountriesLibraryDirectory> | undefined;
};

/**
 * Successful response containing media container data.
 */
export type GetCountriesLibraryResponseBody = {
  mediaContainer?: GetCountriesLibraryMediaContainer | undefined;
};

export type GetCountriesLibraryResponse = {
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
  /**
   * Successful response containing media container data.
   */
  object?: GetCountriesLibraryResponseBody | undefined;
};

/** @internal */
export const GetCountriesLibraryQueryParamType$inboundSchema: z.ZodType<
  GetCountriesLibraryQueryParamTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(GetCountriesLibraryQueryParamType),
    z.number().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const GetCountriesLibraryQueryParamType$outboundSchema: z.ZodType<
  GetCountriesLibraryQueryParamTypeOpen,
  z.ZodTypeDef,
  GetCountriesLibraryQueryParamTypeOpen
> = z.union([
  z.nativeEnum(GetCountriesLibraryQueryParamType),
  z.number().and(z.custom<Unrecognized<number>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCountriesLibraryQueryParamType$ {
  /** @deprecated use `GetCountriesLibraryQueryParamType$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryQueryParamType$inboundSchema;
  /** @deprecated use `GetCountriesLibraryQueryParamType$outboundSchema` instead. */
  export const outboundSchema =
    GetCountriesLibraryQueryParamType$outboundSchema;
}

/** @internal */
export const GetCountriesLibraryRequest$inboundSchema: z.ZodType<
  GetCountriesLibraryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sectionKey: z.number().int(),
  type: GetCountriesLibraryQueryParamType$inboundSchema,
});

/** @internal */
export type GetCountriesLibraryRequest$Outbound = {
  sectionKey: number;
  type: number;
};

/** @internal */
export const GetCountriesLibraryRequest$outboundSchema: z.ZodType<
  GetCountriesLibraryRequest$Outbound,
  z.ZodTypeDef,
  GetCountriesLibraryRequest
> = z.object({
  sectionKey: z.number().int(),
  type: GetCountriesLibraryQueryParamType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCountriesLibraryRequest$ {
  /** @deprecated use `GetCountriesLibraryRequest$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryRequest$inboundSchema;
  /** @deprecated use `GetCountriesLibraryRequest$outboundSchema` instead. */
  export const outboundSchema = GetCountriesLibraryRequest$outboundSchema;
  /** @deprecated use `GetCountriesLibraryRequest$Outbound` instead. */
  export type Outbound = GetCountriesLibraryRequest$Outbound;
}

export function getCountriesLibraryRequestToJSON(
  getCountriesLibraryRequest: GetCountriesLibraryRequest,
): string {
  return JSON.stringify(
    GetCountriesLibraryRequest$outboundSchema.parse(getCountriesLibraryRequest),
  );
}

export function getCountriesLibraryRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCountriesLibraryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCountriesLibraryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCountriesLibraryRequest' from JSON`,
  );
}

/** @internal */
export const GetCountriesLibraryDirectory$inboundSchema: z.ZodType<
  GetCountriesLibraryDirectory,
  z.ZodTypeDef,
  unknown
> = z.object({
  fastKey: z.string(),
  key: z.string(),
  title: z.string(),
});

/** @internal */
export type GetCountriesLibraryDirectory$Outbound = {
  fastKey: string;
  key: string;
  title: string;
};

/** @internal */
export const GetCountriesLibraryDirectory$outboundSchema: z.ZodType<
  GetCountriesLibraryDirectory$Outbound,
  z.ZodTypeDef,
  GetCountriesLibraryDirectory
> = z.object({
  fastKey: z.string(),
  key: z.string(),
  title: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCountriesLibraryDirectory$ {
  /** @deprecated use `GetCountriesLibraryDirectory$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryDirectory$inboundSchema;
  /** @deprecated use `GetCountriesLibraryDirectory$outboundSchema` instead. */
  export const outboundSchema = GetCountriesLibraryDirectory$outboundSchema;
  /** @deprecated use `GetCountriesLibraryDirectory$Outbound` instead. */
  export type Outbound = GetCountriesLibraryDirectory$Outbound;
}

export function getCountriesLibraryDirectoryToJSON(
  getCountriesLibraryDirectory: GetCountriesLibraryDirectory,
): string {
  return JSON.stringify(
    GetCountriesLibraryDirectory$outboundSchema.parse(
      getCountriesLibraryDirectory,
    ),
  );
}

export function getCountriesLibraryDirectoryFromJSON(
  jsonString: string,
): SafeParseResult<GetCountriesLibraryDirectory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCountriesLibraryDirectory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCountriesLibraryDirectory' from JSON`,
  );
}

/** @internal */
export const GetCountriesLibraryMediaContainer$inboundSchema: z.ZodType<
  GetCountriesLibraryMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int(),
  allowSync: z.boolean(),
  art: z.string(),
  content: z.string(),
  identifier: z.string(),
  mediaTagPrefix: z.string(),
  mediaTagVersion: z.number().int(),
  nocache: z.boolean(),
  thumb: z.string(),
  title1: z.string(),
  title2: z.string(),
  viewGroup: z.string(),
  Directory: z.array(z.lazy(() => GetCountriesLibraryDirectory$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Directory": "directory",
  });
});

/** @internal */
export type GetCountriesLibraryMediaContainer$Outbound = {
  size: number;
  allowSync: boolean;
  art: string;
  content: string;
  identifier: string;
  mediaTagPrefix: string;
  mediaTagVersion: number;
  nocache: boolean;
  thumb: string;
  title1: string;
  title2: string;
  viewGroup: string;
  Directory?: Array<GetCountriesLibraryDirectory$Outbound> | undefined;
};

/** @internal */
export const GetCountriesLibraryMediaContainer$outboundSchema: z.ZodType<
  GetCountriesLibraryMediaContainer$Outbound,
  z.ZodTypeDef,
  GetCountriesLibraryMediaContainer
> = z.object({
  size: z.number().int(),
  allowSync: z.boolean(),
  art: z.string(),
  content: z.string(),
  identifier: z.string(),
  mediaTagPrefix: z.string(),
  mediaTagVersion: z.number().int(),
  nocache: z.boolean(),
  thumb: z.string(),
  title1: z.string(),
  title2: z.string(),
  viewGroup: z.string(),
  directory: z.array(z.lazy(() => GetCountriesLibraryDirectory$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    directory: "Directory",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCountriesLibraryMediaContainer$ {
  /** @deprecated use `GetCountriesLibraryMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryMediaContainer$inboundSchema;
  /** @deprecated use `GetCountriesLibraryMediaContainer$outboundSchema` instead. */
  export const outboundSchema =
    GetCountriesLibraryMediaContainer$outboundSchema;
  /** @deprecated use `GetCountriesLibraryMediaContainer$Outbound` instead. */
  export type Outbound = GetCountriesLibraryMediaContainer$Outbound;
}

export function getCountriesLibraryMediaContainerToJSON(
  getCountriesLibraryMediaContainer: GetCountriesLibraryMediaContainer,
): string {
  return JSON.stringify(
    GetCountriesLibraryMediaContainer$outboundSchema.parse(
      getCountriesLibraryMediaContainer,
    ),
  );
}

export function getCountriesLibraryMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetCountriesLibraryMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCountriesLibraryMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCountriesLibraryMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetCountriesLibraryResponseBody$inboundSchema: z.ZodType<
  GetCountriesLibraryResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetCountriesLibraryMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetCountriesLibraryResponseBody$Outbound = {
  MediaContainer?: GetCountriesLibraryMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetCountriesLibraryResponseBody$outboundSchema: z.ZodType<
  GetCountriesLibraryResponseBody$Outbound,
  z.ZodTypeDef,
  GetCountriesLibraryResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetCountriesLibraryMediaContainer$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCountriesLibraryResponseBody$ {
  /** @deprecated use `GetCountriesLibraryResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryResponseBody$inboundSchema;
  /** @deprecated use `GetCountriesLibraryResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetCountriesLibraryResponseBody$outboundSchema;
  /** @deprecated use `GetCountriesLibraryResponseBody$Outbound` instead. */
  export type Outbound = GetCountriesLibraryResponseBody$Outbound;
}

export function getCountriesLibraryResponseBodyToJSON(
  getCountriesLibraryResponseBody: GetCountriesLibraryResponseBody,
): string {
  return JSON.stringify(
    GetCountriesLibraryResponseBody$outboundSchema.parse(
      getCountriesLibraryResponseBody,
    ),
  );
}

export function getCountriesLibraryResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCountriesLibraryResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCountriesLibraryResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCountriesLibraryResponseBody' from JSON`,
  );
}

/** @internal */
export const GetCountriesLibraryResponse$inboundSchema: z.ZodType<
  GetCountriesLibraryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetCountriesLibraryResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetCountriesLibraryResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetCountriesLibraryResponseBody$Outbound | undefined;
};

/** @internal */
export const GetCountriesLibraryResponse$outboundSchema: z.ZodType<
  GetCountriesLibraryResponse$Outbound,
  z.ZodTypeDef,
  GetCountriesLibraryResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetCountriesLibraryResponseBody$outboundSchema)
    .optional(),
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
export namespace GetCountriesLibraryResponse$ {
  /** @deprecated use `GetCountriesLibraryResponse$inboundSchema` instead. */
  export const inboundSchema = GetCountriesLibraryResponse$inboundSchema;
  /** @deprecated use `GetCountriesLibraryResponse$outboundSchema` instead. */
  export const outboundSchema = GetCountriesLibraryResponse$outboundSchema;
  /** @deprecated use `GetCountriesLibraryResponse$Outbound` instead. */
  export type Outbound = GetCountriesLibraryResponse$Outbound;
}

export function getCountriesLibraryResponseToJSON(
  getCountriesLibraryResponse: GetCountriesLibraryResponse,
): string {
  return JSON.stringify(
    GetCountriesLibraryResponse$outboundSchema.parse(
      getCountriesLibraryResponse,
    ),
  );
}

export function getCountriesLibraryResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCountriesLibraryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCountriesLibraryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCountriesLibraryResponse' from JSON`,
  );
}
