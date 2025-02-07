# @lukehagar/plexjs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Plex-API: An Open API Spec for interacting with Plex.tv and Plex Media Server

# Plex Media Server OpenAPI Specification

An Open Source OpenAPI Specification for Plex Media Server

Automation and SDKs provided by [Speakeasy](https://speakeasyapi.dev/)

## Documentation

[API Documentation](https://plexapi.dev)

## SDKs

The following SDKs are generated from the OpenAPI Specification. They are automatically generated and may not be fully tested. If you find any issues, please open an issue on the [main specification Repository](https://github.com/LukeHagar/plex-api-spec).

| Language              | Repository                                        | Releases                                                                                         | Other                                                   |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| Python                | [GitHub](https://github.com/LukeHagar/plexpy)     | [PyPI](https://pypi.org/project/plex-api-client/)                                                | -                                                       |
| JavaScript/TypeScript | [GitHub](https://github.com/LukeHagar/plexjs)     | [NPM](https://www.npmjs.com/package/@lukehagar/plexjs) \ [JSR](https://jsr.io/@lukehagar/plexjs) | -                                                       |
| Go                    | [GitHub](https://github.com/LukeHagar/plexgo)     | [Releases](https://github.com/LukeHagar/plexgo/releases)                                         | [GoDoc](https://pkg.go.dev/github.com/LukeHagar/plexgo) |
| Ruby                  | [GitHub](https://github.com/LukeHagar/plexruby)   | [Releases](https://github.com/LukeHagar/plexruby/releases)                                       | -                                                       |
| Swift                 | [GitHub](https://github.com/LukeHagar/plexswift)  | [Releases](https://github.com/LukeHagar/plexswift/releases)                                      | -                                                       |
| PHP                   | [GitHub](https://github.com/LukeHagar/plexphp)    | [Releases](https://github.com/LukeHagar/plexphp/releases)                                        | -                                                       |
| Java                  | [GitHub](https://github.com/LukeHagar/plexjava)   | [Releases](https://github.com/LukeHagar/plexjava/releases)                                       | -                                                       |
| C#                    | [GitHub](https://github.com/LukeHagar/plexcsharp) | [Releases](https://github.com/LukeHagar/plexcsharp/releases)                                     | -
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@lukehagar/plexjs](#lukehagarplexjs)
* [Plex Media Server OpenAPI Specification](#plex-media-server-openapi-specification)
  * [Documentation](#documentation)
  * [SDKs](#sdks)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Requirements](#requirements)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

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

<details open>
<summary>Available methods</summary>

### [activities](docs/sdks/activities/README.md)

* [getServerActivities](docs/sdks/activities/README.md#getserveractivities) - Get Server Activities
* [cancelServerActivities](docs/sdks/activities/README.md#cancelserveractivities) - Cancel Server Activities

### [authentication](docs/sdks/authentication/README.md)

* [getTransientToken](docs/sdks/authentication/README.md#gettransienttoken) - Get a Transient Token
* [getSourceConnectionInformation](docs/sdks/authentication/README.md#getsourceconnectioninformation) - Get Source Connection Information
* [getTokenDetails](docs/sdks/authentication/README.md#gettokendetails) - Get Token Details
* [postUsersSignInData](docs/sdks/authentication/README.md#postuserssignindata) - Get User Sign In Data

### [butler](docs/sdks/butler/README.md)

* [getButlerTasks](docs/sdks/butler/README.md#getbutlertasks) - Get Butler tasks
* [startAllTasks](docs/sdks/butler/README.md#startalltasks) - Start all Butler tasks
* [stopAllTasks](docs/sdks/butler/README.md#stopalltasks) - Stop all Butler tasks
* [startTask](docs/sdks/butler/README.md#starttask) - Start a single Butler task
* [stopTask](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task

### [hubs](docs/sdks/hubs/README.md)

* [getGlobalHubs](docs/sdks/hubs/README.md#getglobalhubs) - Get Global Hubs
* [getRecentlyAdded](docs/sdks/hubs/README.md#getrecentlyadded) - Get Recently Added
* [getLibraryHubs](docs/sdks/hubs/README.md#getlibraryhubs) - Get library specific hubs

### [library](docs/sdks/library/README.md)

* [getFileHash](docs/sdks/library/README.md#getfilehash) - Get Hash Value
* [getRecentlyAddedLibrary](docs/sdks/library/README.md#getrecentlyaddedlibrary) - Get Recently Added
* [getAllLibraries](docs/sdks/library/README.md#getalllibraries) - Get All Libraries
* [getLibraryDetails](docs/sdks/library/README.md#getlibrarydetails) - Get Library Details
* [deleteLibrary](docs/sdks/library/README.md#deletelibrary) - Delete Library Section
* [getLibraryItems](docs/sdks/library/README.md#getlibraryitems) - Get Library Items
* [getRefreshLibraryMetadata](docs/sdks/library/README.md#getrefreshlibrarymetadata) - Refresh Metadata Of The Library
* [getSearchLibrary](docs/sdks/library/README.md#getsearchlibrary) - Search Library
* [getGenresLibrary](docs/sdks/library/README.md#getgenreslibrary) - Get Genres of library media
* [getCountriesLibrary](docs/sdks/library/README.md#getcountrieslibrary) - Get Countries of library media
* [getActorsLibrary](docs/sdks/library/README.md#getactorslibrary) - Get Actors of library media
* [getSearchAllLibraries](docs/sdks/library/README.md#getsearchalllibraries) - Search All Libraries
* [getMediaMetaData](docs/sdks/library/README.md#getmediametadata) - Get Media Metadata
* [getMetadataChildren](docs/sdks/library/README.md#getmetadatachildren) - Get Items Children
* [getTopWatchedContent](docs/sdks/library/README.md#gettopwatchedcontent) - Get Top Watched Content
* [getOnDeck](docs/sdks/library/README.md#getondeck) - Get On Deck

### [log](docs/sdks/log/README.md)

* [logLine](docs/sdks/log/README.md#logline) - Logging a single line message.
* [logMultiLine](docs/sdks/log/README.md#logmultiline) - Logging a multi-line message
* [enablePaperTrail](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail

### [media](docs/sdks/media/README.md)

* [markPlayed](docs/sdks/media/README.md#markplayed) - Mark Media Played
* [markUnplayed](docs/sdks/media/README.md#markunplayed) - Mark Media Unplayed
* [updatePlayProgress](docs/sdks/media/README.md#updateplayprogress) - Update Media Play Progress
* [getBannerImage](docs/sdks/media/README.md#getbannerimage) - Get Banner Image
* [getThumbImage](docs/sdks/media/README.md#getthumbimage) - Get Thumb Image

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

### [plex](docs/sdks/plex/README.md)

* [getCompanionsData](docs/sdks/plex/README.md#getcompanionsdata) - Get Companions Data
* [getUserFriends](docs/sdks/plex/README.md#getuserfriends) - Get list of friends of the user logged in
* [getGeoData](docs/sdks/plex/README.md#getgeodata) - Get Geo Data
* [getHomeData](docs/sdks/plex/README.md#gethomedata) - Get Plex Home Data
* [getServerResources](docs/sdks/plex/README.md#getserverresources) - Get Server Resources
* [getPin](docs/sdks/plex/README.md#getpin) - Get a Pin
* [getTokenByPinId](docs/sdks/plex/README.md#gettokenbypinid) - Get Access Token by PinId


### [search](docs/sdks/search/README.md)

* [performSearch](docs/sdks/search/README.md#performsearch) - Perform a search
* [performVoiceSearch](docs/sdks/search/README.md#performvoicesearch) - Perform a voice search
* [getSearchResults](docs/sdks/search/README.md#getsearchresults) - Get Search Results

### [server](docs/sdks/server/README.md)

* [getServerCapabilities](docs/sdks/server/README.md#getservercapabilities) - Get Server Capabilities
* [getServerPreferences](docs/sdks/server/README.md#getserverpreferences) - Get Server Preferences
* [getAvailableClients](docs/sdks/server/README.md#getavailableclients) - Get Available Clients
* [getDevices](docs/sdks/server/README.md#getdevices) - Get Devices
* [getServerIdentity](docs/sdks/server/README.md#getserveridentity) - Get Server Identity
* [getMyPlexAccount](docs/sdks/server/README.md#getmyplexaccount) - Get MyPlex Account
* [getResizedPhoto](docs/sdks/server/README.md#getresizedphoto) - Get a Resized Photo
* [getMediaProviders](docs/sdks/server/README.md#getmediaproviders) - Get Media Providers
* [getServerList](docs/sdks/server/README.md#getserverlist) - Get Server List

### [sessions](docs/sdks/sessions/README.md)

* [getSessions](docs/sdks/sessions/README.md#getsessions) - Get Active Sessions
* [getSessionHistory](docs/sdks/sessions/README.md#getsessionhistory) - Get Session History
* [getTranscodeSessions](docs/sdks/sessions/README.md#gettranscodesessions) - Get Transcode Sessions
* [stopTranscodeSession](docs/sdks/sessions/README.md#stoptranscodesession) - Stop a Transcode Session

### [statistics](docs/sdks/statistics/README.md)

* [getStatistics](docs/sdks/statistics/README.md#getstatistics) - Get Media Statistics
* [getResourcesStatistics](docs/sdks/statistics/README.md#getresourcesstatistics) - Get Resources Statistics
* [getBandwidthStatistics](docs/sdks/statistics/README.md#getbandwidthstatistics) - Get Bandwidth Statistics

### [updater](docs/sdks/updater/README.md)

* [getUpdateStatus](docs/sdks/updater/README.md#getupdatestatus) - Querying status of updates
* [checkForUpdates](docs/sdks/updater/README.md#checkforupdates) - Checking for updates
* [applyUpdates](docs/sdks/updater/README.md#applyupdates) - Apply Updates

### [users](docs/sdks/users/README.md)

* [getUsers](docs/sdks/users/README.md#getusers) - Get list of all connected users

### [video](docs/sdks/video/README.md)

* [getTimeline](docs/sdks/video/README.md#gettimeline) - Get the timeline for a media item
* [startUniversalTranscode](docs/sdks/video/README.md#startuniversaltranscode) - Start Universal Transcode

### [watchlist](docs/sdks/watchlist/README.md)

* [getWatchList](docs/sdks/watchlist/README.md#getwatchlist) - Get User Watchlist

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `sdk/models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getServerCapabilities` method may throw the following errors:

| Error Type                               | Status Code | Content Type     |
| ---------------------------------------- | ----------- | ---------------- |
| errors.GetServerCapabilitiesBadRequest   | 400         | application/json |
| errors.GetServerCapabilitiesUnauthorized | 401         | application/json |
| errors.SDKError                          | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import {
  GetServerCapabilitiesBadRequest,
  GetServerCapabilitiesUnauthorized,
  SDKValidationError,
} from "@lukehagar/plexjs/sdk/models/errors";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await plexAPI.server.getServerCapabilities();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof GetServerCapabilitiesBadRequest): {
        // Handle err.data$: GetServerCapabilitiesBadRequestData
        console.error(err);
        return;
      }
      case (err instanceof GetServerCapabilitiesUnauthorized): {
        // Handle err.data$: GetServerCapabilitiesUnauthorizedData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `{protocol}://{ip}:{port}` contains variables and is set to `https://10.10.10.47:32400` by default. To override default values, the following parameters are available when initializing the SDK client instance:
 * `protocol: models.ServerProtocol`
 * `ip: string`
 * `port: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  serverURL: "https://10.10.10.47:32400",
  accessToken: "<YOUR_API_KEY_HERE>",
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

| Name          | Type   | Scheme  |
| ------------- | ------ | ------- |
| `accessToken` | apiKey | API key |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
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

- [`activitiesCancelServerActivities`](docs/sdks/activities/README.md#cancelserveractivities) - Cancel Server Activities
- [`activitiesGetServerActivities`](docs/sdks/activities/README.md#getserveractivities) - Get Server Activities
- [`authenticationGetSourceConnectionInformation`](docs/sdks/authentication/README.md#getsourceconnectioninformation) - Get Source Connection Information
- [`authenticationGetTokenDetails`](docs/sdks/authentication/README.md#gettokendetails) - Get Token Details
- [`authenticationGetTransientToken`](docs/sdks/authentication/README.md#gettransienttoken) - Get a Transient Token
- [`authenticationPostUsersSignInData`](docs/sdks/authentication/README.md#postuserssignindata) - Get User Sign In Data
- [`butlerGetButlerTasks`](docs/sdks/butler/README.md#getbutlertasks) - Get Butler tasks
- [`butlerStartAllTasks`](docs/sdks/butler/README.md#startalltasks) - Start all Butler tasks
- [`butlerStartTask`](docs/sdks/butler/README.md#starttask) - Start a single Butler task
- [`butlerStopAllTasks`](docs/sdks/butler/README.md#stopalltasks) - Stop all Butler tasks
- [`butlerStopTask`](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task
- [`hubsGetGlobalHubs`](docs/sdks/hubs/README.md#getglobalhubs) - Get Global Hubs
- [`hubsGetLibraryHubs`](docs/sdks/hubs/README.md#getlibraryhubs) - Get library specific hubs
- [`hubsGetRecentlyAdded`](docs/sdks/hubs/README.md#getrecentlyadded) - Get Recently Added
- [`libraryDeleteLibrary`](docs/sdks/library/README.md#deletelibrary) - Delete Library Section
- [`libraryGetActorsLibrary`](docs/sdks/library/README.md#getactorslibrary) - Get Actors of library media
- [`libraryGetAllLibraries`](docs/sdks/library/README.md#getalllibraries) - Get All Libraries
- [`libraryGetCountriesLibrary`](docs/sdks/library/README.md#getcountrieslibrary) - Get Countries of library media
- [`libraryGetFileHash`](docs/sdks/library/README.md#getfilehash) - Get Hash Value
- [`libraryGetGenresLibrary`](docs/sdks/library/README.md#getgenreslibrary) - Get Genres of library media
- [`libraryGetLibraryDetails`](docs/sdks/library/README.md#getlibrarydetails) - Get Library Details
- [`libraryGetLibraryItems`](docs/sdks/library/README.md#getlibraryitems) - Get Library Items
- [`libraryGetMediaMetaData`](docs/sdks/library/README.md#getmediametadata) - Get Media Metadata
- [`libraryGetMetadataChildren`](docs/sdks/library/README.md#getmetadatachildren) - Get Items Children
- [`libraryGetOnDeck`](docs/sdks/library/README.md#getondeck) - Get On Deck
- [`libraryGetRecentlyAddedLibrary`](docs/sdks/library/README.md#getrecentlyaddedlibrary) - Get Recently Added
- [`libraryGetRefreshLibraryMetadata`](docs/sdks/library/README.md#getrefreshlibrarymetadata) - Refresh Metadata Of The Library
- [`libraryGetSearchAllLibraries`](docs/sdks/library/README.md#getsearchalllibraries) - Search All Libraries
- [`libraryGetSearchLibrary`](docs/sdks/library/README.md#getsearchlibrary) - Search Library
- [`libraryGetTopWatchedContent`](docs/sdks/library/README.md#gettopwatchedcontent) - Get Top Watched Content
- [`logEnablePaperTrail`](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail
- [`logLogLine`](docs/sdks/log/README.md#logline) - Logging a single line message.
- [`logLogMultiLine`](docs/sdks/log/README.md#logmultiline) - Logging a multi-line message
- [`mediaGetBannerImage`](docs/sdks/media/README.md#getbannerimage) - Get Banner Image
- [`mediaGetThumbImage`](docs/sdks/media/README.md#getthumbimage) - Get Thumb Image
- [`mediaMarkPlayed`](docs/sdks/media/README.md#markplayed) - Mark Media Played
- [`mediaMarkUnplayed`](docs/sdks/media/README.md#markunplayed) - Mark Media Unplayed
- [`mediaUpdatePlayProgress`](docs/sdks/media/README.md#updateplayprogress) - Update Media Play Progress
- [`playlistsAddPlaylistContents`](docs/sdks/playlists/README.md#addplaylistcontents) - Adding to a Playlist
- [`playlistsClearPlaylistContents`](docs/sdks/playlists/README.md#clearplaylistcontents) - Delete Playlist Contents
- [`playlistsCreatePlaylist`](docs/sdks/playlists/README.md#createplaylist) - Create a Playlist
- [`playlistsDeletePlaylist`](docs/sdks/playlists/README.md#deleteplaylist) - Deletes a Playlist
- [`playlistsGetPlaylist`](docs/sdks/playlists/README.md#getplaylist) - Retrieve Playlist
- [`playlistsGetPlaylistContents`](docs/sdks/playlists/README.md#getplaylistcontents) - Retrieve Playlist Contents
- [`playlistsGetPlaylists`](docs/sdks/playlists/README.md#getplaylists) - Get All Playlists
- [`playlistsUpdatePlaylist`](docs/sdks/playlists/README.md#updateplaylist) - Update a Playlist
- [`playlistsUploadPlaylist`](docs/sdks/playlists/README.md#uploadplaylist) - Upload Playlist
- [`plexGetCompanionsData`](docs/sdks/plex/README.md#getcompanionsdata) - Get Companions Data
- [`plexGetGeoData`](docs/sdks/plex/README.md#getgeodata) - Get Geo Data
- [`plexGetHomeData`](docs/sdks/plex/README.md#gethomedata) - Get Plex Home Data
- [`plexGetPin`](docs/sdks/plex/README.md#getpin) - Get a Pin
- [`plexGetServerResources`](docs/sdks/plex/README.md#getserverresources) - Get Server Resources
- [`plexGetTokenByPinId`](docs/sdks/plex/README.md#gettokenbypinid) - Get Access Token by PinId
- [`plexGetUserFriends`](docs/sdks/plex/README.md#getuserfriends) - Get list of friends of the user logged in
- [`searchGetSearchResults`](docs/sdks/search/README.md#getsearchresults) - Get Search Results
- [`searchPerformSearch`](docs/sdks/search/README.md#performsearch) - Perform a search
- [`searchPerformVoiceSearch`](docs/sdks/search/README.md#performvoicesearch) - Perform a voice search
- [`serverGetAvailableClients`](docs/sdks/server/README.md#getavailableclients) - Get Available Clients
- [`serverGetDevices`](docs/sdks/server/README.md#getdevices) - Get Devices
- [`serverGetMediaProviders`](docs/sdks/server/README.md#getmediaproviders) - Get Media Providers
- [`serverGetMyPlexAccount`](docs/sdks/server/README.md#getmyplexaccount) - Get MyPlex Account
- [`serverGetResizedPhoto`](docs/sdks/server/README.md#getresizedphoto) - Get a Resized Photo
- [`serverGetServerCapabilities`](docs/sdks/server/README.md#getservercapabilities) - Get Server Capabilities
- [`serverGetServerIdentity`](docs/sdks/server/README.md#getserveridentity) - Get Server Identity
- [`serverGetServerList`](docs/sdks/server/README.md#getserverlist) - Get Server List
- [`serverGetServerPreferences`](docs/sdks/server/README.md#getserverpreferences) - Get Server Preferences
- [`sessionsGetSessionHistory`](docs/sdks/sessions/README.md#getsessionhistory) - Get Session History
- [`sessionsGetSessions`](docs/sdks/sessions/README.md#getsessions) - Get Active Sessions
- [`sessionsGetTranscodeSessions`](docs/sdks/sessions/README.md#gettranscodesessions) - Get Transcode Sessions
- [`sessionsStopTranscodeSession`](docs/sdks/sessions/README.md#stoptranscodesession) - Stop a Transcode Session
- [`statisticsGetBandwidthStatistics`](docs/sdks/statistics/README.md#getbandwidthstatistics) - Get Bandwidth Statistics
- [`statisticsGetResourcesStatistics`](docs/sdks/statistics/README.md#getresourcesstatistics) - Get Resources Statistics
- [`statisticsGetStatistics`](docs/sdks/statistics/README.md#getstatistics) - Get Media Statistics
- [`updaterApplyUpdates`](docs/sdks/updater/README.md#applyupdates) - Apply Updates
- [`updaterCheckForUpdates`](docs/sdks/updater/README.md#checkforupdates) - Checking for updates
- [`updaterGetUpdateStatus`](docs/sdks/updater/README.md#getupdatestatus) - Querying status of updates
- [`usersGetUsers`](docs/sdks/users/README.md#getusers) - Get list of all connected users
- [`videoGetTimeline`](docs/sdks/video/README.md#gettimeline) - Get the timeline for a media item
- [`videoStartUniversalTranscode`](docs/sdks/video/README.md#startuniversaltranscode) - Start Universal Transcode
- [`watchlistGetWatchList`](docs/sdks/watchlist/README.md#getwatchlist) - Get User Watchlist

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
