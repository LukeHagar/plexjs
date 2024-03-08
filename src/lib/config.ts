/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * The full address of your Plex Server
     */
    "{protocol}://{ip}:{port}",
] as const;

/**
 * The protocol to use when connecting to your plex server.
 */
export enum ServerProtocol {
    Http = "http",
    Https = "https",
}

export type SDKOptions = {
    accessToken?: string | (() => Promise<string>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows setting the protocol variable for url substitution
     */
    protocol?: ServerProtocol;
    /**
     * Allows setting the ip variable for url substitution
     */
    ip?: string;
    /**
     * Allows setting the port variable for url substitution
     */
    port?: string;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const serverParams = [
        {
            protocol: options.protocol?.toString() ?? "http",
            ip: options.ip?.toString() ?? "10.10.10.47",
            port: options.port?.toString() ?? "32400",
        },
    ];
    let params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
        params = serverParams[serverIdx] || {};
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "0.0.3",
    sdkVersion: "0.10.0",
    genVersion: "2.279.1",
    userAgent: "speakeasy-sdk/typescript 0.10.0 2.279.1 0.0.3 @lukehagar/plexjs",
});
