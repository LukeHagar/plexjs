/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Activities } from "./activities";
import { Authentication } from "./authentication";
import { Butler } from "./butler";
import { Hubs } from "./hubs";
import { Library } from "./library";
import { Log } from "./log";
import { Media } from "./media";
import { Playlists } from "./playlists";
import { Plex } from "./plex";
import { Search } from "./search";
import { Server } from "./server";
import { Sessions } from "./sessions";
import { Statistics } from "./statistics";
import { Updater } from "./updater";
import { Video } from "./video";

export class PlexAPI extends ClientSDK {
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

    private _server?: Server;
    get server() {
        return (this._server ??= new Server(this.options$));
    }

    private _media?: Media;
    get media() {
        return (this._media ??= new Media(this.options$));
    }

    private _video?: Video;
    get video() {
        return (this._video ??= new Video(this.options$));
    }

    private _activities?: Activities;
    get activities() {
        return (this._activities ??= new Activities(this.options$));
    }

    private _butler?: Butler;
    get butler() {
        return (this._butler ??= new Butler(this.options$));
    }

    private _hubs?: Hubs;
    get hubs() {
        return (this._hubs ??= new Hubs(this.options$));
    }

    private _search?: Search;
    get search() {
        return (this._search ??= new Search(this.options$));
    }

    private _library?: Library;
    get library() {
        return (this._library ??= new Library(this.options$));
    }

    private _log?: Log;
    get log() {
        return (this._log ??= new Log(this.options$));
    }

    private _plex?: Plex;
    get plex() {
        return (this._plex ??= new Plex(this.options$));
    }

    private _playlists?: Playlists;
    get playlists() {
        return (this._playlists ??= new Playlists(this.options$));
    }

    private _authentication?: Authentication;
    get authentication() {
        return (this._authentication ??= new Authentication(this.options$));
    }

    private _statistics?: Statistics;
    get statistics() {
        return (this._statistics ??= new Statistics(this.options$));
    }

    private _sessions?: Sessions;
    get sessions() {
        return (this._sessions ??= new Sessions(this.options$));
    }

    private _updater?: Updater;
    get updater() {
        return (this._updater ??= new Updater(this.options$));
    }
}
