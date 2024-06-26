/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";

export class Statistics extends ClientSDK {
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
     * Get Media Statistics
     *
     * @remarks
     * This will return the media statistics for the server
     */
    async getStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<models.GetStatisticsResponse> {
        const input$: models.GetStatisticsRequest = {
            timespan: timespan,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetStatisticsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/statistics/media")();

        const query$ = encodeFormQuery$({
            Timespan: payload$.Timespan,
        });

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getStatistics",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<models.GetStatisticsResponse>()
            .json(200, models.GetStatisticsResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, models.GetStatisticsStatisticsResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Resources Statistics
     *
     * @remarks
     * This will return the resources for the server
     */
    async getResourcesStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<models.GetResourcesStatisticsResponse> {
        const input$: models.GetResourcesStatisticsRequest = {
            timespan: timespan,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetResourcesStatisticsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/statistics/resources")();

        const query$ = encodeFormQuery$({
            Timespan: payload$.Timespan,
        });

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getResourcesStatistics",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<models.GetResourcesStatisticsResponse>()
            .json(200, models.GetResourcesStatisticsResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, models.GetResourcesStatisticsStatisticsResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Bandwidth Statistics
     *
     * @remarks
     * This will return the bandwidth statistics for the server
     */
    async getBandwidthStatistics(
        timespan?: number | undefined,
        options?: RequestOptions
    ): Promise<models.GetBandwidthStatisticsResponse> {
        const input$: models.GetBandwidthStatisticsRequest = {
            timespan: timespan,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetBandwidthStatisticsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/statistics/bandwidth")();

        const query$ = encodeFormQuery$({
            Timespan: payload$.Timespan,
        });

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getBandwidthStatistics",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<models.GetBandwidthStatisticsResponse>()
            .json(200, models.GetBandwidthStatisticsResponse$, { key: "object" })
            .fail([400, "4XX", "5XX"])
            .json(401, models.GetBandwidthStatisticsStatisticsResponseBody$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
