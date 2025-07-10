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
  * [File uploads](#file-uploads)
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
* [getLibrarySectionsAll](docs/sdks/library/README.md#getlibrarysectionsall) - Get Library section media by tag ALL
* [getRefreshLibraryMetadata](docs/sdks/library/README.md#getrefreshlibrarymetadata) - Refresh Metadata Of The Library
* [getSearchLibrary](docs/sdks/library/README.md#getsearchlibrary) - Search Library
* [getGenresLibrary](docs/sdks/library/README.md#getgenreslibrary) - Get Genres of library media
* [getCountriesLibrary](docs/sdks/library/README.md#getcountrieslibrary) - Get Countries of library media
* [getActorsLibrary](docs/sdks/library/README.md#getactorslibrary) - Get Actors of library media
* [getSearchAllLibraries](docs/sdks/library/README.md#getsearchalllibraries) - Search All Libraries
* [getMediaMetaData](docs/sdks/library/README.md#getmediametadata) - Get Media Metadata
* [getMediaArts](docs/sdks/library/README.md#getmediaarts) - Get Media Background Artwork
* [postMediaArts](docs/sdks/library/README.md#postmediaarts) - Upload Media Background Artwork
* [getMediaPosters](docs/sdks/library/README.md#getmediaposters) - Get Media Posters
* [postMediaPoster](docs/sdks/library/README.md#postmediaposter) - Upload Media Poster
* [getMetadataChildren](docs/sdks/library/README.md#getmetadatachildren) - Get Items Children
* [getTopWatchedContent](docs/sdks/library/README.md#gettopwatchedcontent) - Get Top Watched Content

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

[`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import * as errors from "@lukehagar/plexjs/sdk/models/errors";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  try {
    const result = await plexAPI.server.getServerCapabilities();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.PlexAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.GetServerCapabilitiesBadRequest) {
        console.log(error.data$.errors); // Errors[]
        console.log(error.data$.rawResponse); // Response
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (162)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts)**:
* [`GetServerCapabilitiesBadRequest`](./src/sdk/models/errors/getservercapabilitiesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerPreferencesBadRequest`](./src/sdk/models/errors/getserverpreferencesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetAvailableClientsBadRequest`](./src/sdk/models/errors/getavailableclientsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetDevicesBadRequest`](./src/sdk/models/errors/getdevicesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMyPlexAccountBadRequest`](./src/sdk/models/errors/getmyplexaccountbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetResizedPhotoBadRequest`](./src/sdk/models/errors/getresizedphotobadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMediaProvidersBadRequest`](./src/sdk/models/errors/getmediaprovidersbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerListBadRequest`](./src/sdk/models/errors/getserverlistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`MarkPlayedBadRequest`](./src/sdk/models/errors/markplayedbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`MarkUnplayedBadRequest`](./src/sdk/models/errors/markunplayedbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UpdatePlayProgressBadRequest`](./src/sdk/models/errors/updateplayprogressbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetBannerImageBadRequest`](./src/sdk/models/errors/getbannerimagebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetThumbImageBadRequest`](./src/sdk/models/errors/getthumbimagebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTimelineBadRequest`](./src/sdk/models/errors/gettimelinebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartUniversalTranscodeBadRequest`](./src/sdk/models/errors/startuniversaltranscodebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerActivitiesBadRequest`](./src/sdk/models/errors/getserveractivitiesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CancelServerActivitiesBadRequest`](./src/sdk/models/errors/cancelserveractivitiesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetButlerTasksBadRequest`](./src/sdk/models/errors/getbutlertasksbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartAllTasksBadRequest`](./src/sdk/models/errors/startalltasksbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopAllTasksBadRequest`](./src/sdk/models/errors/stopalltasksbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartTaskBadRequest`](./src/sdk/models/errors/starttaskbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopTaskBadRequest`](./src/sdk/models/errors/stoptaskbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetCompanionsDataBadRequest`](./src/sdk/models/errors/getcompanionsdatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUserFriendsBadRequest`](./src/sdk/models/errors/getuserfriendsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGeoDataBadRequest`](./src/sdk/models/errors/getgeodatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetHomeDataBadRequest`](./src/sdk/models/errors/gethomedatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerResourcesBadRequest`](./src/sdk/models/errors/getserverresourcesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPinBadRequest`](./src/sdk/models/errors/getpinbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTokenByPinIdBadRequest`](./src/sdk/models/errors/gettokenbypinidbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGlobalHubsBadRequest`](./src/sdk/models/errors/getglobalhubsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryHubsBadRequest`](./src/sdk/models/errors/getlibraryhubsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PerformSearchBadRequest`](./src/sdk/models/errors/performsearchbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PerformVoiceSearchBadRequest`](./src/sdk/models/errors/performvoicesearchbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchResultsBadRequest`](./src/sdk/models/errors/getsearchresultsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetFileHashBadRequest`](./src/sdk/models/errors/getfilehashbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetRecentlyAddedLibraryBadRequest`](./src/sdk/models/errors/getrecentlyaddedlibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetAllLibrariesBadRequest`](./src/sdk/models/errors/getalllibrariesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryDetailsBadRequest`](./src/sdk/models/errors/getlibrarydetailsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`DeleteLibraryBadRequest`](./src/sdk/models/errors/deletelibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryItemsBadRequest`](./src/sdk/models/errors/getlibraryitemsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibrarySectionsAllBadRequest`](./src/sdk/models/errors/getlibrarysectionsallbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetRefreshLibraryMetadataBadRequest`](./src/sdk/models/errors/getrefreshlibrarymetadatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchLibraryBadRequest`](./src/sdk/models/errors/getsearchlibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGenresLibraryBadRequest`](./src/sdk/models/errors/getgenreslibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetCountriesLibraryBadRequest`](./src/sdk/models/errors/getcountrieslibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetActorsLibraryBadRequest`](./src/sdk/models/errors/getactorslibrarybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchAllLibrariesBadRequest`](./src/sdk/models/errors/getsearchalllibrariesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMediaMetaDataBadRequest`](./src/sdk/models/errors/getmediametadatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMetadataChildrenBadRequest`](./src/sdk/models/errors/getmetadatachildrenbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTopWatchedContentBadRequest`](./src/sdk/models/errors/gettopwatchedcontentbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetWatchListBadRequest`](./src/sdk/models/errors/getwatchlistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`LogLineBadRequest`](./src/sdk/models/errors/loglinebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`LogMultiLineBadRequest`](./src/sdk/models/errors/logmultilinebadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`EnablePaperTrailBadRequest`](./src/sdk/models/errors/enablepapertrailbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CreatePlaylistBadRequest`](./src/sdk/models/errors/createplaylistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistsBadRequest`](./src/sdk/models/errors/getplaylistsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistBadRequest`](./src/sdk/models/errors/getplaylistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`DeletePlaylistBadRequest`](./src/sdk/models/errors/deleteplaylistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UpdatePlaylistBadRequest`](./src/sdk/models/errors/updateplaylistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistContentsBadRequest`](./src/sdk/models/errors/getplaylistcontentsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`ClearPlaylistContentsBadRequest`](./src/sdk/models/errors/clearplaylistcontentsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`AddPlaylistContentsBadRequest`](./src/sdk/models/errors/addplaylistcontentsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UploadPlaylistBadRequest`](./src/sdk/models/errors/uploadplaylistbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTransientTokenBadRequest`](./src/sdk/models/errors/gettransienttokenbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSourceConnectionInformationBadRequest`](./src/sdk/models/errors/getsourceconnectioninformationbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTokenDetailsBadRequest`](./src/sdk/models/errors/gettokendetailsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PostUsersSignInDataBadRequest`](./src/sdk/models/errors/postuserssignindatabadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetStatisticsBadRequest`](./src/sdk/models/errors/getstatisticsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetResourcesStatisticsBadRequest`](./src/sdk/models/errors/getresourcesstatisticsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetBandwidthStatisticsBadRequest`](./src/sdk/models/errors/getbandwidthstatisticsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSessionsBadRequest`](./src/sdk/models/errors/getsessionsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSessionHistoryBadRequest`](./src/sdk/models/errors/getsessionhistorybadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTranscodeSessionsBadRequest`](./src/sdk/models/errors/gettranscodesessionsbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopTranscodeSessionBadRequest`](./src/sdk/models/errors/stoptranscodesessionbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUpdateStatusBadRequest`](./src/sdk/models/errors/getupdatestatusbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CheckForUpdatesBadRequest`](./src/sdk/models/errors/checkforupdatesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`ApplyUpdatesBadRequest`](./src/sdk/models/errors/applyupdatesbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUsersBadRequest`](./src/sdk/models/errors/getusersbadrequest.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerCapabilitiesUnauthorized`](./src/sdk/models/errors/getservercapabilitiesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerPreferencesUnauthorized`](./src/sdk/models/errors/getserverpreferencesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetAvailableClientsUnauthorized`](./src/sdk/models/errors/getavailableclientsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetDevicesUnauthorized`](./src/sdk/models/errors/getdevicesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMyPlexAccountUnauthorized`](./src/sdk/models/errors/getmyplexaccountunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetResizedPhotoUnauthorized`](./src/sdk/models/errors/getresizedphotounauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMediaProvidersUnauthorized`](./src/sdk/models/errors/getmediaprovidersunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerListUnauthorized`](./src/sdk/models/errors/getserverlistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`MarkPlayedUnauthorized`](./src/sdk/models/errors/markplayedunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`MarkUnplayedUnauthorized`](./src/sdk/models/errors/markunplayedunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UpdatePlayProgressUnauthorized`](./src/sdk/models/errors/updateplayprogressunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetBannerImageUnauthorized`](./src/sdk/models/errors/getbannerimageunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetThumbImageUnauthorized`](./src/sdk/models/errors/getthumbimageunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTimelineUnauthorized`](./src/sdk/models/errors/gettimelineunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartUniversalTranscodeUnauthorized`](./src/sdk/models/errors/startuniversaltranscodeunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerActivitiesUnauthorized`](./src/sdk/models/errors/getserveractivitiesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CancelServerActivitiesUnauthorized`](./src/sdk/models/errors/cancelserveractivitiesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetButlerTasksUnauthorized`](./src/sdk/models/errors/getbutlertasksunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartAllTasksUnauthorized`](./src/sdk/models/errors/startalltasksunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopAllTasksUnauthorized`](./src/sdk/models/errors/stopalltasksunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartTaskUnauthorized`](./src/sdk/models/errors/starttaskunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopTaskUnauthorized`](./src/sdk/models/errors/stoptaskunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetCompanionsDataUnauthorized`](./src/sdk/models/errors/getcompanionsdataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUserFriendsUnauthorized`](./src/sdk/models/errors/getuserfriendsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGeoDataUnauthorized`](./src/sdk/models/errors/getgeodataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetHomeDataUnauthorized`](./src/sdk/models/errors/gethomedataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerResourcesUnauthorized`](./src/sdk/models/errors/getserverresourcesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGlobalHubsUnauthorized`](./src/sdk/models/errors/getglobalhubsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryHubsUnauthorized`](./src/sdk/models/errors/getlibraryhubsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PerformSearchUnauthorized`](./src/sdk/models/errors/performsearchunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PerformVoiceSearchUnauthorized`](./src/sdk/models/errors/performvoicesearchunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchResultsUnauthorized`](./src/sdk/models/errors/getsearchresultsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetFileHashUnauthorized`](./src/sdk/models/errors/getfilehashunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetRecentlyAddedLibraryUnauthorized`](./src/sdk/models/errors/getrecentlyaddedlibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetAllLibrariesUnauthorized`](./src/sdk/models/errors/getalllibrariesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryDetailsUnauthorized`](./src/sdk/models/errors/getlibrarydetailsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`DeleteLibraryUnauthorized`](./src/sdk/models/errors/deletelibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryItemsUnauthorized`](./src/sdk/models/errors/getlibraryitemsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibrarySectionsAllUnauthorized`](./src/sdk/models/errors/getlibrarysectionsallunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetRefreshLibraryMetadataUnauthorized`](./src/sdk/models/errors/getrefreshlibrarymetadataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchLibraryUnauthorized`](./src/sdk/models/errors/getsearchlibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGenresLibraryUnauthorized`](./src/sdk/models/errors/getgenreslibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetCountriesLibraryUnauthorized`](./src/sdk/models/errors/getcountrieslibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetActorsLibraryUnauthorized`](./src/sdk/models/errors/getactorslibraryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchAllLibrariesUnauthorized`](./src/sdk/models/errors/getsearchalllibrariesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMediaMetaDataUnauthorized`](./src/sdk/models/errors/getmediametadataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMetadataChildrenUnauthorized`](./src/sdk/models/errors/getmetadatachildrenunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTopWatchedContentUnauthorized`](./src/sdk/models/errors/gettopwatchedcontentunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetWatchListUnauthorized`](./src/sdk/models/errors/getwatchlistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`LogLineUnauthorized`](./src/sdk/models/errors/loglineunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`LogMultiLineUnauthorized`](./src/sdk/models/errors/logmultilineunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`EnablePaperTrailUnauthorized`](./src/sdk/models/errors/enablepapertrailunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CreatePlaylistUnauthorized`](./src/sdk/models/errors/createplaylistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistsUnauthorized`](./src/sdk/models/errors/getplaylistsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistUnauthorized`](./src/sdk/models/errors/getplaylistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`DeletePlaylistUnauthorized`](./src/sdk/models/errors/deleteplaylistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UpdatePlaylistUnauthorized`](./src/sdk/models/errors/updateplaylistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistContentsUnauthorized`](./src/sdk/models/errors/getplaylistcontentsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`ClearPlaylistContentsUnauthorized`](./src/sdk/models/errors/clearplaylistcontentsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`AddPlaylistContentsUnauthorized`](./src/sdk/models/errors/addplaylistcontentsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UploadPlaylistUnauthorized`](./src/sdk/models/errors/uploadplaylistunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTransientTokenUnauthorized`](./src/sdk/models/errors/gettransienttokenunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSourceConnectionInformationUnauthorized`](./src/sdk/models/errors/getsourceconnectioninformationunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTokenDetailsUnauthorized`](./src/sdk/models/errors/gettokendetailsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PostUsersSignInDataUnauthorized`](./src/sdk/models/errors/postuserssignindataunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetStatisticsUnauthorized`](./src/sdk/models/errors/getstatisticsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetResourcesStatisticsUnauthorized`](./src/sdk/models/errors/getresourcesstatisticsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetBandwidthStatisticsUnauthorized`](./src/sdk/models/errors/getbandwidthstatisticsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSessionsUnauthorized`](./src/sdk/models/errors/getsessionsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSessionHistoryUnauthorized`](./src/sdk/models/errors/getsessionhistoryunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTranscodeSessionsUnauthorized`](./src/sdk/models/errors/gettranscodesessionsunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopTranscodeSessionUnauthorized`](./src/sdk/models/errors/stoptranscodesessionunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUpdateStatusUnauthorized`](./src/sdk/models/errors/getupdatestatusunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CheckForUpdatesUnauthorized`](./src/sdk/models/errors/checkforupdatesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`ApplyUpdatesUnauthorized`](./src/sdk/models/errors/applyupdatesunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUsersUnauthorized`](./src/sdk/models/errors/getusersunauthorized.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTokenByPinIdResponseBody`](./src/sdk/models/errors/gettokenbypinidresponsebody.ts): Not Found or Expired. Status code `404`. Applicable to 1 of 84 methods.*
* [`GetServerIdentityRequestTimeout`](./src/sdk/models/errors/getserveridentityrequesttimeout.ts): Request Timeout. Status code `408`. Applicable to 1 of 84 methods.*
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `{protocol}://{ip}:{port}` contains variables and is set to `https://10.10.10.47:32400` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable   | Parameter                         | Supported Values           | Default         | Description                                    |
| ---------- | --------------------------------- | -------------------------- | --------------- | ---------------------------------------------- |
| `protocol` | `protocol: models.ServerProtocol` | - `"http"`<br/>- `"https"` | `"https"`       | The protocol to use for the server connection  |
| `ip`       | `ip: string`                      | string                     | `"10.10.10.47"` | The IP address or hostname of your Plex Server |
| `port`     | `port: string`                    | string                     | `"32400"`       | The port of your Plex Server                   |

#### Example

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  protocol: "https",
  ip: "4982:bc2a:b4f8:efb5:2394:5bc3:ab4f:0e6d",
  port: "44765",
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.server.getServerCapabilities();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  serverURL: "https://10.10.10.47:32400",
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.server.getServerCapabilities();

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
- [`libraryGetLibrarySectionsAll`](docs/sdks/library/README.md#getlibrarysectionsall) - Get Library section media by tag ALL
- [`libraryGetMediaArts`](docs/sdks/library/README.md#getmediaarts) - Get Media Background Artwork
- [`libraryGetMediaMetaData`](docs/sdks/library/README.md#getmediametadata) - Get Media Metadata
- [`libraryGetMediaPosters`](docs/sdks/library/README.md#getmediaposters) - Get Media Posters
- [`libraryGetMetadataChildren`](docs/sdks/library/README.md#getmetadatachildren) - Get Items Children
- [`libraryGetRecentlyAddedLibrary`](docs/sdks/library/README.md#getrecentlyaddedlibrary) - Get Recently Added
- [`libraryGetRefreshLibraryMetadata`](docs/sdks/library/README.md#getrefreshlibrarymetadata) - Refresh Metadata Of The Library
- [`libraryGetSearchAllLibraries`](docs/sdks/library/README.md#getsearchalllibraries) - Search All Libraries
- [`libraryGetSearchLibrary`](docs/sdks/library/README.md#getsearchlibrary) - Search Library
- [`libraryGetTopWatchedContent`](docs/sdks/library/README.md#gettopwatchedcontent) - Get Top Watched Content
- [`libraryPostMediaArts`](docs/sdks/library/README.md#postmediaarts) - Upload Media Background Artwork
- [`libraryPostMediaPoster`](docs/sdks/library/README.md#postmediaposter) - Upload Media Poster
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

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.postMediaArts(
    2268,
    "https://api.mediux.pro/assets/fcfdc487-dd07-4993-a0c1-0a3015362e5b",
  );

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

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
