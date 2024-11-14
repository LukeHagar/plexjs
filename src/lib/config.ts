/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../sdk/types/enums.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

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
 * The protocol to use for the server connection
 */
export const ServerProtocol = {
  Http: "http",
  Https: "https",
} as const;
/**
 * The protocol to use for the server connection
 */
export type ServerProtocol = ClosedEnum<typeof ServerProtocol>;

export type SDKOptions = {
  accessToken?: string | (() => Promise<string>);

  /**
   * Allows setting the clientID parameter for all supported operations
   */
  clientID?: string | undefined;

  /**
   * Allows setting the clientName parameter for all supported operations
   */
  clientName?: string | undefined;

  /**
   * Allows setting the clientVersion parameter for all supported operations
   */
  clientVersion?: string | undefined;

  /**
   * Allows setting the platform parameter for all supported operations
   */
  platform?: string | undefined;

  /**
   * Allows setting the deviceNickname parameter for all supported operations
   */
  deviceNickname?: string | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number;
  /**
   * Sets the protocol variable for url substitution
   */
  protocol?: ServerProtocol;
  /**
   * Sets the ip variable for url substitution
   */
  ip?: string;
  /**
   * Sets the port variable for url substitution
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
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const serverParams: Params[] = [
    {
      "protocol": options.protocol ?? "https",
      "ip": options.ip ?? "10.10.10.47",
      "port": options.port ?? "32400",
    },
  ];
  let params: Params = {};

  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(`Invalid server index ${serverIdx}`);
    }
    serverURL = ServerList[serverIdx] || "";
    params = serverParams[serverIdx] || {};
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "0.0.3",
  sdkVersion: "0.30.0",
  genVersion: "2.428.1",
  userAgent: "speakeasy-sdk/typescript 0.30.0 2.428.1 0.0.3 @lukehagar/plexjs",
} as const;
