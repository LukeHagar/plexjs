/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Hubs extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get Global Hubs
     *
     * @remarks
     * Get Global Hubs filtered by the parameters provided.
     */
    async getGlobalHubs(
        count?: number | undefined,
        onlyTransient?: operations.OnlyTransient | undefined,
        options?: RequestOptions
    ): Promise<operations.GetGlobalHubsResponse> {
        const input$: operations.GetGlobalHubsRequest = {
            count: count,
            onlyTransient: onlyTransient,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetGlobalHubsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/hubs")();

        const query$ = [
            enc$.encodeForm("count", payload$.count, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("onlyTransient", payload$.onlyTransient, {
                explode: true,
                charEncoding: "percent",
            }),
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
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetGlobalHubsResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GetGlobalHubsResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Get library specific hubs
     *
     * @remarks
     * This endpoint will return a list of library specific hubs
     *
     */
    async getLibraryHubs(
        sectionId: number,
        count?: number | undefined,
        onlyTransient?: operations.QueryParamOnlyTransient | undefined,
        options?: RequestOptions
    ): Promise<operations.GetLibraryHubsResponse> {
        const input$: operations.GetLibraryHubsRequest = {
            sectionId: sectionId,
            count: count,
            onlyTransient: onlyTransient,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetLibraryHubsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            sectionId: enc$.encodeSimple("sectionId", payload$.sectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/hubs/sections/{sectionId}")(pathParams$);

        const query$ = [
            enc$.encodeForm("count", payload$.count, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("onlyTransient", payload$.onlyTransient, {
                explode: true,
                charEncoding: "percent",
            }),
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
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetLibraryHubsResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GetLibraryHubsResponse$.inboundSchema.parse(responseFields$);
    }
}
