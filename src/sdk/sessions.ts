/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionsGetSessionHistory } from "../funcs/sessionsGetSessionHistory.js";
import { sessionsGetSessions } from "../funcs/sessionsGetSessions.js";
import { sessionsGetTranscodeSessions } from "../funcs/sessionsGetTranscodeSessions.js";
import { sessionsStopTranscodeSession } from "../funcs/sessionsStopTranscodeSession.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Sessions extends ClientSDK {
    /**
     * Get Active Sessions
     *
     * @remarks
     * This will retrieve the "Now Playing" Information of the PMS.
     */
    async getSessions(options?: RequestOptions): Promise<models.GetSessionsResponse> {
        return unwrapAsync(sessionsGetSessions(this, options));
    }

    /**
     * Get Session History
     *
     * @remarks
     * This will Retrieve a listing of all history views.
     */
    async getSessionHistory(
        sort?: string | undefined,
        accountId?: number | undefined,
        filter?: models.Filter | undefined,
        librarySectionID?: number | undefined,
        options?: RequestOptions
    ): Promise<models.GetSessionHistoryResponse> {
        return unwrapAsync(
            sessionsGetSessionHistory(this, sort, accountId, filter, librarySectionID, options)
        );
    }

    /**
     * Get Transcode Sessions
     *
     * @remarks
     * Get Transcode Sessions
     */
    async getTranscodeSessions(
        options?: RequestOptions
    ): Promise<models.GetTranscodeSessionsResponse> {
        return unwrapAsync(sessionsGetTranscodeSessions(this, options));
    }

    /**
     * Stop a Transcode Session
     *
     * @remarks
     * Stop a Transcode Session
     */
    async stopTranscodeSession(
        sessionKey: string,
        options?: RequestOptions
    ): Promise<models.StopTranscodeSessionResponse> {
        return unwrapAsync(sessionsStopTranscodeSession(this, sessionKey, options));
    }
}
