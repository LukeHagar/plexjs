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
* [`GetServerCapabilitiesBadRequest`](docs/sdk/models/errors/getservercapabilitiesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerPreferencesBadRequest`](docs/sdk/models/errors/getserverpreferencesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetAvailableClientsBadRequest`](docs/sdk/models/errors/getavailableclientsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetDevicesBadRequest`](docs/sdk/models/errors/getdevicesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMyPlexAccountBadRequest`](docs/sdk/models/errors/getmyplexaccountbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetResizedPhotoBadRequest`](docs/sdk/models/errors/getresizedphotobadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMediaProvidersBadRequest`](docs/sdk/models/errors/getmediaprovidersbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerListBadRequest`](docs/sdk/models/errors/getserverlistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`MarkPlayedBadRequest`](docs/sdk/models/errors/markplayedbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`MarkUnplayedBadRequest`](docs/sdk/models/errors/markunplayedbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UpdatePlayProgressBadRequest`](docs/sdk/models/errors/updateplayprogressbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetBannerImageBadRequest`](docs/sdk/models/errors/getbannerimagebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetThumbImageBadRequest`](docs/sdk/models/errors/getthumbimagebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTimelineBadRequest`](docs/sdk/models/errors/gettimelinebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartUniversalTranscodeBadRequest`](docs/sdk/models/errors/startuniversaltranscodebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerActivitiesBadRequest`](docs/sdk/models/errors/getserveractivitiesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CancelServerActivitiesBadRequest`](docs/sdk/models/errors/cancelserveractivitiesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetButlerTasksBadRequest`](docs/sdk/models/errors/getbutlertasksbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartAllTasksBadRequest`](docs/sdk/models/errors/startalltasksbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopAllTasksBadRequest`](docs/sdk/models/errors/stopalltasksbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StartTaskBadRequest`](docs/sdk/models/errors/starttaskbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopTaskBadRequest`](docs/sdk/models/errors/stoptaskbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetCompanionsDataBadRequest`](docs/sdk/models/errors/getcompanionsdatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUserFriendsBadRequest`](docs/sdk/models/errors/getuserfriendsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGeoDataBadRequest`](docs/sdk/models/errors/getgeodatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetHomeDataBadRequest`](docs/sdk/models/errors/gethomedatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerResourcesBadRequest`](docs/sdk/models/errors/getserverresourcesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPinBadRequest`](docs/sdk/models/errors/getpinbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTokenByPinIdBadRequest`](docs/sdk/models/errors/gettokenbypinidbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGlobalHubsBadRequest`](docs/sdk/models/errors/getglobalhubsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryHubsBadRequest`](docs/sdk/models/errors/getlibraryhubsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PerformSearchBadRequest`](docs/sdk/models/errors/performsearchbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PerformVoiceSearchBadRequest`](docs/sdk/models/errors/performvoicesearchbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchResultsBadRequest`](docs/sdk/models/errors/getsearchresultsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetFileHashBadRequest`](docs/sdk/models/errors/getfilehashbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetRecentlyAddedLibraryBadRequest`](docs/sdk/models/errors/getrecentlyaddedlibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetAllLibrariesBadRequest`](docs/sdk/models/errors/getalllibrariesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryDetailsBadRequest`](docs/sdk/models/errors/getlibrarydetailsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`DeleteLibraryBadRequest`](docs/sdk/models/errors/deletelibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibraryItemsBadRequest`](docs/sdk/models/errors/getlibraryitemsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetLibrarySectionsAllBadRequest`](docs/sdk/models/errors/getlibrarysectionsallbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetRefreshLibraryMetadataBadRequest`](docs/sdk/models/errors/getrefreshlibrarymetadatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchLibraryBadRequest`](docs/sdk/models/errors/getsearchlibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetGenresLibraryBadRequest`](docs/sdk/models/errors/getgenreslibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetCountriesLibraryBadRequest`](docs/sdk/models/errors/getcountrieslibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetActorsLibraryBadRequest`](docs/sdk/models/errors/getactorslibrarybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSearchAllLibrariesBadRequest`](docs/sdk/models/errors/getsearchalllibrariesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMediaMetaDataBadRequest`](docs/sdk/models/errors/getmediametadatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetMetadataChildrenBadRequest`](docs/sdk/models/errors/getmetadatachildrenbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTopWatchedContentBadRequest`](docs/sdk/models/errors/gettopwatchedcontentbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetWatchListBadRequest`](docs/sdk/models/errors/getwatchlistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`LogLineBadRequest`](docs/sdk/models/errors/loglinebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`LogMultiLineBadRequest`](docs/sdk/models/errors/logmultilinebadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`EnablePaperTrailBadRequest`](docs/sdk/models/errors/enablepapertrailbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CreatePlaylistBadRequest`](docs/sdk/models/errors/createplaylistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistsBadRequest`](docs/sdk/models/errors/getplaylistsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistBadRequest`](docs/sdk/models/errors/getplaylistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`DeletePlaylistBadRequest`](docs/sdk/models/errors/deleteplaylistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UpdatePlaylistBadRequest`](docs/sdk/models/errors/updateplaylistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetPlaylistContentsBadRequest`](docs/sdk/models/errors/getplaylistcontentsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`ClearPlaylistContentsBadRequest`](docs/sdk/models/errors/clearplaylistcontentsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`AddPlaylistContentsBadRequest`](docs/sdk/models/errors/addplaylistcontentsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`UploadPlaylistBadRequest`](docs/sdk/models/errors/uploadplaylistbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTransientTokenBadRequest`](docs/sdk/models/errors/gettransienttokenbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSourceConnectionInformationBadRequest`](docs/sdk/models/errors/getsourceconnectioninformationbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTokenDetailsBadRequest`](docs/sdk/models/errors/gettokendetailsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`PostUsersSignInDataBadRequest`](docs/sdk/models/errors/postuserssignindatabadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetStatisticsBadRequest`](docs/sdk/models/errors/getstatisticsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetResourcesStatisticsBadRequest`](docs/sdk/models/errors/getresourcesstatisticsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetBandwidthStatisticsBadRequest`](docs/sdk/models/errors/getbandwidthstatisticsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSessionsBadRequest`](docs/sdk/models/errors/getsessionsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetSessionHistoryBadRequest`](docs/sdk/models/errors/getsessionhistorybadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetTranscodeSessionsBadRequest`](docs/sdk/models/errors/gettranscodesessionsbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`StopTranscodeSessionBadRequest`](docs/sdk/models/errors/stoptranscodesessionbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUpdateStatusBadRequest`](docs/sdk/models/errors/getupdatestatusbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`CheckForUpdatesBadRequest`](docs/sdk/models/errors/checkforupdatesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`ApplyUpdatesBadRequest`](docs/sdk/models/errors/applyupdatesbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetUsersBadRequest`](docs/sdk/models/errors/getusersbadrequest.md): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 1 of 84 methods.*
* [`GetServerCapabilitiesUnauthorized`](docs/sdk/models/errors/getservercapabilitiesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerPreferencesUnauthorized`](docs/sdk/models/errors/getserverpreferencesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetAvailableClientsUnauthorized`](docs/sdk/models/errors/getavailableclientsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetDevicesUnauthorized`](docs/sdk/models/errors/getdevicesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMyPlexAccountUnauthorized`](docs/sdk/models/errors/getmyplexaccountunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetResizedPhotoUnauthorized`](docs/sdk/models/errors/getresizedphotounauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMediaProvidersUnauthorized`](docs/sdk/models/errors/getmediaprovidersunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerListUnauthorized`](docs/sdk/models/errors/getserverlistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`MarkPlayedUnauthorized`](docs/sdk/models/errors/markplayedunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`MarkUnplayedUnauthorized`](docs/sdk/models/errors/markunplayedunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UpdatePlayProgressUnauthorized`](docs/sdk/models/errors/updateplayprogressunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetBannerImageUnauthorized`](docs/sdk/models/errors/getbannerimageunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetThumbImageUnauthorized`](docs/sdk/models/errors/getthumbimageunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTimelineUnauthorized`](docs/sdk/models/errors/gettimelineunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartUniversalTranscodeUnauthorized`](docs/sdk/models/errors/startuniversaltranscodeunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerActivitiesUnauthorized`](docs/sdk/models/errors/getserveractivitiesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CancelServerActivitiesUnauthorized`](docs/sdk/models/errors/cancelserveractivitiesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetButlerTasksUnauthorized`](docs/sdk/models/errors/getbutlertasksunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartAllTasksUnauthorized`](docs/sdk/models/errors/startalltasksunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopAllTasksUnauthorized`](docs/sdk/models/errors/stopalltasksunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StartTaskUnauthorized`](docs/sdk/models/errors/starttaskunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopTaskUnauthorized`](docs/sdk/models/errors/stoptaskunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetCompanionsDataUnauthorized`](docs/sdk/models/errors/getcompanionsdataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUserFriendsUnauthorized`](docs/sdk/models/errors/getuserfriendsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGeoDataUnauthorized`](docs/sdk/models/errors/getgeodataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetHomeDataUnauthorized`](docs/sdk/models/errors/gethomedataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetServerResourcesUnauthorized`](docs/sdk/models/errors/getserverresourcesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGlobalHubsUnauthorized`](docs/sdk/models/errors/getglobalhubsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryHubsUnauthorized`](docs/sdk/models/errors/getlibraryhubsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PerformSearchUnauthorized`](docs/sdk/models/errors/performsearchunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PerformVoiceSearchUnauthorized`](docs/sdk/models/errors/performvoicesearchunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchResultsUnauthorized`](docs/sdk/models/errors/getsearchresultsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetFileHashUnauthorized`](docs/sdk/models/errors/getfilehashunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetRecentlyAddedLibraryUnauthorized`](docs/sdk/models/errors/getrecentlyaddedlibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetAllLibrariesUnauthorized`](docs/sdk/models/errors/getalllibrariesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryDetailsUnauthorized`](docs/sdk/models/errors/getlibrarydetailsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`DeleteLibraryUnauthorized`](docs/sdk/models/errors/deletelibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibraryItemsUnauthorized`](docs/sdk/models/errors/getlibraryitemsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetLibrarySectionsAllUnauthorized`](docs/sdk/models/errors/getlibrarysectionsallunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetRefreshLibraryMetadataUnauthorized`](docs/sdk/models/errors/getrefreshlibrarymetadataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchLibraryUnauthorized`](docs/sdk/models/errors/getsearchlibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetGenresLibraryUnauthorized`](docs/sdk/models/errors/getgenreslibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetCountriesLibraryUnauthorized`](docs/sdk/models/errors/getcountrieslibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetActorsLibraryUnauthorized`](docs/sdk/models/errors/getactorslibraryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSearchAllLibrariesUnauthorized`](docs/sdk/models/errors/getsearchalllibrariesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMediaMetaDataUnauthorized`](docs/sdk/models/errors/getmediametadataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetMetadataChildrenUnauthorized`](docs/sdk/models/errors/getmetadatachildrenunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTopWatchedContentUnauthorized`](docs/sdk/models/errors/gettopwatchedcontentunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetWatchListUnauthorized`](docs/sdk/models/errors/getwatchlistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`LogLineUnauthorized`](docs/sdk/models/errors/loglineunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`LogMultiLineUnauthorized`](docs/sdk/models/errors/logmultilineunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`EnablePaperTrailUnauthorized`](docs/sdk/models/errors/enablepapertrailunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CreatePlaylistUnauthorized`](docs/sdk/models/errors/createplaylistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistsUnauthorized`](docs/sdk/models/errors/getplaylistsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistUnauthorized`](docs/sdk/models/errors/getplaylistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`DeletePlaylistUnauthorized`](docs/sdk/models/errors/deleteplaylistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UpdatePlaylistUnauthorized`](docs/sdk/models/errors/updateplaylistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetPlaylistContentsUnauthorized`](docs/sdk/models/errors/getplaylistcontentsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`ClearPlaylistContentsUnauthorized`](docs/sdk/models/errors/clearplaylistcontentsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`AddPlaylistContentsUnauthorized`](docs/sdk/models/errors/addplaylistcontentsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`UploadPlaylistUnauthorized`](docs/sdk/models/errors/uploadplaylistunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTransientTokenUnauthorized`](docs/sdk/models/errors/gettransienttokenunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSourceConnectionInformationUnauthorized`](docs/sdk/models/errors/getsourceconnectioninformationunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTokenDetailsUnauthorized`](docs/sdk/models/errors/gettokendetailsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`PostUsersSignInDataUnauthorized`](docs/sdk/models/errors/postuserssignindataunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetStatisticsUnauthorized`](docs/sdk/models/errors/getstatisticsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetResourcesStatisticsUnauthorized`](docs/sdk/models/errors/getresourcesstatisticsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetBandwidthStatisticsUnauthorized`](docs/sdk/models/errors/getbandwidthstatisticsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSessionsUnauthorized`](docs/sdk/models/errors/getsessionsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetSessionHistoryUnauthorized`](docs/sdk/models/errors/getsessionhistoryunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTranscodeSessionsUnauthorized`](docs/sdk/models/errors/gettranscodesessionsunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`StopTranscodeSessionUnauthorized`](docs/sdk/models/errors/stoptranscodesessionunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUpdateStatusUnauthorized`](docs/sdk/models/errors/getupdatestatusunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`CheckForUpdatesUnauthorized`](docs/sdk/models/errors/checkforupdatesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`ApplyUpdatesUnauthorized`](docs/sdk/models/errors/applyupdatesunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetUsersUnauthorized`](docs/sdk/models/errors/getusersunauthorized.md): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 1 of 84 methods.*
* [`GetTokenByPinIdResponseBody`](docs/sdk/models/errors/gettokenbypinidresponsebody.md): Not Found or Expired. Status code `404`. Applicable to 1 of 84 methods.*
* [`GetServerIdentityRequestTimeout`](docs/sdk/models/errors/getserveridentityrequesttimeout.md): Request Timeout. Status code `408`. Applicable to 1 of 84 methods.*
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
