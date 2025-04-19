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

export const GetUserFriendsServerList = [
  "https://plex.tv/api/v2",
] as const;

export type SharedServers = {};

export type SharedSources = {};

/**
 * Current friend request status
 */
export enum Status {
  Accepted = "accepted",
}
/**
 * Current friend request status
 */
export type StatusOpen = OpenEnum<typeof Status>;

export type Friend = {
  /**
   * The account email address
   */
  email: string;
  /**
   * The account full name
   */
  friendlyName: string | null;
  /**
   * If the account is a Plex Home user
   */
  home: boolean;
  /**
   * The Plex account ID
   */
  id: number;
  /**
   * If the account is a Plex Home managed user
   */
  restricted?: boolean | undefined;
  sharedServers: Array<SharedServers>;
  sharedSources: Array<SharedSources>;
  /**
   * Current friend request status
   */
  status: StatusOpen;
  /**
   * URL of the account thumbnail
   */
  thumb: string;
  /**
   * The title of the account (username or friendly name)
   */
  title: string;
  /**
   * The account username
   */
  username: string;
  /**
   * The account Universally Unique Identifier (UUID)
   */
  uuid: string;
};

export type GetUserFriendsResponse = {
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
   * Friends Data
   */
  friends?: Array<Friend> | undefined;
};

/** @internal */
export const SharedServers$inboundSchema: z.ZodType<
  SharedServers,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SharedServers$Outbound = {};

/** @internal */
export const SharedServers$outboundSchema: z.ZodType<
  SharedServers$Outbound,
  z.ZodTypeDef,
  SharedServers
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharedServers$ {
  /** @deprecated use `SharedServers$inboundSchema` instead. */
  export const inboundSchema = SharedServers$inboundSchema;
  /** @deprecated use `SharedServers$outboundSchema` instead. */
  export const outboundSchema = SharedServers$outboundSchema;
  /** @deprecated use `SharedServers$Outbound` instead. */
  export type Outbound = SharedServers$Outbound;
}

export function sharedServersToJSON(sharedServers: SharedServers): string {
  return JSON.stringify(SharedServers$outboundSchema.parse(sharedServers));
}

export function sharedServersFromJSON(
  jsonString: string,
): SafeParseResult<SharedServers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SharedServers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SharedServers' from JSON`,
  );
}

/** @internal */
export const SharedSources$inboundSchema: z.ZodType<
  SharedSources,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SharedSources$Outbound = {};

/** @internal */
export const SharedSources$outboundSchema: z.ZodType<
  SharedSources$Outbound,
  z.ZodTypeDef,
  SharedSources
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharedSources$ {
  /** @deprecated use `SharedSources$inboundSchema` instead. */
  export const inboundSchema = SharedSources$inboundSchema;
  /** @deprecated use `SharedSources$outboundSchema` instead. */
  export const outboundSchema = SharedSources$outboundSchema;
  /** @deprecated use `SharedSources$Outbound` instead. */
  export type Outbound = SharedSources$Outbound;
}

export function sharedSourcesToJSON(sharedSources: SharedSources): string {
  return JSON.stringify(SharedSources$outboundSchema.parse(sharedSources));
}

export function sharedSourcesFromJSON(
  jsonString: string,
): SafeParseResult<SharedSources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SharedSources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SharedSources' from JSON`,
  );
}

/** @internal */
export const Status$inboundSchema: z.ZodType<
  StatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(Status),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Status$outboundSchema: z.ZodType<
  StatusOpen,
  z.ZodTypeDef,
  StatusOpen
> = z.union([
  z.nativeEnum(Status),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const Friend$inboundSchema: z.ZodType<Friend, z.ZodTypeDef, unknown> = z
  .object({
    email: z.string(),
    friendlyName: z.nullable(z.string()),
    home: z.boolean(),
    id: z.number().int(),
    restricted: z.boolean().default(false),
    sharedServers: z.array(z.lazy(() => SharedServers$inboundSchema)),
    sharedSources: z.array(z.lazy(() => SharedSources$inboundSchema)),
    status: Status$inboundSchema,
    thumb: z.string(),
    title: z.string(),
    username: z.string(),
    uuid: z.string(),
  });

/** @internal */
export type Friend$Outbound = {
  email: string;
  friendlyName: string | null;
  home: boolean;
  id: number;
  restricted: boolean;
  sharedServers: Array<SharedServers$Outbound>;
  sharedSources: Array<SharedSources$Outbound>;
  status: string;
  thumb: string;
  title: string;
  username: string;
  uuid: string;
};

/** @internal */
export const Friend$outboundSchema: z.ZodType<
  Friend$Outbound,
  z.ZodTypeDef,
  Friend
> = z.object({
  email: z.string(),
  friendlyName: z.nullable(z.string()),
  home: z.boolean(),
  id: z.number().int(),
  restricted: z.boolean().default(false),
  sharedServers: z.array(z.lazy(() => SharedServers$outboundSchema)),
  sharedSources: z.array(z.lazy(() => SharedSources$outboundSchema)),
  status: Status$outboundSchema,
  thumb: z.string(),
  title: z.string(),
  username: z.string(),
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Friend$ {
  /** @deprecated use `Friend$inboundSchema` instead. */
  export const inboundSchema = Friend$inboundSchema;
  /** @deprecated use `Friend$outboundSchema` instead. */
  export const outboundSchema = Friend$outboundSchema;
  /** @deprecated use `Friend$Outbound` instead. */
  export type Outbound = Friend$Outbound;
}

export function friendToJSON(friend: Friend): string {
  return JSON.stringify(Friend$outboundSchema.parse(friend));
}

export function friendFromJSON(
  jsonString: string,
): SafeParseResult<Friend, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Friend$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Friend' from JSON`,
  );
}

/** @internal */
export const GetUserFriendsResponse$inboundSchema: z.ZodType<
  GetUserFriendsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Friends: z.array(z.lazy(() => Friend$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Friends": "friends",
  });
});

/** @internal */
export type GetUserFriendsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Friends?: Array<Friend$Outbound> | undefined;
};

/** @internal */
export const GetUserFriendsResponse$outboundSchema: z.ZodType<
  GetUserFriendsResponse$Outbound,
  z.ZodTypeDef,
  GetUserFriendsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  friends: z.array(z.lazy(() => Friend$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    friends: "Friends",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserFriendsResponse$ {
  /** @deprecated use `GetUserFriendsResponse$inboundSchema` instead. */
  export const inboundSchema = GetUserFriendsResponse$inboundSchema;
  /** @deprecated use `GetUserFriendsResponse$outboundSchema` instead. */
  export const outboundSchema = GetUserFriendsResponse$outboundSchema;
  /** @deprecated use `GetUserFriendsResponse$Outbound` instead. */
  export type Outbound = GetUserFriendsResponse$Outbound;
}

export function getUserFriendsResponseToJSON(
  getUserFriendsResponse: GetUserFriendsResponse,
): string {
  return JSON.stringify(
    GetUserFriendsResponse$outboundSchema.parse(getUserFriendsResponse),
  );
}

export function getUserFriendsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetUserFriendsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUserFriendsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUserFriendsResponse' from JSON`,
  );
}
