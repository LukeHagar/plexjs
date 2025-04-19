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
 * The library type
 */
export enum GetAllLibrariesType {
  Movie = "movie",
  TvShow = "show",
  Season = "season",
  Episode = "episode",
  Artist = "artist",
  Album = "album",
}
/**
 * The library type
 */
export type GetAllLibrariesTypeOpen = OpenEnum<typeof GetAllLibrariesType>;

/**
 * UNKNOWN
 */
export enum Hidden {
  Disable = 0,
  Enable = 1,
}

export type GetAllLibrariesLocation = {
  /**
   * The ID of the location.
   */
  id: number;
  /**
   * The path to the media item.
   */
  path: string;
};

export type GetAllLibrariesDirectory = {
  /**
   * Indicates whether syncing is allowed.
   */
  allowSync: boolean;
  /**
   * URL for the background artwork of the media container.
   */
  art: string;
  /**
   * The relative path to the composite media item.
   */
  composite: string;
  /**
   * UNKNOWN
   */
  filters: boolean;
  /**
   * Indicates whether the library is currently being refreshed or updated
   */
  refreshing: boolean;
  /**
   * URL for the thumbnail image of the media container.
   */
  thumb: string;
  /**
   * The library key representing the unique identifier
   */
  key: string;
  type: GetAllLibrariesTypeOpen;
  /**
   * The title of the library
   */
  title: string;
  /**
   * The Plex agent used to match and retrieve media metadata.
   */
  agent: string;
  /**
   * UNKNOWN
   */
  scanner: string;
  /**
   * The Plex library language that has been set
   */
  language: string;
  /**
   * The universally unique identifier for the library.
   */
  uuid: string;
  /**
   * Unix epoch datetime in seconds
   */
  updatedAt: number;
  createdAt?: number | undefined;
  /**
   * Unix epoch datetime in seconds
   */
  scannedAt: number;
  /**
   * UNKNOWN
   */
  content: boolean;
  /**
   * UNKNOWN
   */
  directory: boolean;
  /**
   * Timestamp (in seconds) representing the last time the content was modified.
   *
   * @remarks
   * NOTE: Some Plex server have some absurd values for this field, like 8457612157633039800 so it should be int64
   */
  contentChangedAt: number;
  hidden?: Hidden | undefined;
  location: Array<GetAllLibrariesLocation>;
};

export type GetAllLibrariesMediaContainer = {
  /**
   * Number of media items returned in this response.
   */
  size: number;
  /**
   * Indicates whether syncing is allowed.
   */
  allowSync: boolean;
  /**
   * The primary title of the media container.
   */
  title1: string;
  directory?: Array<GetAllLibrariesDirectory> | undefined;
};

/**
 * The libraries available on the Server
 */
export type GetAllLibrariesResponseBody = {
  mediaContainer?: GetAllLibrariesMediaContainer | undefined;
};

export type GetAllLibrariesResponse = {
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
   * The libraries available on the Server
   */
  object?: GetAllLibrariesResponseBody | undefined;
};

/** @internal */
export const GetAllLibrariesType$inboundSchema: z.ZodType<
  GetAllLibrariesTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(GetAllLibrariesType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const GetAllLibrariesType$outboundSchema: z.ZodType<
  GetAllLibrariesTypeOpen,
  z.ZodTypeDef,
  GetAllLibrariesTypeOpen
> = z.union([
  z.nativeEnum(GetAllLibrariesType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLibrariesType$ {
  /** @deprecated use `GetAllLibrariesType$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesType$inboundSchema;
  /** @deprecated use `GetAllLibrariesType$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesType$outboundSchema;
}

/** @internal */
export const Hidden$inboundSchema: z.ZodNativeEnum<typeof Hidden> = z
  .nativeEnum(Hidden);

/** @internal */
export const Hidden$outboundSchema: z.ZodNativeEnum<typeof Hidden> =
  Hidden$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hidden$ {
  /** @deprecated use `Hidden$inboundSchema` instead. */
  export const inboundSchema = Hidden$inboundSchema;
  /** @deprecated use `Hidden$outboundSchema` instead. */
  export const outboundSchema = Hidden$outboundSchema;
}

/** @internal */
export const GetAllLibrariesLocation$inboundSchema: z.ZodType<
  GetAllLibrariesLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  path: z.string(),
});

/** @internal */
export type GetAllLibrariesLocation$Outbound = {
  id: number;
  path: string;
};

/** @internal */
export const GetAllLibrariesLocation$outboundSchema: z.ZodType<
  GetAllLibrariesLocation$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesLocation
> = z.object({
  id: z.number().int(),
  path: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLibrariesLocation$ {
  /** @deprecated use `GetAllLibrariesLocation$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesLocation$inboundSchema;
  /** @deprecated use `GetAllLibrariesLocation$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesLocation$outboundSchema;
  /** @deprecated use `GetAllLibrariesLocation$Outbound` instead. */
  export type Outbound = GetAllLibrariesLocation$Outbound;
}

export function getAllLibrariesLocationToJSON(
  getAllLibrariesLocation: GetAllLibrariesLocation,
): string {
  return JSON.stringify(
    GetAllLibrariesLocation$outboundSchema.parse(getAllLibrariesLocation),
  );
}

export function getAllLibrariesLocationFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesLocation' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesDirectory$inboundSchema: z.ZodType<
  GetAllLibrariesDirectory,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowSync: z.boolean(),
  art: z.string(),
  composite: z.string(),
  filters: z.boolean(),
  refreshing: z.boolean(),
  thumb: z.string(),
  key: z.string(),
  type: GetAllLibrariesType$inboundSchema,
  title: z.string(),
  agent: z.string(),
  scanner: z.string(),
  language: z.string(),
  uuid: z.string(),
  updatedAt: z.number().int(),
  createdAt: z.number().int().optional(),
  scannedAt: z.number().int(),
  content: z.boolean(),
  directory: z.boolean(),
  contentChangedAt: z.number().int(),
  hidden: Hidden$inboundSchema,
  Location: z.array(z.lazy(() => GetAllLibrariesLocation$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "Location": "location",
  });
});

/** @internal */
export type GetAllLibrariesDirectory$Outbound = {
  allowSync: boolean;
  art: string;
  composite: string;
  filters: boolean;
  refreshing: boolean;
  thumb: string;
  key: string;
  type: string;
  title: string;
  agent: string;
  scanner: string;
  language: string;
  uuid: string;
  updatedAt: number;
  createdAt?: number | undefined;
  scannedAt: number;
  content: boolean;
  directory: boolean;
  contentChangedAt: number;
  hidden: number;
  Location: Array<GetAllLibrariesLocation$Outbound>;
};

/** @internal */
export const GetAllLibrariesDirectory$outboundSchema: z.ZodType<
  GetAllLibrariesDirectory$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesDirectory
> = z.object({
  allowSync: z.boolean(),
  art: z.string(),
  composite: z.string(),
  filters: z.boolean(),
  refreshing: z.boolean(),
  thumb: z.string(),
  key: z.string(),
  type: GetAllLibrariesType$outboundSchema,
  title: z.string(),
  agent: z.string(),
  scanner: z.string(),
  language: z.string(),
  uuid: z.string(),
  updatedAt: z.number().int(),
  createdAt: z.number().int().optional(),
  scannedAt: z.number().int(),
  content: z.boolean(),
  directory: z.boolean(),
  contentChangedAt: z.number().int(),
  hidden: Hidden$outboundSchema.default(Hidden.Disable),
  location: z.array(z.lazy(() => GetAllLibrariesLocation$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    location: "Location",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLibrariesDirectory$ {
  /** @deprecated use `GetAllLibrariesDirectory$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesDirectory$inboundSchema;
  /** @deprecated use `GetAllLibrariesDirectory$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesDirectory$outboundSchema;
  /** @deprecated use `GetAllLibrariesDirectory$Outbound` instead. */
  export type Outbound = GetAllLibrariesDirectory$Outbound;
}

export function getAllLibrariesDirectoryToJSON(
  getAllLibrariesDirectory: GetAllLibrariesDirectory,
): string {
  return JSON.stringify(
    GetAllLibrariesDirectory$outboundSchema.parse(getAllLibrariesDirectory),
  );
}

export function getAllLibrariesDirectoryFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesDirectory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesDirectory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesDirectory' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesMediaContainer$inboundSchema: z.ZodType<
  GetAllLibrariesMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int(),
  allowSync: z.boolean(),
  title1: z.string(),
  Directory: z.array(z.lazy(() => GetAllLibrariesDirectory$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Directory": "directory",
  });
});

/** @internal */
export type GetAllLibrariesMediaContainer$Outbound = {
  size: number;
  allowSync: boolean;
  title1: string;
  Directory?: Array<GetAllLibrariesDirectory$Outbound> | undefined;
};

/** @internal */
export const GetAllLibrariesMediaContainer$outboundSchema: z.ZodType<
  GetAllLibrariesMediaContainer$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesMediaContainer
> = z.object({
  size: z.number().int(),
  allowSync: z.boolean(),
  title1: z.string(),
  directory: z.array(z.lazy(() => GetAllLibrariesDirectory$outboundSchema))
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
export namespace GetAllLibrariesMediaContainer$ {
  /** @deprecated use `GetAllLibrariesMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesMediaContainer$inboundSchema;
  /** @deprecated use `GetAllLibrariesMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesMediaContainer$outboundSchema;
  /** @deprecated use `GetAllLibrariesMediaContainer$Outbound` instead. */
  export type Outbound = GetAllLibrariesMediaContainer$Outbound;
}

export function getAllLibrariesMediaContainerToJSON(
  getAllLibrariesMediaContainer: GetAllLibrariesMediaContainer,
): string {
  return JSON.stringify(
    GetAllLibrariesMediaContainer$outboundSchema.parse(
      getAllLibrariesMediaContainer,
    ),
  );
}

export function getAllLibrariesMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesResponseBody$inboundSchema: z.ZodType<
  GetAllLibrariesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetAllLibrariesMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetAllLibrariesResponseBody$Outbound = {
  MediaContainer?: GetAllLibrariesMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetAllLibrariesResponseBody$outboundSchema: z.ZodType<
  GetAllLibrariesResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetAllLibrariesMediaContainer$outboundSchema)
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
export namespace GetAllLibrariesResponseBody$ {
  /** @deprecated use `GetAllLibrariesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesResponseBody$inboundSchema;
  /** @deprecated use `GetAllLibrariesResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesResponseBody$outboundSchema;
  /** @deprecated use `GetAllLibrariesResponseBody$Outbound` instead. */
  export type Outbound = GetAllLibrariesResponseBody$Outbound;
}

export function getAllLibrariesResponseBodyToJSON(
  getAllLibrariesResponseBody: GetAllLibrariesResponseBody,
): string {
  return JSON.stringify(
    GetAllLibrariesResponseBody$outboundSchema.parse(
      getAllLibrariesResponseBody,
    ),
  );
}

export function getAllLibrariesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAllLibrariesResponse$inboundSchema: z.ZodType<
  GetAllLibrariesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetAllLibrariesResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetAllLibrariesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetAllLibrariesResponseBody$Outbound | undefined;
};

/** @internal */
export const GetAllLibrariesResponse$outboundSchema: z.ZodType<
  GetAllLibrariesResponse$Outbound,
  z.ZodTypeDef,
  GetAllLibrariesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetAllLibrariesResponseBody$outboundSchema).optional(),
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
export namespace GetAllLibrariesResponse$ {
  /** @deprecated use `GetAllLibrariesResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllLibrariesResponse$inboundSchema;
  /** @deprecated use `GetAllLibrariesResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllLibrariesResponse$outboundSchema;
  /** @deprecated use `GetAllLibrariesResponse$Outbound` instead. */
  export type Outbound = GetAllLibrariesResponse$Outbound;
}

export function getAllLibrariesResponseToJSON(
  getAllLibrariesResponse: GetAllLibrariesResponse,
): string {
  return JSON.stringify(
    GetAllLibrariesResponse$outboundSchema.parse(getAllLibrariesResponse),
  );
}

export function getAllLibrariesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllLibrariesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllLibrariesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllLibrariesResponse' from JSON`,
  );
}
