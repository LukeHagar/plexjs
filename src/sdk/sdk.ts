/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Activities } from "./activities.js";
import { Authentication } from "./authentication.js";
import { Butler } from "./butler.js";
import { Hubs } from "./hubs.js";
import { Library } from "./library.js";
import { Log } from "./log.js";
import { Media } from "./media.js";
import { Playlists } from "./playlists.js";
import { Plex } from "./plex.js";
import { Search } from "./search.js";
import { Server } from "./server.js";
import { Sessions } from "./sessions.js";
import { Statistics } from "./statistics.js";
import { Updater } from "./updater.js";
import { User } from "./user.js";
import { Video } from "./video.js";
import { Watchlist } from "./watchlist.js";

export class PlexAPI extends ClientSDK {
    private _server?: Server;
    get server(): Server {
        return (this._server ??= new Server(this.options$));
    }

    private _media?: Media;
    get media(): Media {
        return (this._media ??= new Media(this.options$));
    }

    private _video?: Video;
    get video(): Video {
        return (this._video ??= new Video(this.options$));
    }

    private _activities?: Activities;
    get activities(): Activities {
        return (this._activities ??= new Activities(this.options$));
    }

    private _butler?: Butler;
    get butler(): Butler {
        return (this._butler ??= new Butler(this.options$));
    }

    private _plex?: Plex;
    get plex(): Plex {
        return (this._plex ??= new Plex(this.options$));
    }

    private _hubs?: Hubs;
    get hubs(): Hubs {
        return (this._hubs ??= new Hubs(this.options$));
    }

    private _search?: Search;
    get search(): Search {
        return (this._search ??= new Search(this.options$));
    }

    private _library?: Library;
    get library(): Library {
        return (this._library ??= new Library(this.options$));
    }

    private _log?: Log;
    get log(): Log {
        return (this._log ??= new Log(this.options$));
    }

    private _playlists?: Playlists;
    get playlists(): Playlists {
        return (this._playlists ??= new Playlists(this.options$));
    }

    private _authentication?: Authentication;
    get authentication(): Authentication {
        return (this._authentication ??= new Authentication(this.options$));
    }

    private _statistics?: Statistics;
    get statistics(): Statistics {
        return (this._statistics ??= new Statistics(this.options$));
    }

    private _sessions?: Sessions;
    get sessions(): Sessions {
        return (this._sessions ??= new Sessions(this.options$));
    }

    private _updater?: Updater;
    get updater(): Updater {
        return (this._updater ??= new Updater(this.options$));
    }

    private _user?: User;
    get user(): User {
        return (this._user ??= new User(this.options$));
    }

    private _watchlist?: Watchlist;
    get watchlist(): Watchlist {
        return (this._watchlist ??= new Watchlist(this.options$));
    }
}
