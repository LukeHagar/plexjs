# @lukehagar/plexjs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @lukehagar/plexjs
```

### PNPM

```bash
pnpm add @lukehagar/plexjs
```

### Bun

```bash
bun add @lukehagar/plexjs
```

### Yarn

```bash
yarn add @lukehagar/plexjs zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [server](docs/sdks/server/README.md)

* [getServerCapabilities](docs/sdks/server/README.md#getservercapabilities) - Get Server Capabilities
* [getServerPreferences](docs/sdks/server/README.md#getserverpreferences) - Get Server Preferences
* [getAvailableClients](docs/sdks/server/README.md#getavailableclients) - Get Available Clients
* [getDevices](docs/sdks/server/README.md#getdevices) - Get Devices
* [getServerIdentity](docs/sdks/server/README.md#getserveridentity) - Get Server Identity
* [getMyPlexAccount](docs/sdks/server/README.md#getmyplexaccount) - Get MyPlex Account
* [getResizedPhoto](docs/sdks/server/README.md#getresizedphoto) - Get a Resized Photo
* [getServerList](docs/sdks/server/README.md#getserverlist) - Get Server List

### [media](docs/sdks/media/README.md)

* [markPlayed](docs/sdks/media/README.md#markplayed) - Mark Media Played
* [markUnplayed](docs/sdks/media/README.md#markunplayed) - Mark Media Unplayed
* [updatePlayProgress](docs/sdks/media/README.md#updateplayprogress) - Update Media Play Progress

### [video](docs/sdks/video/README.md)

* [getTimeline](docs/sdks/video/README.md#gettimeline) - Get the timeline for a media item
* [startUniversalTranscode](docs/sdks/video/README.md#startuniversaltranscode) - Start Universal Transcode

### [activities](docs/sdks/activities/README.md)

* [getServerActivities](docs/sdks/activities/README.md#getserveractivities) - Get Server Activities
* [cancelServerActivities](docs/sdks/activities/README.md#cancelserveractivities) - Cancel Server Activities

### [butler](docs/sdks/butler/README.md)

* [getButlerTasks](docs/sdks/butler/README.md#getbutlertasks) - Get Butler tasks
* [startAllTasks](docs/sdks/butler/README.md#startalltasks) - Start all Butler tasks
* [stopAllTasks](docs/sdks/butler/README.md#stopalltasks) - Stop all Butler tasks
* [startTask](docs/sdks/butler/README.md#starttask) - Start a single Butler task
* [stopTask](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task

### [plex](docs/sdks/plex/README.md)

* [getCompanionsData](docs/sdks/plex/README.md#getcompanionsdata) - Get Companions Data
* [getUserFriends](docs/sdks/plex/README.md#getuserfriends) - Get list of friends of the user logged in
* [getGeoData](docs/sdks/plex/README.md#getgeodata) - Get Geo Data
* [getHomeData](docs/sdks/plex/README.md#gethomedata) - Get Plex Home Data
* [getResources](docs/sdks/plex/README.md#getresources) - Get Resources
* [getPin](docs/sdks/plex/README.md#getpin) - Get a Pin
* [getTokenByPinId](docs/sdks/plex/README.md#gettokenbypinid) - Get Access Token by PinId
* [getUserDetails](docs/sdks/plex/README.md#getuserdetails) - Get UserData By Token

### [hubs](docs/sdks/hubs/README.md)

* [getGlobalHubs](docs/sdks/hubs/README.md#getglobalhubs) - Get Global Hubs
* [getLibraryHubs](docs/sdks/hubs/README.md#getlibraryhubs) - Get library specific hubs

### [search](docs/sdks/search/README.md)

* [performSearch](docs/sdks/search/README.md#performsearch) - Perform a search
* [performVoiceSearch](docs/sdks/search/README.md#performvoicesearch) - Perform a voice search
* [getSearchResults](docs/sdks/search/README.md#getsearchresults) - Get Search Results

### [library](docs/sdks/library/README.md)

* [getFileHash](docs/sdks/library/README.md#getfilehash) - Get Hash Value
* [getRecentlyAdded](docs/sdks/library/README.md#getrecentlyadded) - Get Recently Added
* [getLibraries](docs/sdks/library/README.md#getlibraries) - Get All Libraries
* [getLibrary](docs/sdks/library/README.md#getlibrary) - Get Library Details
* [deleteLibrary](docs/sdks/library/README.md#deletelibrary) - Delete Library Section
* [getLibraryItems](docs/sdks/library/README.md#getlibraryitems) - Get Library Items
* [refreshLibrary](docs/sdks/library/README.md#refreshlibrary) - Refresh Library
* [searchLibrary](docs/sdks/library/README.md#searchlibrary) - Search Library
* [getMetadata](docs/sdks/library/README.md#getmetadata) - Get Items Metadata
* [getMetadataChildren](docs/sdks/library/README.md#getmetadatachildren) - Get Items Children
* [getTopWatchedContent](docs/sdks/library/README.md#gettopwatchedcontent) - Get Top Watched Content
* [getOnDeck](docs/sdks/library/README.md#getondeck) - Get On Deck

### [log](docs/sdks/log/README.md)

* [logLine](docs/sdks/log/README.md#logline) - Logging a single line message.
* [logMultiLine](docs/sdks/log/README.md#logmultiline) - Logging a multi-line message
* [enablePaperTrail](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail

### [playlists](docs/sdks/playlists/README.md)

* [createPlaylist](docs/sdks/playlists/README.md#createplaylist) - Create a Playlist
* [getPlaylists](docs/sdks/playlists/README.md#getplaylists) - Get All Playlists
* [getPlaylist](docs/sdks/playlists/README.md#getplaylist) - Retrieve Playlist
* [deletePlaylist](docs/sdks/playlists/README.md#deleteplaylist) - Deletes a Playlist
* [updatePlaylist](docs/sdks/playlists/README.md#updateplaylist) - Update a Playlist
* [getPlaylistContents](docs/sdks/playlists/README.md#getplaylistcontents) - Retrieve Playlist Contents
* [clearPlaylistContents](docs/sdks/playlists/README.md#clearplaylistcontents) - Delete Playlist Contents
* [addPlaylistContents](docs/sdks/playlists/README.md#addplaylistcontents) - Adding to a Playlist
* [uploadPlaylist](docs/sdks/playlists/README.md#uploadplaylist) - Upload Playlist

### [authentication](docs/sdks/authentication/README.md)

* [getTransientToken](docs/sdks/authentication/README.md#gettransienttoken) - Get a Transient Token.
* [getSourceConnectionInformation](docs/sdks/authentication/README.md#getsourceconnectioninformation) - Get Source Connection Information

### [statistics](docs/sdks/statistics/README.md)

* [getStatistics](docs/sdks/statistics/README.md#getstatistics) - Get Media Statistics
* [getResourcesStatistics](docs/sdks/statistics/README.md#getresourcesstatistics) - Get Resources Statistics
* [getBandwidthStatistics](docs/sdks/statistics/README.md#getbandwidthstatistics) - Get Bandwidth Statistics

### [sessions](docs/sdks/sessions/README.md)

* [getSessions](docs/sdks/sessions/README.md#getsessions) - Get Active Sessions
* [getSessionHistory](docs/sdks/sessions/README.md#getsessionhistory) - Get Session History
* [getTranscodeSessions](docs/sdks/sessions/README.md#gettranscodesessions) - Get Transcode Sessions
* [stopTranscodeSession](docs/sdks/sessions/README.md#stoptranscodesession) - Stop a Transcode Session

### [updater](docs/sdks/updater/README.md)

* [getUpdateStatus](docs/sdks/updater/README.md#getupdatestatus) - Querying status of updates
* [checkForUpdates](docs/sdks/updater/README.md#checkforupdates) - Checking for updates
* [applyUpdates](docs/sdks/updater/README.md#applyupdates) - Apply Updates

### [user](docs/sdks/user/README.md)

* [postUsersSigninData](docs/sdks/user/README.md#postuserssignindata) - Get User SignIn Data

### [watchlist](docs/sdks/watchlist/README.md)

* [getWatchlist](docs/sdks/watchlist/README.md#getwatchlist) - Get User Watchlist
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| models.GetServerCapabilitiesServerResponseBody | 401                                            | application/json                               |
| models.SDKError                                | 4xx-5xx                                        | */*                                            |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { SDKValidationError } from "@lukehagar/plexjs/models";

const plexAPI = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    let result;
    try {
        result = await plexAPI.server.getServerCapabilities();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof models.GetServerCapabilitiesServerResponseBody: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `{protocol}://{ip}:{port}` | `protocol` (default is `http`), `ip` (default is `10.10.10.47`), `port` (default is `32400`) |

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    serverIdx: 0,
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `protocol: models.ServerProtocol`
 * `ip: string`
 * `port: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    serverURL: "{protocol}://{ip}:{port}",
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```
### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.plex.getCompanionsData({
        serverURL: "https://plex.tv/api/v2",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { HTTPClient } from "@lukehagar/plexjs/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PlexAPI({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type          | Scheme        |
| ------------- | ------------- | ------------- |
| `accessToken` | apiKey        | API key       |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [activitiesCancelServerActivities](docs/sdks/activities/README.md#cancelserveractivities)
- [activitiesGetServerActivities](docs/sdks/activities/README.md#getserveractivities)
- [authenticationGetSourceConnectionInformation](docs/sdks/authentication/README.md#getsourceconnectioninformation)
- [authenticationGetTransientToken](docs/sdks/authentication/README.md#gettransienttoken)
- [butlerGetButlerTasks](docs/sdks/butler/README.md#getbutlertasks)
- [butlerStartAllTasks](docs/sdks/butler/README.md#startalltasks)
- [butlerStartTask](docs/sdks/butler/README.md#starttask)
- [butlerStopAllTasks](docs/sdks/butler/README.md#stopalltasks)
- [butlerStopTask](docs/sdks/butler/README.md#stoptask)
- [hubsGetGlobalHubs](docs/sdks/hubs/README.md#getglobalhubs)
- [hubsGetLibraryHubs](docs/sdks/hubs/README.md#getlibraryhubs)
- [libraryDeleteLibrary](docs/sdks/library/README.md#deletelibrary)
- [libraryGetFileHash](docs/sdks/library/README.md#getfilehash)
- [libraryGetLibraries](docs/sdks/library/README.md#getlibraries)
- [libraryGetLibraryItems](docs/sdks/library/README.md#getlibraryitems)
- [libraryGetLibrary](docs/sdks/library/README.md#getlibrary)
- [libraryGetMetadataChildren](docs/sdks/library/README.md#getmetadatachildren)
- [libraryGetMetadata](docs/sdks/library/README.md#getmetadata)
- [libraryGetOnDeck](docs/sdks/library/README.md#getondeck)
- [libraryGetRecentlyAdded](docs/sdks/library/README.md#getrecentlyadded)
- [libraryGetTopWatchedContent](docs/sdks/library/README.md#gettopwatchedcontent)
- [libraryRefreshLibrary](docs/sdks/library/README.md#refreshlibrary)
- [librarySearchLibrary](docs/sdks/library/README.md#searchlibrary)
- [logEnablePaperTrail](docs/sdks/log/README.md#enablepapertrail)
- [logLogLine](docs/sdks/log/README.md#logline)
- [logLogMultiLine](docs/sdks/log/README.md#logmultiline)
- [mediaMarkPlayed](docs/sdks/media/README.md#markplayed)
- [mediaMarkUnplayed](docs/sdks/media/README.md#markunplayed)
- [mediaUpdatePlayProgress](docs/sdks/media/README.md#updateplayprogress)
- [playlistsAddPlaylistContents](docs/sdks/playlists/README.md#addplaylistcontents)
- [playlistsClearPlaylistContents](docs/sdks/playlists/README.md#clearplaylistcontents)
- [playlistsCreatePlaylist](docs/sdks/playlists/README.md#createplaylist)
- [playlistsDeletePlaylist](docs/sdks/playlists/README.md#deleteplaylist)
- [playlistsGetPlaylistContents](docs/sdks/playlists/README.md#getplaylistcontents)
- [playlistsGetPlaylist](docs/sdks/playlists/README.md#getplaylist)
- [playlistsGetPlaylists](docs/sdks/playlists/README.md#getplaylists)
- [playlistsUpdatePlaylist](docs/sdks/playlists/README.md#updateplaylist)
- [playlistsUploadPlaylist](docs/sdks/playlists/README.md#uploadplaylist)
- [plexGetCompanionsData](docs/sdks/plex/README.md#getcompanionsdata)
- [plexGetGeoData](docs/sdks/plex/README.md#getgeodata)
- [plexGetHomeData](docs/sdks/plex/README.md#gethomedata)
- [plexGetPin](docs/sdks/plex/README.md#getpin)
- [plexGetResources](docs/sdks/plex/README.md#getresources)
- [plexGetTokenByPinId](docs/sdks/plex/README.md#gettokenbypinid)
- [plexGetUserDetails](docs/sdks/plex/README.md#getuserdetails)
- [plexGetUserFriends](docs/sdks/plex/README.md#getuserfriends)
- [searchGetSearchResults](docs/sdks/search/README.md#getsearchresults)
- [searchPerformSearch](docs/sdks/search/README.md#performsearch)
- [searchPerformVoiceSearch](docs/sdks/search/README.md#performvoicesearch)
- [serverGetAvailableClients](docs/sdks/server/README.md#getavailableclients)
- [serverGetDevices](docs/sdks/server/README.md#getdevices)
- [serverGetMyPlexAccount](docs/sdks/server/README.md#getmyplexaccount)
- [serverGetResizedPhoto](docs/sdks/server/README.md#getresizedphoto)
- [serverGetServerCapabilities](docs/sdks/server/README.md#getservercapabilities)
- [serverGetServerIdentity](docs/sdks/server/README.md#getserveridentity)
- [serverGetServerList](docs/sdks/server/README.md#getserverlist)
- [serverGetServerPreferences](docs/sdks/server/README.md#getserverpreferences)
- [sessionsGetSessionHistory](docs/sdks/sessions/README.md#getsessionhistory)
- [sessionsGetSessions](docs/sdks/sessions/README.md#getsessions)
- [sessionsGetTranscodeSessions](docs/sdks/sessions/README.md#gettranscodesessions)
- [sessionsStopTranscodeSession](docs/sdks/sessions/README.md#stoptranscodesession)
- [statisticsGetBandwidthStatistics](docs/sdks/statistics/README.md#getbandwidthstatistics)
- [statisticsGetResourcesStatistics](docs/sdks/statistics/README.md#getresourcesstatistics)
- [statisticsGetStatistics](docs/sdks/statistics/README.md#getstatistics)
- [updaterApplyUpdates](docs/sdks/updater/README.md#applyupdates)
- [updaterCheckForUpdates](docs/sdks/updater/README.md#checkforupdates)
- [updaterGetUpdateStatus](docs/sdks/updater/README.md#getupdatestatus)
- [userPostUsersSigninData](docs/sdks/user/README.md#postuserssignindata)
- [videoGetTimeline](docs/sdks/video/README.md#gettimeline)
- [videoStartUniversalTranscode](docs/sdks/video/README.md#startuniversaltranscode)
- [watchlistGetWatchlist](docs/sdks/watchlist/README.md#getwatchlist)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const sdk = new PlexAPI({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
