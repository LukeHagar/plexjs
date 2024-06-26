/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export const GetTokenOpServerList = ["https://plex.tv/api/v2"] as const;

export type GetTokenGlobals = {
    /**
     * The unique identifier for the client application
     *
     * @remarks
     * This is used to track the client application and its usage
     * (UUID, serial number, or other number unique per device)
     *
     */
    xPlexClientIdentifier?: string | undefined;
};

export type GetTokenRequest = {
    /**
     * The PinID to retrieve an access token for
     */
    pinID: string;
    /**
     * The unique identifier for the client application
     *
     * @remarks
     * This is used to track the client application and its usage
     * (UUID, serial number, or other number unique per device)
     *
     */
    xPlexClientIdentifier?: string | undefined;
};

export type GetTokenErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * X-Plex-Client-Identifier is missing
 */
export type GetTokenPlexResponseBodyData = {
    errors?: Array<GetTokenErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * X-Plex-Client-Identifier is missing
 */
export class GetTokenPlexResponseBody extends Error {
    errors?: Array<GetTokenErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetTokenPlexResponseBodyData;

    constructor(err: GetTokenPlexResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetTokenPlexResponseBody";
    }
}

export type GetTokenLocation = {
    code?: string | undefined;
    europeanUnionMember?: boolean | undefined;
    continentCode?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    timeZone?: string | undefined;
    postalCode?: string | undefined;
    inPrivacyRestrictedCountry?: boolean | undefined;
    subdivisions?: string | undefined;
    coordinates?: string | undefined;
};

/**
 * Access Token
 */
export type GetTokenResponseBody = {
    /**
     * PinID for use with authentication
     */
    id?: number | undefined;
    code?: string | undefined;
    product?: string | undefined;
    trusted?: boolean | undefined;
    /**
     * a link to a QR code hosted on plex.tv
     *
     * @remarks
     * The QR code redirects to the relevant `plex.tv/link` authentication page
     * Which then prompts the user for the 4 Digit Link Pin
     *
     */
    qr?: string | undefined;
    clientIdentifier?: string | undefined;
    location?: GetTokenLocation | undefined;
    expiresIn?: number | undefined;
    createdAt?: Date | undefined;
    expiresAt?: Date | undefined;
    authToken?: string | undefined;
    newRegistration?: string | undefined;
};

export type GetTokenResponse = {
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
     * Access Token
     */
    object?: GetTokenResponseBody | undefined;
};

/** @internal */
export namespace GetTokenGlobals$ {
    export const inboundSchema: z.ZodType<GetTokenGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "X-Plex-Client-Identifier": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Plex-Client-Identifier": "xPlexClientIdentifier",
            });
        });

    export type Outbound = {
        "X-Plex-Client-Identifier"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenGlobals> = z
        .object({
            xPlexClientIdentifier: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xPlexClientIdentifier: "X-Plex-Client-Identifier",
            });
        });
}

/** @internal */
export namespace GetTokenRequest$ {
    export const inboundSchema: z.ZodType<GetTokenRequest, z.ZodTypeDef, unknown> = z
        .object({
            pinID: z.string(),
            "X-Plex-Client-Identifier": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Plex-Client-Identifier": "xPlexClientIdentifier",
            });
        });

    export type Outbound = {
        pinID: string;
        "X-Plex-Client-Identifier"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenRequest> = z
        .object({
            pinID: z.string(),
            xPlexClientIdentifier: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xPlexClientIdentifier: "X-Plex-Client-Identifier",
            });
        });
}

/** @internal */
export namespace GetTokenErrors$ {
    export const inboundSchema: z.ZodType<GetTokenErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetTokenPlexResponseBody$ {
    export const inboundSchema: z.ZodType<GetTokenPlexResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => GetTokenErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetTokenPlexResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetTokenErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenPlexResponseBody> = z
        .instanceof(GetTokenPlexResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetTokenErrors$.outboundSchema)).optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                    });
                })
        );
}

/** @internal */
export namespace GetTokenLocation$ {
    export const inboundSchema: z.ZodType<GetTokenLocation, z.ZodTypeDef, unknown> = z
        .object({
            code: z.string().optional(),
            european_union_member: z.boolean().optional(),
            continent_code: z.string().optional(),
            country: z.string().optional(),
            city: z.string().optional(),
            time_zone: z.string().optional(),
            postal_code: z.string().optional(),
            in_privacy_restricted_country: z.boolean().optional(),
            subdivisions: z.string().optional(),
            coordinates: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                european_union_member: "europeanUnionMember",
                continent_code: "continentCode",
                time_zone: "timeZone",
                postal_code: "postalCode",
                in_privacy_restricted_country: "inPrivacyRestrictedCountry",
            });
        });

    export type Outbound = {
        code?: string | undefined;
        european_union_member?: boolean | undefined;
        continent_code?: string | undefined;
        country?: string | undefined;
        city?: string | undefined;
        time_zone?: string | undefined;
        postal_code?: string | undefined;
        in_privacy_restricted_country?: boolean | undefined;
        subdivisions?: string | undefined;
        coordinates?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenLocation> = z
        .object({
            code: z.string().optional(),
            europeanUnionMember: z.boolean().optional(),
            continentCode: z.string().optional(),
            country: z.string().optional(),
            city: z.string().optional(),
            timeZone: z.string().optional(),
            postalCode: z.string().optional(),
            inPrivacyRestrictedCountry: z.boolean().optional(),
            subdivisions: z.string().optional(),
            coordinates: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                europeanUnionMember: "european_union_member",
                continentCode: "continent_code",
                timeZone: "time_zone",
                postalCode: "postal_code",
                inPrivacyRestrictedCountry: "in_privacy_restricted_country",
            });
        });
}

/** @internal */
export namespace GetTokenResponseBody$ {
    export const inboundSchema: z.ZodType<GetTokenResponseBody, z.ZodTypeDef, unknown> = z.object({
        id: z.number().optional(),
        code: z.string().optional(),
        product: z.string().optional(),
        trusted: z.boolean().optional(),
        qr: z.string().optional(),
        clientIdentifier: z.string().optional(),
        location: z.lazy(() => GetTokenLocation$.inboundSchema).optional(),
        expiresIn: z.number().optional(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        expiresAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        authToken: z.string().optional(),
        newRegistration: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        code?: string | undefined;
        product?: string | undefined;
        trusted?: boolean | undefined;
        qr?: string | undefined;
        clientIdentifier?: string | undefined;
        location?: GetTokenLocation$.Outbound | undefined;
        expiresIn?: number | undefined;
        createdAt?: string | undefined;
        expiresAt?: string | undefined;
        authToken?: string | undefined;
        newRegistration?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenResponseBody> = z.object(
        {
            id: z.number().optional(),
            code: z.string().optional(),
            product: z.string().optional(),
            trusted: z.boolean().optional(),
            qr: z.string().optional(),
            clientIdentifier: z.string().optional(),
            location: z.lazy(() => GetTokenLocation$.outboundSchema).optional(),
            expiresIn: z.number().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            expiresAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            authToken: z.string().optional(),
            newRegistration: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetTokenResponse$ {
    export const inboundSchema: z.ZodType<GetTokenResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetTokenResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetTokenResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTokenResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetTokenResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
