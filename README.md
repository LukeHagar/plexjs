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

* [getHomeData](docs/sdks/plex/README.md#gethomedata) - Get Plex Home Data
* [getPin](docs/sdks/plex/README.md#getpin) - Get a Pin
* [getToken](docs/sdks/plex/README.md#gettoken) - Get Access Token

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
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.plex.getPin("Postman", false, "Postman", {
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

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `X-Plex-Client-Identifier` to `"Postman"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getPin`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| xPlexClientIdentifier | string |  | The unique identifier for the client application
This is used to track the client application and its usage
(UUID, serial number, or other number unique per device)
 |


### Example

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
    xPlexClientIdentifier: "Postman",
});

async function run() {
    const result = await plexAPI.plex.getPin("Postman", false, "Postman");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

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
