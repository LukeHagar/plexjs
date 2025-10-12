# @lukehagar/plexjs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@lukehagar/plexjs](#lukehagarplexjs)
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
yarn add @lukehagar/plexjs
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import {
  Extension,
  StartTranscodeSessionLocation,
  StartTranscodeSessionProtocol,
} from "@lukehagar/plexjs/sdk/models/operations";
import {
  Accepts,
  AdvancedSubtitles,
  BoolInt,
  TranscodeType,
} from "@lukehagar/plexjs/sdk/models/shared";

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
  const result = await plexAPI.transcoder.startTranscodeSession({
    transcodeType: TranscodeType.Music,
    extension: Extension.Mpd,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
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
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
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

### [activities](docs/sdks/activities/README.md)

* [listActivities](docs/sdks/activities/README.md#listactivities) - Get all activities
* [cancelActivity](docs/sdks/activities/README.md#cancelactivity) - Cancel a running activity

### [butler](docs/sdks/butler/README.md)

* [stopTasks](docs/sdks/butler/README.md#stoptasks) - Stop all Butler tasks
* [getTasks](docs/sdks/butler/README.md#gettasks) - Get all Butler tasks
* [startTasks](docs/sdks/butler/README.md#starttasks) - Start all Butler tasks
* [stopTask](docs/sdks/butler/README.md#stoptask) - Stop a single Butler task
* [startTask](docs/sdks/butler/README.md#starttask) - Start a single Butler task

### [collections](docs/sdks/collections/README.md)

* [createCollection](docs/sdks/collections/README.md#createcollection) - Create collection

### [content](docs/sdks/content/README.md)

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

### [devices](docs/sdks/devices/README.md)

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

### [downloadQueue](docs/sdks/downloadqueue/README.md)

* [createDownloadQueue](docs/sdks/downloadqueue/README.md#createdownloadqueue) - Create download queue
* [getDownloadQueue](docs/sdks/downloadqueue/README.md#getdownloadqueue) - Get a download queue
* [addDownloadQueueItems](docs/sdks/downloadqueue/README.md#adddownloadqueueitems) - Add to download queue
* [listDownloadQueueItems](docs/sdks/downloadqueue/README.md#listdownloadqueueitems) - Get download queue items
* [getItemDecision](docs/sdks/downloadqueue/README.md#getitemdecision) - Grab download queue item decision
* [getDownloadQueueMedia](docs/sdks/downloadqueue/README.md#getdownloadqueuemedia) - Grab download queue media
* [removeDownloadQueueItems](docs/sdks/downloadqueue/README.md#removedownloadqueueitems) - Delete download queue items
* [getDownloadQueueItems](docs/sdks/downloadqueue/README.md#getdownloadqueueitems) - Get download queue items
* [restartProcessingDownloadQueueItems](docs/sdks/downloadqueue/README.md#restartprocessingdownloadqueueitems) - Restart processing of items from the decision

### [dvRs](docs/sdks/dvrs/README.md)

* [listDVRs](docs/sdks/dvrs/README.md#listdvrs) - Get DVRs
* [createDVR](docs/sdks/dvrs/README.md#createdvr) - Create a DVR
* [deleteDVR](docs/sdks/dvrs/README.md#deletedvr) - Delete a single DVR
* [getDVR](docs/sdks/dvrs/README.md#getdvr) - Get a single DVR
* [deleteLineup](docs/sdks/dvrs/README.md#deletelineup) - Delete a DVR Lineup
* [addLineup](docs/sdks/dvrs/README.md#addlineup) - Add a DVR Lineup
* [setDVRPreferences](docs/sdks/dvrs/README.md#setdvrpreferences) - Set DVR preferences
* [stopDVRReload](docs/sdks/dvrs/README.md#stopdvrreload) - Tell a DVR to stop reloading program guide
* [reloadGuide](docs/sdks/dvrs/README.md#reloadguide) - Tell a DVR to reload program guide
* [tuneChannel](docs/sdks/dvrs/README.md#tunechannel) - Tune a channel on a DVR
* [removeDeviceFromDVR](docs/sdks/dvrs/README.md#removedevicefromdvr) - Remove a device from an existing DVR
* [addDeviceToDVR](docs/sdks/dvrs/README.md#adddevicetodvr) - Add a device to an existing DVR

### [epg](docs/sdks/epg/README.md)

* [computeChannelMap](docs/sdks/epg/README.md#computechannelmap) - Compute the best channel map
* [getChannels](docs/sdks/epg/README.md#getchannels) - Get channels for a lineup
* [getCountries](docs/sdks/epg/README.md#getcountries) - Get all countries
* [getAllLanguages](docs/sdks/epg/README.md#getalllanguages) - Get all languages
* [getLineup](docs/sdks/epg/README.md#getlineup) - Compute the best lineup
* [getLineupChannels](docs/sdks/epg/README.md#getlineupchannels) - Get the channels for mulitple lineups
* [getCountriesLineups](docs/sdks/epg/README.md#getcountrieslineups) - Get lineups for a country via postal code
* [getCountryRegions](docs/sdks/epg/README.md#getcountryregions) - Get regions for a country
* [listLineups](docs/sdks/epg/README.md#listlineups) - Get lineups for a region

### [events](docs/sdks/events/README.md)

* [getNotifications](docs/sdks/events/README.md#getnotifications) - Connect to Eventsource
* [connectWebSocket](docs/sdks/events/README.md#connectwebsocket) - Connect to WebSocket

### [general](docs/sdks/general/README.md)

* [getServerInfo](docs/sdks/general/README.md#getserverinfo) - Get PMS info
* [getIdentity](docs/sdks/general/README.md#getidentity) - Get PMS identity
* [getSourceConnectionInformation](docs/sdks/general/README.md#getsourceconnectioninformation) - Get Source Connection Information
* [getTransientToken](docs/sdks/general/README.md#gettransienttoken) - Get Transient Tokens

### [hubs](docs/sdks/hubs/README.md)

* [getAllHubs](docs/sdks/hubs/README.md#getallhubs) - Get global hubs
* [getContinueWatching](docs/sdks/hubs/README.md#getcontinuewatching) - Get the continue watching hub
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

### [library](docs/sdks/library/README.md)

* [getLibraryItems](docs/sdks/library/README.md#getlibraryitems) - Get all items in library
* [deleteCaches](docs/sdks/library/README.md#deletecaches) - Delete library caches
* [cleanBundles](docs/sdks/library/README.md#cleanbundles) - Clean bundles
* [ingestTransientItem](docs/sdks/library/README.md#ingesttransientitem) - Ingest a transient item
* [getLibraryMatches](docs/sdks/library/README.md#getlibrarymatches) - Get library matches
* [optimizeDatabase](docs/sdks/library/README.md#optimizedatabase) - Optimize the Database
* [getRandomArtwork](docs/sdks/library/README.md#getrandomartwork) - Get random artwork
* [getSections](docs/sdks/library/README.md#getsections) - Get library sections (main Media Provider Only)
* [addSection](docs/sdks/library/README.md#addsection) - Add a library section
* [stopAllRefreshes](docs/sdks/library/README.md#stopallrefreshes) - Stop refresh
* [getSectionsPrefs](docs/sdks/library/README.md#getsectionsprefs) - Get section prefs
* [refreshSectionsMetadata](docs/sdks/library/README.md#refreshsectionsmetadata) - Refresh all sections
* [getTags](docs/sdks/library/README.md#gettags) - Get all library tags of a type
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
* [listSonicallySimilar](docs/sdks/library/README.md#listsonicallysimilar) - Get nearest tracks to metadata item
* [setItemPreferences](docs/sdks/library/README.md#setitempreferences) - Set metadata preferences
* [refreshItemsMetadata](docs/sdks/library/README.md#refreshitemsmetadata) - Refresh a metadata item
* [getRelatedItems](docs/sdks/library/README.md#getrelateditems) - Get related items
* [listSimilar](docs/sdks/library/README.md#listsimilar) - Get similar items
* [splitItem](docs/sdks/library/README.md#splititem) - Split a metadata item
* [addSubtitles](docs/sdks/library/README.md#addsubtitles) - Add subtitles
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
* [updateItems](docs/sdks/library/README.md#updateitems) - Set the fields of the filtered items
* [startAnalysis](docs/sdks/library/README.md#startanalysis) - Analyze a section
* [autocomplete](docs/sdks/library/README.md#autocomplete) - Get autocompletions for search
* [getCollections](docs/sdks/library/README.md#getcollections) - Get collections in a section
* [getCommon](docs/sdks/library/README.md#getcommon) - Get common fields for items
* [emptyTrash](docs/sdks/library/README.md#emptytrash) - Empty section trash
* [getSectionFilters](docs/sdks/library/README.md#getsectionfilters) - Get section filters
* [getFirstCharacters](docs/sdks/library/README.md#getfirstcharacters) - Get list of first characters
* [deleteIndexes](docs/sdks/library/README.md#deleteindexes) - Delete section indexes
* [deleteIntros](docs/sdks/library/README.md#deleteintros) - Delete section intro markers
* [getSectionPreferences](docs/sdks/library/README.md#getsectionpreferences) - Get section prefs
* [setSectionPreferences](docs/sdks/library/README.md#setsectionpreferences) - Set section prefs
* [cancelRefresh](docs/sdks/library/README.md#cancelrefresh) - Cancel section refresh
* [refreshSection](docs/sdks/library/README.md#refreshsection) - Refresh section
* [getAvailableSorts](docs/sdks/library/README.md#getavailablesorts) - Get a section sorts
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

### [libraryCollections](docs/sdks/librarycollections/README.md)

* [addCollectionItems](docs/sdks/librarycollections/README.md#addcollectionitems) - Add items to a collection
* [deleteCollectionItem](docs/sdks/librarycollections/README.md#deletecollectionitem) - Delete an item from a collection
* [moveCollectionItem](docs/sdks/librarycollections/README.md#movecollectionitem) - Reorder an item in the collection

### [libraryPlaylists](docs/sdks/libraryplaylists/README.md)

* [createPlaylist](docs/sdks/libraryplaylists/README.md#createplaylist) - Create a Playlist
* [uploadPlaylist](docs/sdks/libraryplaylists/README.md#uploadplaylist) - Upload
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

### [liveTV](docs/sdks/livetv/README.md)

* [getSessions](docs/sdks/livetv/README.md#getsessions) - Get all sessions
* [getLiveTVSession](docs/sdks/livetv/README.md#getlivetvsession) - Get a single session
* [getSessionPlaylistIndex](docs/sdks/livetv/README.md#getsessionplaylistindex) - Get a session playlist index
* [getSessionSegment](docs/sdks/livetv/README.md#getsessionsegment) - Get a single session segment

### [log](docs/sdks/log/README.md)

* [writeLog](docs/sdks/log/README.md#writelog) - Logging a multi-line message to the Plex Media Server log
* [writeMessage](docs/sdks/log/README.md#writemessage) - Logging a single-line message to the Plex Media Server log
* [enablePapertrail](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail

### [playlist](docs/sdks/playlist/README.md)

* [listPlaylists](docs/sdks/playlist/README.md#listplaylists) - List playlists
* [getPlaylist](docs/sdks/playlist/README.md#getplaylist) - Retrieve Playlist
* [getPlaylistItems](docs/sdks/playlist/README.md#getplaylistitems) - Retrieve Playlist Contents

### [playQueue](docs/sdks/playqueue/README.md)

* [createPlayQueue](docs/sdks/playqueue/README.md#createplayqueue) - Create a play queue
* [getPlayQueue](docs/sdks/playqueue/README.md#getplayqueue) - Retrieve a play queue
* [addToPlayQueue](docs/sdks/playqueue/README.md#addtoplayqueue) - Add a generator or playlist to a play queue
* [clearPlayQueue](docs/sdks/playqueue/README.md#clearplayqueue) - Clear a play queue
* [resetPlayQueue](docs/sdks/playqueue/README.md#resetplayqueue) - Reset a play queue
* [shuffle](docs/sdks/playqueue/README.md#shuffle) - Shuffle a play queue
* [unshuffle](docs/sdks/playqueue/README.md#unshuffle) - Unshuffle a play queue
* [deletePlayQueueItem](docs/sdks/playqueue/README.md#deleteplayqueueitem) - Delete an item from a play queue
* [movePlayQueueItem](docs/sdks/playqueue/README.md#moveplayqueueitem) - Move an item in a play queue

### [preferences](docs/sdks/preferences/README.md)

* [getAllPreferences](docs/sdks/preferences/README.md#getallpreferences) - Get all preferences
* [setPreferences](docs/sdks/preferences/README.md#setpreferences) - Set preferences
* [getPreference](docs/sdks/preferences/README.md#getpreference) - Get a preferences

### [provider](docs/sdks/provider/README.md)

* [listProviders](docs/sdks/provider/README.md#listproviders) - Get the list of available media providers
* [addProvider](docs/sdks/provider/README.md#addprovider) - Add a media provider
* [refreshProviders](docs/sdks/provider/README.md#refreshproviders) - Refresh media providers
* [deleteMediaProvider](docs/sdks/provider/README.md#deletemediaprovider) - Delete a media provider

### [rate](docs/sdks/rate/README.md)

* [setRating](docs/sdks/rate/README.md#setrating) - Rate an item

### [search](docs/sdks/search/README.md)

* [searchHubs](docs/sdks/search/README.md#searchhubs) - Search Hub
* [voiceSearchHubs](docs/sdks/search/README.md#voicesearchhubs) - Voice Search Hub

### [status](docs/sdks/status/README.md)

* [listSessions](docs/sdks/status/README.md#listsessions) - List Sessions
* [getBackgroundTasks](docs/sdks/status/README.md#getbackgroundtasks) - Get background tasks
* [listPlaybackHistory](docs/sdks/status/README.md#listplaybackhistory) - List Playback History
* [terminateSession](docs/sdks/status/README.md#terminatesession) - Terminate a session
* [deleteHistory](docs/sdks/status/README.md#deletehistory) - Delete Single History Item
* [getHistoryItem](docs/sdks/status/README.md#gethistoryitem) - Get Single History Item

### [subscriptions](docs/sdks/subscriptions/README.md)

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

### [timeline](docs/sdks/timeline/README.md)

* [markPlayed](docs/sdks/timeline/README.md#markplayed) - Mark an item as played
* [report](docs/sdks/timeline/README.md#report) - Report media timeline
* [unscrobble](docs/sdks/timeline/README.md#unscrobble) - Mark an item as unplayed

### [transcoder](docs/sdks/transcoder/README.md)

* [transcodeImage](docs/sdks/transcoder/README.md#transcodeimage) - Transcode an image
* [makeDecision](docs/sdks/transcoder/README.md#makedecision) - Make a decision on media playback
* [triggerFallback](docs/sdks/transcoder/README.md#triggerfallback) - Manually trigger a transcoder fallback
* [transcodeSubtitles](docs/sdks/transcoder/README.md#transcodesubtitles) - Transcode subtitles
* [startTranscodeSession](docs/sdks/transcoder/README.md#starttranscodesession) - Start A Transcoding Session

### [ultraBlur](docs/sdks/ultrablur/README.md)

* [getColors](docs/sdks/ultrablur/README.md#getcolors) - Get UltraBlur Colors
* [getImage](docs/sdks/ultrablur/README.md#getimage) - Get UltraBlur Image

### [updater](docs/sdks/updater/README.md)

* [applyUpdates](docs/sdks/updater/README.md#applyupdates) - Applying updates
* [checkUpdates](docs/sdks/updater/README.md#checkupdates) - Checking for updates
* [getUpdatesStatus](docs/sdks/updater/README.md#getupdatesstatus) - Querying status of updates

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import * as errors from "@lukehagar/plexjs/sdk/models/errors";
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

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
  try {
    const result = await plexAPI.general.getServerInfo({});

    console.log(result);
  } catch (error) {
    if (error instanceof errors.PlexAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`PlexAPIError`](./src/sdk/models/errors/plexapierror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                                                     | Variables                                    | Description |
| --- | ---------------------------------------------------------- | -------------------------------------------- | ----------- |
| 0   | `https://{IP-description}.{identifier}.plex.direct:{port}` | `identifier`<br/>`IP-description`<br/>`port` |             |
| 1   | `{protocol}://{host}:{port}`                               | `protocol`<br/>`host`<br/>`port`             |             |
| 2   | `https://{server_url}`                                     | `server_url`                                 |             |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable         | Parameter               | Default                              | Description                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ----------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`     | `identifier: string`    | `"0123456789abcdef0123456789abcdef"` | The unique identifier of this particular PMS                                                                                                                                                                                                                                                                                                                                         |
| `IP-description` | `ipDescription: string` | `"1-2-3-4"`                          | A `-` separated string of the IPv4 or IPv6 address components                                                                                                                                                                                                                                                                                                                        |
| `port`           | `port: string`          | `"32400"`                            | The Port number configured on the PMS. Typically (`32400`). <br/>If using a reverse proxy, this would be the port number configured on the proxy.<br/>                                                                                                                                                                                                                               |
| `protocol`       | `protocol: string`      | `"http"`                             | The network protocol to use. Typically (`http` or `https`)                                                                                                                                                                                                                                                                                                                           |
| `host`           | `host: string`          | `"localhost"`                        | The Host of the PMS.<br/>If using on a local network, this is the internal IP address of the server hosting the PMS.<br/>If using on an external network, this is the external IP address for your network, and requires port forwarding.<br/>If using a reverse proxy, this would be the external DNS domain for your network, and requires the proxy handle port forwarding. <br/> |
| `server_url`     | `serverUrl: string`     | `"http://localhost:32400"`           | The full manual URL to access the PMS                                                                                                                                                                                                                                                                                                                                                |

#### Example

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

const plexAPI = new PlexAPI({
  serverIdx: 1,
  protocol: "<value>",
  host: "electric-excess.name",
  port: "36393",
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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.general.getServerInfo({});

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
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

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
- [`dvRsListDVRs`](docs/sdks/dvrs/README.md#listdvrs) - Get DVRs
- [`dvRsReloadGuide`](docs/sdks/dvrs/README.md#reloadguide) - Tell a DVR to reload program guide
- [`dvRsRemoveDeviceFromDVR`](docs/sdks/dvrs/README.md#removedevicefromdvr) - Remove a device from an existing DVR
- [`dvRsSetDVRPreferences`](docs/sdks/dvrs/README.md#setdvrpreferences) - Set DVR preferences
- [`dvRsStopDVRReload`](docs/sdks/dvrs/README.md#stopdvrreload) - Tell a DVR to stop reloading program guide
- [`dvRsTuneChannel`](docs/sdks/dvrs/README.md#tunechannel) - Tune a channel on a DVR
- [`epgComputeChannelMap`](docs/sdks/epg/README.md#computechannelmap) - Compute the best channel map
- [`epgGetAllLanguages`](docs/sdks/epg/README.md#getalllanguages) - Get all languages
- [`epgGetChannels`](docs/sdks/epg/README.md#getchannels) - Get channels for a lineup
- [`epgGetCountries`](docs/sdks/epg/README.md#getcountries) - Get all countries
- [`epgGetCountriesLineups`](docs/sdks/epg/README.md#getcountrieslineups) - Get lineups for a country via postal code
- [`epgGetCountryRegions`](docs/sdks/epg/README.md#getcountryregions) - Get regions for a country
- [`epgGetLineup`](docs/sdks/epg/README.md#getlineup) - Compute the best lineup
- [`epgGetLineupChannels`](docs/sdks/epg/README.md#getlineupchannels) - Get the channels for mulitple lineups
- [`epgListLineups`](docs/sdks/epg/README.md#listlineups) - Get lineups for a region
- [`eventsConnectWebSocket`](docs/sdks/events/README.md#connectwebsocket) - Connect to WebSocket
- [`eventsGetNotifications`](docs/sdks/events/README.md#getnotifications) - Connect to Eventsource
- [`generalGetIdentity`](docs/sdks/general/README.md#getidentity) - Get PMS identity
- [`generalGetServerInfo`](docs/sdks/general/README.md#getserverinfo) - Get PMS info
- [`generalGetSourceConnectionInformation`](docs/sdks/general/README.md#getsourceconnectioninformation) - Get Source Connection Information
- [`generalGetTransientToken`](docs/sdks/general/README.md#gettransienttoken) - Get Transient Tokens
- [`hubsCreateCustomHub`](docs/sdks/hubs/README.md#createcustomhub) - Create a custom hub
- [`hubsDeleteCustomHub`](docs/sdks/hubs/README.md#deletecustomhub) - Delete a custom hub
- [`hubsGetAllHubs`](docs/sdks/hubs/README.md#getallhubs) - Get global hubs
- [`hubsGetContinueWatching`](docs/sdks/hubs/README.md#getcontinuewatching) - Get the continue watching hub
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
- [`libraryAddSubtitles`](docs/sdks/library/README.md#addsubtitles) - Add subtitles
- [`libraryAnalyzeMetadata`](docs/sdks/library/README.md#analyzemetadata) - Analyze an item
- [`libraryAutocomplete`](docs/sdks/library/README.md#autocomplete) - Get autocompletions for search
- [`libraryCancelRefresh`](docs/sdks/library/README.md#cancelrefresh) - Cancel section refresh
- [`libraryCleanBundles`](docs/sdks/library/README.md#cleanbundles) - Clean bundles
- [`libraryCollectionsAddCollectionItems`](docs/sdks/librarycollections/README.md#addcollectionitems) - Add items to a collection
- [`libraryCollectionsDeleteCollectionItem`](docs/sdks/librarycollections/README.md#deletecollectionitem) - Delete an item from a collection
- [`libraryCollectionsMoveCollectionItem`](docs/sdks/librarycollections/README.md#movecollectionitem) - Reorder an item in the collection
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
- [`libraryEditMarker`](docs/sdks/library/README.md#editmarker) - Edit a marker
- [`libraryEditMetadataItem`](docs/sdks/library/README.md#editmetadataitem) - Edit a metadata item
- [`libraryEditSection`](docs/sdks/library/README.md#editsection) - Edit a library section
- [`libraryEmptyTrash`](docs/sdks/library/README.md#emptytrash) - Empty section trash
- [`libraryGenerateThumbs`](docs/sdks/library/README.md#generatethumbs) - Generate thumbs of chapters for an item
- [`libraryGetAllItemLeaves`](docs/sdks/library/README.md#getallitemleaves) - Get the leaves of an item
- [`libraryGetAugmentationStatus`](docs/sdks/library/README.md#getaugmentationstatus) - Get augmentation status
- [`libraryGetAvailableSorts`](docs/sdks/library/README.md#getavailablesorts) - Get a section sorts
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
- [`libraryGetMediaPart`](docs/sdks/library/README.md#getmediapart) - Get a media part
- [`libraryGetPartIndex`](docs/sdks/library/README.md#getpartindex) - Get BIF index for a part
- [`libraryGetPerson`](docs/sdks/library/README.md#getperson) - Get person details
- [`libraryGetRandomArtwork`](docs/sdks/library/README.md#getrandomartwork) - Get random artwork
- [`libraryGetRelatedItems`](docs/sdks/library/README.md#getrelateditems) - Get related items
- [`libraryGetSectionFilters`](docs/sdks/library/README.md#getsectionfilters) - Get section filters
- [`libraryGetSectionImage`](docs/sdks/library/README.md#getsectionimage) - Get a section composite image
- [`libraryGetSectionPreferences`](docs/sdks/library/README.md#getsectionpreferences) - Get section prefs
- [`libraryGetSections`](docs/sdks/library/README.md#getsections) - Get library sections (main Media Provider Only)
- [`libraryGetSectionsPrefs`](docs/sdks/library/README.md#getsectionsprefs) - Get section prefs
- [`libraryGetStream`](docs/sdks/library/README.md#getstream) - Get a stream
- [`libraryGetStreamLevels`](docs/sdks/library/README.md#getstreamlevels) - Get loudness about a stream in json
- [`libraryGetStreamLoudness`](docs/sdks/library/README.md#getstreamloudness) - Get loudness about a stream
- [`libraryGetTags`](docs/sdks/library/README.md#gettags) - Get all library tags of a type
- [`libraryIngestTransientItem`](docs/sdks/library/README.md#ingesttransientitem) - Ingest a transient item
- [`libraryListMatches`](docs/sdks/library/README.md#listmatches) - Get metadata matches for an item
- [`libraryListPersonMedia`](docs/sdks/library/README.md#listpersonmedia) - Get media for a person
- [`libraryListSimilar`](docs/sdks/library/README.md#listsimilar) - Get similar items
- [`libraryListSonicallySimilar`](docs/sdks/library/README.md#listsonicallysimilar) - Get nearest tracks to metadata item
- [`libraryListTopUsers`](docs/sdks/library/README.md#listtopusers) - Get metadata top users
- [`libraryMatchItem`](docs/sdks/library/README.md#matchitem) - Match a metadata item
- [`libraryMergeItems`](docs/sdks/library/README.md#mergeitems) - Merge a metadata item
- [`libraryOptimizeDatabase`](docs/sdks/library/README.md#optimizedatabase) - Optimize the Database
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
- [`libraryPlaylistsUploadPlaylist`](docs/sdks/libraryplaylists/README.md#uploadplaylist) - Upload
- [`libraryRefreshItemsMetadata`](docs/sdks/library/README.md#refreshitemsmetadata) - Refresh a metadata item
- [`libraryRefreshSection`](docs/sdks/library/README.md#refreshsection) - Refresh section
- [`libraryRefreshSectionsMetadata`](docs/sdks/library/README.md#refreshsectionsmetadata) - Refresh all sections
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
- [`libraryUpdateItemArtwork`](docs/sdks/library/README.md#updateitemartwork) - Set an item's artwork, theme, etc
- [`libraryUpdateItems`](docs/sdks/library/README.md#updateitems) - Set the fields of the filtered items
- [`liveTVGetLiveTVSession`](docs/sdks/livetv/README.md#getlivetvsession) - Get a single session
- [`liveTVGetSessionPlaylistIndex`](docs/sdks/livetv/README.md#getsessionplaylistindex) - Get a session playlist index
- [`liveTVGetSessions`](docs/sdks/livetv/README.md#getsessions) - Get all sessions
- [`liveTVGetSessionSegment`](docs/sdks/livetv/README.md#getsessionsegment) - Get a single session segment
- [`logEnablePapertrail`](docs/sdks/log/README.md#enablepapertrail) - Enabling Papertrail
- [`logWriteLog`](docs/sdks/log/README.md#writelog) - Logging a multi-line message to the Plex Media Server log
- [`logWriteMessage`](docs/sdks/log/README.md#writemessage) - Logging a single-line message to the Plex Media Server log
- [`playlistGetPlaylist`](docs/sdks/playlist/README.md#getplaylist) - Retrieve Playlist
- [`playlistGetPlaylistItems`](docs/sdks/playlist/README.md#getplaylistitems) - Retrieve Playlist Contents
- [`playlistListPlaylists`](docs/sdks/playlist/README.md#listplaylists) - List playlists
- [`playQueueAddToPlayQueue`](docs/sdks/playqueue/README.md#addtoplayqueue) - Add a generator or playlist to a play queue
- [`playQueueClearPlayQueue`](docs/sdks/playqueue/README.md#clearplayqueue) - Clear a play queue
- [`playQueueCreatePlayQueue`](docs/sdks/playqueue/README.md#createplayqueue) - Create a play queue
- [`playQueueDeletePlayQueueItem`](docs/sdks/playqueue/README.md#deleteplayqueueitem) - Delete an item from a play queue
- [`playQueueGetPlayQueue`](docs/sdks/playqueue/README.md#getplayqueue) - Retrieve a play queue
- [`playQueueMovePlayQueueItem`](docs/sdks/playqueue/README.md#moveplayqueueitem) - Move an item in a play queue
- [`playQueueResetPlayQueue`](docs/sdks/playqueue/README.md#resetplayqueue) - Reset a play queue
- [`playQueueShuffle`](docs/sdks/playqueue/README.md#shuffle) - Shuffle a play queue
- [`playQueueUnshuffle`](docs/sdks/playqueue/README.md#unshuffle) - Unshuffle a play queue
- [`preferencesGetAllPreferences`](docs/sdks/preferences/README.md#getallpreferences) - Get all preferences
- [`preferencesGetPreference`](docs/sdks/preferences/README.md#getpreference) - Get a preferences
- [`preferencesSetPreferences`](docs/sdks/preferences/README.md#setpreferences) - Set preferences
- [`providerAddProvider`](docs/sdks/provider/README.md#addprovider) - Add a media provider
- [`providerDeleteMediaProvider`](docs/sdks/provider/README.md#deletemediaprovider) - Delete a media provider
- [`providerListProviders`](docs/sdks/provider/README.md#listproviders) - Get the list of available media providers
- [`providerRefreshProviders`](docs/sdks/provider/README.md#refreshproviders) - Refresh media providers
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
- [`timelineMarkPlayed`](docs/sdks/timeline/README.md#markplayed) - Mark an item as played
- [`timelineReport`](docs/sdks/timeline/README.md#report) - Report media timeline
- [`timelineUnscrobble`](docs/sdks/timeline/README.md#unscrobble) - Mark an item as unplayed
- [`transcoderMakeDecision`](docs/sdks/transcoder/README.md#makedecision) - Make a decision on media playback
- [`transcoderStartTranscodeSession`](docs/sdks/transcoder/README.md#starttranscodesession) - Start A Transcoding Session
- [`transcoderTranscodeImage`](docs/sdks/transcoder/README.md#transcodeimage) - Transcode an image
- [`transcoderTranscodeSubtitles`](docs/sdks/transcoder/README.md#transcodesubtitles) - Transcode subtitles
- [`transcoderTriggerFallback`](docs/sdks/transcoder/README.md#triggerfallback) - Manually trigger a transcoder fallback
- [`ultraBlurGetColors`](docs/sdks/ultrablur/README.md#getcolors) - Get UltraBlur Colors
- [`ultraBlurGetImage`](docs/sdks/ultrablur/README.md#getimage) - Get UltraBlur Image
- [`updaterApplyUpdates`](docs/sdks/updater/README.md#applyupdates) - Applying updates
- [`updaterCheckUpdates`](docs/sdks/updater/README.md#checkupdates) - Checking for updates
- [`updaterGetUpdatesStatus`](docs/sdks/updater/README.md#getupdatesstatus) - Querying status of updates

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
import { openAsBlob } from "node:fs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.log.writeLog(await openAsBlob("example.file"));

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
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

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
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts } from "@lukehagar/plexjs/sdk/models/shared";

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
