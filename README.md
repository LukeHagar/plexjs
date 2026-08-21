# @parke.dev/plexjs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Plex Media Server: OpenAPI specification for the Plex Media Server (PMS) API and the plex.tv cloud API.

## Base URLs

- **PMS (local server)**: `http(s)://{host}:{port}` — Most endpoints in this spec target the local PMS.
- **plex.tv v2**: `https://plex.tv/api/v2` — Authentication, account, and social endpoints.
- **plex.tv v1 (legacy)**: `https://plex.tv/api` — Legacy XML endpoints (friends, home users, claims).
- **Cloud providers**: `https://discover.provider.plex.tv`, `https://metadata.provider.plex.tv`, etc.

Endpoints that target plex.tv or cloud providers declare an override `servers` array.

## Authentication

- **X-Plex-Token**: Pass via the `X-Plex-Token` header on every request. It may also be passed as a query parameter (`?X-Plex-Token=...`) on all endpoints.
- **X-Plex-Client-Identifier**: Mandatory for OAuth PIN flow (`/pins`) and JWT device registration. Must be a unique, persistent identifier for the client application.
- **OAuth PIN Flow**: `POST /pins` → user visits `https://plex.tv/link` → `GET /pins/{pinId}` → obtain `authToken`.

## Response Formats

- **PMS endpoints**: Return XML by default. Send `Accept: application/json` to receive JSON.
- **plex.tv v2**: Returns JSON by default.
- **Legacy v1 endpoints** (`/pins.xml`, `/api/resources`, `/api/users/`): Return XML only.

## Rate Limiting

plex.tv auth endpoints (PIN creation, sign-in) enforce rate limits. Clients should implement exponential backoff and reuse tokens rather than re-authenticating on every request.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@parke.dev/plexjs](#parkedevplexjs)
  * [Base URLs](#base-urls)
  * [Authentication](#authentication)
  * [Response Formats](#response-formats)
  * [Rate Limiting](#rate-limiting)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication-1)
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
npm add @parke.dev/plexjs
```

### PNPM

```bash
pnpm add @parke.dev/plexjs
```

### Bun

```bash
bun add @parke.dev/plexjs
```

### Yarn

```bash
yarn add @parke.dev/plexjs
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import {
  Extension,
  StartTranscodeSessionLocation,
  StartTranscodeSessionProtocol,
  StartTranscodeSessionSubtitles,
} from "@parke.dev/plexjs/models/operations";
import {
  Accepts,
  AdvancedSubtitles,
  BoolInt,
  TranscodeType,
} from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.transcoder.startTranscodeSession({
    transcodeType: TranscodeType.Music,
    advancedSubtitles: AdvancedSubtitles.Burn,
    extension: Extension.Mpd,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.True,
    autoAdjustSubtitle: BoolInt.True,
    directPlay: BoolInt.True,
    directStream: BoolInt.True,
    directStreamAudio: BoolInt.True,
    disableResolutionRotation: BoolInt.True,
    hasMDE: BoolInt.True,
    location: StartTranscodeSessionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: StartTranscodeSessionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    subtitles: StartTranscodeSessionSubtitles.Burn,
    videoResolution: "1080x1080",
    copyts: BoolInt.True,
    videoBitrate: 12000,
    videoQuality: 50,
    xPlexClientProfileExtra:
      "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Activities](docs/sdks/activities/README.md)

* [listActivities](docs/sdks/activities/README.md#listactivities) - Get all activities
* [cancelActivity](docs/sdks/activities/README.md#cancelactivity) - Cancel a running activity

### [Authentication](docs/sdks/authentication/README.md)

* [registerDeviceJWK](docs/sdks/authentication/README.md#registerdevicejwk) - Register Device JWK
* [getAuthKeys](docs/sdks/authentication/README.md#getauthkeys) - Get Auth Keys
* [getAuthNonce](docs/sdks/authentication/README.md#getauthnonce) - Get Auth Nonce
* [exchangeJWTToken](docs/sdks/authentication/README.md#exchangejwttoken) - Exchange JWT Token
* [getClaimToken](docs/sdks/authentication/README.md#getclaimtoken) - Get Claim Token
* [getFeatures](docs/sdks/authentication/README.md#getfeatures) - Get Features
* [ping](docs/sdks/authentication/README.md#ping) - Ping the server
* [createOAuthPin](docs/sdks/authentication/README.md#createoauthpin) - Create OAuth PIN
* [createLegacyPin](docs/sdks/authentication/README.md#createlegacypin) - Create Legacy PIN
* [linkOAuthPin](docs/sdks/authentication/README.md#linkoauthpin) - Link OAuth PIN
* [getServerAccessTokens](docs/sdks/authentication/README.md#getserveraccesstokens) - Get Server Access Tokens
* [getTokenDetails](docs/sdks/authentication/README.md#gettokendetails) - Get Token Details
* [changePassword](docs/sdks/authentication/README.md#changepassword) - Change Password
* [postUsersSignInData](docs/sdks/authentication/README.md#postuserssignindata) - Get User Sign In Data
* [signOut](docs/sdks/authentication/README.md#signout) - Sign Out
* [switchHomeUser](docs/sdks/authentication/README.md#switchhomeuser) - Switch Home User
* [getOAuthPin](docs/sdks/authentication/README.md#getoauthpin) - Get OAuth PIN Status

### [Butler](docs/sdks/butler/README.md)

* [stopTasks](docs/sdks/butler/README.md#stoptasks) - Stop all Butler tasks
* [getTasks](docs/sdks/butler/README.md#gettasks) - Get all Butler tasks
* [startTasks](docs/sdks/butler/README.md#starttasks) - Start all Butler tasks
* [stopTask](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task
* [startTask](docs/sdks/butler/README.md#starttask) - Start a single Butler task

### [Collections](docs/sdks/collections/README.md)

* [createCollection](docs/sdks/collections/README.md#createcollection) - Create collection

### [Content](docs/sdks/content/README.md)

* [getCollectionItems](docs/sdks/content/README.md#getcollectionitems) - Get items in a collection
* [getMetadataItem](docs/sdks/content/README.md#getmetadataitem) - Get a metadata item
* [getAlbums](docs/sdks/content/README.md#getalbums) - Set section albums
* [listContent](docs/sdks/content/README.md#listcontent) - Get items in the section
* [getAllLeaves](docs/sdks/content/README.md#getallleaves) - Set section leaves
* [getArts](docs/sdks/content/README.md#getarts) - Set section artwork
* [getCategories](docs/sdks/content/README.md#getcategories) - Set section categories
* [getCluster](docs/sdks/content/README.md#getcluster) - Set section clusters
* [getSonicPath](docs/sdks/content/README.md#getsonicpath) - Similar tracks to transition from one to another
* [getFolders](docs/sdks/content/README.md#getfolders) - Get all folder locations
* [listMoments](docs/sdks/content/README.md#listmoments) - Set section moments
* [getSonicallySimilar](docs/sdks/content/README.md#getsonicallysimilar) - The nearest audio tracks
* [getCollectionImage](docs/sdks/content/README.md#getcollectionimage) - Get a collection's image

### [Devices](docs/sdks/devices/README.md)

* [getAvailableGrabbers](docs/sdks/devices/README.md#getavailablegrabbers) - Get available grabbers
* [listDevices](docs/sdks/devices/README.md#listdevices) - Get all devices
* [addDevice](docs/sdks/devices/README.md#adddevice) - Add a device
* [discoverDevices](docs/sdks/devices/README.md#discoverdevices) - Tell grabbers to discover devices
* [removeDevice](docs/sdks/devices/README.md#removedevice) - Remove a device
* [getDeviceDetails](docs/sdks/devices/README.md#getdevicedetails) - Get device details
* [modifyDevice](docs/sdks/devices/README.md#modifydevice) - Enable or disable a device
* [setChannelmap](docs/sdks/devices/README.md#setchannelmap) - Set a device's channel mapping
* [getDevicesChannels](docs/sdks/devices/README.md#getdeviceschannels) - Get a device's channels
* [setDevicePreferences](docs/sdks/devices/README.md#setdevicepreferences) - Set device preferences
* [stopScan](docs/sdks/devices/README.md#stopscan) - Tell a device to stop scanning for channels
* [scan](docs/sdks/devices/README.md#scan) - Tell a device to scan for channels
* [getThumb](docs/sdks/devices/README.md#getthumb) - Get device thumb

### [DownloadQueue](docs/sdks/downloadqueue/README.md)

* [createDownloadQueue](docs/sdks/downloadqueue/README.md#createdownloadqueue) - Create download queue
* [getDownloadQueue](docs/sdks/downloadqueue/README.md#getdownloadqueue) - Get a download queue
* [addDownloadQueueItems](docs/sdks/downloadqueue/README.md#adddownloadqueueitems) - Add to download queue
* [listDownloadQueueItems](docs/sdks/downloadqueue/README.md#listdownloadqueueitems) - Get download queue items
* [getItemDecision](docs/sdks/downloadqueue/README.md#getitemdecision) - Grab download queue item decision
* [getDownloadQueueMedia](docs/sdks/downloadqueue/README.md#getdownloadqueuemedia) - Grab download queue media
* [removeDownloadQueueItems](docs/sdks/downloadqueue/README.md#removedownloadqueueitems) - Delete download queue items
* [getDownloadQueueItems](docs/sdks/downloadqueue/README.md#getdownloadqueueitems) - Get download queue items
* [restartProcessingDownloadQueueItems](docs/sdks/downloadqueue/README.md#restartprocessingdownloadqueueitems) - Restart processing of items from the decision

### [DVRs](docs/sdks/dvrs/README.md)

* [listDVRs](docs/sdks/dvrs/README.md#listdvrs) - Get DVRs
* [createDVR](docs/sdks/dvrs/README.md#createdvr) - Create a DVR
* [deleteDVR](docs/sdks/dvrs/README.md#deletedvr) - Delete a single DVR
* [getDVR](docs/sdks/dvrs/README.md#getdvr) - Get a single DVR
* [patchDVRSettings](docs/sdks/dvrs/README.md#patchdvrsettings) - Update DVR Settings
* [updateDVRSettings](docs/sdks/dvrs/README.md#updatedvrsettings) - Update DVR Settings
* [getDVRChannels](docs/sdks/dvrs/README.md#getdvrchannels) - Get DVR Channels
* [getDVRGuide](docs/sdks/dvrs/README.md#getdvrguide) - Get DVR Guide
* [deleteLineup](docs/sdks/dvrs/README.md#deletelineup) - Delete a DVR Lineup
* [addLineup](docs/sdks/dvrs/README.md#addlineup) - Add a DVR Lineup
* [setDVRPreferences](docs/sdks/dvrs/README.md#setdvrpreferences) - Set DVR preferences
* [stopDVRReload](docs/sdks/dvrs/README.md#stopdvrreload) - Tell a DVR to stop reloading program guide
* [reloadGuide](docs/sdks/dvrs/README.md#reloadguide) - Tell a DVR to reload program guide
* [tuneChannel](docs/sdks/dvrs/README.md#tunechannel) - Tune a channel on a DVR
* [removeDeviceFromDVR](docs/sdks/dvrs/README.md#removedevicefromdvr) - Remove a device from an existing DVR
* [addDeviceToDVR](docs/sdks/dvrs/README.md#adddevicetodvr) - Add a device to an existing DVR

### [Epg](docs/sdks/epg/README.md)

* [computeChannelMap](docs/sdks/epg/README.md#computechannelmap) - Compute the best channel map
* [getChannels](docs/sdks/epg/README.md#getchannels) - Get channels for a lineup
* [getCountries](docs/sdks/epg/README.md#getcountries) - Get all countries
* [getEPGGuide](docs/sdks/epg/README.md#getepgguide) - Get EPG Guide
* [getAllLanguages](docs/sdks/epg/README.md#getalllanguages) - Get all languages
* [getLineup](docs/sdks/epg/README.md#getlineup) - Compute the best lineup
* [getLineupChannels](docs/sdks/epg/README.md#getlineupchannels) - Get the channels for multiple lineups
* [searchEPG](docs/sdks/epg/README.md#searchepg) - Search EPG
* [getCountriesLineups](docs/sdks/epg/README.md#getcountrieslineups) - Get lineups for a country via postal code
* [getCountryRegions](docs/sdks/epg/README.md#getcountryregions) - Get regions for a country
* [listLineups](docs/sdks/epg/README.md#listlineups) - Get lineups for a region

### [Events](docs/sdks/events/README.md)

* [getNotifications](docs/sdks/events/README.md#getnotifications) - Connect to Eventsource
* [connectWebSocket](docs/sdks/events/README.md#connectwebsocket) - Connect to WebSocket
* [getWebsocketNotifications](docs/sdks/events/README.md#getwebsocketnotifications) - Get WebSocket Notifications

### [General](docs/sdks/general/README.md)

* [getServerInfo](docs/sdks/general/README.md#getserverinfo) - Get PMS info
* [getSystemAccounts](docs/sdks/general/README.md#getsystemaccounts) - Get System Accounts
* [getUserWebhooks](docs/sdks/general/README.md#getuserwebhooks) - User Webhooks
* [addUserWebhook](docs/sdks/general/README.md#adduserwebhook) - Add User Webhook
* [getClients](docs/sdks/general/README.md#getclients) - Get Clients
* [getCloudServer](docs/sdks/general/README.md#getcloudserver) - Get Cloud Server
* [getSystemDevices](docs/sdks/general/README.md#getsystemdevices) - Get System Devices
* [getDiagnostics](docs/sdks/general/README.md#getdiagnostics) - Get Diagnostics
* [downloadDatabaseDiagnostics](docs/sdks/general/README.md#downloaddatabasediagnostics) - Download Database Diagnostics
* [downloadLogBundle](docs/sdks/general/README.md#downloadlogbundle) - Download Log Bundle
* [getGeoIP](docs/sdks/general/README.md#getgeoip) - Get GeoIP
* [getIdentity](docs/sdks/general/README.md#getidentity) - Get PMS identity
* [getIP](docs/sdks/general/README.md#getip) - Get IP
* [claimServer](docs/sdks/general/README.md#claimserver) - Claim Server
* [refreshReachability](docs/sdks/general/README.md#refreshreachability) - Refresh Reachability
* [getSourceConnectionInformation](docs/sdks/general/README.md#getsourceconnectioninformation) - Get Source Connection Information
* [createTransientToken](docs/sdks/general/README.md#createtransienttoken) - Get Transient Tokens
* [getLocalServers](docs/sdks/general/README.md#getlocalservers) - Get Local Servers
* [browseFilesystem](docs/sdks/general/README.md#browsefilesystem) - Browse Filesystem
* [getBandwidthStatistics](docs/sdks/general/README.md#getbandwidthstatistics) - Get Bandwidth Statistics
* [getResourceStatistics](docs/sdks/general/README.md#getresourcestatistics) - Get Resource Statistics
* [getSyncStatus](docs/sdks/general/README.md#getsyncstatus) - Get Sync Status
* [getSyncItems](docs/sdks/general/README.md#getsyncitems) - Get Sync Items
* [getSyncQueue](docs/sdks/general/README.md#getsyncqueue) - Get Sync Queue
* [refreshSyncContent](docs/sdks/general/README.md#refreshsynccontent) - Refresh Sync Content
* [refreshSyncLists](docs/sdks/general/README.md#refreshsynclists) - Refresh Sync Lists
* [getSyncTranscodeQueue](docs/sdks/general/README.md#getsynctranscodequeue) - Get Sync Transcode Queue
* [getMetadataAgents](docs/sdks/general/README.md#getmetadataagents) - Get Metadata Agents
* [getSystemSettings](docs/sdks/general/README.md#getsystemsettings) - Get System Settings
* [checkForSystemUpdates](docs/sdks/general/README.md#checkforsystemupdates) - Check for System Updates
* [getWebhooks](docs/sdks/general/README.md#getwebhooks) - Get Webhooks
* [addWebhook](docs/sdks/general/README.md#addwebhook) - Add Webhook
* [getPlexDownloads](docs/sdks/general/README.md#getplexdownloads) - Get Plex Downloads
* [browseFilesystemPath](docs/sdks/general/README.md#browsefilesystempath) - Browse Filesystem Path
* [getSyncItem](docs/sdks/general/README.md#getsyncitem) - Get Sync Item
* [getMetadataAgentDetails](docs/sdks/general/README.md#getmetadataagentdetails) - Get Metadata Agent Details

### [Hubs](docs/sdks/hubs/README.md)

* [getAllHubs](docs/sdks/hubs/README.md#getallhubs) - Get global hubs
* [getContinueWatching](docs/sdks/hubs/README.md#getcontinuewatching) - Get the continue watching hub
* [getContinueWatchingItems](docs/sdks/hubs/README.md#getcontinuewatchingitems) - Get Continue Watching Items
* [getHomeRecentlyAdded](docs/sdks/hubs/README.md#gethomerecentlyadded) - Get home hubs Recently Added
* [getHubItems](docs/sdks/hubs/README.md#gethubitems) - Get a hub's items
* [getPromotedHubs](docs/sdks/hubs/README.md#getpromotedhubs) - Get the hubs which are promoted
* [getMetadataHubs](docs/sdks/hubs/README.md#getmetadatahubs) - Get hubs for section by metadata item
* [getPostplayHubs](docs/sdks/hubs/README.md#getpostplayhubs) - Get postplay hubs
* [getRelatedHubs](docs/sdks/hubs/README.md#getrelatedhubs) - Get related hubs
* [getSectionHubs](docs/sdks/hubs/README.md#getsectionhubs) - Get section hubs
* [resetSectionDefaults](docs/sdks/hubs/README.md#resetsectiondefaults) - Reset hubs to defaults
* [listHubs](docs/sdks/hubs/README.md#listhubs) - Get hubs
* [createCustomHub](docs/sdks/hubs/README.md#createcustomhub) - Create a custom hub
* [moveHub](docs/sdks/hubs/README.md#movehub) - Move Hub
* [deleteCustomHub](docs/sdks/hubs/README.md#deletecustomhub) - Delete a custom hub
* [updateHubVisibility](docs/sdks/hubs/README.md#updatehubvisibility) - Change hub visibility

### [Library](docs/sdks/library/README.md)

* [getRootLibrary](docs/sdks/library/README.md#getrootlibrary) - Get Root Library
* [getLibraryItems](docs/sdks/library/README.md#getlibraryitems) - Get all items in library
* [deleteCaches](docs/sdks/library/README.md#deletecaches) - Delete library caches
* [cleanBundles](docs/sdks/library/README.md#cleanbundles) - Clean bundles
* [ingestTransientItem](docs/sdks/library/README.md#ingesttransientitem) - Ingest a transient item
* [getLibraryMatches](docs/sdks/library/README.md#getlibrarymatches) - Get library matches
* [optimizeLibrary](docs/sdks/library/README.md#optimizelibrary) - Get Optimize Library
* [optimizeLibraryPost](docs/sdks/library/README.md#optimizelibrarypost) - Optimize Library
* [optimizeDatabase](docs/sdks/library/README.md#optimizedatabase) - Optimize the Database
* [getRandomArtwork](docs/sdks/library/README.md#getrandomartwork) - Get random artwork
* [getRecentlyAddedGlobal](docs/sdks/library/README.md#getrecentlyaddedglobal) - Get Global Recently Added
* [getLibrarySectionsFallback](docs/sdks/library/README.md#getlibrarysectionsfallback) - Get Library Sections (Fallback)
* [getSections](docs/sdks/library/README.md#getsections) - Get library sections (main Media Provider Only)
* [addSection](docs/sdks/library/README.md#addsection) - Add a library section
* [stopAllRefreshes](docs/sdks/library/README.md#stopallrefreshes) - Stop refresh
* [getSectionsPrefs](docs/sdks/library/README.md#getsectionsprefs) - Get section prefs
* [refreshSectionsMetadata](docs/sdks/library/README.md#refreshsectionsmetadata) - Refresh all sections
* [getTags](docs/sdks/library/README.md#gettags) - Get all library tags of a type
* [uploadArt](docs/sdks/library/README.md#uploadart) - Upload media art Art
* [getMetadataChildren](docs/sdks/library/README.md#getmetadatachildren) - Get Metadata Children
* [computeSonicPath](docs/sdks/library/README.md#computesonicpath) - Compute Sonic Path
* [getMetadataGrandchildren](docs/sdks/library/README.md#getmetadatagrandchildren) - Get Metadata Grandchildren
* [getMetadataGrandparent](docs/sdks/library/README.md#getmetadatagrandparent) - Get Metadata Grandparent
* [getNearestMetadata](docs/sdks/library/README.md#getnearestmetadata) - Get Nearest Metadata
* [getMetadataOnDeck](docs/sdks/library/README.md#getmetadataondeck) - Get Metadata On Deck
* [getMetadataParent](docs/sdks/library/README.md#getmetadataparent) - Get Metadata Parent
* [uploadPoster](docs/sdks/library/README.md#uploadposter) - Upload media art Poster
* [getMetadataReviews](docs/sdks/library/README.md#getmetadatareviews) - Get Metadata Reviews
* [deleteMetadataItem](docs/sdks/library/README.md#deletemetadataitem) - Delete a metadata item
* [editMetadataItem](docs/sdks/library/README.md#editmetadataitem) - Edit a metadata item
* [detectAds](docs/sdks/library/README.md#detectads) - Ad-detect an item
* [getAllItemLeaves](docs/sdks/library/README.md#getallitemleaves) - Get the leaves of an item
* [analyzeMetadata](docs/sdks/library/README.md#analyzemetadata) - Analyze an item
* [generateThumbs](docs/sdks/library/README.md#generatethumbs) - Generate thumbs of chapters for an item
* [detectCredits](docs/sdks/library/README.md#detectcredits) - Credit detect a metadata item
* [getExtras](docs/sdks/library/README.md#getextras) - Get an item's extras
* [addExtras](docs/sdks/library/README.md#addextras) - Add to an item's extras
* [getFile](docs/sdks/library/README.md#getfile) - Get a file from a metadata or media bundle
* [startBifGeneration](docs/sdks/library/README.md#startbifgeneration) - Start BIF generation of an item
* [detectIntros](docs/sdks/library/README.md#detectintros) - Intro detect an item
* [createMarker](docs/sdks/library/README.md#createmarker) - Create a marker
* [matchItem](docs/sdks/library/README.md#matchitem) - Match a metadata item
* [listMatches](docs/sdks/library/README.md#listmatches) - Get metadata matches for an item
* [mergeItems](docs/sdks/library/README.md#mergeitems) - Merge a metadata item
* [setItemPreferences](docs/sdks/library/README.md#setitempreferences) - Set metadata preferences
* [refreshItemsMetadata](docs/sdks/library/README.md#refreshitemsmetadata) - Refresh a metadata item
* [getRelatedItems](docs/sdks/library/README.md#getrelateditems) - Get related items
* [listSimilar](docs/sdks/library/README.md#listsimilar) - Get similar items
* [splitItem](docs/sdks/library/README.md#splititem) - Split a metadata item
* [getSubtitles](docs/sdks/library/README.md#getsubtitles) - Get subtitles
* [getItemTree](docs/sdks/library/README.md#getitemtree) - Get metadata items as a tree
* [unmatch](docs/sdks/library/README.md#unmatch) - Unmatch a metadata item
* [listTopUsers](docs/sdks/library/README.md#listtopusers) - Get metadata top users
* [detectVoiceActivity](docs/sdks/library/README.md#detectvoiceactivity) - Detect voice activity
* [getAugmentationStatus](docs/sdks/library/README.md#getaugmentationstatus) - Get augmentation status
* [setStreamSelection](docs/sdks/library/README.md#setstreamselection) - Set stream selection
* [getPerson](docs/sdks/library/README.md#getperson) - Get person details
* [listPersonMedia](docs/sdks/library/README.md#listpersonmedia) - Get media for a person
* [deleteLibrarySection](docs/sdks/library/README.md#deletelibrarysection) - Delete a library section
* [getLibraryDetails](docs/sdks/library/README.md#getlibrarydetails) - Get a library section by id
* [editSection](docs/sdks/library/README.md#editsection) - Edit a library section
* [getSectionAgents](docs/sdks/library/README.md#getsectionagents) - Get Section Agents
* [updateItems](docs/sdks/library/README.md#updateitems) - Set the fields of the filtered items
* [startAnalysis](docs/sdks/library/README.md#startanalysis) - Analyze a section
* [getSectionArtists](docs/sdks/library/README.md#getsectionartists) - Get Section Artists
* [autocomplete](docs/sdks/library/README.md#autocomplete) - Get autocompletions for search
* [getByContentRating](docs/sdks/library/README.md#getbycontentrating) - Get By Content Rating
* [getByDecade](docs/sdks/library/README.md#getbydecade) - Get By Decade
* [getByFolder](docs/sdks/library/README.md#getbyfolder) - Get By Folder
* [getByResolution](docs/sdks/library/README.md#getbyresolution) - Get By Resolution
* [getByYear](docs/sdks/library/README.md#getbyyear) - Get By Year
* [getSectionClips](docs/sdks/library/README.md#getsectionclips) - Get Section Clips
* [getCollections](docs/sdks/library/README.md#getcollections) - Get collections in a section
* [getCommon](docs/sdks/library/README.md#getcommon) - Get common fields for items
* [getSectionEdit](docs/sdks/library/README.md#getsectionedit) - Edit Section
* [editLibrarySection](docs/sdks/library/README.md#editlibrarysection) - Edit Section
* [emptyTrash](docs/sdks/library/README.md#emptytrash) - Get Empty Trash
* [emptyTrashPost](docs/sdks/library/README.md#emptytrashpost) - Empty Trash
* [emptyTrashPut](docs/sdks/library/README.md#emptytrashput) - Empty section trash
* [getSectionEpisodes](docs/sdks/library/README.md#getsectionepisodes) - Get Section Episodes
* [getSectionFilters](docs/sdks/library/README.md#getsectionfilters) - Get section filters
* [getFirstCharacters](docs/sdks/library/README.md#getfirstcharacters) - Get list of first characters
* [getLibrarySectionHubs](docs/sdks/library/README.md#getlibrarysectionhubs) - Get Section Hubs
* [deleteIndexes](docs/sdks/library/README.md#deleteindexes) - Delete section indexes
* [deleteIntros](docs/sdks/library/README.md#deleteintros) - Delete section intro markers
* [getSectionLabels](docs/sdks/library/README.md#getsectionlabels) - Get Section Labels
* [matchSectionItems](docs/sdks/library/README.md#matchsectionitems) - Match Section Items
* [moveSection](docs/sdks/library/README.md#movesection) - Move Section
* [getSectionMovies](docs/sdks/library/README.md#getsectionmovies) - Get Section Movies
* [getNewestForSection](docs/sdks/library/README.md#getnewestforsection) - Get Newest for Section
* [getOnDeckForSection](docs/sdks/library/README.md#getondeckforsection) - Get On Deck for Section
* [optimizeSection](docs/sdks/library/README.md#optimizesection) - Get Optimize Section
* [optimizeSectionPost](docs/sdks/library/README.md#optimizesectionpost) - Optimize Section
* [getSectionPhotos](docs/sdks/library/README.md#getsectionphotos) - Get Section Photos
* [getSectionPlaylists](docs/sdks/library/README.md#getsectionplaylists) - Get Section Playlists
* [getSectionPreferences](docs/sdks/library/README.md#getsectionpreferences) - Get section prefs
* [setSectionPreferences](docs/sdks/library/README.md#setsectionpreferences) - Set section prefs
* [getRecentlyAddedForSection](docs/sdks/library/README.md#getrecentlyaddedforsection) - Get Recently Added for Section
* [cancelRefresh](docs/sdks/library/README.md#cancelrefresh) - Cancel section refresh
* [refreshSection](docs/sdks/library/README.md#refreshsection) - Get Refresh Section
* [refreshSectionPost](docs/sdks/library/README.md#refreshsectionpost) - Refresh Section
* [searchSection](docs/sdks/library/README.md#searchsection) - Search Section
* [getSectionSettings](docs/sdks/library/README.md#getsectionsettings) - Get Section Settings
* [getSectionShows](docs/sdks/library/README.md#getsectionshows) - Get Section Shows
* [getAvailableSorts](docs/sdks/library/README.md#getavailablesorts) - Get a section sorts
* [getSectionTags](docs/sdks/library/README.md#getsectiontags) - Get Section Tags
* [getSectionTimeline](docs/sdks/library/README.md#getsectiontimeline) - Get Section Timeline
* [unmatchSectionItems](docs/sdks/library/README.md#unmatchsectionitems) - Unmatch Section Items
* [getUnwatchedForSection](docs/sdks/library/README.md#getunwatchedforsection) - Get Unwatched for Section
* [getStreamLevels](docs/sdks/library/README.md#getstreamlevels) - Get loudness about a stream in json
* [getStreamLoudness](docs/sdks/library/README.md#getstreamloudness) - Get loudness about a stream
* [getChapterImage](docs/sdks/library/README.md#getchapterimage) - Get a chapter image
* [setItemArtwork](docs/sdks/library/README.md#setitemartwork) - Set an item's artwork, theme, etc
* [updateItemArtwork](docs/sdks/library/README.md#updateitemartwork) - Set an item's artwork, theme, etc
* [deleteMarker](docs/sdks/library/README.md#deletemarker) - Delete a marker
* [editMarker](docs/sdks/library/README.md#editmarker) - Edit a marker
* [deleteMediaItem](docs/sdks/library/README.md#deletemediaitem) - Delete a media item
* [getPartIndex](docs/sdks/library/README.md#getpartindex) - Get BIF index for a part
* [deleteCollection](docs/sdks/library/README.md#deletecollection) - Delete a collection
* [getSectionImage](docs/sdks/library/README.md#getsectionimage) - Get a section composite image
* [deleteStream](docs/sdks/library/README.md#deletestream) - Delete a stream
* [getStream](docs/sdks/library/README.md#getstream) - Get a stream
* [setStreamOffset](docs/sdks/library/README.md#setstreamoffset) - Set a stream offset
* [getItemArtwork](docs/sdks/library/README.md#getitemartwork) - Get an item's artwork, theme, etc
* [getMediaPart](docs/sdks/library/README.md#getmediapart) - Get a media part
* [getImageFromBif](docs/sdks/library/README.md#getimagefrombif) - Get an image from part BIF

### [LibraryCollections](docs/sdks/librarycollections/README.md)

* [addCollectionItems](docs/sdks/librarycollections/README.md#addcollectionitems) - Add items to a collection
* [updateCollectionItem](docs/sdks/librarycollections/README.md#updatecollectionitem) - Update an item in a collection
* [moveCollectionItem](docs/sdks/librarycollections/README.md#movecollectionitem) - Reorder an item in the collection

### [LibraryPlaylists](docs/sdks/libraryplaylists/README.md)

* [createPlaylist](docs/sdks/libraryplaylists/README.md#createplaylist) - Create a Playlist
* [uploadPlaylist](docs/sdks/libraryplaylists/README.md#uploadplaylist) - Upload media art
* [deletePlaylist](docs/sdks/libraryplaylists/README.md#deleteplaylist) - Delete a Playlist
* [updatePlaylist](docs/sdks/libraryplaylists/README.md#updateplaylist) - Editing a Playlist
* [getPlaylistGenerators](docs/sdks/libraryplaylists/README.md#getplaylistgenerators) - Get a playlist's generators
* [clearPlaylistItems](docs/sdks/libraryplaylists/README.md#clearplaylistitems) - Clearing a playlist
* [addPlaylistItems](docs/sdks/libraryplaylists/README.md#addplaylistitems) - Adding to  a Playlist
* [deletePlaylistItem](docs/sdks/libraryplaylists/README.md#deleteplaylistitem) - Delete a Generator
* [getPlaylistGenerator](docs/sdks/libraryplaylists/README.md#getplaylistgenerator) - Get a playlist generator
* [modifyPlaylistGenerator](docs/sdks/libraryplaylists/README.md#modifyplaylistgenerator) - Modify a Generator
* [getPlaylistGeneratorItems](docs/sdks/libraryplaylists/README.md#getplaylistgeneratoritems) - Get a playlist generator's items
* [movePlaylistItem](docs/sdks/libraryplaylists/README.md#moveplaylistitem) - Moving items in a playlist
* [refreshPlaylist](docs/sdks/libraryplaylists/README.md#refreshplaylist) - Reprocess a generator

### [LiveTV](docs/sdks/livetv/README.md)

* [getDVRRecordings](docs/sdks/livetv/README.md#getdvrrecordings) - Get DVR Recordings
* [getSessions](docs/sdks/livetv/README.md#getsessions) - Get all sessions
* [getDVRRecordingsByDVR](docs/sdks/livetv/README.md#getdvrrecordingsbydvr) - Get DVR Recordings by DVR
* [deleteLiveTVSession](docs/sdks/livetv/README.md#deletelivetvsession) - Delete Live TV Session
* [getLiveTVSession](docs/sdks/livetv/README.md#getlivetvsession) - Get a single session
* [getSessionPlaylistIndex](docs/sdks/livetv/README.md#getsessionplaylistindex) - Get a session playlist index
* [getSessionSegment](docs/sdks/livetv/README.md#getsessionsegment) - Get a single session segment

### [Log](docs/sdks/log/README.md)

* [writeLog](docs/sdks/log/README.md#writelog) - Logging a multi-line message to the Plex Media Server log
* [writeMessage](docs/sdks/log/README.md#writemessage) - Logging a single-line message to the Plex Media Server log
* [enablePapertrail](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail

### [PlayQueue](docs/sdks/playqueue/README.md)

* [createPlayQueue](docs/sdks/playqueue/README.md#createplayqueue) - Create a play queue
* [getPlayQueue](docs/sdks/playqueue/README.md#getplayqueue) - Retrieve a play queue
* [addToPlayQueue](docs/sdks/playqueue/README.md#addtoplayqueue) - Add a generator or playlist to a play queue
* [clearPlayQueue](docs/sdks/playqueue/README.md#clearplayqueue) - Clear a play queue
* [resetPlayQueue](docs/sdks/playqueue/README.md#resetplayqueue) - Reset a play queue
* [shuffle](docs/sdks/playqueue/README.md#shuffle) - Shuffle a play queue
* [unshuffle](docs/sdks/playqueue/README.md#unshuffle) - Unshuffle a play queue
* [deletePlayQueueItem](docs/sdks/playqueue/README.md#deleteplayqueueitem) - Delete an item from a play queue
* [movePlayQueueItem](docs/sdks/playqueue/README.md#moveplayqueueitem) - Move an item in a play queue

### [Playback](docs/sdks/playback/README.md)

* [getProgress](docs/sdks/playback/README.md#getprogress) - Get Progress
* [removeFromContinueWatching](docs/sdks/playback/README.md#removefromcontinuewatching) - Remove From Continue Watching
* [playerAudioStream](docs/sdks/playback/README.md#playeraudiostream) - Player Audio Stream
* [playerMute](docs/sdks/playback/README.md#playermute) - Player Mute
* [playerPause](docs/sdks/playback/README.md#playerpause) - Player Pause
* [playerPlay](docs/sdks/playback/README.md#playerplay) - Player Play
* [playerPlayMedia](docs/sdks/playback/README.md#playerplaymedia) - Player Play Media
* [playerRefreshplayqueue](docs/sdks/playback/README.md#playerrefreshplayqueue) - Player Refresh Play Queue
* [playerSeek](docs/sdks/playback/README.md#playerseek) - Player Seek
* [playerSetParameters](docs/sdks/playback/README.md#playersetparameters) - Player Set Parameters
* [playerSetRating](docs/sdks/playback/README.md#playersetrating) - Player Set Rating
* [playerSetState](docs/sdks/playback/README.md#playersetstate) - Player Set State
* [playerSetStreams](docs/sdks/playback/README.md#playersetstreams) - Player Set Streams
* [playerSetTextStream](docs/sdks/playback/README.md#playersettextstream) - Player Set Text Stream
* [playerSetViewOffset](docs/sdks/playback/README.md#playersetviewoffset) - Player Set View Offset
* [playerSkipBy](docs/sdks/playback/README.md#playerskipby) - Player Skip By
* [playerSkipTo](docs/sdks/playback/README.md#playerskipto) - Player Skip To
* [playerStepback](docs/sdks/playback/README.md#playerstepback) - Player Step Back
* [playerStepforward](docs/sdks/playback/README.md#playerstepforward) - Player Step Forward
* [playerStop](docs/sdks/playback/README.md#playerstop) - Player Stop
* [playerSubtitleStream](docs/sdks/playback/README.md#playersubtitlestream) - Player Subtitle Stream
* [playerUnmute](docs/sdks/playback/README.md#playerunmute) - Player Unmute
* [playerVideoStream](docs/sdks/playback/README.md#playervideostream) - Player Video Stream
* [playerVolume](docs/sdks/playback/README.md#playervolume) - Player Volume
* [getClientResources](docs/sdks/playback/README.md#getclientresources) - Get Client Resources
* [playerPollTimeline](docs/sdks/playback/README.md#playerpolltimeline) - Player Poll Timeline

### [Playlist](docs/sdks/playlist/README.md)

* [listPlaylists](docs/sdks/playlist/README.md#listplaylists) - List playlists
* [getPlaylist](docs/sdks/playlist/README.md#getplaylist) - Retrieve Playlist
* [getPlaylistItems](docs/sdks/playlist/README.md#getplaylistitems) - Retrieve Playlist Contents

### [Playlists](docs/sdks/playlists/README.md)

* [deletePlaylistByRatingKey](docs/sdks/playlists/README.md#deleteplaylistbyratingkey) - Delete Playlist

### [Plex](docs/sdks/plex/README.md)

* [getServerResources](docs/sdks/plex/README.md#getserverresources) - Get Server Resources

### [Preferences](docs/sdks/preferences/README.md)

* [getAllPreferences](docs/sdks/preferences/README.md#getallpreferences) - Get all preferences
* [setPreferences](docs/sdks/preferences/README.md#setpreferences) - Set preferences
* [getPreference](docs/sdks/preferences/README.md#getpreference) - Get a preferences

### [Provider](docs/sdks/provider/README.md)

* [addToWatchlist](docs/sdks/provider/README.md#addtowatchlist) - Add to Watchlist
* [removeFromWatchlist](docs/sdks/provider/README.md#removefromwatchlist) - Remove from Watchlist
* [searchDiscover](docs/sdks/provider/README.md#searchdiscover) - Search Discover
* [getWatchlist](docs/sdks/provider/README.md#getwatchlist) - Get Watchlist
* [listProviders](docs/sdks/provider/README.md#listproviders) - Get the list of available media providers
* [addProvider](docs/sdks/provider/README.md#addprovider) - Add a media provider
* [refreshProviders](docs/sdks/provider/README.md#refreshproviders) - Refresh media providers
* [deleteMediaProvider](docs/sdks/provider/README.md#deletemediaprovider) - Delete a media provider

### [Rate](docs/sdks/rate/README.md)

* [setRating](docs/sdks/rate/README.md#setrating) - Rate an item

### [Search](docs/sdks/search/README.md)

* [searchHubs](docs/sdks/search/README.md#searchhubs) - Search Hub
* [voiceSearchHubs](docs/sdks/search/README.md#voicesearchhubs) - Voice Search Hub

### [Status](docs/sdks/status/README.md)

* [listSessions](docs/sdks/status/README.md#listsessions) - List Sessions
* [getBackgroundTasks](docs/sdks/status/README.md#getbackgroundtasks) - Get background tasks
* [listPlaybackHistory](docs/sdks/status/README.md#listplaybackhistory) - List Playback History
* [terminateSession](docs/sdks/status/README.md#terminatesession) - Terminate a session
* [deleteHistory](docs/sdks/status/README.md#deletehistory) - Delete Single History Item
* [getHistoryItem](docs/sdks/status/README.md#gethistoryitem) - Get Single History Item

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [getAllSubscriptions](docs/sdks/subscriptions/README.md#getallsubscriptions) - Get all subscriptions
* [createSubscription](docs/sdks/subscriptions/README.md#createsubscription) - Create a subscription
* [processSubscriptions](docs/sdks/subscriptions/README.md#processsubscriptions) - Process all subscriptions
* [getScheduledRecordings](docs/sdks/subscriptions/README.md#getscheduledrecordings) - Get all scheduled recordings
* [getTemplate](docs/sdks/subscriptions/README.md#gettemplate) - Get the subscription template
* [cancelGrab](docs/sdks/subscriptions/README.md#cancelgrab) - Cancel an existing grab
* [deleteSubscription](docs/sdks/subscriptions/README.md#deletesubscription) - Delete a subscription
* [getSubscription](docs/sdks/subscriptions/README.md#getsubscription) - Get a single subscription
* [editSubscriptionPreferences](docs/sdks/subscriptions/README.md#editsubscriptionpreferences) - Edit a subscription
* [reorderSubscription](docs/sdks/subscriptions/README.md#reordersubscription) - Re-order a subscription

### [Timeline](docs/sdks/timeline/README.md)

* [markPlayed](docs/sdks/timeline/README.md#markplayed) - Mark an item as played
* [report](docs/sdks/timeline/README.md#report) - Report media timeline
* [unscrobble](docs/sdks/timeline/README.md#unscrobble) - Mark an item as unplayed
* [getConversionQueue](docs/sdks/timeline/README.md#getconversionqueue) - Get Conversion Queue

### [Transcoder](docs/sdks/transcoder/README.md)

* [transcodeMusic](docs/sdks/transcoder/README.md#transcodemusic) - Transcode Music
* [transcodeImage](docs/sdks/transcoder/README.md#transcodeimage) - Transcode an image
* [getTranscodeSessions](docs/sdks/transcoder/README.md#gettranscodesessions) - Get Transcode Sessions
* [makeDecision](docs/sdks/transcoder/README.md#makedecision) - Make a decision on media playback
* [triggerFallback](docs/sdks/transcoder/README.md#triggerfallback) - Manually trigger a transcoder fallback
* [transcodeSubtitles](docs/sdks/transcoder/README.md#transcodesubtitles) - Transcode subtitles
* [startTranscodeSession](docs/sdks/transcoder/README.md#starttranscodesession) - Start A Transcoding Session
* [getDASHSegment](docs/sdks/transcoder/README.md#getdashsegment) - Get DASH Segment
* [getHLSSegment](docs/sdks/transcoder/README.md#gethlssegment) - Get HLS Segment

### [UltraBlur](docs/sdks/ultrablur/README.md)

* [getColors](docs/sdks/ultrablur/README.md#getcolors) - Get UltraBlur Colors
* [getImage](docs/sdks/ultrablur/README.md#getimage) - Get UltraBlur Image

### [Updater](docs/sdks/updater/README.md)

* [applyUpdates](docs/sdks/updater/README.md#applyupdates) - Applying updates
* [checkUpdates](docs/sdks/updater/README.md#checkupdates) - Checking for updates
* [getUpdatesStatus](docs/sdks/updater/README.md#getupdatesstatus) - Querying status of updates

### [Users](docs/sdks/users/README.md)

* [getLegacyResources](docs/sdks/users/README.md#getlegacyresources) - Get Legacy Resources
* [getLegacyUsers](docs/sdks/users/README.md#getlegacyusers) - Get Legacy Users
* [getFriends](docs/sdks/users/README.md#getfriends) - Get Friends
* [getHome](docs/sdks/users/README.md#gethome) - Get home hubs
* [getHomeUsers](docs/sdks/users/README.md#gethomeusers) - Get home hubs Users
* [createHomeUser](docs/sdks/users/README.md#createhomeuser) - Create Home User
* [getMyPlexAccount](docs/sdks/users/README.md#getmyplexaccount) - Get MyPlex Account
* [getUserServer](docs/sdks/users/README.md#getuserserver) - Get User Server Association
* [getServerUserFeatures](docs/sdks/users/README.md#getserveruserfeatures) - Get Server User Features
* [shareServer](docs/sdks/users/README.md#shareserver) - Share Server
* [updateViewStateSync](docs/sdks/users/README.md#updateviewstatesync) - Update View State Sync
* [getUsers](docs/sdks/users/README.md#getusers) - Get list of all connected users
* [getAccountXML](docs/sdks/users/README.md#getaccountxml) - Get Account (XML)
* [getAccountJSON](docs/sdks/users/README.md#getaccountjson) - Get Account (JSON)
* [acceptInvite](docs/sdks/users/README.md#acceptinvite) - Accept an Invite
* [deleteHomeUser](docs/sdks/users/README.md#deletehomeuser) - Delete Home User
* [updateHomeUser](docs/sdks/users/README.md#updatehomeuser) - Update Home User
* [updateRestrictedUser](docs/sdks/users/README.md#updaterestricteduser) - Update Restricted User
* [getServerDetails](docs/sdks/users/README.md#getserverdetails) - Get Server Details
* [shareServerLegacy](docs/sdks/users/README.md#shareserverlegacy) - Share Server (Legacy v1)
* [removeShare](docs/sdks/users/README.md#removeshare) - Remove Share
* [updateShare](docs/sdks/users/README.md#updateshare) - Update Share
* [getUserOptOuts](docs/sdks/users/README.md#getuseroptouts) - Get User Opt-Outs

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PlexAPIError`](./src/models/errors/plexapierror.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { PlexAPI } from "@parke.dev/plexjs";
import * as errors from "@parke.dev/plexjs/models/errors";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  try {
    const result = await plexAPI.general.getServerInfo({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.PlexAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.errors); // ErrorT[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`PlexAPIError`](./src/models/errors/plexapierror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`PlexAPIError`](./src/models/errors/plexapierror.ts)**:
* [`ErrorT`](./src/models/errors/errort.ts): Unauthorized. Status code `401`. Applicable to 277 of 405 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Unauthorized - Returned if the X-Plex-Token is missing from the header or query. Status code `401`. Applicable to 4 of 405 methods.*
* [`BadRequestError`](./src/models/errors/badrequesterror.ts): Bad Request - A parameter was not specified, or was specified incorrectly. Status code `400`. Applicable to 3 of 405 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                                                     | Variables                                    | Description |
| --- | ---------------------------------------------------------- | -------------------------------------------- | ----------- |
| 0   | `https://{IP-description}.{identifier}.plex.direct:{port}` | `identifier`<br/>`IP-description`<br/>`port` |             |
| 1   | `{protocol}://{host}:{port}`                               | `host`<br/>`port`<br/>`protocol`             |             |
| 2   | `https://{full_server_url}`                                | `full_server_url`                            |             |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable          | Parameter               | Default                              | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | ----------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`      | `identifier: string`    | `"0123456789abcdef0123456789abcdef"` | The unique identifier of this particular PMS                                                                                                                                                                                                                                                                                                                                   |
| `IP-description`  | `ipDescription: string` | `"1-2-3-4"`                          | A `-` separated string of the IPv4 or IPv6 address components                                                                                                                                                                                                                                                                                                                  |
| `port`            | `port: string`          | `"32400"`                            | The Port number configured on the PMS. Typically (`32400`). <br/>If using a reverse proxy, this would be the port number configured on the proxy.                                                                                                                                                                                                                              |
| `host`            | `host: string`          | `"localhost"`                        | The Host of the PMS.<br/>If using on a local network, this is the internal IP address of the server hosting the PMS.<br/>If using on an external network, this is the external IP address for your network, and requires port forwarding.<br/>If using a reverse proxy, this would be the external DNS domain for your network, and requires the proxy handle port forwarding. |
| `protocol`        | `protocol: string`      | `"http"`                             | The network protocol to use. Typically (`http` or `https`)                                                                                                                                                                                                                                                                                                                     |
| `full_server_url` | `fullServerUrl: string` | `"http://localhost:32400"`           | The full manual URL to access the PMS                                                                                                                                                                                                                                                                                                                                          |

#### Example

```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  serverIdx: 0,
  identifier: "0123456789abcdef0123456789abcdef",
  ipDescription: "1-2-3-4",
  port: "32400",
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  serverURL: "https://http://localhost:32400",
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

  console.log(result);
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.general.getUserWebhooks({
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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@parke.dev/plexjs/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new PlexAPI({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name    | Type   | Scheme  |
| ------- | ------ | ------- |
| `token` | apiKey | API key |

To authenticate with the API the `token` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.authentication.createOAuthPin({
    clientIdentifier: "<YOUR_API_KEY_HERE>",
  }, {});

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

- [`activitiesCancelActivity`](docs/sdks/activities/README.md#cancelactivity) - Cancel a running activity
- [`activitiesListActivities`](docs/sdks/activities/README.md#listactivities) - Get all activities
- [`authenticationChangePassword`](docs/sdks/authentication/README.md#changepassword) - Change Password
- [`authenticationCreateLegacyPin`](docs/sdks/authentication/README.md#createlegacypin) - Create Legacy PIN
- [`authenticationCreateOAuthPin`](docs/sdks/authentication/README.md#createoauthpin) - Create OAuth PIN
- [`authenticationExchangeJWTToken`](docs/sdks/authentication/README.md#exchangejwttoken) - Exchange JWT Token
- [`authenticationGetAuthKeys`](docs/sdks/authentication/README.md#getauthkeys) - Get Auth Keys
- [`authenticationGetAuthNonce`](docs/sdks/authentication/README.md#getauthnonce) - Get Auth Nonce
- [`authenticationGetClaimToken`](docs/sdks/authentication/README.md#getclaimtoken) - Get Claim Token
- [`authenticationGetFeatures`](docs/sdks/authentication/README.md#getfeatures) - Get Features
- [`authenticationGetOAuthPin`](docs/sdks/authentication/README.md#getoauthpin) - Get OAuth PIN Status
- [`authenticationGetServerAccessTokens`](docs/sdks/authentication/README.md#getserveraccesstokens) - Get Server Access Tokens
- [`authenticationGetTokenDetails`](docs/sdks/authentication/README.md#gettokendetails) - Get Token Details
- [`authenticationLinkOAuthPin`](docs/sdks/authentication/README.md#linkoauthpin) - Link OAuth PIN
- [`authenticationPing`](docs/sdks/authentication/README.md#ping) - Ping the server
- [`authenticationPostUsersSignInData`](docs/sdks/authentication/README.md#postuserssignindata) - Get User Sign In Data
- [`authenticationRegisterDeviceJWK`](docs/sdks/authentication/README.md#registerdevicejwk) - Register Device JWK
- [`authenticationSignOut`](docs/sdks/authentication/README.md#signout) - Sign Out
- [`authenticationSwitchHomeUser`](docs/sdks/authentication/README.md#switchhomeuser) - Switch Home User
- [`butlerGetTasks`](docs/sdks/butler/README.md#gettasks) - Get all Butler tasks
- [`butlerStartTask`](docs/sdks/butler/README.md#starttask) - Start a single Butler task
- [`butlerStartTasks`](docs/sdks/butler/README.md#starttasks) - Start all Butler tasks
- [`butlerStopTask`](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task
- [`butlerStopTasks`](docs/sdks/butler/README.md#stoptasks) - Stop all Butler tasks
- [`collectionsCreateCollection`](docs/sdks/collections/README.md#createcollection) - Create collection
- [`contentGetAlbums`](docs/sdks/content/README.md#getalbums) - Set section albums
- [`contentGetAllLeaves`](docs/sdks/content/README.md#getallleaves) - Set section leaves
- [`contentGetArts`](docs/sdks/content/README.md#getarts) - Set section artwork
- [`contentGetCategories`](docs/sdks/content/README.md#getcategories) - Set section categories
- [`contentGetCluster`](docs/sdks/content/README.md#getcluster) - Set section clusters
- [`contentGetCollectionImage`](docs/sdks/content/README.md#getcollectionimage) - Get a collection's image
- [`contentGetCollectionItems`](docs/sdks/content/README.md#getcollectionitems) - Get items in a collection
- [`contentGetFolders`](docs/sdks/content/README.md#getfolders) - Get all folder locations
- [`contentGetMetadataItem`](docs/sdks/content/README.md#getmetadataitem) - Get a metadata item
- [`contentGetSonicallySimilar`](docs/sdks/content/README.md#getsonicallysimilar) - The nearest audio tracks
- [`contentGetSonicPath`](docs/sdks/content/README.md#getsonicpath) - Similar tracks to transition from one to another
- [`contentListContent`](docs/sdks/content/README.md#listcontent) - Get items in the section
- [`contentListMoments`](docs/sdks/content/README.md#listmoments) - Set section moments
- [`devicesAddDevice`](docs/sdks/devices/README.md#adddevice) - Add a device
- [`devicesDiscoverDevices`](docs/sdks/devices/README.md#discoverdevices) - Tell grabbers to discover devices
- [`devicesGetAvailableGrabbers`](docs/sdks/devices/README.md#getavailablegrabbers) - Get available grabbers
- [`devicesGetDeviceDetails`](docs/sdks/devices/README.md#getdevicedetails) - Get device details
- [`devicesGetDevicesChannels`](docs/sdks/devices/README.md#getdeviceschannels) - Get a device's channels
- [`devicesGetThumb`](docs/sdks/devices/README.md#getthumb) - Get device thumb
- [`devicesListDevices`](docs/sdks/devices/README.md#listdevices) - Get all devices
- [`devicesModifyDevice`](docs/sdks/devices/README.md#modifydevice) - Enable or disable a device
- [`devicesRemoveDevice`](docs/sdks/devices/README.md#removedevice) - Remove a device
- [`devicesScan`](docs/sdks/devices/README.md#scan) - Tell a device to scan for channels
- [`devicesSetChannelmap`](docs/sdks/devices/README.md#setchannelmap) - Set a device's channel mapping
- [`devicesSetDevicePreferences`](docs/sdks/devices/README.md#setdevicepreferences) - Set device preferences
- [`devicesStopScan`](docs/sdks/devices/README.md#stopscan) - Tell a device to stop scanning for channels
- [`downloadQueueAddDownloadQueueItems`](docs/sdks/downloadqueue/README.md#adddownloadqueueitems) - Add to download queue
- [`downloadQueueCreateDownloadQueue`](docs/sdks/downloadqueue/README.md#createdownloadqueue) - Create download queue
- [`downloadQueueGetDownloadQueue`](docs/sdks/downloadqueue/README.md#getdownloadqueue) - Get a download queue
- [`downloadQueueGetDownloadQueueItems`](docs/sdks/downloadqueue/README.md#getdownloadqueueitems) - Get download queue items
- [`downloadQueueGetDownloadQueueMedia`](docs/sdks/downloadqueue/README.md#getdownloadqueuemedia) - Grab download queue media
- [`downloadQueueGetItemDecision`](docs/sdks/downloadqueue/README.md#getitemdecision) - Grab download queue item decision
- [`downloadQueueListDownloadQueueItems`](docs/sdks/downloadqueue/README.md#listdownloadqueueitems) - Get download queue items
- [`downloadQueueRemoveDownloadQueueItems`](docs/sdks/downloadqueue/README.md#removedownloadqueueitems) - Delete download queue items
- [`downloadQueueRestartProcessingDownloadQueueItems`](docs/sdks/downloadqueue/README.md#restartprocessingdownloadqueueitems) - Restart processing of items from the decision
- [`dvRsAddDeviceToDVR`](docs/sdks/dvrs/README.md#adddevicetodvr) - Add a device to an existing DVR
- [`dvRsAddLineup`](docs/sdks/dvrs/README.md#addlineup) - Add a DVR Lineup
- [`dvRsCreateDVR`](docs/sdks/dvrs/README.md#createdvr) - Create a DVR
- [`dvRsDeleteDVR`](docs/sdks/dvrs/README.md#deletedvr) - Delete a single DVR
- [`dvRsDeleteLineup`](docs/sdks/dvrs/README.md#deletelineup) - Delete a DVR Lineup
- [`dvRsGetDVR`](docs/sdks/dvrs/README.md#getdvr) - Get a single DVR
- [`dvRsGetDVRChannels`](docs/sdks/dvrs/README.md#getdvrchannels) - Get DVR Channels
- [`dvRsGetDVRGuide`](docs/sdks/dvrs/README.md#getdvrguide) - Get DVR Guide
- [`dvRsListDVRs`](docs/sdks/dvrs/README.md#listdvrs) - Get DVRs
- [`dvRsPatchDVRSettings`](docs/sdks/dvrs/README.md#patchdvrsettings) - Update DVR Settings
- [`dvRsReloadGuide`](docs/sdks/dvrs/README.md#reloadguide) - Tell a DVR to reload program guide
- [`dvRsRemoveDeviceFromDVR`](docs/sdks/dvrs/README.md#removedevicefromdvr) - Remove a device from an existing DVR
- [`dvRsSetDVRPreferences`](docs/sdks/dvrs/README.md#setdvrpreferences) - Set DVR preferences
- [`dvRsStopDVRReload`](docs/sdks/dvrs/README.md#stopdvrreload) - Tell a DVR to stop reloading program guide
- [`dvRsTuneChannel`](docs/sdks/dvrs/README.md#tunechannel) - Tune a channel on a DVR
- [`dvRsUpdateDVRSettings`](docs/sdks/dvrs/README.md#updatedvrsettings) - Update DVR Settings
- [`epgComputeChannelMap`](docs/sdks/epg/README.md#computechannelmap) - Compute the best channel map
- [`epgGetAllLanguages`](docs/sdks/epg/README.md#getalllanguages) - Get all languages
- [`epgGetChannels`](docs/sdks/epg/README.md#getchannels) - Get channels for a lineup
- [`epgGetCountries`](docs/sdks/epg/README.md#getcountries) - Get all countries
- [`epgGetCountriesLineups`](docs/sdks/epg/README.md#getcountrieslineups) - Get lineups for a country via postal code
- [`epgGetCountryRegions`](docs/sdks/epg/README.md#getcountryregions) - Get regions for a country
- [`epgGetEPGGuide`](docs/sdks/epg/README.md#getepgguide) - Get EPG Guide
- [`epgGetLineup`](docs/sdks/epg/README.md#getlineup) - Compute the best lineup
- [`epgGetLineupChannels`](docs/sdks/epg/README.md#getlineupchannels) - Get the channels for multiple lineups
- [`epgListLineups`](docs/sdks/epg/README.md#listlineups) - Get lineups for a region
- [`epgSearchEPG`](docs/sdks/epg/README.md#searchepg) - Search EPG
- [`eventsConnectWebSocket`](docs/sdks/events/README.md#connectwebsocket) - Connect to WebSocket
- [`eventsGetNotifications`](docs/sdks/events/README.md#getnotifications) - Connect to Eventsource
- [`eventsGetWebsocketNotifications`](docs/sdks/events/README.md#getwebsocketnotifications) - Get WebSocket Notifications
- [`generalAddUserWebhook`](docs/sdks/general/README.md#adduserwebhook) - Add User Webhook
- [`generalAddWebhook`](docs/sdks/general/README.md#addwebhook) - Add Webhook
- [`generalBrowseFilesystem`](docs/sdks/general/README.md#browsefilesystem) - Browse Filesystem
- [`generalBrowseFilesystemPath`](docs/sdks/general/README.md#browsefilesystempath) - Browse Filesystem Path
- [`generalCheckForSystemUpdates`](docs/sdks/general/README.md#checkforsystemupdates) - Check for System Updates
- [`generalClaimServer`](docs/sdks/general/README.md#claimserver) - Claim Server
- [`generalCreateTransientToken`](docs/sdks/general/README.md#createtransienttoken) - Get Transient Tokens
- [`generalDownloadDatabaseDiagnostics`](docs/sdks/general/README.md#downloaddatabasediagnostics) - Download Database Diagnostics
- [`generalDownloadLogBundle`](docs/sdks/general/README.md#downloadlogbundle) - Download Log Bundle
- [`generalGetBandwidthStatistics`](docs/sdks/general/README.md#getbandwidthstatistics) - Get Bandwidth Statistics
- [`generalGetClients`](docs/sdks/general/README.md#getclients) - Get Clients
- [`generalGetCloudServer`](docs/sdks/general/README.md#getcloudserver) - Get Cloud Server
- [`generalGetDiagnostics`](docs/sdks/general/README.md#getdiagnostics) - Get Diagnostics
- [`generalGetGeoIP`](docs/sdks/general/README.md#getgeoip) - Get GeoIP
- [`generalGetIdentity`](docs/sdks/general/README.md#getidentity) - Get PMS identity
- [`generalGetIP`](docs/sdks/general/README.md#getip) - Get IP
- [`generalGetLocalServers`](docs/sdks/general/README.md#getlocalservers) - Get Local Servers
- [`generalGetMetadataAgentDetails`](docs/sdks/general/README.md#getmetadataagentdetails) - Get Metadata Agent Details
- [`generalGetMetadataAgents`](docs/sdks/general/README.md#getmetadataagents) - Get Metadata Agents
- [`generalGetPlexDownloads`](docs/sdks/general/README.md#getplexdownloads) - Get Plex Downloads
- [`generalGetResourceStatistics`](docs/sdks/general/README.md#getresourcestatistics) - Get Resource Statistics
- [`generalGetServerInfo`](docs/sdks/general/README.md#getserverinfo) - Get PMS info
- [`generalGetSourceConnectionInformation`](docs/sdks/general/README.md#getsourceconnectioninformation) - Get Source Connection Information
- [`generalGetSyncItem`](docs/sdks/general/README.md#getsyncitem) - Get Sync Item
- [`generalGetSyncItems`](docs/sdks/general/README.md#getsyncitems) - Get Sync Items
- [`generalGetSyncQueue`](docs/sdks/general/README.md#getsyncqueue) - Get Sync Queue
- [`generalGetSyncStatus`](docs/sdks/general/README.md#getsyncstatus) - Get Sync Status
- [`generalGetSyncTranscodeQueue`](docs/sdks/general/README.md#getsynctranscodequeue) - Get Sync Transcode Queue
- [`generalGetSystemAccounts`](docs/sdks/general/README.md#getsystemaccounts) - Get System Accounts
- [`generalGetSystemDevices`](docs/sdks/general/README.md#getsystemdevices) - Get System Devices
- [`generalGetSystemSettings`](docs/sdks/general/README.md#getsystemsettings) - Get System Settings
- [`generalGetUserWebhooks`](docs/sdks/general/README.md#getuserwebhooks) - User Webhooks
- [`generalGetWebhooks`](docs/sdks/general/README.md#getwebhooks) - Get Webhooks
- [`generalRefreshReachability`](docs/sdks/general/README.md#refreshreachability) - Refresh Reachability
- [`generalRefreshSyncContent`](docs/sdks/general/README.md#refreshsynccontent) - Refresh Sync Content
- [`generalRefreshSyncLists`](docs/sdks/general/README.md#refreshsynclists) - Refresh Sync Lists
- [`hubsCreateCustomHub`](docs/sdks/hubs/README.md#createcustomhub) - Create a custom hub
- [`hubsDeleteCustomHub`](docs/sdks/hubs/README.md#deletecustomhub) - Delete a custom hub
- [`hubsGetAllHubs`](docs/sdks/hubs/README.md#getallhubs) - Get global hubs
- [`hubsGetContinueWatching`](docs/sdks/hubs/README.md#getcontinuewatching) - Get the continue watching hub
- [`hubsGetContinueWatchingItems`](docs/sdks/hubs/README.md#getcontinuewatchingitems) - Get Continue Watching Items
- [`hubsGetHomeRecentlyAdded`](docs/sdks/hubs/README.md#gethomerecentlyadded) - Get home hubs Recently Added
- [`hubsGetHubItems`](docs/sdks/hubs/README.md#gethubitems) - Get a hub's items
- [`hubsGetMetadataHubs`](docs/sdks/hubs/README.md#getmetadatahubs) - Get hubs for section by metadata item
- [`hubsGetPostplayHubs`](docs/sdks/hubs/README.md#getpostplayhubs) - Get postplay hubs
- [`hubsGetPromotedHubs`](docs/sdks/hubs/README.md#getpromotedhubs) - Get the hubs which are promoted
- [`hubsGetRelatedHubs`](docs/sdks/hubs/README.md#getrelatedhubs) - Get related hubs
- [`hubsGetSectionHubs`](docs/sdks/hubs/README.md#getsectionhubs) - Get section hubs
- [`hubsListHubs`](docs/sdks/hubs/README.md#listhubs) - Get hubs
- [`hubsMoveHub`](docs/sdks/hubs/README.md#movehub) - Move Hub
- [`hubsResetSectionDefaults`](docs/sdks/hubs/README.md#resetsectiondefaults) - Reset hubs to defaults
- [`hubsUpdateHubVisibility`](docs/sdks/hubs/README.md#updatehubvisibility) - Change hub visibility
- [`libraryAddExtras`](docs/sdks/library/README.md#addextras) - Add to an item's extras
- [`libraryAddSection`](docs/sdks/library/README.md#addsection) - Add a library section
- [`libraryAnalyzeMetadata`](docs/sdks/library/README.md#analyzemetadata) - Analyze an item
- [`libraryAutocomplete`](docs/sdks/library/README.md#autocomplete) - Get autocompletions for search
- [`libraryCancelRefresh`](docs/sdks/library/README.md#cancelrefresh) - Cancel section refresh
- [`libraryCleanBundles`](docs/sdks/library/README.md#cleanbundles) - Clean bundles
- [`libraryCollectionsAddCollectionItems`](docs/sdks/librarycollections/README.md#addcollectionitems) - Add items to a collection
- [`libraryCollectionsMoveCollectionItem`](docs/sdks/librarycollections/README.md#movecollectionitem) - Reorder an item in the collection
- [`libraryCollectionsUpdateCollectionItem`](docs/sdks/librarycollections/README.md#updatecollectionitem) - Update an item in a collection
- [`libraryComputeSonicPath`](docs/sdks/library/README.md#computesonicpath) - Compute Sonic Path
- [`libraryCreateMarker`](docs/sdks/library/README.md#createmarker) - Create a marker
- [`libraryDeleteCaches`](docs/sdks/library/README.md#deletecaches) - Delete library caches
- [`libraryDeleteCollection`](docs/sdks/library/README.md#deletecollection) - Delete a collection
- [`libraryDeleteIndexes`](docs/sdks/library/README.md#deleteindexes) - Delete section indexes
- [`libraryDeleteIntros`](docs/sdks/library/README.md#deleteintros) - Delete section intro markers
- [`libraryDeleteLibrarySection`](docs/sdks/library/README.md#deletelibrarysection) - Delete a library section
- [`libraryDeleteMarker`](docs/sdks/library/README.md#deletemarker) - Delete a marker
- [`libraryDeleteMediaItem`](docs/sdks/library/README.md#deletemediaitem) - Delete a media item
- [`libraryDeleteMetadataItem`](docs/sdks/library/README.md#deletemetadataitem) - Delete a metadata item
- [`libraryDeleteStream`](docs/sdks/library/README.md#deletestream) - Delete a stream
- [`libraryDetectAds`](docs/sdks/library/README.md#detectads) - Ad-detect an item
- [`libraryDetectCredits`](docs/sdks/library/README.md#detectcredits) - Credit detect a metadata item
- [`libraryDetectIntros`](docs/sdks/library/README.md#detectintros) - Intro detect an item
- [`libraryDetectVoiceActivity`](docs/sdks/library/README.md#detectvoiceactivity) - Detect voice activity
- [`libraryEditLibrarySection`](docs/sdks/library/README.md#editlibrarysection) - Edit Section
- [`libraryEditMarker`](docs/sdks/library/README.md#editmarker) - Edit a marker
- [`libraryEditMetadataItem`](docs/sdks/library/README.md#editmetadataitem) - Edit a metadata item
- [`libraryEditSection`](docs/sdks/library/README.md#editsection) - Edit a library section
- [`libraryEmptyTrash`](docs/sdks/library/README.md#emptytrash) - Get Empty Trash
- [`libraryEmptyTrashPost`](docs/sdks/library/README.md#emptytrashpost) - Empty Trash
- [`libraryEmptyTrashPut`](docs/sdks/library/README.md#emptytrashput) - Empty section trash
- [`libraryGenerateThumbs`](docs/sdks/library/README.md#generatethumbs) - Generate thumbs of chapters for an item
- [`libraryGetAllItemLeaves`](docs/sdks/library/README.md#getallitemleaves) - Get the leaves of an item
- [`libraryGetAugmentationStatus`](docs/sdks/library/README.md#getaugmentationstatus) - Get augmentation status
- [`libraryGetAvailableSorts`](docs/sdks/library/README.md#getavailablesorts) - Get a section sorts
- [`libraryGetByContentRating`](docs/sdks/library/README.md#getbycontentrating) - Get By Content Rating
- [`libraryGetByDecade`](docs/sdks/library/README.md#getbydecade) - Get By Decade
- [`libraryGetByFolder`](docs/sdks/library/README.md#getbyfolder) - Get By Folder
- [`libraryGetByResolution`](docs/sdks/library/README.md#getbyresolution) - Get By Resolution
- [`libraryGetByYear`](docs/sdks/library/README.md#getbyyear) - Get By Year
- [`libraryGetChapterImage`](docs/sdks/library/README.md#getchapterimage) - Get a chapter image
- [`libraryGetCollections`](docs/sdks/library/README.md#getcollections) - Get collections in a section
- [`libraryGetCommon`](docs/sdks/library/README.md#getcommon) - Get common fields for items
- [`libraryGetExtras`](docs/sdks/library/README.md#getextras) - Get an item's extras
- [`libraryGetFile`](docs/sdks/library/README.md#getfile) - Get a file from a metadata or media bundle
- [`libraryGetFirstCharacters`](docs/sdks/library/README.md#getfirstcharacters) - Get list of first characters
- [`libraryGetImageFromBif`](docs/sdks/library/README.md#getimagefrombif) - Get an image from part BIF
- [`libraryGetItemArtwork`](docs/sdks/library/README.md#getitemartwork) - Get an item's artwork, theme, etc
- [`libraryGetItemTree`](docs/sdks/library/README.md#getitemtree) - Get metadata items as a tree
- [`libraryGetLibraryDetails`](docs/sdks/library/README.md#getlibrarydetails) - Get a library section by id
- [`libraryGetLibraryItems`](docs/sdks/library/README.md#getlibraryitems) - Get all items in library
- [`libraryGetLibraryMatches`](docs/sdks/library/README.md#getlibrarymatches) - Get library matches
- [`libraryGetLibrarySectionHubs`](docs/sdks/library/README.md#getlibrarysectionhubs) - Get Section Hubs
- [`libraryGetLibrarySectionsFallback`](docs/sdks/library/README.md#getlibrarysectionsfallback) - Get Library Sections (Fallback)
- [`libraryGetMediaPart`](docs/sdks/library/README.md#getmediapart) - Get a media part
- [`libraryGetMetadataChildren`](docs/sdks/library/README.md#getmetadatachildren) - Get Metadata Children
- [`libraryGetMetadataGrandchildren`](docs/sdks/library/README.md#getmetadatagrandchildren) - Get Metadata Grandchildren
- [`libraryGetMetadataGrandparent`](docs/sdks/library/README.md#getmetadatagrandparent) - Get Metadata Grandparent
- [`libraryGetMetadataOnDeck`](docs/sdks/library/README.md#getmetadataondeck) - Get Metadata On Deck
- [`libraryGetMetadataParent`](docs/sdks/library/README.md#getmetadataparent) - Get Metadata Parent
- [`libraryGetMetadataReviews`](docs/sdks/library/README.md#getmetadatareviews) - Get Metadata Reviews
- [`libraryGetNearestMetadata`](docs/sdks/library/README.md#getnearestmetadata) - Get Nearest Metadata
- [`libraryGetNewestForSection`](docs/sdks/library/README.md#getnewestforsection) - Get Newest for Section
- [`libraryGetOnDeckForSection`](docs/sdks/library/README.md#getondeckforsection) - Get On Deck for Section
- [`libraryGetPartIndex`](docs/sdks/library/README.md#getpartindex) - Get BIF index for a part
- [`libraryGetPerson`](docs/sdks/library/README.md#getperson) - Get person details
- [`libraryGetRandomArtwork`](docs/sdks/library/README.md#getrandomartwork) - Get random artwork
- [`libraryGetRecentlyAddedForSection`](docs/sdks/library/README.md#getrecentlyaddedforsection) - Get Recently Added for Section
- [`libraryGetRecentlyAddedGlobal`](docs/sdks/library/README.md#getrecentlyaddedglobal) - Get Global Recently Added
- [`libraryGetRelatedItems`](docs/sdks/library/README.md#getrelateditems) - Get related items
- [`libraryGetRootLibrary`](docs/sdks/library/README.md#getrootlibrary) - Get Root Library
- [`libraryGetSectionAgents`](docs/sdks/library/README.md#getsectionagents) - Get Section Agents
- [`libraryGetSectionArtists`](docs/sdks/library/README.md#getsectionartists) - Get Section Artists
- [`libraryGetSectionClips`](docs/sdks/library/README.md#getsectionclips) - Get Section Clips
- [`libraryGetSectionEdit`](docs/sdks/library/README.md#getsectionedit) - Edit Section
- [`libraryGetSectionEpisodes`](docs/sdks/library/README.md#getsectionepisodes) - Get Section Episodes
- [`libraryGetSectionFilters`](docs/sdks/library/README.md#getsectionfilters) - Get section filters
- [`libraryGetSectionImage`](docs/sdks/library/README.md#getsectionimage) - Get a section composite image
- [`libraryGetSectionLabels`](docs/sdks/library/README.md#getsectionlabels) - Get Section Labels
- [`libraryGetSectionMovies`](docs/sdks/library/README.md#getsectionmovies) - Get Section Movies
- [`libraryGetSectionPhotos`](docs/sdks/library/README.md#getsectionphotos) - Get Section Photos
- [`libraryGetSectionPlaylists`](docs/sdks/library/README.md#getsectionplaylists) - Get Section Playlists
- [`libraryGetSectionPreferences`](docs/sdks/library/README.md#getsectionpreferences) - Get section prefs
- [`libraryGetSections`](docs/sdks/library/README.md#getsections) - Get library sections (main Media Provider Only)
- [`libraryGetSectionSettings`](docs/sdks/library/README.md#getsectionsettings) - Get Section Settings
- [`libraryGetSectionShows`](docs/sdks/library/README.md#getsectionshows) - Get Section Shows
- [`libraryGetSectionsPrefs`](docs/sdks/library/README.md#getsectionsprefs) - Get section prefs
- [`libraryGetSectionTags`](docs/sdks/library/README.md#getsectiontags) - Get Section Tags
- [`libraryGetSectionTimeline`](docs/sdks/library/README.md#getsectiontimeline) - Get Section Timeline
- [`libraryGetStream`](docs/sdks/library/README.md#getstream) - Get a stream
- [`libraryGetStreamLevels`](docs/sdks/library/README.md#getstreamlevels) - Get loudness about a stream in json
- [`libraryGetStreamLoudness`](docs/sdks/library/README.md#getstreamloudness) - Get loudness about a stream
- [`libraryGetSubtitles`](docs/sdks/library/README.md#getsubtitles) - Get subtitles
- [`libraryGetTags`](docs/sdks/library/README.md#gettags) - Get all library tags of a type
- [`libraryGetUnwatchedForSection`](docs/sdks/library/README.md#getunwatchedforsection) - Get Unwatched for Section
- [`libraryIngestTransientItem`](docs/sdks/library/README.md#ingesttransientitem) - Ingest a transient item
- [`libraryListMatches`](docs/sdks/library/README.md#listmatches) - Get metadata matches for an item
- [`libraryListPersonMedia`](docs/sdks/library/README.md#listpersonmedia) - Get media for a person
- [`libraryListSimilar`](docs/sdks/library/README.md#listsimilar) - Get similar items
- [`libraryListTopUsers`](docs/sdks/library/README.md#listtopusers) - Get metadata top users
- [`libraryMatchItem`](docs/sdks/library/README.md#matchitem) - Match a metadata item
- [`libraryMatchSectionItems`](docs/sdks/library/README.md#matchsectionitems) - Match Section Items
- [`libraryMergeItems`](docs/sdks/library/README.md#mergeitems) - Merge a metadata item
- [`libraryMoveSection`](docs/sdks/library/README.md#movesection) - Move Section
- [`libraryOptimizeDatabase`](docs/sdks/library/README.md#optimizedatabase) - Optimize the Database
- [`libraryOptimizeLibrary`](docs/sdks/library/README.md#optimizelibrary) - Get Optimize Library
- [`libraryOptimizeLibraryPost`](docs/sdks/library/README.md#optimizelibrarypost) - Optimize Library
- [`libraryOptimizeSection`](docs/sdks/library/README.md#optimizesection) - Get Optimize Section
- [`libraryOptimizeSectionPost`](docs/sdks/library/README.md#optimizesectionpost) - Optimize Section
- [`libraryPlaylistsAddPlaylistItems`](docs/sdks/libraryplaylists/README.md#addplaylistitems) - Adding to  a Playlist
- [`libraryPlaylistsClearPlaylistItems`](docs/sdks/libraryplaylists/README.md#clearplaylistitems) - Clearing a playlist
- [`libraryPlaylistsCreatePlaylist`](docs/sdks/libraryplaylists/README.md#createplaylist) - Create a Playlist
- [`libraryPlaylistsDeletePlaylist`](docs/sdks/libraryplaylists/README.md#deleteplaylist) - Delete a Playlist
- [`libraryPlaylistsDeletePlaylistItem`](docs/sdks/libraryplaylists/README.md#deleteplaylistitem) - Delete a Generator
- [`libraryPlaylistsGetPlaylistGenerator`](docs/sdks/libraryplaylists/README.md#getplaylistgenerator) - Get a playlist generator
- [`libraryPlaylistsGetPlaylistGeneratorItems`](docs/sdks/libraryplaylists/README.md#getplaylistgeneratoritems) - Get a playlist generator's items
- [`libraryPlaylistsGetPlaylistGenerators`](docs/sdks/libraryplaylists/README.md#getplaylistgenerators) - Get a playlist's generators
- [`libraryPlaylistsModifyPlaylistGenerator`](docs/sdks/libraryplaylists/README.md#modifyplaylistgenerator) - Modify a Generator
- [`libraryPlaylistsMovePlaylistItem`](docs/sdks/libraryplaylists/README.md#moveplaylistitem) - Moving items in a playlist
- [`libraryPlaylistsRefreshPlaylist`](docs/sdks/libraryplaylists/README.md#refreshplaylist) - Reprocess a generator
- [`libraryPlaylistsUpdatePlaylist`](docs/sdks/libraryplaylists/README.md#updateplaylist) - Editing a Playlist
- [`libraryPlaylistsUploadPlaylist`](docs/sdks/libraryplaylists/README.md#uploadplaylist) - Upload media art
- [`libraryRefreshItemsMetadata`](docs/sdks/library/README.md#refreshitemsmetadata) - Refresh a metadata item
- [`libraryRefreshSection`](docs/sdks/library/README.md#refreshsection) - Get Refresh Section
- [`libraryRefreshSectionPost`](docs/sdks/library/README.md#refreshsectionpost) - Refresh Section
- [`libraryRefreshSectionsMetadata`](docs/sdks/library/README.md#refreshsectionsmetadata) - Refresh all sections
- [`librarySearchSection`](docs/sdks/library/README.md#searchsection) - Search Section
- [`librarySetItemArtwork`](docs/sdks/library/README.md#setitemartwork) - Set an item's artwork, theme, etc
- [`librarySetItemPreferences`](docs/sdks/library/README.md#setitempreferences) - Set metadata preferences
- [`librarySetSectionPreferences`](docs/sdks/library/README.md#setsectionpreferences) - Set section prefs
- [`librarySetStreamOffset`](docs/sdks/library/README.md#setstreamoffset) - Set a stream offset
- [`librarySetStreamSelection`](docs/sdks/library/README.md#setstreamselection) - Set stream selection
- [`librarySplitItem`](docs/sdks/library/README.md#splititem) - Split a metadata item
- [`libraryStartAnalysis`](docs/sdks/library/README.md#startanalysis) - Analyze a section
- [`libraryStartBifGeneration`](docs/sdks/library/README.md#startbifgeneration) - Start BIF generation of an item
- [`libraryStopAllRefreshes`](docs/sdks/library/README.md#stopallrefreshes) - Stop refresh
- [`libraryUnmatch`](docs/sdks/library/README.md#unmatch) - Unmatch a metadata item
- [`libraryUnmatchSectionItems`](docs/sdks/library/README.md#unmatchsectionitems) - Unmatch Section Items
- [`libraryUpdateItemArtwork`](docs/sdks/library/README.md#updateitemartwork) - Set an item's artwork, theme, etc
- [`libraryUpdateItems`](docs/sdks/library/README.md#updateitems) - Set the fields of the filtered items
- [`libraryUploadArt`](docs/sdks/library/README.md#uploadart) - Upload media art Art
- [`libraryUploadPoster`](docs/sdks/library/README.md#uploadposter) - Upload media art Poster
- [`liveTVDeleteLiveTVSession`](docs/sdks/livetv/README.md#deletelivetvsession) - Delete Live TV Session
- [`liveTVGetDVRRecordings`](docs/sdks/livetv/README.md#getdvrrecordings) - Get DVR Recordings
- [`liveTVGetDVRRecordingsByDVR`](docs/sdks/livetv/README.md#getdvrrecordingsbydvr) - Get DVR Recordings by DVR
- [`liveTVGetLiveTVSession`](docs/sdks/livetv/README.md#getlivetvsession) - Get a single session
- [`liveTVGetSessionPlaylistIndex`](docs/sdks/livetv/README.md#getsessionplaylistindex) - Get a session playlist index
- [`liveTVGetSessions`](docs/sdks/livetv/README.md#getsessions) - Get all sessions
- [`liveTVGetSessionSegment`](docs/sdks/livetv/README.md#getsessionsegment) - Get a single session segment
- [`logEnablePapertrail`](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail
- [`logWriteLog`](docs/sdks/log/README.md#writelog) - Logging a multi-line message to the Plex Media Server log
- [`logWriteMessage`](docs/sdks/log/README.md#writemessage) - Logging a single-line message to the Plex Media Server log
- [`playbackGetClientResources`](docs/sdks/playback/README.md#getclientresources) - Get Client Resources
- [`playbackGetProgress`](docs/sdks/playback/README.md#getprogress) - Get Progress
- [`playbackPlayerAudioStream`](docs/sdks/playback/README.md#playeraudiostream) - Player Audio Stream
- [`playbackPlayerMute`](docs/sdks/playback/README.md#playermute) - Player Mute
- [`playbackPlayerPause`](docs/sdks/playback/README.md#playerpause) - Player Pause
- [`playbackPlayerPlay`](docs/sdks/playback/README.md#playerplay) - Player Play
- [`playbackPlayerPlayMedia`](docs/sdks/playback/README.md#playerplaymedia) - Player Play Media
- [`playbackPlayerPollTimeline`](docs/sdks/playback/README.md#playerpolltimeline) - Player Poll Timeline
- [`playbackPlayerRefreshplayqueue`](docs/sdks/playback/README.md#playerrefreshplayqueue) - Player Refresh Play Queue
- [`playbackPlayerSeek`](docs/sdks/playback/README.md#playerseek) - Player Seek
- [`playbackPlayerSetParameters`](docs/sdks/playback/README.md#playersetparameters) - Player Set Parameters
- [`playbackPlayerSetRating`](docs/sdks/playback/README.md#playersetrating) - Player Set Rating
- [`playbackPlayerSetState`](docs/sdks/playback/README.md#playersetstate) - Player Set State
- [`playbackPlayerSetStreams`](docs/sdks/playback/README.md#playersetstreams) - Player Set Streams
- [`playbackPlayerSetTextStream`](docs/sdks/playback/README.md#playersettextstream) - Player Set Text Stream
- [`playbackPlayerSetViewOffset`](docs/sdks/playback/README.md#playersetviewoffset) - Player Set View Offset
- [`playbackPlayerSkipBy`](docs/sdks/playback/README.md#playerskipby) - Player Skip By
- [`playbackPlayerSkipTo`](docs/sdks/playback/README.md#playerskipto) - Player Skip To
- [`playbackPlayerStepback`](docs/sdks/playback/README.md#playerstepback) - Player Step Back
- [`playbackPlayerStepforward`](docs/sdks/playback/README.md#playerstepforward) - Player Step Forward
- [`playbackPlayerStop`](docs/sdks/playback/README.md#playerstop) - Player Stop
- [`playbackPlayerSubtitleStream`](docs/sdks/playback/README.md#playersubtitlestream) - Player Subtitle Stream
- [`playbackPlayerUnmute`](docs/sdks/playback/README.md#playerunmute) - Player Unmute
- [`playbackPlayerVideoStream`](docs/sdks/playback/README.md#playervideostream) - Player Video Stream
- [`playbackPlayerVolume`](docs/sdks/playback/README.md#playervolume) - Player Volume
- [`playbackRemoveFromContinueWatching`](docs/sdks/playback/README.md#removefromcontinuewatching) - Remove From Continue Watching
- [`playlistGetPlaylist`](docs/sdks/playlist/README.md#getplaylist) - Retrieve Playlist
- [`playlistGetPlaylistItems`](docs/sdks/playlist/README.md#getplaylistitems) - Retrieve Playlist Contents
- [`playlistListPlaylists`](docs/sdks/playlist/README.md#listplaylists) - List playlists
- [`playlistsDeletePlaylistByRatingKey`](docs/sdks/playlists/README.md#deleteplaylistbyratingkey) - Delete Playlist
- [`playQueueAddToPlayQueue`](docs/sdks/playqueue/README.md#addtoplayqueue) - Add a generator or playlist to a play queue
- [`playQueueClearPlayQueue`](docs/sdks/playqueue/README.md#clearplayqueue) - Clear a play queue
- [`playQueueCreatePlayQueue`](docs/sdks/playqueue/README.md#createplayqueue) - Create a play queue
- [`playQueueDeletePlayQueueItem`](docs/sdks/playqueue/README.md#deleteplayqueueitem) - Delete an item from a play queue
- [`playQueueGetPlayQueue`](docs/sdks/playqueue/README.md#getplayqueue) - Retrieve a play queue
- [`playQueueMovePlayQueueItem`](docs/sdks/playqueue/README.md#moveplayqueueitem) - Move an item in a play queue
- [`playQueueResetPlayQueue`](docs/sdks/playqueue/README.md#resetplayqueue) - Reset a play queue
- [`playQueueShuffle`](docs/sdks/playqueue/README.md#shuffle) - Shuffle a play queue
- [`playQueueUnshuffle`](docs/sdks/playqueue/README.md#unshuffle) - Unshuffle a play queue
- [`plexGetServerResources`](docs/sdks/plex/README.md#getserverresources) - Get Server Resources
- [`preferencesGetAllPreferences`](docs/sdks/preferences/README.md#getallpreferences) - Get all preferences
- [`preferencesGetPreference`](docs/sdks/preferences/README.md#getpreference) - Get a preferences
- [`preferencesSetPreferences`](docs/sdks/preferences/README.md#setpreferences) - Set preferences
- [`providerAddProvider`](docs/sdks/provider/README.md#addprovider) - Add a media provider
- [`providerAddToWatchlist`](docs/sdks/provider/README.md#addtowatchlist) - Add to Watchlist
- [`providerDeleteMediaProvider`](docs/sdks/provider/README.md#deletemediaprovider) - Delete a media provider
- [`providerGetWatchlist`](docs/sdks/provider/README.md#getwatchlist) - Get Watchlist
- [`providerListProviders`](docs/sdks/provider/README.md#listproviders) - Get the list of available media providers
- [`providerRefreshProviders`](docs/sdks/provider/README.md#refreshproviders) - Refresh media providers
- [`providerRemoveFromWatchlist`](docs/sdks/provider/README.md#removefromwatchlist) - Remove from Watchlist
- [`providerSearchDiscover`](docs/sdks/provider/README.md#searchdiscover) - Search Discover
- [`rateSetRating`](docs/sdks/rate/README.md#setrating) - Rate an item
- [`searchSearchHubs`](docs/sdks/search/README.md#searchhubs) - Search Hub
- [`searchVoiceSearchHubs`](docs/sdks/search/README.md#voicesearchhubs) - Voice Search Hub
- [`statusDeleteHistory`](docs/sdks/status/README.md#deletehistory) - Delete Single History Item
- [`statusGetBackgroundTasks`](docs/sdks/status/README.md#getbackgroundtasks) - Get background tasks
- [`statusGetHistoryItem`](docs/sdks/status/README.md#gethistoryitem) - Get Single History Item
- [`statusListPlaybackHistory`](docs/sdks/status/README.md#listplaybackhistory) - List Playback History
- [`statusListSessions`](docs/sdks/status/README.md#listsessions) - List Sessions
- [`statusTerminateSession`](docs/sdks/status/README.md#terminatesession) - Terminate a session
- [`subscriptionsCancelGrab`](docs/sdks/subscriptions/README.md#cancelgrab) - Cancel an existing grab
- [`subscriptionsCreateSubscription`](docs/sdks/subscriptions/README.md#createsubscription) - Create a subscription
- [`subscriptionsDeleteSubscription`](docs/sdks/subscriptions/README.md#deletesubscription) - Delete a subscription
- [`subscriptionsEditSubscriptionPreferences`](docs/sdks/subscriptions/README.md#editsubscriptionpreferences) - Edit a subscription
- [`subscriptionsGetAllSubscriptions`](docs/sdks/subscriptions/README.md#getallsubscriptions) - Get all subscriptions
- [`subscriptionsGetScheduledRecordings`](docs/sdks/subscriptions/README.md#getscheduledrecordings) - Get all scheduled recordings
- [`subscriptionsGetSubscription`](docs/sdks/subscriptions/README.md#getsubscription) - Get a single subscription
- [`subscriptionsGetTemplate`](docs/sdks/subscriptions/README.md#gettemplate) - Get the subscription template
- [`subscriptionsProcessSubscriptions`](docs/sdks/subscriptions/README.md#processsubscriptions) - Process all subscriptions
- [`subscriptionsReorderSubscription`](docs/sdks/subscriptions/README.md#reordersubscription) - Re-order a subscription
- [`timelineGetConversionQueue`](docs/sdks/timeline/README.md#getconversionqueue) - Get Conversion Queue
- [`timelineMarkPlayed`](docs/sdks/timeline/README.md#markplayed) - Mark an item as played
- [`timelineReport`](docs/sdks/timeline/README.md#report) - Report media timeline
- [`timelineUnscrobble`](docs/sdks/timeline/README.md#unscrobble) - Mark an item as unplayed
- [`transcoderGetDASHSegment`](docs/sdks/transcoder/README.md#getdashsegment) - Get DASH Segment
- [`transcoderGetHLSSegment`](docs/sdks/transcoder/README.md#gethlssegment) - Get HLS Segment
- [`transcoderGetTranscodeSessions`](docs/sdks/transcoder/README.md#gettranscodesessions) - Get Transcode Sessions
- [`transcoderMakeDecision`](docs/sdks/transcoder/README.md#makedecision) - Make a decision on media playback
- [`transcoderStartTranscodeSession`](docs/sdks/transcoder/README.md#starttranscodesession) - Start A Transcoding Session
- [`transcoderTranscodeImage`](docs/sdks/transcoder/README.md#transcodeimage) - Transcode an image
- [`transcoderTranscodeMusic`](docs/sdks/transcoder/README.md#transcodemusic) - Transcode Music
- [`transcoderTranscodeSubtitles`](docs/sdks/transcoder/README.md#transcodesubtitles) - Transcode subtitles
- [`transcoderTriggerFallback`](docs/sdks/transcoder/README.md#triggerfallback) - Manually trigger a transcoder fallback
- [`ultraBlurGetColors`](docs/sdks/ultrablur/README.md#getcolors) - Get UltraBlur Colors
- [`ultraBlurGetImage`](docs/sdks/ultrablur/README.md#getimage) - Get UltraBlur Image
- [`updaterApplyUpdates`](docs/sdks/updater/README.md#applyupdates) - Applying updates
- [`updaterCheckUpdates`](docs/sdks/updater/README.md#checkupdates) - Checking for updates
- [`updaterGetUpdatesStatus`](docs/sdks/updater/README.md#getupdatesstatus) - Querying status of updates
- [`usersAcceptInvite`](docs/sdks/users/README.md#acceptinvite) - Accept an Invite
- [`usersCreateHomeUser`](docs/sdks/users/README.md#createhomeuser) - Create Home User
- [`usersDeleteHomeUser`](docs/sdks/users/README.md#deletehomeuser) - Delete Home User
- [`usersGetAccountJSON`](docs/sdks/users/README.md#getaccountjson) - Get Account (JSON)
- [`usersGetAccountXML`](docs/sdks/users/README.md#getaccountxml) - Get Account (XML)
- [`usersGetFriends`](docs/sdks/users/README.md#getfriends) - Get Friends
- [`usersGetHome`](docs/sdks/users/README.md#gethome) - Get home hubs
- [`usersGetHomeUsers`](docs/sdks/users/README.md#gethomeusers) - Get home hubs Users
- [`usersGetLegacyResources`](docs/sdks/users/README.md#getlegacyresources) - Get Legacy Resources
- [`usersGetLegacyUsers`](docs/sdks/users/README.md#getlegacyusers) - Get Legacy Users
- [`usersGetMyPlexAccount`](docs/sdks/users/README.md#getmyplexaccount) - Get MyPlex Account
- [`usersGetServerDetails`](docs/sdks/users/README.md#getserverdetails) - Get Server Details
- [`usersGetServerUserFeatures`](docs/sdks/users/README.md#getserveruserfeatures) - Get Server User Features
- [`usersGetUserOptOuts`](docs/sdks/users/README.md#getuseroptouts) - Get User Opt-Outs
- [`usersGetUsers`](docs/sdks/users/README.md#getusers) - Get list of all connected users
- [`usersGetUserServer`](docs/sdks/users/README.md#getuserserver) - Get User Server Association
- [`usersRemoveShare`](docs/sdks/users/README.md#removeshare) - Remove Share
- [`usersShareServer`](docs/sdks/users/README.md#shareserver) - Share Server
- [`usersShareServerLegacy`](docs/sdks/users/README.md#shareserverlegacy) - Share Server (Legacy v1)
- [`usersUpdateHomeUser`](docs/sdks/users/README.md#updatehomeuser) - Update Home User
- [`usersUpdateRestrictedUser`](docs/sdks/users/README.md#updaterestricteduser) - Update Restricted User
- [`usersUpdateShare`](docs/sdks/users/README.md#updateshare) - Update Share
- [`usersUpdateViewStateSync`](docs/sdks/users/README.md#updateviewstatesync) - Update View State Sync

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
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";
import { openAsBlob } from "node:fs";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.uploadArt({
    id: 996758,
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

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
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({}, {
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
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts } from "@parke.dev/plexjs/models/shared";

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
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "abc123",
  product: "Plex for Roku",
  version: "2.4.1",
  platform: "Roku",
  platformVersion: "4.3 build 1057",
  device: "Roku 3",
  model: "4200X",
  deviceVendor: "Roku",
  deviceName: "Living Room TV",
  marketplace: "googlePlay",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

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
import { PlexAPI } from "@parke.dev/plexjs";

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
