/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { logEnablePaperTrail } from "../funcs/logEnablePaperTrail.js";
import { logLogLine } from "../funcs/logLogLine.js";
import { logLogMultiLine } from "../funcs/logLogMultiLine.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Log extends ClientSDK {
  /**
   * Logging a single line message.
   *
   * @remarks
   * This endpoint will write a single-line log message, including a level and source to the main Plex Media Server log.
   */
  async logLine(
    level: operations.LevelOpen,
    message: string,
    source: string,
    options?: RequestOptions,
  ): Promise<operations.LogLineResponse> {
    return unwrapAsync(logLogLine(
      this,
      level,
      message,
      source,
      options,
    ));
  }

  /**
   * Logging a multi-line message
   *
   * @remarks
   * This endpoint allows for the batch addition of log entries to the main Plex Media Server log.
   * It accepts a text/plain request body, where each line represents a distinct log entry.
   * Each log entry consists of URL-encoded key-value pairs, specifying log attributes such as 'level', 'message', and 'source'.
   *
   * Log entries are separated by a newline character (`\n`).
   * Each entry's parameters should be URL-encoded to ensure accurate parsing and handling of special characters.
   * This method is efficient for logging multiple entries in a single API call, reducing the overhead of multiple individual requests.
   *
   * The 'level' parameter specifies the log entry's severity or importance, with the following integer values:
   * - `0`: Error - Critical issues that require immediate attention.
   * - `1`: Warning - Important events that are not critical but may indicate potential issues.
   * - `2`: Info - General informational messages about system operation.
   * - `3`: Debug - Detailed information useful for debugging purposes.
   * - `4`: Verbose - Highly detailed diagnostic information for in-depth analysis.
   *
   * The 'message' parameter contains the log text, and 'source' identifies the log message's origin (e.g., an application name or module).
   *
   * Example of a single log entry format:
   * `level=4&message=Sample%20log%20entry&source=applicationName`
   *
   * Ensure each parameter is properly URL-encoded to avoid interpretation issues.
   */
  async logMultiLine(
    request: string,
    options?: RequestOptions,
  ): Promise<operations.LogMultiLineResponse> {
    return unwrapAsync(logLogMultiLine(
      this,
      request,
      options,
    ));
  }

  /**
   * Enabling Papertrail
   *
   * @remarks
   * This endpoint will enable all Plex Media Serverlogs to be sent to the Papertrail networked logging site for a period of time.
   */
  async enablePaperTrail(
    options?: RequestOptions,
  ): Promise<operations.EnablePaperTrailResponse> {
    return unwrapAsync(logEnablePaperTrail(
      this,
      options,
    ));
  }
}
