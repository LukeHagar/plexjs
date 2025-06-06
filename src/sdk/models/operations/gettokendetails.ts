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

export const GetTokenDetailsServerList = [
  "https://plex.tv/api/v2",
] as const;

/**
 * Your current mailing list status (active or unsubscribed)
 */
export enum MailingListStatus {
  Active = "active",
  Unsubscribed = "unsubscribed",
}
/**
 * Your current mailing list status (active or unsubscribed)
 */
export type MailingListStatusOpen = OpenEnum<typeof MailingListStatus>;

/**
 * The auto-select subtitle mode (0 = Manually selected, 1 = Shown with foreign audio, 2 = Always enabled)
 */
export enum AutoSelectSubtitle {
  Disable = 0,
  Enable = 1,
}

/**
 * The subtitles for the deaf or hard-of-hearing (SDH) searches mode (0 = Prefer non-SDH subtitles, 1 = Prefer SDH subtitles, 2 = Only show SDH subtitles, 3 = Only show non-SDH subtitles)
 */
export enum DefaultSubtitleAccessibility {
  Disable = 0,
  Enable = 1,
}

/**
 * The forced subtitles searches mode (0 = Prefer non-forced subtitles, 1 = Prefer forced subtitles, 2 = Only show forced subtitles, 3 = Only show non-forced subtitles)
 */
export enum DefaultSubtitleForced {
  Disable = 0,
  Enable = 1,
}

/**
 * Whether or not media watched indicators are enabled (little orange dot on media)
 */
export enum WatchedIndicator {
  Disable = 0,
  Enable = 1,
}

/**
 * Whether or not the account has media reviews visibility enabled
 */
export enum MediaReviewsVisibility {
  Disable = 0,
  Enable = 1,
}

export type UserProfile = {
  /**
   * If the account has automatically select audio and subtitle tracks enabled
   */
  autoSelectAudio?: boolean | undefined;
  /**
   * The preferred audio language for the account
   */
  defaultAudioLanguage: string | null;
  /**
   * The preferred subtitle language for the account
   */
  defaultSubtitleLanguage: string | null;
  autoSelectSubtitle?: AutoSelectSubtitle | undefined;
  defaultSubtitleAccessibility?: DefaultSubtitleAccessibility | undefined;
  defaultSubtitleForced?: DefaultSubtitleForced | undefined;
  watchedIndicator?: WatchedIndicator | undefined;
  mediaReviewsVisibility?: MediaReviewsVisibility | undefined;
};

export enum GetTokenDetailsStatus {
  Online = "online",
  Offline = "offline",
}
export type GetTokenDetailsStatusOpen = OpenEnum<typeof GetTokenDetailsStatus>;

export type Services = {
  identifier: string;
  endpoint: string;
  token: string | null;
  secret: string | null;
  status: GetTokenDetailsStatusOpen;
};

/**
 * String representation of subscriptionActive
 */
export enum GetTokenDetailsAuthenticationStatus {
  Inactive = "Inactive",
  Active = "Active",
}
/**
 * String representation of subscriptionActive
 */
export type GetTokenDetailsAuthenticationStatusOpen = OpenEnum<
  typeof GetTokenDetailsAuthenticationStatus
>;

/**
 * If the account’s Plex Pass subscription is active
 */
export type Subscription = {
  /**
   * List of features allowed on your Plex Pass subscription
   */
  features?: Array<string> | undefined;
  /**
   * If the account's Plex Pass subscription is active
   */
  active?: boolean | undefined;
  /**
   * Date the account subscribed to Plex Pass
   */
  subscribedAt?: string | null | undefined;
  /**
   * String representation of subscriptionActive
   */
  status?: GetTokenDetailsAuthenticationStatusOpen | undefined;
  /**
   * Payment service used for your Plex Pass subscription
   */
  paymentService?: string | null | undefined;
  /**
   * Name of Plex Pass subscription plan
   */
  plan?: string | null | undefined;
};

/**
 * String representation of subscriptionActive
 */
export enum GetTokenDetailsAuthenticationResponseStatus {
  Inactive = "Inactive",
  Active = "Active",
}
/**
 * String representation of subscriptionActive
 */
export type GetTokenDetailsAuthenticationResponseStatusOpen = OpenEnum<
  typeof GetTokenDetailsAuthenticationResponseStatus
>;

export type GetTokenDetailsSubscription = {
  /**
   * List of features allowed on your Plex Pass subscription
   */
  features?: Array<string> | undefined;
  /**
   * If the account's Plex Pass subscription is active
   */
  active?: boolean | undefined;
  /**
   * Date the account subscribed to Plex Pass
   */
  subscribedAt?: string | null | undefined;
  /**
   * String representation of subscriptionActive
   */
  status?: GetTokenDetailsAuthenticationResponseStatusOpen | undefined;
  /**
   * Payment service used for your Plex Pass subscription
   */
  paymentService?: string | null | undefined;
  /**
   * Name of Plex Pass subscription plan
   */
  plan?: string | null | undefined;
};

/**
 * Logged in user details
 */
export type GetTokenDetailsUserPlexAccount = {
  /**
   * Unknown
   */
  adsConsent: boolean | null;
  adsConsentReminderAt: number | null;
  adsConsentSetAt: number | null;
  /**
   * Unknown
   */
  anonymous?: boolean | null | undefined;
  /**
   * The account token
   */
  authToken: string;
  /**
   * If the two-factor authentication backup codes have been created
   */
  backupCodesCreated?: boolean | undefined;
  /**
   * If the account has been confirmed
   */
  confirmed?: boolean | undefined;
  /**
   * The account country
   */
  country: string;
  /**
   * The account email address
   */
  email: string;
  /**
   * If login with email only is enabled
   */
  emailOnlyAuth?: boolean | undefined;
  /**
   * If experimental features are enabled
   */
  experimentalFeatures?: boolean | undefined;
  /**
   * Your account full name
   */
  friendlyName: string;
  /**
   * List of devices your allowed to use with this account
   */
  entitlements: Array<string>;
  /**
   * If the account is a Plex Home guest user
   */
  guest?: boolean | undefined;
  /**
   * If the account has a password
   */
  hasPassword?: boolean | undefined;
  /**
   * If the account is a Plex Home user
   */
  home?: boolean | undefined;
  /**
   * If the account is the Plex Home admin
   */
  homeAdmin?: boolean | undefined;
  /**
   * The number of accounts in the Plex Home
   */
  homeSize: number;
  /**
   * The Plex account ID
   */
  id: number;
  /**
   * Unix epoch datetime in seconds
   */
  joinedAt: number;
  /**
   * The account locale
   */
  locale: string | null;
  /**
   * If you are subscribed to the Plex newsletter
   */
  mailingListActive?: boolean | undefined;
  /**
   * Your current mailing list status (active or unsubscribed)
   */
  mailingListStatus: MailingListStatusOpen;
  /**
   * The maximum number of accounts allowed in the Plex Home
   */
  maxHomeSize: number;
  /**
   * [Might be removed] The hashed Plex Home PIN
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  pin?: string | undefined;
  profile: UserProfile;
  /**
   * If the account has a Plex Home PIN enabled
   */
  protected?: boolean | undefined;
  /**
   * Unix epoch datetime in seconds
   */
  rememberExpiresAt: number;
  /**
   * If the account is a Plex Home managed user
   */
  restricted?: boolean | undefined;
  /**
   * [Might be removed] List of account roles. Plexpass membership listed here
   */
  roles?: Array<string> | undefined;
  /**
   * Unknown
   */
  scrobbleTypes: string;
  services: Array<Services>;
  /**
   * If the account’s Plex Pass subscription is active
   */
  subscription: Subscription;
  /**
   * Description of the Plex Pass subscription
   */
  subscriptionDescription: string | null;
  subscriptions?: Array<GetTokenDetailsSubscription> | undefined;
  /**
   * URL of the account thumbnail
   */
  thumb: string;
  /**
   * The title of the account (username or friendly name)
   */
  title: string;
  /**
   * If two-factor authentication is enabled
   */
  twoFactorEnabled?: boolean | undefined;
  /**
   * The account username
   */
  username: string;
  /**
   * The account UUID
   */
  uuid: string;
  attributionPartner: string | null;
};

export type GetTokenDetailsResponse = {
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
   * Logged in user details
   */
  userPlexAccount?: GetTokenDetailsUserPlexAccount | undefined;
};

/** @internal */
export const MailingListStatus$inboundSchema: z.ZodType<
  MailingListStatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(MailingListStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const MailingListStatus$outboundSchema: z.ZodType<
  MailingListStatusOpen,
  z.ZodTypeDef,
  MailingListStatusOpen
> = z.union([
  z.nativeEnum(MailingListStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MailingListStatus$ {
  /** @deprecated use `MailingListStatus$inboundSchema` instead. */
  export const inboundSchema = MailingListStatus$inboundSchema;
  /** @deprecated use `MailingListStatus$outboundSchema` instead. */
  export const outboundSchema = MailingListStatus$outboundSchema;
}

/** @internal */
export const AutoSelectSubtitle$inboundSchema: z.ZodNativeEnum<
  typeof AutoSelectSubtitle
> = z.nativeEnum(AutoSelectSubtitle);

/** @internal */
export const AutoSelectSubtitle$outboundSchema: z.ZodNativeEnum<
  typeof AutoSelectSubtitle
> = AutoSelectSubtitle$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AutoSelectSubtitle$ {
  /** @deprecated use `AutoSelectSubtitle$inboundSchema` instead. */
  export const inboundSchema = AutoSelectSubtitle$inboundSchema;
  /** @deprecated use `AutoSelectSubtitle$outboundSchema` instead. */
  export const outboundSchema = AutoSelectSubtitle$outboundSchema;
}

/** @internal */
export const DefaultSubtitleAccessibility$inboundSchema: z.ZodNativeEnum<
  typeof DefaultSubtitleAccessibility
> = z.nativeEnum(DefaultSubtitleAccessibility);

/** @internal */
export const DefaultSubtitleAccessibility$outboundSchema: z.ZodNativeEnum<
  typeof DefaultSubtitleAccessibility
> = DefaultSubtitleAccessibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultSubtitleAccessibility$ {
  /** @deprecated use `DefaultSubtitleAccessibility$inboundSchema` instead. */
  export const inboundSchema = DefaultSubtitleAccessibility$inboundSchema;
  /** @deprecated use `DefaultSubtitleAccessibility$outboundSchema` instead. */
  export const outboundSchema = DefaultSubtitleAccessibility$outboundSchema;
}

/** @internal */
export const DefaultSubtitleForced$inboundSchema: z.ZodNativeEnum<
  typeof DefaultSubtitleForced
> = z.nativeEnum(DefaultSubtitleForced);

/** @internal */
export const DefaultSubtitleForced$outboundSchema: z.ZodNativeEnum<
  typeof DefaultSubtitleForced
> = DefaultSubtitleForced$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultSubtitleForced$ {
  /** @deprecated use `DefaultSubtitleForced$inboundSchema` instead. */
  export const inboundSchema = DefaultSubtitleForced$inboundSchema;
  /** @deprecated use `DefaultSubtitleForced$outboundSchema` instead. */
  export const outboundSchema = DefaultSubtitleForced$outboundSchema;
}

/** @internal */
export const WatchedIndicator$inboundSchema: z.ZodNativeEnum<
  typeof WatchedIndicator
> = z.nativeEnum(WatchedIndicator);

/** @internal */
export const WatchedIndicator$outboundSchema: z.ZodNativeEnum<
  typeof WatchedIndicator
> = WatchedIndicator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatchedIndicator$ {
  /** @deprecated use `WatchedIndicator$inboundSchema` instead. */
  export const inboundSchema = WatchedIndicator$inboundSchema;
  /** @deprecated use `WatchedIndicator$outboundSchema` instead. */
  export const outboundSchema = WatchedIndicator$outboundSchema;
}

/** @internal */
export const MediaReviewsVisibility$inboundSchema: z.ZodNativeEnum<
  typeof MediaReviewsVisibility
> = z.nativeEnum(MediaReviewsVisibility);

/** @internal */
export const MediaReviewsVisibility$outboundSchema: z.ZodNativeEnum<
  typeof MediaReviewsVisibility
> = MediaReviewsVisibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaReviewsVisibility$ {
  /** @deprecated use `MediaReviewsVisibility$inboundSchema` instead. */
  export const inboundSchema = MediaReviewsVisibility$inboundSchema;
  /** @deprecated use `MediaReviewsVisibility$outboundSchema` instead. */
  export const outboundSchema = MediaReviewsVisibility$outboundSchema;
}

/** @internal */
export const UserProfile$inboundSchema: z.ZodType<
  UserProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  autoSelectAudio: z.boolean().default(true),
  defaultAudioLanguage: z.nullable(z.string()),
  defaultSubtitleLanguage: z.nullable(z.string()),
  autoSelectSubtitle: AutoSelectSubtitle$inboundSchema,
  defaultSubtitleAccessibility: DefaultSubtitleAccessibility$inboundSchema,
  defaultSubtitleForced: DefaultSubtitleForced$inboundSchema,
  watchedIndicator: WatchedIndicator$inboundSchema,
  mediaReviewsVisibility: MediaReviewsVisibility$inboundSchema,
});

/** @internal */
export type UserProfile$Outbound = {
  autoSelectAudio: boolean;
  defaultAudioLanguage: string | null;
  defaultSubtitleLanguage: string | null;
  autoSelectSubtitle: number;
  defaultSubtitleAccessibility: number;
  defaultSubtitleForced: number;
  watchedIndicator: number;
  mediaReviewsVisibility: number;
};

/** @internal */
export const UserProfile$outboundSchema: z.ZodType<
  UserProfile$Outbound,
  z.ZodTypeDef,
  UserProfile
> = z.object({
  autoSelectAudio: z.boolean().default(true),
  defaultAudioLanguage: z.nullable(z.string()),
  defaultSubtitleLanguage: z.nullable(z.string()),
  autoSelectSubtitle: AutoSelectSubtitle$outboundSchema.default(
    AutoSelectSubtitle.Disable,
  ),
  defaultSubtitleAccessibility: DefaultSubtitleAccessibility$outboundSchema
    .default(DefaultSubtitleAccessibility.Disable),
  defaultSubtitleForced: DefaultSubtitleForced$outboundSchema.default(
    DefaultSubtitleForced.Disable,
  ),
  watchedIndicator: WatchedIndicator$outboundSchema.default(
    WatchedIndicator.Disable,
  ),
  mediaReviewsVisibility: MediaReviewsVisibility$outboundSchema.default(
    MediaReviewsVisibility.Disable,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserProfile$ {
  /** @deprecated use `UserProfile$inboundSchema` instead. */
  export const inboundSchema = UserProfile$inboundSchema;
  /** @deprecated use `UserProfile$outboundSchema` instead. */
  export const outboundSchema = UserProfile$outboundSchema;
  /** @deprecated use `UserProfile$Outbound` instead. */
  export type Outbound = UserProfile$Outbound;
}

export function userProfileToJSON(userProfile: UserProfile): string {
  return JSON.stringify(UserProfile$outboundSchema.parse(userProfile));
}

export function userProfileFromJSON(
  jsonString: string,
): SafeParseResult<UserProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserProfile' from JSON`,
  );
}

/** @internal */
export const GetTokenDetailsStatus$inboundSchema: z.ZodType<
  GetTokenDetailsStatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(GetTokenDetailsStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const GetTokenDetailsStatus$outboundSchema: z.ZodType<
  GetTokenDetailsStatusOpen,
  z.ZodTypeDef,
  GetTokenDetailsStatusOpen
> = z.union([
  z.nativeEnum(GetTokenDetailsStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsStatus$ {
  /** @deprecated use `GetTokenDetailsStatus$inboundSchema` instead. */
  export const inboundSchema = GetTokenDetailsStatus$inboundSchema;
  /** @deprecated use `GetTokenDetailsStatus$outboundSchema` instead. */
  export const outboundSchema = GetTokenDetailsStatus$outboundSchema;
}

/** @internal */
export const Services$inboundSchema: z.ZodType<
  Services,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  endpoint: z.string(),
  token: z.nullable(z.string()),
  secret: z.nullable(z.string()),
  status: GetTokenDetailsStatus$inboundSchema,
});

/** @internal */
export type Services$Outbound = {
  identifier: string;
  endpoint: string;
  token: string | null;
  secret: string | null;
  status: string;
};

/** @internal */
export const Services$outboundSchema: z.ZodType<
  Services$Outbound,
  z.ZodTypeDef,
  Services
> = z.object({
  identifier: z.string(),
  endpoint: z.string(),
  token: z.nullable(z.string()),
  secret: z.nullable(z.string()),
  status: GetTokenDetailsStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Services$ {
  /** @deprecated use `Services$inboundSchema` instead. */
  export const inboundSchema = Services$inboundSchema;
  /** @deprecated use `Services$outboundSchema` instead. */
  export const outboundSchema = Services$outboundSchema;
  /** @deprecated use `Services$Outbound` instead. */
  export type Outbound = Services$Outbound;
}

export function servicesToJSON(services: Services): string {
  return JSON.stringify(Services$outboundSchema.parse(services));
}

export function servicesFromJSON(
  jsonString: string,
): SafeParseResult<Services, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Services$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Services' from JSON`,
  );
}

/** @internal */
export const GetTokenDetailsAuthenticationStatus$inboundSchema: z.ZodType<
  GetTokenDetailsAuthenticationStatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(GetTokenDetailsAuthenticationStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const GetTokenDetailsAuthenticationStatus$outboundSchema: z.ZodType<
  GetTokenDetailsAuthenticationStatusOpen,
  z.ZodTypeDef,
  GetTokenDetailsAuthenticationStatusOpen
> = z.union([
  z.nativeEnum(GetTokenDetailsAuthenticationStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsAuthenticationStatus$ {
  /** @deprecated use `GetTokenDetailsAuthenticationStatus$inboundSchema` instead. */
  export const inboundSchema =
    GetTokenDetailsAuthenticationStatus$inboundSchema;
  /** @deprecated use `GetTokenDetailsAuthenticationStatus$outboundSchema` instead. */
  export const outboundSchema =
    GetTokenDetailsAuthenticationStatus$outboundSchema;
}

/** @internal */
export const Subscription$inboundSchema: z.ZodType<
  Subscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  features: z.array(z.string()).optional(),
  active: z.boolean().optional(),
  subscribedAt: z.nullable(z.string()).optional(),
  status: GetTokenDetailsAuthenticationStatus$inboundSchema.optional(),
  paymentService: z.nullable(z.string()).optional(),
  plan: z.nullable(z.string()).optional(),
});

/** @internal */
export type Subscription$Outbound = {
  features?: Array<string> | undefined;
  active?: boolean | undefined;
  subscribedAt?: string | null | undefined;
  status?: string | undefined;
  paymentService?: string | null | undefined;
  plan?: string | null | undefined;
};

/** @internal */
export const Subscription$outboundSchema: z.ZodType<
  Subscription$Outbound,
  z.ZodTypeDef,
  Subscription
> = z.object({
  features: z.array(z.string()).optional(),
  active: z.boolean().optional(),
  subscribedAt: z.nullable(z.string()).optional(),
  status: GetTokenDetailsAuthenticationStatus$outboundSchema.optional(),
  paymentService: z.nullable(z.string()).optional(),
  plan: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Subscription$ {
  /** @deprecated use `Subscription$inboundSchema` instead. */
  export const inboundSchema = Subscription$inboundSchema;
  /** @deprecated use `Subscription$outboundSchema` instead. */
  export const outboundSchema = Subscription$outboundSchema;
  /** @deprecated use `Subscription$Outbound` instead. */
  export type Outbound = Subscription$Outbound;
}

export function subscriptionToJSON(subscription: Subscription): string {
  return JSON.stringify(Subscription$outboundSchema.parse(subscription));
}

export function subscriptionFromJSON(
  jsonString: string,
): SafeParseResult<Subscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Subscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Subscription' from JSON`,
  );
}

/** @internal */
export const GetTokenDetailsAuthenticationResponseStatus$inboundSchema:
  z.ZodType<
    GetTokenDetailsAuthenticationResponseStatusOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(GetTokenDetailsAuthenticationResponseStatus),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const GetTokenDetailsAuthenticationResponseStatus$outboundSchema:
  z.ZodType<
    GetTokenDetailsAuthenticationResponseStatusOpen,
    z.ZodTypeDef,
    GetTokenDetailsAuthenticationResponseStatusOpen
  > = z.union([
    z.nativeEnum(GetTokenDetailsAuthenticationResponseStatus),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsAuthenticationResponseStatus$ {
  /** @deprecated use `GetTokenDetailsAuthenticationResponseStatus$inboundSchema` instead. */
  export const inboundSchema =
    GetTokenDetailsAuthenticationResponseStatus$inboundSchema;
  /** @deprecated use `GetTokenDetailsAuthenticationResponseStatus$outboundSchema` instead. */
  export const outboundSchema =
    GetTokenDetailsAuthenticationResponseStatus$outboundSchema;
}

/** @internal */
export const GetTokenDetailsSubscription$inboundSchema: z.ZodType<
  GetTokenDetailsSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  features: z.array(z.string()).optional(),
  active: z.boolean().optional(),
  subscribedAt: z.nullable(z.string()).optional(),
  status: GetTokenDetailsAuthenticationResponseStatus$inboundSchema.optional(),
  paymentService: z.nullable(z.string()).optional(),
  plan: z.nullable(z.string()).optional(),
});

/** @internal */
export type GetTokenDetailsSubscription$Outbound = {
  features?: Array<string> | undefined;
  active?: boolean | undefined;
  subscribedAt?: string | null | undefined;
  status?: string | undefined;
  paymentService?: string | null | undefined;
  plan?: string | null | undefined;
};

/** @internal */
export const GetTokenDetailsSubscription$outboundSchema: z.ZodType<
  GetTokenDetailsSubscription$Outbound,
  z.ZodTypeDef,
  GetTokenDetailsSubscription
> = z.object({
  features: z.array(z.string()).optional(),
  active: z.boolean().optional(),
  subscribedAt: z.nullable(z.string()).optional(),
  status: GetTokenDetailsAuthenticationResponseStatus$outboundSchema.optional(),
  paymentService: z.nullable(z.string()).optional(),
  plan: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsSubscription$ {
  /** @deprecated use `GetTokenDetailsSubscription$inboundSchema` instead. */
  export const inboundSchema = GetTokenDetailsSubscription$inboundSchema;
  /** @deprecated use `GetTokenDetailsSubscription$outboundSchema` instead. */
  export const outboundSchema = GetTokenDetailsSubscription$outboundSchema;
  /** @deprecated use `GetTokenDetailsSubscription$Outbound` instead. */
  export type Outbound = GetTokenDetailsSubscription$Outbound;
}

export function getTokenDetailsSubscriptionToJSON(
  getTokenDetailsSubscription: GetTokenDetailsSubscription,
): string {
  return JSON.stringify(
    GetTokenDetailsSubscription$outboundSchema.parse(
      getTokenDetailsSubscription,
    ),
  );
}

export function getTokenDetailsSubscriptionFromJSON(
  jsonString: string,
): SafeParseResult<GetTokenDetailsSubscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTokenDetailsSubscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTokenDetailsSubscription' from JSON`,
  );
}

/** @internal */
export const GetTokenDetailsUserPlexAccount$inboundSchema: z.ZodType<
  GetTokenDetailsUserPlexAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  adsConsent: z.nullable(z.boolean()),
  adsConsentReminderAt: z.nullable(z.number().int()),
  adsConsentSetAt: z.nullable(z.number().int()),
  anonymous: z.nullable(z.boolean().default(false)),
  authToken: z.string(),
  backupCodesCreated: z.boolean().default(false),
  confirmed: z.boolean().default(false),
  country: z.string(),
  email: z.string(),
  emailOnlyAuth: z.boolean().default(false),
  experimentalFeatures: z.boolean().default(false),
  friendlyName: z.string(),
  entitlements: z.array(z.string()),
  guest: z.boolean().default(false),
  hasPassword: z.boolean().default(true),
  home: z.boolean().default(false),
  homeAdmin: z.boolean().default(false),
  homeSize: z.number().int(),
  id: z.number().int(),
  joinedAt: z.number().int(),
  locale: z.nullable(z.string()),
  mailingListActive: z.boolean().default(false),
  mailingListStatus: MailingListStatus$inboundSchema,
  maxHomeSize: z.number().int(),
  pin: z.string().optional(),
  profile: z.lazy(() => UserProfile$inboundSchema),
  protected: z.boolean().default(false),
  rememberExpiresAt: z.number().int(),
  restricted: z.boolean().default(false),
  roles: z.array(z.string()).optional(),
  scrobbleTypes: z.string(),
  services: z.array(z.lazy(() => Services$inboundSchema)),
  subscription: z.lazy(() => Subscription$inboundSchema),
  subscriptionDescription: z.nullable(z.string()),
  subscriptions: z.array(
    z.lazy(() => GetTokenDetailsSubscription$inboundSchema),
  ).optional(),
  thumb: z.string(),
  title: z.string(),
  twoFactorEnabled: z.boolean().default(false),
  username: z.string(),
  uuid: z.string(),
  attributionPartner: z.nullable(z.string()),
});

/** @internal */
export type GetTokenDetailsUserPlexAccount$Outbound = {
  adsConsent: boolean | null;
  adsConsentReminderAt: number | null;
  adsConsentSetAt: number | null;
  anonymous: boolean | null;
  authToken: string;
  backupCodesCreated: boolean;
  confirmed: boolean;
  country: string;
  email: string;
  emailOnlyAuth: boolean;
  experimentalFeatures: boolean;
  friendlyName: string;
  entitlements: Array<string>;
  guest: boolean;
  hasPassword: boolean;
  home: boolean;
  homeAdmin: boolean;
  homeSize: number;
  id: number;
  joinedAt: number;
  locale: string | null;
  mailingListActive: boolean;
  mailingListStatus: string;
  maxHomeSize: number;
  pin?: string | undefined;
  profile: UserProfile$Outbound;
  protected: boolean;
  rememberExpiresAt: number;
  restricted: boolean;
  roles?: Array<string> | undefined;
  scrobbleTypes: string;
  services: Array<Services$Outbound>;
  subscription: Subscription$Outbound;
  subscriptionDescription: string | null;
  subscriptions?: Array<GetTokenDetailsSubscription$Outbound> | undefined;
  thumb: string;
  title: string;
  twoFactorEnabled: boolean;
  username: string;
  uuid: string;
  attributionPartner: string | null;
};

/** @internal */
export const GetTokenDetailsUserPlexAccount$outboundSchema: z.ZodType<
  GetTokenDetailsUserPlexAccount$Outbound,
  z.ZodTypeDef,
  GetTokenDetailsUserPlexAccount
> = z.object({
  adsConsent: z.nullable(z.boolean()),
  adsConsentReminderAt: z.nullable(z.number().int()),
  adsConsentSetAt: z.nullable(z.number().int()),
  anonymous: z.nullable(z.boolean().default(false)),
  authToken: z.string(),
  backupCodesCreated: z.boolean().default(false),
  confirmed: z.boolean().default(false),
  country: z.string(),
  email: z.string(),
  emailOnlyAuth: z.boolean().default(false),
  experimentalFeatures: z.boolean().default(false),
  friendlyName: z.string(),
  entitlements: z.array(z.string()),
  guest: z.boolean().default(false),
  hasPassword: z.boolean().default(true),
  home: z.boolean().default(false),
  homeAdmin: z.boolean().default(false),
  homeSize: z.number().int(),
  id: z.number().int(),
  joinedAt: z.number().int(),
  locale: z.nullable(z.string()),
  mailingListActive: z.boolean().default(false),
  mailingListStatus: MailingListStatus$outboundSchema,
  maxHomeSize: z.number().int(),
  pin: z.string().optional(),
  profile: z.lazy(() => UserProfile$outboundSchema),
  protected: z.boolean().default(false),
  rememberExpiresAt: z.number().int(),
  restricted: z.boolean().default(false),
  roles: z.array(z.string()).optional(),
  scrobbleTypes: z.string(),
  services: z.array(z.lazy(() => Services$outboundSchema)),
  subscription: z.lazy(() => Subscription$outboundSchema),
  subscriptionDescription: z.nullable(z.string()),
  subscriptions: z.array(
    z.lazy(() => GetTokenDetailsSubscription$outboundSchema),
  ).optional(),
  thumb: z.string(),
  title: z.string(),
  twoFactorEnabled: z.boolean().default(false),
  username: z.string(),
  uuid: z.string(),
  attributionPartner: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsUserPlexAccount$ {
  /** @deprecated use `GetTokenDetailsUserPlexAccount$inboundSchema` instead. */
  export const inboundSchema = GetTokenDetailsUserPlexAccount$inboundSchema;
  /** @deprecated use `GetTokenDetailsUserPlexAccount$outboundSchema` instead. */
  export const outboundSchema = GetTokenDetailsUserPlexAccount$outboundSchema;
  /** @deprecated use `GetTokenDetailsUserPlexAccount$Outbound` instead. */
  export type Outbound = GetTokenDetailsUserPlexAccount$Outbound;
}

export function getTokenDetailsUserPlexAccountToJSON(
  getTokenDetailsUserPlexAccount: GetTokenDetailsUserPlexAccount,
): string {
  return JSON.stringify(
    GetTokenDetailsUserPlexAccount$outboundSchema.parse(
      getTokenDetailsUserPlexAccount,
    ),
  );
}

export function getTokenDetailsUserPlexAccountFromJSON(
  jsonString: string,
): SafeParseResult<GetTokenDetailsUserPlexAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTokenDetailsUserPlexAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTokenDetailsUserPlexAccount' from JSON`,
  );
}

/** @internal */
export const GetTokenDetailsResponse$inboundSchema: z.ZodType<
  GetTokenDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  UserPlexAccount: z.lazy(() => GetTokenDetailsUserPlexAccount$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "UserPlexAccount": "userPlexAccount",
  });
});

/** @internal */
export type GetTokenDetailsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  UserPlexAccount?: GetTokenDetailsUserPlexAccount$Outbound | undefined;
};

/** @internal */
export const GetTokenDetailsResponse$outboundSchema: z.ZodType<
  GetTokenDetailsResponse$Outbound,
  z.ZodTypeDef,
  GetTokenDetailsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  userPlexAccount: z.lazy(() => GetTokenDetailsUserPlexAccount$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    userPlexAccount: "UserPlexAccount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTokenDetailsResponse$ {
  /** @deprecated use `GetTokenDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTokenDetailsResponse$inboundSchema;
  /** @deprecated use `GetTokenDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTokenDetailsResponse$outboundSchema;
  /** @deprecated use `GetTokenDetailsResponse$Outbound` instead. */
  export type Outbound = GetTokenDetailsResponse$Outbound;
}

export function getTokenDetailsResponseToJSON(
  getTokenDetailsResponse: GetTokenDetailsResponse,
): string {
  return JSON.stringify(
    GetTokenDetailsResponse$outboundSchema.parse(getTokenDetailsResponse),
  );
}

export function getTokenDetailsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTokenDetailsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTokenDetailsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTokenDetailsResponse' from JSON`,
  );
}
