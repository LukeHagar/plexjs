/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Playlists extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create a Playlist
     *
     * @remarks
     * Create a new playlist. By default the playlist is blank. To create a playlist along with a first item, pass:
     * - `uri` - The content URI for what we're playing (e.g. `server://1234/com.plexapp.plugins.library/library/metadata/1`).
     * - `playQueueID` - To create a playlist from an existing play queue.
     *
     */
    async createPlaylist(
        input: operations.CreatePlaylistRequest,
        options?: RequestOptions
    ): Promise<operations.CreatePlaylistResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.CreatePlaylistRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/playlists")();

        const query$ = [
            enc$.encodeForm("playQueueID", payload$.playQueueID, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("smart", payload$.smart, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("title", payload$.title, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("type", payload$.type, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("uri", payload$.uri, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createPlaylist",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreatePlaylistResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.CreatePlaylistResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Get All Playlists
     *
     * @remarks
     * Get All Playlists given the specified filters.
     */
    async getPlaylists(
        playlistType?: operations.PlaylistType | undefined,
        smart?: operations.QueryParamSmart | undefined,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistsResponse> {
        const input$: operations.GetPlaylistsRequest = {
            playlistType: playlistType,
            smart: smart,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetPlaylistsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/playlists")();

        const query$ = [
            enc$.encodeForm("playlistType", payload$.playlistType, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("smart", payload$.smart, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getPlaylists",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPlaylistsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetPlaylistsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Retrieve Playlist
     *
     * @remarks
     * Gets detailed metadata for a playlist. A playlist for many purposes (rating, editing metadata, tagging), can be treated like a regular metadata item:
     * Smart playlist details contain the `content` attribute. This is the content URI for the generator. This can then be parsed by a client to provide smart playlist editing.
     *
     */
    async getPlaylist(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistResponse> {
        const input$: operations.GetPlaylistRequest = {
            playlistID: playlistID,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetPlaylistRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getPlaylist",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPlaylistResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetPlaylistResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Deletes a Playlist
     *
     * @remarks
     * This endpoint will delete a playlist
     *
     */
    async deletePlaylist(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.DeletePlaylistResponse> {
        const input$: operations.DeletePlaylistRequest = {
            playlistID: playlistID,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeletePlaylistRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deletePlaylist",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.DeletePlaylistResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }

        return schemas$.parse(
            undefined,
            () => operations.DeletePlaylistResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Update a Playlist
     *
     * @remarks
     * From PMS version 1.9.1 clients can also edit playlist metadata using this endpoint as they would via `PUT /library/metadata/{playlistID}`
     *
     */
    async updatePlaylist(
        playlistID: number,
        title?: string | undefined,
        summary?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdatePlaylistResponse> {
        const input$: operations.UpdatePlaylistRequest = {
            playlistID: playlistID,
            title: title,
            summary: summary,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdatePlaylistRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}")(pathParams$);

        const query$ = [
            enc$.encodeForm("summary", payload$.summary, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("title", payload$.title, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "updatePlaylist",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.UpdatePlaylistResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }

        return schemas$.parse(
            undefined,
            () => operations.UpdatePlaylistResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Retrieve Playlist Contents
     *
     * @remarks
     * Gets the contents of a playlist. Should be paged by clients via standard mechanisms.
     * By default leaves are returned (e.g. episodes, movies). In order to return other types you can use the `type` parameter.
     * For example, you could use this to display a list of recently added albums vis a smart playlist.
     * Note that for dumb playlists, items have a `playlistItemID` attribute which is used for deleting or moving items.
     *
     */
    async getPlaylistContents(
        playlistID: number,
        type: number,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistContentsResponse> {
        const input$: operations.GetPlaylistContentsRequest = {
            playlistID: playlistID,
            type: type,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetPlaylistContentsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}/items")(pathParams$);

        const query$ = [
            enc$.encodeForm("type", payload$.type, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getPlaylistContents",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetPlaylistContentsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetPlaylistContentsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Delete Playlist Contents
     *
     * @remarks
     * Clears a playlist, only works with dumb playlists. Returns the playlist.
     *
     */
    async clearPlaylistContents(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.ClearPlaylistContentsResponse> {
        const input$: operations.ClearPlaylistContentsRequest = {
            playlistID: playlistID,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ClearPlaylistContentsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}/items")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "clearPlaylistContents",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ClearPlaylistContentsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }

        return schemas$.parse(
            undefined,
            () => operations.ClearPlaylistContentsResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Adding to a Playlist
     *
     * @remarks
     * Adds a generator to a playlist, same parameters as the POST to create. With a dumb playlist, this adds the specified items to the playlist.
     * With a smart playlist, passing a new `uri` parameter replaces the rules for the playlist. Returns the playlist.
     *
     */
    async addPlaylistContents(
        playlistID: number,
        uri: string,
        playQueueID?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.AddPlaylistContentsResponse> {
        const input$: operations.AddPlaylistContentsRequest = {
            playlistID: playlistID,
            uri: uri,
            playQueueID: playQueueID,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AddPlaylistContentsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            playlistID: enc$.encodeSimple("playlistID", payload$.playlistID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/playlists/{playlistID}/items")(pathParams$);

        const query$ = [
            enc$.encodeForm("playQueueID", payload$.playQueueID, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("uri", payload$.uri, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "addPlaylistContents",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AddPlaylistContentsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AddPlaylistContentsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Upload Playlist
     *
     * @remarks
     * Imports m3u playlists by passing a path on the server to scan for m3u-formatted playlist files, or a path to a single playlist file.
     *
     */
    async uploadPlaylist(
        path: string,
        force: operations.Force,
        options?: RequestOptions
    ): Promise<operations.UploadPlaylistResponse> {
        const input$: operations.UploadPlaylistRequest = {
            path: path,
            force: force,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UploadPlaylistRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/playlists/upload")();

        const query$ = [
            enc$.encodeForm("force", payload$.force, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("path", payload$.path, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "uploadPlaylist",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.UploadPlaylistResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }

        return schemas$.parse(
            undefined,
            () => operations.UploadPlaylistResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }
}
