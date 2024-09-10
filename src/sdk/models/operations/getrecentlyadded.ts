/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetRecentlyAddedRequest = {
  /**
   * The index of the first item to return. If not specified, the first item will be returned.
   *
   * @remarks
   * If the number of items exceeds the limit, the response will be paginated.
   * By default this is 0
   */
  xPlexContainerStart?: number | undefined;
  /**
   * The number of items to return. If not specified, all items will be returned.
   *
   * @remarks
   * If the number of items exceeds the limit, the response will be paginated.
   * By default this is 50
   */
  xPlexContainerSize?: number | undefined;
};

export type Part = {
  id?: number | undefined;
  key?: string | undefined;
  duration?: number | undefined;
  file?: string | undefined;
  size?: number | undefined;
  container?: string | undefined;
  has64bitOffsets?: boolean | undefined;
  hasThumbnail?: number | undefined;
  optimizedForStreaming?: boolean | undefined;
  videoProfile?: string | undefined;
};

export type Media = {
  id?: number | undefined;
  duration?: number | undefined;
  bitrate?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  aspectRatio?: number | undefined;
  audioChannels?: number | undefined;
  audioCodec?: string | undefined;
  videoCodec?: string | undefined;
  videoResolution?: number | undefined;
  container?: string | undefined;
  videoFrameRate?: string | undefined;
  optimizedForStreaming?: number | undefined;
  has64bitOffsets?: boolean | undefined;
  videoProfile?: string | undefined;
  part?: Array<Part> | undefined;
};

export type Genre = {
  tag?: string | undefined;
};

export type Director = {
  tag?: string | undefined;
};

export type Writer = {
  tag?: string | undefined;
};

export type Country = {
  tag?: string | undefined;
};

export type Role = {
  tag?: string | undefined;
};

export type GetRecentlyAddedMetadata = {
  allowSync?: boolean | undefined;
  librarySectionID?: number | undefined;
  librarySectionTitle?: string | undefined;
  librarySectionUUID?: string | undefined;
  ratingKey?: number | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  studio?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  contentRating?: string | undefined;
  summary?: string | undefined;
  rating?: number | undefined;
  audienceRating?: number | undefined;
  year?: number | undefined;
  tagline?: string | undefined;
  thumb?: string | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  originallyAvailableAt?: Date | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  audienceRatingImage?: string | undefined;
  chapterSource?: string | undefined;
  primaryExtraKey?: string | undefined;
  ratingImage?: string | undefined;
  media?: Array<Media> | undefined;
  genre?: Array<Genre> | undefined;
  director?: Array<Director> | undefined;
  writer?: Array<Writer> | undefined;
  country?: Array<Country> | undefined;
  role?: Array<Role> | undefined;
};

export type GetRecentlyAddedMediaContainer = {
  size?: number | undefined;
  allowSync?: boolean | undefined;
  identifier?: string | undefined;
  mediaTagPrefix?: string | undefined;
  mediaTagVersion?: number | undefined;
  mixedParents?: boolean | undefined;
  metadata?: Array<GetRecentlyAddedMetadata> | undefined;
};

/**
 * The recently added content
 */
export type GetRecentlyAddedResponseBody = {
  mediaContainer?: GetRecentlyAddedMediaContainer | undefined;
};

export type GetRecentlyAddedResponse = {
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
   * The recently added content
   */
  object?: GetRecentlyAddedResponseBody | undefined;
};

/** @internal */
export const GetRecentlyAddedRequest$inboundSchema: z.ZodType<
  GetRecentlyAddedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Plex-Container-Start": z.number().int().default(0),
  "X-Plex-Container-Size": z.number().int().default(50),
}).transform((v) => {
  return remap$(v, {
    "X-Plex-Container-Start": "xPlexContainerStart",
    "X-Plex-Container-Size": "xPlexContainerSize",
  });
});

/** @internal */
export type GetRecentlyAddedRequest$Outbound = {
  "X-Plex-Container-Start": number;
  "X-Plex-Container-Size": number;
};

/** @internal */
export const GetRecentlyAddedRequest$outboundSchema: z.ZodType<
  GetRecentlyAddedRequest$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedRequest
> = z.object({
  xPlexContainerStart: z.number().int().default(0),
  xPlexContainerSize: z.number().int().default(50),
}).transform((v) => {
  return remap$(v, {
    xPlexContainerStart: "X-Plex-Container-Start",
    xPlexContainerSize: "X-Plex-Container-Size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecentlyAddedRequest$ {
  /** @deprecated use `GetRecentlyAddedRequest$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedRequest$inboundSchema;
  /** @deprecated use `GetRecentlyAddedRequest$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedRequest$outboundSchema;
  /** @deprecated use `GetRecentlyAddedRequest$Outbound` instead. */
  export type Outbound = GetRecentlyAddedRequest$Outbound;
}

/** @internal */
export const Part$inboundSchema: z.ZodType<Part, z.ZodTypeDef, unknown> = z
  .object({
    id: z.number().optional(),
    key: z.string().optional(),
    duration: z.number().optional(),
    file: z.string().optional(),
    size: z.number().optional(),
    container: z.string().optional(),
    has64bitOffsets: z.boolean().optional(),
    hasThumbnail: z.number().optional(),
    optimizedForStreaming: z.boolean().optional(),
    videoProfile: z.string().optional(),
  });

/** @internal */
export type Part$Outbound = {
  id?: number | undefined;
  key?: string | undefined;
  duration?: number | undefined;
  file?: string | undefined;
  size?: number | undefined;
  container?: string | undefined;
  has64bitOffsets?: boolean | undefined;
  hasThumbnail?: number | undefined;
  optimizedForStreaming?: boolean | undefined;
  videoProfile?: string | undefined;
};

/** @internal */
export const Part$outboundSchema: z.ZodType<Part$Outbound, z.ZodTypeDef, Part> =
  z.object({
    id: z.number().optional(),
    key: z.string().optional(),
    duration: z.number().optional(),
    file: z.string().optional(),
    size: z.number().optional(),
    container: z.string().optional(),
    has64bitOffsets: z.boolean().optional(),
    hasThumbnail: z.number().optional(),
    optimizedForStreaming: z.boolean().optional(),
    videoProfile: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Part$ {
  /** @deprecated use `Part$inboundSchema` instead. */
  export const inboundSchema = Part$inboundSchema;
  /** @deprecated use `Part$outboundSchema` instead. */
  export const outboundSchema = Part$outboundSchema;
  /** @deprecated use `Part$Outbound` instead. */
  export type Outbound = Part$Outbound;
}

/** @internal */
export const Media$inboundSchema: z.ZodType<Media, z.ZodTypeDef, unknown> = z
  .object({
    id: z.number().optional(),
    duration: z.number().optional(),
    bitrate: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    aspectRatio: z.number().optional(),
    audioChannels: z.number().optional(),
    audioCodec: z.string().optional(),
    videoCodec: z.string().optional(),
    videoResolution: z.number().optional(),
    container: z.string().optional(),
    videoFrameRate: z.string().optional(),
    optimizedForStreaming: z.number().optional(),
    has64bitOffsets: z.boolean().optional(),
    videoProfile: z.string().optional(),
    Part: z.array(z.lazy(() => Part$inboundSchema)).optional(),
  }).transform((v) => {
    return remap$(v, {
      "Part": "part",
    });
  });

/** @internal */
export type Media$Outbound = {
  id?: number | undefined;
  duration?: number | undefined;
  bitrate?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  aspectRatio?: number | undefined;
  audioChannels?: number | undefined;
  audioCodec?: string | undefined;
  videoCodec?: string | undefined;
  videoResolution?: number | undefined;
  container?: string | undefined;
  videoFrameRate?: string | undefined;
  optimizedForStreaming?: number | undefined;
  has64bitOffsets?: boolean | undefined;
  videoProfile?: string | undefined;
  Part?: Array<Part$Outbound> | undefined;
};

/** @internal */
export const Media$outboundSchema: z.ZodType<
  Media$Outbound,
  z.ZodTypeDef,
  Media
> = z.object({
  id: z.number().optional(),
  duration: z.number().optional(),
  bitrate: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  aspectRatio: z.number().optional(),
  audioChannels: z.number().optional(),
  audioCodec: z.string().optional(),
  videoCodec: z.string().optional(),
  videoResolution: z.number().optional(),
  container: z.string().optional(),
  videoFrameRate: z.string().optional(),
  optimizedForStreaming: z.number().optional(),
  has64bitOffsets: z.boolean().optional(),
  videoProfile: z.string().optional(),
  part: z.array(z.lazy(() => Part$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    part: "Part",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Media$ {
  /** @deprecated use `Media$inboundSchema` instead. */
  export const inboundSchema = Media$inboundSchema;
  /** @deprecated use `Media$outboundSchema` instead. */
  export const outboundSchema = Media$outboundSchema;
  /** @deprecated use `Media$Outbound` instead. */
  export type Outbound = Media$Outbound;
}

/** @internal */
export const Genre$inboundSchema: z.ZodType<Genre, z.ZodTypeDef, unknown> = z
  .object({
    tag: z.string().optional(),
  });

/** @internal */
export type Genre$Outbound = {
  tag?: string | undefined;
};

/** @internal */
export const Genre$outboundSchema: z.ZodType<
  Genre$Outbound,
  z.ZodTypeDef,
  Genre
> = z.object({
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Genre$ {
  /** @deprecated use `Genre$inboundSchema` instead. */
  export const inboundSchema = Genre$inboundSchema;
  /** @deprecated use `Genre$outboundSchema` instead. */
  export const outboundSchema = Genre$outboundSchema;
  /** @deprecated use `Genre$Outbound` instead. */
  export type Outbound = Genre$Outbound;
}

/** @internal */
export const Director$inboundSchema: z.ZodType<
  Director,
  z.ZodTypeDef,
  unknown
> = z.object({
  tag: z.string().optional(),
});

/** @internal */
export type Director$Outbound = {
  tag?: string | undefined;
};

/** @internal */
export const Director$outboundSchema: z.ZodType<
  Director$Outbound,
  z.ZodTypeDef,
  Director
> = z.object({
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Director$ {
  /** @deprecated use `Director$inboundSchema` instead. */
  export const inboundSchema = Director$inboundSchema;
  /** @deprecated use `Director$outboundSchema` instead. */
  export const outboundSchema = Director$outboundSchema;
  /** @deprecated use `Director$Outbound` instead. */
  export type Outbound = Director$Outbound;
}

/** @internal */
export const Writer$inboundSchema: z.ZodType<Writer, z.ZodTypeDef, unknown> = z
  .object({
    tag: z.string().optional(),
  });

/** @internal */
export type Writer$Outbound = {
  tag?: string | undefined;
};

/** @internal */
export const Writer$outboundSchema: z.ZodType<
  Writer$Outbound,
  z.ZodTypeDef,
  Writer
> = z.object({
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Writer$ {
  /** @deprecated use `Writer$inboundSchema` instead. */
  export const inboundSchema = Writer$inboundSchema;
  /** @deprecated use `Writer$outboundSchema` instead. */
  export const outboundSchema = Writer$outboundSchema;
  /** @deprecated use `Writer$Outbound` instead. */
  export type Outbound = Writer$Outbound;
}

/** @internal */
export const Country$inboundSchema: z.ZodType<Country, z.ZodTypeDef, unknown> =
  z.object({
    tag: z.string().optional(),
  });

/** @internal */
export type Country$Outbound = {
  tag?: string | undefined;
};

/** @internal */
export const Country$outboundSchema: z.ZodType<
  Country$Outbound,
  z.ZodTypeDef,
  Country
> = z.object({
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Country$ {
  /** @deprecated use `Country$inboundSchema` instead. */
  export const inboundSchema = Country$inboundSchema;
  /** @deprecated use `Country$outboundSchema` instead. */
  export const outboundSchema = Country$outboundSchema;
  /** @deprecated use `Country$Outbound` instead. */
  export type Outbound = Country$Outbound;
}

/** @internal */
export const Role$inboundSchema: z.ZodType<Role, z.ZodTypeDef, unknown> = z
  .object({
    tag: z.string().optional(),
  });

/** @internal */
export type Role$Outbound = {
  tag?: string | undefined;
};

/** @internal */
export const Role$outboundSchema: z.ZodType<Role$Outbound, z.ZodTypeDef, Role> =
  z.object({
    tag: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
  /** @deprecated use `Role$inboundSchema` instead. */
  export const inboundSchema = Role$inboundSchema;
  /** @deprecated use `Role$outboundSchema` instead. */
  export const outboundSchema = Role$outboundSchema;
  /** @deprecated use `Role$Outbound` instead. */
  export type Outbound = Role$Outbound;
}

/** @internal */
export const GetRecentlyAddedMetadata$inboundSchema: z.ZodType<
  GetRecentlyAddedMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowSync: z.boolean().optional(),
  librarySectionID: z.number().optional(),
  librarySectionTitle: z.string().optional(),
  librarySectionUUID: z.string().optional(),
  ratingKey: z.number().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  studio: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  contentRating: z.string().optional(),
  summary: z.string().optional(),
  rating: z.number().optional(),
  audienceRating: z.number().optional(),
  year: z.number().optional(),
  tagline: z.string().optional(),
  thumb: z.string().optional(),
  art: z.string().optional(),
  duration: z.number().optional(),
  originallyAvailableAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  addedAt: z.number().optional(),
  updatedAt: z.number().optional(),
  audienceRatingImage: z.string().optional(),
  chapterSource: z.string().optional(),
  primaryExtraKey: z.string().optional(),
  ratingImage: z.string().optional(),
  Media: z.array(z.lazy(() => Media$inboundSchema)).optional(),
  Genre: z.array(z.lazy(() => Genre$inboundSchema)).optional(),
  Director: z.array(z.lazy(() => Director$inboundSchema)).optional(),
  Writer: z.array(z.lazy(() => Writer$inboundSchema)).optional(),
  Country: z.array(z.lazy(() => Country$inboundSchema)).optional(),
  Role: z.array(z.lazy(() => Role$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Media": "media",
    "Genre": "genre",
    "Director": "director",
    "Writer": "writer",
    "Country": "country",
    "Role": "role",
  });
});

/** @internal */
export type GetRecentlyAddedMetadata$Outbound = {
  allowSync?: boolean | undefined;
  librarySectionID?: number | undefined;
  librarySectionTitle?: string | undefined;
  librarySectionUUID?: string | undefined;
  ratingKey?: number | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  studio?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  contentRating?: string | undefined;
  summary?: string | undefined;
  rating?: number | undefined;
  audienceRating?: number | undefined;
  year?: number | undefined;
  tagline?: string | undefined;
  thumb?: string | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  originallyAvailableAt?: string | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  audienceRatingImage?: string | undefined;
  chapterSource?: string | undefined;
  primaryExtraKey?: string | undefined;
  ratingImage?: string | undefined;
  Media?: Array<Media$Outbound> | undefined;
  Genre?: Array<Genre$Outbound> | undefined;
  Director?: Array<Director$Outbound> | undefined;
  Writer?: Array<Writer$Outbound> | undefined;
  Country?: Array<Country$Outbound> | undefined;
  Role?: Array<Role$Outbound> | undefined;
};

/** @internal */
export const GetRecentlyAddedMetadata$outboundSchema: z.ZodType<
  GetRecentlyAddedMetadata$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedMetadata
> = z.object({
  allowSync: z.boolean().optional(),
  librarySectionID: z.number().optional(),
  librarySectionTitle: z.string().optional(),
  librarySectionUUID: z.string().optional(),
  ratingKey: z.number().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  studio: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  contentRating: z.string().optional(),
  summary: z.string().optional(),
  rating: z.number().optional(),
  audienceRating: z.number().optional(),
  year: z.number().optional(),
  tagline: z.string().optional(),
  thumb: z.string().optional(),
  art: z.string().optional(),
  duration: z.number().optional(),
  originallyAvailableAt: z.date().transform(v => v.toISOString()).optional(),
  addedAt: z.number().optional(),
  updatedAt: z.number().optional(),
  audienceRatingImage: z.string().optional(),
  chapterSource: z.string().optional(),
  primaryExtraKey: z.string().optional(),
  ratingImage: z.string().optional(),
  media: z.array(z.lazy(() => Media$outboundSchema)).optional(),
  genre: z.array(z.lazy(() => Genre$outboundSchema)).optional(),
  director: z.array(z.lazy(() => Director$outboundSchema)).optional(),
  writer: z.array(z.lazy(() => Writer$outboundSchema)).optional(),
  country: z.array(z.lazy(() => Country$outboundSchema)).optional(),
  role: z.array(z.lazy(() => Role$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    media: "Media",
    genre: "Genre",
    director: "Director",
    writer: "Writer",
    country: "Country",
    role: "Role",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecentlyAddedMetadata$ {
  /** @deprecated use `GetRecentlyAddedMetadata$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedMetadata$inboundSchema;
  /** @deprecated use `GetRecentlyAddedMetadata$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedMetadata$outboundSchema;
  /** @deprecated use `GetRecentlyAddedMetadata$Outbound` instead. */
  export type Outbound = GetRecentlyAddedMetadata$Outbound;
}

/** @internal */
export const GetRecentlyAddedMediaContainer$inboundSchema: z.ZodType<
  GetRecentlyAddedMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().optional(),
  allowSync: z.boolean().optional(),
  identifier: z.string().optional(),
  mediaTagPrefix: z.string().optional(),
  mediaTagVersion: z.number().optional(),
  mixedParents: z.boolean().optional(),
  Metadata: z.array(z.lazy(() => GetRecentlyAddedMetadata$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetRecentlyAddedMediaContainer$Outbound = {
  size?: number | undefined;
  allowSync?: boolean | undefined;
  identifier?: string | undefined;
  mediaTagPrefix?: string | undefined;
  mediaTagVersion?: number | undefined;
  mixedParents?: boolean | undefined;
  Metadata?: Array<GetRecentlyAddedMetadata$Outbound> | undefined;
};

/** @internal */
export const GetRecentlyAddedMediaContainer$outboundSchema: z.ZodType<
  GetRecentlyAddedMediaContainer$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedMediaContainer
> = z.object({
  size: z.number().optional(),
  allowSync: z.boolean().optional(),
  identifier: z.string().optional(),
  mediaTagPrefix: z.string().optional(),
  mediaTagVersion: z.number().optional(),
  mixedParents: z.boolean().optional(),
  metadata: z.array(z.lazy(() => GetRecentlyAddedMetadata$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    metadata: "Metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecentlyAddedMediaContainer$ {
  /** @deprecated use `GetRecentlyAddedMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedMediaContainer$inboundSchema;
  /** @deprecated use `GetRecentlyAddedMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedMediaContainer$outboundSchema;
  /** @deprecated use `GetRecentlyAddedMediaContainer$Outbound` instead. */
  export type Outbound = GetRecentlyAddedMediaContainer$Outbound;
}

/** @internal */
export const GetRecentlyAddedResponseBody$inboundSchema: z.ZodType<
  GetRecentlyAddedResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetRecentlyAddedMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetRecentlyAddedResponseBody$Outbound = {
  MediaContainer?: GetRecentlyAddedMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetRecentlyAddedResponseBody$outboundSchema: z.ZodType<
  GetRecentlyAddedResponseBody$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetRecentlyAddedMediaContainer$outboundSchema)
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
export namespace GetRecentlyAddedResponseBody$ {
  /** @deprecated use `GetRecentlyAddedResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedResponseBody$inboundSchema;
  /** @deprecated use `GetRecentlyAddedResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedResponseBody$outboundSchema;
  /** @deprecated use `GetRecentlyAddedResponseBody$Outbound` instead. */
  export type Outbound = GetRecentlyAddedResponseBody$Outbound;
}

/** @internal */
export const GetRecentlyAddedResponse$inboundSchema: z.ZodType<
  GetRecentlyAddedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetRecentlyAddedResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetRecentlyAddedResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetRecentlyAddedResponseBody$Outbound | undefined;
};

/** @internal */
export const GetRecentlyAddedResponse$outboundSchema: z.ZodType<
  GetRecentlyAddedResponse$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetRecentlyAddedResponseBody$outboundSchema).optional(),
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
export namespace GetRecentlyAddedResponse$ {
  /** @deprecated use `GetRecentlyAddedResponse$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedResponse$inboundSchema;
  /** @deprecated use `GetRecentlyAddedResponse$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedResponse$outboundSchema;
  /** @deprecated use `GetRecentlyAddedResponse$Outbound` instead. */
  export type Outbound = GetRecentlyAddedResponse$Outbound;
}