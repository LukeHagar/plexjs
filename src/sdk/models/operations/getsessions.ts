/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSessionsStream = {
  albumGain?: string | undefined;
  albumPeak?: string | undefined;
  albumRange?: string | undefined;
  audioChannelLayout?: string | undefined;
  bitDepth?: number | undefined;
  bitrate?: number | undefined;
  channels?: number | undefined;
  codec?: string | undefined;
  displayTitle?: string | undefined;
  extendedDisplayTitle?: string | undefined;
  gain?: string | undefined;
  id?: string | undefined;
  index?: number | undefined;
  loudness?: string | undefined;
  lra?: string | undefined;
  peak?: string | undefined;
  samplingRate?: number | undefined;
  selected?: boolean | undefined;
  streamType?: number | undefined;
  location?: string | undefined;
};

export type GetSessionsPart = {
  container?: string | undefined;
  duration?: number | undefined;
  file?: string | undefined;
  hasThumbnail?: string | undefined;
  id?: string | undefined;
  key?: string | undefined;
  size?: number | undefined;
  decision?: string | undefined;
  selected?: boolean | undefined;
  stream?: Array<GetSessionsStream> | undefined;
};

export type GetSessionsMedia = {
  audioChannels?: number | undefined;
  audioCodec?: string | undefined;
  bitrate?: number | undefined;
  container?: string | undefined;
  duration?: number | undefined;
  id?: string | undefined;
  selected?: boolean | undefined;
  part?: Array<GetSessionsPart> | undefined;
};

export type GetSessionsUser = {
  id?: string | undefined;
  thumb?: string | undefined;
  title?: string | undefined;
};

export type Player = {
  address?: string | undefined;
  machineIdentifier?: string | undefined;
  model?: string | undefined;
  platform?: string | undefined;
  platformVersion?: string | undefined;
  product?: string | undefined;
  profile?: string | undefined;
  remotePublicAddress?: string | undefined;
  state?: string | undefined;
  title?: string | undefined;
  version?: string | undefined;
  local?: boolean | undefined;
  relayed?: boolean | undefined;
  secure?: boolean | undefined;
  userID?: number | undefined;
};

export type Session = {
  id?: string | undefined;
  bandwidth?: number | undefined;
  location?: string | undefined;
};

export type GetSessionsMetadata = {
  addedAt?: number | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  grandparentArt?: string | undefined;
  grandparentGuid?: string | undefined;
  grandparentKey?: string | undefined;
  grandparentRatingKey?: string | undefined;
  grandparentThumb?: string | undefined;
  grandparentTitle?: string | undefined;
  guid?: string | undefined;
  index?: number | undefined;
  key?: string | undefined;
  librarySectionID?: string | undefined;
  librarySectionKey?: string | undefined;
  librarySectionTitle?: string | undefined;
  musicAnalysisVersion?: string | undefined;
  /**
   * The original untranslated name of the media item when non-english, or the track artist if an audio Item has an album artist
   */
  originalTitle?: string | undefined;
  parentGuid?: string | undefined;
  parentIndex?: number | undefined;
  parentKey?: string | undefined;
  parentRatingKey?: string | undefined;
  parentStudio?: string | undefined;
  parentThumb?: string | undefined;
  parentTitle?: string | undefined;
  parentYear?: number | undefined;
  ratingCount?: number | undefined;
  ratingKey?: string | undefined;
  sessionKey?: string | undefined;
  thumb?: string | undefined;
  title?: string | undefined;
  titleSort?: string | undefined;
  type?: string | undefined;
  updatedAt?: number | undefined;
  viewOffset?: number | undefined;
  media?: Array<GetSessionsMedia> | undefined;
  user?: GetSessionsUser | undefined;
  player?: Player | undefined;
  session?: Session | undefined;
};

export type GetSessionsMediaContainer = {
  size?: number | undefined;
  metadata?: Array<GetSessionsMetadata> | undefined;
};

/**
 * List of Active Plex Sessions
 */
export type GetSessionsResponseBody = {
  mediaContainer?: GetSessionsMediaContainer | undefined;
};

export type GetSessionsResponse = {
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
   * List of Active Plex Sessions
   */
  object?: GetSessionsResponseBody | undefined;
};

/** @internal */
export const GetSessionsStream$inboundSchema: z.ZodType<
  GetSessionsStream,
  z.ZodTypeDef,
  unknown
> = z.object({
  albumGain: z.string().optional(),
  albumPeak: z.string().optional(),
  albumRange: z.string().optional(),
  audioChannelLayout: z.string().optional(),
  bitDepth: z.number().int().optional(),
  bitrate: z.number().int().optional(),
  channels: z.number().int().optional(),
  codec: z.string().optional(),
  displayTitle: z.string().optional(),
  extendedDisplayTitle: z.string().optional(),
  gain: z.string().optional(),
  id: z.string().optional(),
  index: z.number().int().optional(),
  loudness: z.string().optional(),
  lra: z.string().optional(),
  peak: z.string().optional(),
  samplingRate: z.number().int().optional(),
  selected: z.boolean().optional(),
  streamType: z.number().int().optional(),
  location: z.string().optional(),
});

/** @internal */
export type GetSessionsStream$Outbound = {
  albumGain?: string | undefined;
  albumPeak?: string | undefined;
  albumRange?: string | undefined;
  audioChannelLayout?: string | undefined;
  bitDepth?: number | undefined;
  bitrate?: number | undefined;
  channels?: number | undefined;
  codec?: string | undefined;
  displayTitle?: string | undefined;
  extendedDisplayTitle?: string | undefined;
  gain?: string | undefined;
  id?: string | undefined;
  index?: number | undefined;
  loudness?: string | undefined;
  lra?: string | undefined;
  peak?: string | undefined;
  samplingRate?: number | undefined;
  selected?: boolean | undefined;
  streamType?: number | undefined;
  location?: string | undefined;
};

/** @internal */
export const GetSessionsStream$outboundSchema: z.ZodType<
  GetSessionsStream$Outbound,
  z.ZodTypeDef,
  GetSessionsStream
> = z.object({
  albumGain: z.string().optional(),
  albumPeak: z.string().optional(),
  albumRange: z.string().optional(),
  audioChannelLayout: z.string().optional(),
  bitDepth: z.number().int().optional(),
  bitrate: z.number().int().optional(),
  channels: z.number().int().optional(),
  codec: z.string().optional(),
  displayTitle: z.string().optional(),
  extendedDisplayTitle: z.string().optional(),
  gain: z.string().optional(),
  id: z.string().optional(),
  index: z.number().int().optional(),
  loudness: z.string().optional(),
  lra: z.string().optional(),
  peak: z.string().optional(),
  samplingRate: z.number().int().optional(),
  selected: z.boolean().optional(),
  streamType: z.number().int().optional(),
  location: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionsStream$ {
  /** @deprecated use `GetSessionsStream$inboundSchema` instead. */
  export const inboundSchema = GetSessionsStream$inboundSchema;
  /** @deprecated use `GetSessionsStream$outboundSchema` instead. */
  export const outboundSchema = GetSessionsStream$outboundSchema;
  /** @deprecated use `GetSessionsStream$Outbound` instead. */
  export type Outbound = GetSessionsStream$Outbound;
}

export function getSessionsStreamToJSON(
  getSessionsStream: GetSessionsStream,
): string {
  return JSON.stringify(
    GetSessionsStream$outboundSchema.parse(getSessionsStream),
  );
}

export function getSessionsStreamFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsStream, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsStream$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsStream' from JSON`,
  );
}

/** @internal */
export const GetSessionsPart$inboundSchema: z.ZodType<
  GetSessionsPart,
  z.ZodTypeDef,
  unknown
> = z.object({
  container: z.string().optional(),
  duration: z.number().int().optional(),
  file: z.string().optional(),
  hasThumbnail: z.string().optional(),
  id: z.string().optional(),
  key: z.string().optional(),
  size: z.number().int().optional(),
  decision: z.string().optional(),
  selected: z.boolean().optional(),
  Stream: z.array(z.lazy(() => GetSessionsStream$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Stream": "stream",
  });
});

/** @internal */
export type GetSessionsPart$Outbound = {
  container?: string | undefined;
  duration?: number | undefined;
  file?: string | undefined;
  hasThumbnail?: string | undefined;
  id?: string | undefined;
  key?: string | undefined;
  size?: number | undefined;
  decision?: string | undefined;
  selected?: boolean | undefined;
  Stream?: Array<GetSessionsStream$Outbound> | undefined;
};

/** @internal */
export const GetSessionsPart$outboundSchema: z.ZodType<
  GetSessionsPart$Outbound,
  z.ZodTypeDef,
  GetSessionsPart
> = z.object({
  container: z.string().optional(),
  duration: z.number().int().optional(),
  file: z.string().optional(),
  hasThumbnail: z.string().optional(),
  id: z.string().optional(),
  key: z.string().optional(),
  size: z.number().int().optional(),
  decision: z.string().optional(),
  selected: z.boolean().optional(),
  stream: z.array(z.lazy(() => GetSessionsStream$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    stream: "Stream",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionsPart$ {
  /** @deprecated use `GetSessionsPart$inboundSchema` instead. */
  export const inboundSchema = GetSessionsPart$inboundSchema;
  /** @deprecated use `GetSessionsPart$outboundSchema` instead. */
  export const outboundSchema = GetSessionsPart$outboundSchema;
  /** @deprecated use `GetSessionsPart$Outbound` instead. */
  export type Outbound = GetSessionsPart$Outbound;
}

export function getSessionsPartToJSON(
  getSessionsPart: GetSessionsPart,
): string {
  return JSON.stringify(GetSessionsPart$outboundSchema.parse(getSessionsPart));
}

export function getSessionsPartFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsPart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsPart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsPart' from JSON`,
  );
}

/** @internal */
export const GetSessionsMedia$inboundSchema: z.ZodType<
  GetSessionsMedia,
  z.ZodTypeDef,
  unknown
> = z.object({
  audioChannels: z.number().int().optional(),
  audioCodec: z.string().optional(),
  bitrate: z.number().int().optional(),
  container: z.string().optional(),
  duration: z.number().int().optional(),
  id: z.string().optional(),
  selected: z.boolean().optional(),
  Part: z.array(z.lazy(() => GetSessionsPart$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Part": "part",
  });
});

/** @internal */
export type GetSessionsMedia$Outbound = {
  audioChannels?: number | undefined;
  audioCodec?: string | undefined;
  bitrate?: number | undefined;
  container?: string | undefined;
  duration?: number | undefined;
  id?: string | undefined;
  selected?: boolean | undefined;
  Part?: Array<GetSessionsPart$Outbound> | undefined;
};

/** @internal */
export const GetSessionsMedia$outboundSchema: z.ZodType<
  GetSessionsMedia$Outbound,
  z.ZodTypeDef,
  GetSessionsMedia
> = z.object({
  audioChannels: z.number().int().optional(),
  audioCodec: z.string().optional(),
  bitrate: z.number().int().optional(),
  container: z.string().optional(),
  duration: z.number().int().optional(),
  id: z.string().optional(),
  selected: z.boolean().optional(),
  part: z.array(z.lazy(() => GetSessionsPart$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    part: "Part",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionsMedia$ {
  /** @deprecated use `GetSessionsMedia$inboundSchema` instead. */
  export const inboundSchema = GetSessionsMedia$inboundSchema;
  /** @deprecated use `GetSessionsMedia$outboundSchema` instead. */
  export const outboundSchema = GetSessionsMedia$outboundSchema;
  /** @deprecated use `GetSessionsMedia$Outbound` instead. */
  export type Outbound = GetSessionsMedia$Outbound;
}

export function getSessionsMediaToJSON(
  getSessionsMedia: GetSessionsMedia,
): string {
  return JSON.stringify(
    GetSessionsMedia$outboundSchema.parse(getSessionsMedia),
  );
}

export function getSessionsMediaFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsMedia, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsMedia$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsMedia' from JSON`,
  );
}

/** @internal */
export const GetSessionsUser$inboundSchema: z.ZodType<
  GetSessionsUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  thumb: z.string().optional(),
  title: z.string().optional(),
});

/** @internal */
export type GetSessionsUser$Outbound = {
  id?: string | undefined;
  thumb?: string | undefined;
  title?: string | undefined;
};

/** @internal */
export const GetSessionsUser$outboundSchema: z.ZodType<
  GetSessionsUser$Outbound,
  z.ZodTypeDef,
  GetSessionsUser
> = z.object({
  id: z.string().optional(),
  thumb: z.string().optional(),
  title: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionsUser$ {
  /** @deprecated use `GetSessionsUser$inboundSchema` instead. */
  export const inboundSchema = GetSessionsUser$inboundSchema;
  /** @deprecated use `GetSessionsUser$outboundSchema` instead. */
  export const outboundSchema = GetSessionsUser$outboundSchema;
  /** @deprecated use `GetSessionsUser$Outbound` instead. */
  export type Outbound = GetSessionsUser$Outbound;
}

export function getSessionsUserToJSON(
  getSessionsUser: GetSessionsUser,
): string {
  return JSON.stringify(GetSessionsUser$outboundSchema.parse(getSessionsUser));
}

export function getSessionsUserFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsUser' from JSON`,
  );
}

/** @internal */
export const Player$inboundSchema: z.ZodType<Player, z.ZodTypeDef, unknown> = z
  .object({
    address: z.string().optional(),
    machineIdentifier: z.string().optional(),
    model: z.string().optional(),
    platform: z.string().optional(),
    platformVersion: z.string().optional(),
    product: z.string().optional(),
    profile: z.string().optional(),
    remotePublicAddress: z.string().optional(),
    state: z.string().optional(),
    title: z.string().optional(),
    version: z.string().optional(),
    local: z.boolean().optional(),
    relayed: z.boolean().optional(),
    secure: z.boolean().optional(),
    userID: z.number().int().optional(),
  });

/** @internal */
export type Player$Outbound = {
  address?: string | undefined;
  machineIdentifier?: string | undefined;
  model?: string | undefined;
  platform?: string | undefined;
  platformVersion?: string | undefined;
  product?: string | undefined;
  profile?: string | undefined;
  remotePublicAddress?: string | undefined;
  state?: string | undefined;
  title?: string | undefined;
  version?: string | undefined;
  local?: boolean | undefined;
  relayed?: boolean | undefined;
  secure?: boolean | undefined;
  userID?: number | undefined;
};

/** @internal */
export const Player$outboundSchema: z.ZodType<
  Player$Outbound,
  z.ZodTypeDef,
  Player
> = z.object({
  address: z.string().optional(),
  machineIdentifier: z.string().optional(),
  model: z.string().optional(),
  platform: z.string().optional(),
  platformVersion: z.string().optional(),
  product: z.string().optional(),
  profile: z.string().optional(),
  remotePublicAddress: z.string().optional(),
  state: z.string().optional(),
  title: z.string().optional(),
  version: z.string().optional(),
  local: z.boolean().optional(),
  relayed: z.boolean().optional(),
  secure: z.boolean().optional(),
  userID: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Player$ {
  /** @deprecated use `Player$inboundSchema` instead. */
  export const inboundSchema = Player$inboundSchema;
  /** @deprecated use `Player$outboundSchema` instead. */
  export const outboundSchema = Player$outboundSchema;
  /** @deprecated use `Player$Outbound` instead. */
  export type Outbound = Player$Outbound;
}

export function playerToJSON(player: Player): string {
  return JSON.stringify(Player$outboundSchema.parse(player));
}

export function playerFromJSON(
  jsonString: string,
): SafeParseResult<Player, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Player$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Player' from JSON`,
  );
}

/** @internal */
export const Session$inboundSchema: z.ZodType<Session, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    bandwidth: z.number().int().optional(),
    location: z.string().optional(),
  });

/** @internal */
export type Session$Outbound = {
  id?: string | undefined;
  bandwidth?: number | undefined;
  location?: string | undefined;
};

/** @internal */
export const Session$outboundSchema: z.ZodType<
  Session$Outbound,
  z.ZodTypeDef,
  Session
> = z.object({
  id: z.string().optional(),
  bandwidth: z.number().int().optional(),
  location: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Session$ {
  /** @deprecated use `Session$inboundSchema` instead. */
  export const inboundSchema = Session$inboundSchema;
  /** @deprecated use `Session$outboundSchema` instead. */
  export const outboundSchema = Session$outboundSchema;
  /** @deprecated use `Session$Outbound` instead. */
  export type Outbound = Session$Outbound;
}

export function sessionToJSON(session: Session): string {
  return JSON.stringify(Session$outboundSchema.parse(session));
}

export function sessionFromJSON(
  jsonString: string,
): SafeParseResult<Session, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Session$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Session' from JSON`,
  );
}

/** @internal */
export const GetSessionsMetadata$inboundSchema: z.ZodType<
  GetSessionsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  addedAt: z.number().int().optional(),
  art: z.string().optional(),
  duration: z.number().int().optional(),
  grandparentArt: z.string().optional(),
  grandparentGuid: z.string().optional(),
  grandparentKey: z.string().optional(),
  grandparentRatingKey: z.string().optional(),
  grandparentThumb: z.string().optional(),
  grandparentTitle: z.string().optional(),
  guid: z.string().optional(),
  index: z.number().int().optional(),
  key: z.string().optional(),
  librarySectionID: z.string().optional(),
  librarySectionKey: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  musicAnalysisVersion: z.string().optional(),
  originalTitle: z.string().optional(),
  parentGuid: z.string().optional(),
  parentIndex: z.number().int().optional(),
  parentKey: z.string().optional(),
  parentRatingKey: z.string().optional(),
  parentStudio: z.string().optional(),
  parentThumb: z.string().optional(),
  parentTitle: z.string().optional(),
  parentYear: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  ratingKey: z.string().optional(),
  sessionKey: z.string().optional(),
  thumb: z.string().optional(),
  title: z.string().optional(),
  titleSort: z.string().optional(),
  type: z.string().optional(),
  updatedAt: z.number().int().optional(),
  viewOffset: z.number().int().optional(),
  Media: z.array(z.lazy(() => GetSessionsMedia$inboundSchema)).optional(),
  User: z.lazy(() => GetSessionsUser$inboundSchema).optional(),
  Player: z.lazy(() => Player$inboundSchema).optional(),
  Session: z.lazy(() => Session$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "Media": "media",
    "User": "user",
    "Player": "player",
    "Session": "session",
  });
});

/** @internal */
export type GetSessionsMetadata$Outbound = {
  addedAt?: number | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  grandparentArt?: string | undefined;
  grandparentGuid?: string | undefined;
  grandparentKey?: string | undefined;
  grandparentRatingKey?: string | undefined;
  grandparentThumb?: string | undefined;
  grandparentTitle?: string | undefined;
  guid?: string | undefined;
  index?: number | undefined;
  key?: string | undefined;
  librarySectionID?: string | undefined;
  librarySectionKey?: string | undefined;
  librarySectionTitle?: string | undefined;
  musicAnalysisVersion?: string | undefined;
  originalTitle?: string | undefined;
  parentGuid?: string | undefined;
  parentIndex?: number | undefined;
  parentKey?: string | undefined;
  parentRatingKey?: string | undefined;
  parentStudio?: string | undefined;
  parentThumb?: string | undefined;
  parentTitle?: string | undefined;
  parentYear?: number | undefined;
  ratingCount?: number | undefined;
  ratingKey?: string | undefined;
  sessionKey?: string | undefined;
  thumb?: string | undefined;
  title?: string | undefined;
  titleSort?: string | undefined;
  type?: string | undefined;
  updatedAt?: number | undefined;
  viewOffset?: number | undefined;
  Media?: Array<GetSessionsMedia$Outbound> | undefined;
  User?: GetSessionsUser$Outbound | undefined;
  Player?: Player$Outbound | undefined;
  Session?: Session$Outbound | undefined;
};

/** @internal */
export const GetSessionsMetadata$outboundSchema: z.ZodType<
  GetSessionsMetadata$Outbound,
  z.ZodTypeDef,
  GetSessionsMetadata
> = z.object({
  addedAt: z.number().int().optional(),
  art: z.string().optional(),
  duration: z.number().int().optional(),
  grandparentArt: z.string().optional(),
  grandparentGuid: z.string().optional(),
  grandparentKey: z.string().optional(),
  grandparentRatingKey: z.string().optional(),
  grandparentThumb: z.string().optional(),
  grandparentTitle: z.string().optional(),
  guid: z.string().optional(),
  index: z.number().int().optional(),
  key: z.string().optional(),
  librarySectionID: z.string().optional(),
  librarySectionKey: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  musicAnalysisVersion: z.string().optional(),
  originalTitle: z.string().optional(),
  parentGuid: z.string().optional(),
  parentIndex: z.number().int().optional(),
  parentKey: z.string().optional(),
  parentRatingKey: z.string().optional(),
  parentStudio: z.string().optional(),
  parentThumb: z.string().optional(),
  parentTitle: z.string().optional(),
  parentYear: z.number().int().optional(),
  ratingCount: z.number().int().optional(),
  ratingKey: z.string().optional(),
  sessionKey: z.string().optional(),
  thumb: z.string().optional(),
  title: z.string().optional(),
  titleSort: z.string().optional(),
  type: z.string().optional(),
  updatedAt: z.number().int().optional(),
  viewOffset: z.number().int().optional(),
  media: z.array(z.lazy(() => GetSessionsMedia$outboundSchema)).optional(),
  user: z.lazy(() => GetSessionsUser$outboundSchema).optional(),
  player: z.lazy(() => Player$outboundSchema).optional(),
  session: z.lazy(() => Session$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    media: "Media",
    user: "User",
    player: "Player",
    session: "Session",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionsMetadata$ {
  /** @deprecated use `GetSessionsMetadata$inboundSchema` instead. */
  export const inboundSchema = GetSessionsMetadata$inboundSchema;
  /** @deprecated use `GetSessionsMetadata$outboundSchema` instead. */
  export const outboundSchema = GetSessionsMetadata$outboundSchema;
  /** @deprecated use `GetSessionsMetadata$Outbound` instead. */
  export type Outbound = GetSessionsMetadata$Outbound;
}

export function getSessionsMetadataToJSON(
  getSessionsMetadata: GetSessionsMetadata,
): string {
  return JSON.stringify(
    GetSessionsMetadata$outboundSchema.parse(getSessionsMetadata),
  );
}

export function getSessionsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsMetadata' from JSON`,
  );
}

/** @internal */
export const GetSessionsMediaContainer$inboundSchema: z.ZodType<
  GetSessionsMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  Metadata: z.array(z.lazy(() => GetSessionsMetadata$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetSessionsMediaContainer$Outbound = {
  size?: number | undefined;
  Metadata?: Array<GetSessionsMetadata$Outbound> | undefined;
};

/** @internal */
export const GetSessionsMediaContainer$outboundSchema: z.ZodType<
  GetSessionsMediaContainer$Outbound,
  z.ZodTypeDef,
  GetSessionsMediaContainer
> = z.object({
  size: z.number().int().optional(),
  metadata: z.array(z.lazy(() => GetSessionsMetadata$outboundSchema))
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
export namespace GetSessionsMediaContainer$ {
  /** @deprecated use `GetSessionsMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetSessionsMediaContainer$inboundSchema;
  /** @deprecated use `GetSessionsMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetSessionsMediaContainer$outboundSchema;
  /** @deprecated use `GetSessionsMediaContainer$Outbound` instead. */
  export type Outbound = GetSessionsMediaContainer$Outbound;
}

export function getSessionsMediaContainerToJSON(
  getSessionsMediaContainer: GetSessionsMediaContainer,
): string {
  return JSON.stringify(
    GetSessionsMediaContainer$outboundSchema.parse(getSessionsMediaContainer),
  );
}

export function getSessionsMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetSessionsResponseBody$inboundSchema: z.ZodType<
  GetSessionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetSessionsMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetSessionsResponseBody$Outbound = {
  MediaContainer?: GetSessionsMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetSessionsResponseBody$outboundSchema: z.ZodType<
  GetSessionsResponseBody$Outbound,
  z.ZodTypeDef,
  GetSessionsResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetSessionsMediaContainer$outboundSchema)
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
export namespace GetSessionsResponseBody$ {
  /** @deprecated use `GetSessionsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetSessionsResponseBody$inboundSchema;
  /** @deprecated use `GetSessionsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetSessionsResponseBody$outboundSchema;
  /** @deprecated use `GetSessionsResponseBody$Outbound` instead. */
  export type Outbound = GetSessionsResponseBody$Outbound;
}

export function getSessionsResponseBodyToJSON(
  getSessionsResponseBody: GetSessionsResponseBody,
): string {
  return JSON.stringify(
    GetSessionsResponseBody$outboundSchema.parse(getSessionsResponseBody),
  );
}

export function getSessionsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetSessionsResponse$inboundSchema: z.ZodType<
  GetSessionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetSessionsResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetSessionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetSessionsResponseBody$Outbound | undefined;
};

/** @internal */
export const GetSessionsResponse$outboundSchema: z.ZodType<
  GetSessionsResponse$Outbound,
  z.ZodTypeDef,
  GetSessionsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetSessionsResponseBody$outboundSchema).optional(),
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
export namespace GetSessionsResponse$ {
  /** @deprecated use `GetSessionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetSessionsResponse$inboundSchema;
  /** @deprecated use `GetSessionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetSessionsResponse$outboundSchema;
  /** @deprecated use `GetSessionsResponse$Outbound` instead. */
  export type Outbound = GetSessionsResponse$Outbound;
}

export function getSessionsResponseToJSON(
  getSessionsResponse: GetSessionsResponse,
): string {
  return JSON.stringify(
    GetSessionsResponse$outboundSchema.parse(getSessionsResponse),
  );
}

export function getSessionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsResponse' from JSON`,
  );
}
