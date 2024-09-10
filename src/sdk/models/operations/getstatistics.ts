/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetStatisticsRequest = {
  /**
   * The timespan to retrieve statistics for
   *
   * @remarks
   * the exact meaning of this parameter is not known
   */
  timespan?: number | undefined;
};

export type GetStatisticsDevice = {
  id?: number | undefined;
  name?: string | undefined;
  platform?: string | undefined;
  clientIdentifier?: string | undefined;
  createdAt?: number | undefined;
};

export type Account = {
  id?: number | undefined;
  key?: string | undefined;
  name?: string | undefined;
  defaultAudioLanguage?: string | undefined;
  autoSelectAudio?: boolean | undefined;
  defaultSubtitleLanguage?: string | undefined;
  subtitleMode?: number | undefined;
  thumb?: string | undefined;
};

export type StatisticsMedia = {
  accountID?: number | undefined;
  deviceID?: number | undefined;
  timespan?: number | undefined;
  at?: number | undefined;
  metadataType?: number | undefined;
  count?: number | undefined;
  duration?: number | undefined;
};

export type GetStatisticsMediaContainer = {
  size?: number | undefined;
  device?: Array<GetStatisticsDevice> | undefined;
  account?: Array<Account> | undefined;
  statisticsMedia?: Array<StatisticsMedia> | undefined;
};

/**
 * Media Statistics
 */
export type GetStatisticsResponseBody = {
  mediaContainer?: GetStatisticsMediaContainer | undefined;
};

export type GetStatisticsResponse = {
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
   * Media Statistics
   */
  object?: GetStatisticsResponseBody | undefined;
};

/** @internal */
export const GetStatisticsRequest$inboundSchema: z.ZodType<
  GetStatisticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  Timespan: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "Timespan": "timespan",
  });
});

/** @internal */
export type GetStatisticsRequest$Outbound = {
  Timespan?: number | undefined;
};

/** @internal */
export const GetStatisticsRequest$outboundSchema: z.ZodType<
  GetStatisticsRequest$Outbound,
  z.ZodTypeDef,
  GetStatisticsRequest
> = z.object({
  timespan: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    timespan: "Timespan",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStatisticsRequest$ {
  /** @deprecated use `GetStatisticsRequest$inboundSchema` instead. */
  export const inboundSchema = GetStatisticsRequest$inboundSchema;
  /** @deprecated use `GetStatisticsRequest$outboundSchema` instead. */
  export const outboundSchema = GetStatisticsRequest$outboundSchema;
  /** @deprecated use `GetStatisticsRequest$Outbound` instead. */
  export type Outbound = GetStatisticsRequest$Outbound;
}

/** @internal */
export const GetStatisticsDevice$inboundSchema: z.ZodType<
  GetStatisticsDevice,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  platform: z.string().optional(),
  clientIdentifier: z.string().optional(),
  createdAt: z.number().int().optional(),
});

/** @internal */
export type GetStatisticsDevice$Outbound = {
  id?: number | undefined;
  name?: string | undefined;
  platform?: string | undefined;
  clientIdentifier?: string | undefined;
  createdAt?: number | undefined;
};

/** @internal */
export const GetStatisticsDevice$outboundSchema: z.ZodType<
  GetStatisticsDevice$Outbound,
  z.ZodTypeDef,
  GetStatisticsDevice
> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  platform: z.string().optional(),
  clientIdentifier: z.string().optional(),
  createdAt: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStatisticsDevice$ {
  /** @deprecated use `GetStatisticsDevice$inboundSchema` instead. */
  export const inboundSchema = GetStatisticsDevice$inboundSchema;
  /** @deprecated use `GetStatisticsDevice$outboundSchema` instead. */
  export const outboundSchema = GetStatisticsDevice$outboundSchema;
  /** @deprecated use `GetStatisticsDevice$Outbound` instead. */
  export type Outbound = GetStatisticsDevice$Outbound;
}

/** @internal */
export const Account$inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown> =
  z.object({
    id: z.number().int().optional(),
    key: z.string().optional(),
    name: z.string().optional(),
    defaultAudioLanguage: z.string().optional(),
    autoSelectAudio: z.boolean().optional(),
    defaultSubtitleLanguage: z.string().optional(),
    subtitleMode: z.number().int().optional(),
    thumb: z.string().optional(),
  });

/** @internal */
export type Account$Outbound = {
  id?: number | undefined;
  key?: string | undefined;
  name?: string | undefined;
  defaultAudioLanguage?: string | undefined;
  autoSelectAudio?: boolean | undefined;
  defaultSubtitleLanguage?: string | undefined;
  subtitleMode?: number | undefined;
  thumb?: string | undefined;
};

/** @internal */
export const Account$outboundSchema: z.ZodType<
  Account$Outbound,
  z.ZodTypeDef,
  Account
> = z.object({
  id: z.number().int().optional(),
  key: z.string().optional(),
  name: z.string().optional(),
  defaultAudioLanguage: z.string().optional(),
  autoSelectAudio: z.boolean().optional(),
  defaultSubtitleLanguage: z.string().optional(),
  subtitleMode: z.number().int().optional(),
  thumb: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Account$ {
  /** @deprecated use `Account$inboundSchema` instead. */
  export const inboundSchema = Account$inboundSchema;
  /** @deprecated use `Account$outboundSchema` instead. */
  export const outboundSchema = Account$outboundSchema;
  /** @deprecated use `Account$Outbound` instead. */
  export type Outbound = Account$Outbound;
}

/** @internal */
export const StatisticsMedia$inboundSchema: z.ZodType<
  StatisticsMedia,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.number().int().optional(),
  deviceID: z.number().int().optional(),
  timespan: z.number().int().optional(),
  at: z.number().int().optional(),
  metadataType: z.number().int().optional(),
  count: z.number().int().optional(),
  duration: z.number().int().optional(),
});

/** @internal */
export type StatisticsMedia$Outbound = {
  accountID?: number | undefined;
  deviceID?: number | undefined;
  timespan?: number | undefined;
  at?: number | undefined;
  metadataType?: number | undefined;
  count?: number | undefined;
  duration?: number | undefined;
};

/** @internal */
export const StatisticsMedia$outboundSchema: z.ZodType<
  StatisticsMedia$Outbound,
  z.ZodTypeDef,
  StatisticsMedia
> = z.object({
  accountID: z.number().int().optional(),
  deviceID: z.number().int().optional(),
  timespan: z.number().int().optional(),
  at: z.number().int().optional(),
  metadataType: z.number().int().optional(),
  count: z.number().int().optional(),
  duration: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatisticsMedia$ {
  /** @deprecated use `StatisticsMedia$inboundSchema` instead. */
  export const inboundSchema = StatisticsMedia$inboundSchema;
  /** @deprecated use `StatisticsMedia$outboundSchema` instead. */
  export const outboundSchema = StatisticsMedia$outboundSchema;
  /** @deprecated use `StatisticsMedia$Outbound` instead. */
  export type Outbound = StatisticsMedia$Outbound;
}

/** @internal */
export const GetStatisticsMediaContainer$inboundSchema: z.ZodType<
  GetStatisticsMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  Device: z.array(z.lazy(() => GetStatisticsDevice$inboundSchema)).optional(),
  Account: z.array(z.lazy(() => Account$inboundSchema)).optional(),
  StatisticsMedia: z.array(z.lazy(() => StatisticsMedia$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Device": "device",
    "Account": "account",
    "StatisticsMedia": "statisticsMedia",
  });
});

/** @internal */
export type GetStatisticsMediaContainer$Outbound = {
  size?: number | undefined;
  Device?: Array<GetStatisticsDevice$Outbound> | undefined;
  Account?: Array<Account$Outbound> | undefined;
  StatisticsMedia?: Array<StatisticsMedia$Outbound> | undefined;
};

/** @internal */
export const GetStatisticsMediaContainer$outboundSchema: z.ZodType<
  GetStatisticsMediaContainer$Outbound,
  z.ZodTypeDef,
  GetStatisticsMediaContainer
> = z.object({
  size: z.number().int().optional(),
  device: z.array(z.lazy(() => GetStatisticsDevice$outboundSchema)).optional(),
  account: z.array(z.lazy(() => Account$outboundSchema)).optional(),
  statisticsMedia: z.array(z.lazy(() => StatisticsMedia$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    device: "Device",
    account: "Account",
    statisticsMedia: "StatisticsMedia",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStatisticsMediaContainer$ {
  /** @deprecated use `GetStatisticsMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetStatisticsMediaContainer$inboundSchema;
  /** @deprecated use `GetStatisticsMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetStatisticsMediaContainer$outboundSchema;
  /** @deprecated use `GetStatisticsMediaContainer$Outbound` instead. */
  export type Outbound = GetStatisticsMediaContainer$Outbound;
}

/** @internal */
export const GetStatisticsResponseBody$inboundSchema: z.ZodType<
  GetStatisticsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetStatisticsMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetStatisticsResponseBody$Outbound = {
  MediaContainer?: GetStatisticsMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetStatisticsResponseBody$outboundSchema: z.ZodType<
  GetStatisticsResponseBody$Outbound,
  z.ZodTypeDef,
  GetStatisticsResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetStatisticsMediaContainer$outboundSchema)
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
export namespace GetStatisticsResponseBody$ {
  /** @deprecated use `GetStatisticsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetStatisticsResponseBody$inboundSchema;
  /** @deprecated use `GetStatisticsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetStatisticsResponseBody$outboundSchema;
  /** @deprecated use `GetStatisticsResponseBody$Outbound` instead. */
  export type Outbound = GetStatisticsResponseBody$Outbound;
}

/** @internal */
export const GetStatisticsResponse$inboundSchema: z.ZodType<
  GetStatisticsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetStatisticsResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetStatisticsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetStatisticsResponseBody$Outbound | undefined;
};

/** @internal */
export const GetStatisticsResponse$outboundSchema: z.ZodType<
  GetStatisticsResponse$Outbound,
  z.ZodTypeDef,
  GetStatisticsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetStatisticsResponseBody$outboundSchema).optional(),
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
export namespace GetStatisticsResponse$ {
  /** @deprecated use `GetStatisticsResponse$inboundSchema` instead. */
  export const inboundSchema = GetStatisticsResponse$inboundSchema;
  /** @deprecated use `GetStatisticsResponse$outboundSchema` instead. */
  export const outboundSchema = GetStatisticsResponse$outboundSchema;
  /** @deprecated use `GetStatisticsResponse$Outbound` instead. */
  export type Outbound = GetStatisticsResponse$Outbound;
}