# Library

## Overview

Library endpoints which are outside of the Media Provider API.  Typically this is manipulation of the library (adding/removing sections, modifying preferences, etc).

### Available Operations

* [getRootLibrary](#getrootlibrary) - Get Root Library
* [getLibraryItems](#getlibraryitems) - Get all items in library
* [deleteCaches](#deletecaches) - Delete library caches
* [cleanBundles](#cleanbundles) - Clean bundles
* [ingestTransientItem](#ingesttransientitem) - Ingest a transient item
* [getLibraryMatches](#getlibrarymatches) - Get library matches
* [optimizeLibrary](#optimizelibrary) - Get Optimize Library
* [optimizeLibraryPost](#optimizelibrarypost) - Optimize Library
* [optimizeDatabase](#optimizedatabase) - Optimize the Database
* [getRandomArtwork](#getrandomartwork) - Get random artwork
* [getRecentlyAddedGlobal](#getrecentlyaddedglobal) - Get Global Recently Added
* [getLibrarySectionsFallback](#getlibrarysectionsfallback) - Get Library Sections (Fallback)
* [getSections](#getsections) - Get library sections (main Media Provider Only)
* [addSection](#addsection) - Add a library section
* [stopAllRefreshes](#stopallrefreshes) - Stop refresh
* [getSectionsPrefs](#getsectionsprefs) - Get section prefs
* [refreshSectionsMetadata](#refreshsectionsmetadata) - Refresh all sections
* [getTags](#gettags) - Get all library tags of a type
* [uploadArt](#uploadart) - Upload media art Art
* [getMetadataChildren](#getmetadatachildren) - Get Metadata Children
* [computeSonicPath](#computesonicpath) - Compute Sonic Path
* [getMetadataGrandchildren](#getmetadatagrandchildren) - Get Metadata Grandchildren
* [getMetadataGrandparent](#getmetadatagrandparent) - Get Metadata Grandparent
* [getNearestMetadata](#getnearestmetadata) - Get Nearest Metadata
* [getMetadataOnDeck](#getmetadataondeck) - Get Metadata On Deck
* [getMetadataParent](#getmetadataparent) - Get Metadata Parent
* [uploadPoster](#uploadposter) - Upload media art Poster
* [getMetadataReviews](#getmetadatareviews) - Get Metadata Reviews
* [deleteMetadataItem](#deletemetadataitem) - Delete a metadata item
* [editMetadataItem](#editmetadataitem) - Edit a metadata item
* [detectAds](#detectads) - Ad-detect an item
* [getAllItemLeaves](#getallitemleaves) - Get the leaves of an item
* [analyzeMetadata](#analyzemetadata) - Analyze an item
* [generateThumbs](#generatethumbs) - Generate thumbs of chapters for an item
* [detectCredits](#detectcredits) - Credit detect a metadata item
* [getExtras](#getextras) - Get an item's extras
* [addExtras](#addextras) - Add to an item's extras
* [getFile](#getfile) - Get a file from a metadata or media bundle
* [startBifGeneration](#startbifgeneration) - Start BIF generation of an item
* [detectIntros](#detectintros) - Intro detect an item
* [createMarker](#createmarker) - Create a marker
* [matchItem](#matchitem) - Match a metadata item
* [listMatches](#listmatches) - Get metadata matches for an item
* [mergeItems](#mergeitems) - Merge a metadata item
* [setItemPreferences](#setitempreferences) - Set metadata preferences
* [refreshItemsMetadata](#refreshitemsmetadata) - Refresh a metadata item
* [getRelatedItems](#getrelateditems) - Get related items
* [listSimilar](#listsimilar) - Get similar items
* [splitItem](#splititem) - Split a metadata item
* [getSubtitles](#getsubtitles) - Get subtitles
* [getItemTree](#getitemtree) - Get metadata items as a tree
* [unmatch](#unmatch) - Unmatch a metadata item
* [listTopUsers](#listtopusers) - Get metadata top users
* [detectVoiceActivity](#detectvoiceactivity) - Detect voice activity
* [getAugmentationStatus](#getaugmentationstatus) - Get augmentation status
* [setStreamSelection](#setstreamselection) - Set stream selection
* [getPerson](#getperson) - Get person details
* [listPersonMedia](#listpersonmedia) - Get media for a person
* [deleteLibrarySection](#deletelibrarysection) - Delete a library section
* [getLibraryDetails](#getlibrarydetails) - Get a library section by id
* [editSection](#editsection) - Edit a library section
* [getSectionAgents](#getsectionagents) - Get Section Agents
* [updateItems](#updateitems) - Set the fields of the filtered items
* [startAnalysis](#startanalysis) - Analyze a section
* [getSectionArtists](#getsectionartists) - Get Section Artists
* [autocomplete](#autocomplete) - Get autocompletions for search
* [getByContentRating](#getbycontentrating) - Get By Content Rating
* [getByDecade](#getbydecade) - Get By Decade
* [getByFolder](#getbyfolder) - Get By Folder
* [getByResolution](#getbyresolution) - Get By Resolution
* [getByYear](#getbyyear) - Get By Year
* [getSectionClips](#getsectionclips) - Get Section Clips
* [getCollections](#getcollections) - Get collections in a section
* [getCommon](#getcommon) - Get common fields for items
* [getSectionEdit](#getsectionedit) - Edit Section
* [editLibrarySection](#editlibrarysection) - Edit Section
* [emptyTrash](#emptytrash) - Get Empty Trash
* [emptyTrashPost](#emptytrashpost) - Empty Trash
* [emptyTrashPut](#emptytrashput) - Empty section trash
* [getSectionEpisodes](#getsectionepisodes) - Get Section Episodes
* [getSectionFilters](#getsectionfilters) - Get section filters
* [getFirstCharacters](#getfirstcharacters) - Get list of first characters
* [getLibrarySectionHubs](#getlibrarysectionhubs) - Get Section Hubs
* [deleteIndexes](#deleteindexes) - Delete section indexes
* [deleteIntros](#deleteintros) - Delete section intro markers
* [getSectionLabels](#getsectionlabels) - Get Section Labels
* [matchSectionItems](#matchsectionitems) - Match Section Items
* [moveSection](#movesection) - Move Section
* [getSectionMovies](#getsectionmovies) - Get Section Movies
* [getNewestForSection](#getnewestforsection) - Get Newest for Section
* [getOnDeckForSection](#getondeckforsection) - Get On Deck for Section
* [optimizeSection](#optimizesection) - Get Optimize Section
* [optimizeSectionPost](#optimizesectionpost) - Optimize Section
* [getSectionPhotos](#getsectionphotos) - Get Section Photos
* [getSectionPlaylists](#getsectionplaylists) - Get Section Playlists
* [getSectionPreferences](#getsectionpreferences) - Get section prefs
* [setSectionPreferences](#setsectionpreferences) - Set section prefs
* [getRecentlyAddedForSection](#getrecentlyaddedforsection) - Get Recently Added for Section
* [cancelRefresh](#cancelrefresh) - Cancel section refresh
* [refreshSection](#refreshsection) - Get Refresh Section
* [refreshSectionPost](#refreshsectionpost) - Refresh Section
* [searchSection](#searchsection) - Search Section
* [getSectionSettings](#getsectionsettings) - Get Section Settings
* [getSectionShows](#getsectionshows) - Get Section Shows
* [getAvailableSorts](#getavailablesorts) - Get a section sorts
* [getSectionTags](#getsectiontags) - Get Section Tags
* [getSectionTimeline](#getsectiontimeline) - Get Section Timeline
* [unmatchSectionItems](#unmatchsectionitems) - Unmatch Section Items
* [getUnwatchedForSection](#getunwatchedforsection) - Get Unwatched for Section
* [getStreamLevels](#getstreamlevels) - Get loudness about a stream in json
* [getStreamLoudness](#getstreamloudness) - Get loudness about a stream
* [getChapterImage](#getchapterimage) - Get a chapter image
* [setItemArtwork](#setitemartwork) - Set an item's artwork, theme, etc
* [updateItemArtwork](#updateitemartwork) - Set an item's artwork, theme, etc
* [deleteMarker](#deletemarker) - Delete a marker
* [editMarker](#editmarker) - Edit a marker
* [deleteMediaItem](#deletemediaitem) - Delete a media item
* [getPartIndex](#getpartindex) - Get BIF index for a part
* [deleteCollection](#deletecollection) - Delete a collection
* [getSectionImage](#getsectionimage) - Get a section composite image
* [deleteStream](#deletestream) - Delete a stream
* [getStream](#getstream) - Get a stream
* [setStreamOffset](#setstreamoffset) - Set a stream offset
* [getItemArtwork](#getitemartwork) - Get an item's artwork, theme, etc
* [getMediaPart](#getmediapart) - Get a media part
* [getImageFromBif](#getimagefrombif) - Get an image from part BIF

## getRootLibrary

Get the root library object.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRootLibrary" method="get" path="/library" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.getRootLibrary();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetRootLibrary } from "@parke.dev/plexjs/funcs/libraryGetRootLibrary.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryGetRootLibrary(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetRootLibrary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLibraryItems

Request all metadata items according to a query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibraryItems" method="get" path="/library/all" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getLibraryItems({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetLibraryItems } from "@parke.dev/plexjs/funcs/libraryGetLibraryItems.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetLibraryItems(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetLibraryItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLibraryItemsRequest](../../models/operations/getlibraryitemsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLibraryItemsResponse](../../models/operations/getlibraryitemsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteCaches

Delete the hub caches so they are recomputed on next request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCaches" method="delete" path="/library/caches" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await plexAPI.library.deleteCaches();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteCaches } from "@parke.dev/plexjs/funcs/libraryDeleteCaches.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryDeleteCaches(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteCaches failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cleanBundles

Clean out any now unused bundles. Bundles can become unused when media is deleted

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cleanBundles" method="put" path="/library/clean/bundles" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await plexAPI.library.cleanBundles();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryCleanBundles } from "@parke.dev/plexjs/funcs/libraryCleanBundles.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryCleanBundles(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryCleanBundles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## ingestTransientItem

This endpoint takes a file path specified in the `url` parameter, matches it using the scanner's match mechanism, downloads rich metadata, and then ingests the item as a transient item (without a library section). In the case where the file represents an episode, the entire tree (show, season, and episode) is added as transient items. At this time, movies and episodes are the only supported types, which are gleaned automatically from the file path.
Note that any of the parameters passed to the metadata details endpoint (e.g. `includeExtras=1`) work here.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ingestTransientItem" method="post" path="/library/file" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.ingestTransientItem({
    url: "file:///storage%2Femulated%2F0%2FArcher-S01E01.mkv",
    virtualFilePath: "/Avatar.mkv",
    computeHashes: BoolInt.True,
    ingestNonMatches: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryIngestTransientItem } from "@parke.dev/plexjs/funcs/libraryIngestTransientItem.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryIngestTransientItem(plexAPI, {
    url: "file:///storage%2Femulated%2F0%2FArcher-S01E01.mkv",
    virtualFilePath: "/Avatar.mkv",
    computeHashes: BoolInt.True,
    ingestNonMatches: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryIngestTransientItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IngestTransientItemRequest](../../models/operations/ingesttransientitemrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IngestTransientItemResponse](../../models/operations/ingesttransientitemresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLibraryMatches

The matches endpoint is used to match content external to the library with content inside the library. This is done by passing a series of semantic "hints" about the content (its type, name, or release year). Each type (e.g. movie) has a canonical set of minimal required hints.
This ability to match content is useful in a variety of scenarios. For example, in the DVR, the EPG uses the endpoint to match recording rules against airing content. And in the cloud, the UMP uses the endpoint to match up a piece of media with rich metadata.
The endpoint response can including multiple matches, if there is ambiguity, each one containing a `score` from 0 to 100. For somewhat historical reasons, anything over 85 is considered a positive match (we prefer false negatives over false positives in general for matching).
The `guid` hint is somewhat special, in that it generally represents a unique identity for a piece of media (e.g. the IMDB `ttXXX`) identifier, in contrast with other hints which can be much more ambiguous (e.g. a title of `Jane Eyre`, which could refer to the 1943 or the 2011 version).
Episodes require either a season/episode pair, or an air date (or both). Either the path must be sent, or the show title

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibraryMatches" method="get" path="/library/matches" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getLibraryMatches({
    type: MediaType.TvShow,
    includeFullMetadata: BoolInt.True,
    includeAncestorMetadata: BoolInt.True,
    includeAlternateMetadataSources: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetLibraryMatches } from "@parke.dev/plexjs/funcs/libraryGetLibraryMatches.js";
import { Accepts, BoolInt, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetLibraryMatches(plexAPI, {
    type: MediaType.TvShow,
    includeFullMetadata: BoolInt.True,
    includeAncestorMetadata: BoolInt.True,
    includeAlternateMetadataSources: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetLibraryMatches failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLibraryMatchesRequest](../../models/operations/getlibrarymatchesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLibraryMatchesResponse](../../models/operations/getlibrarymatchesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## optimizeLibrary

Optimize the database globally across all library sections.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="optimizeLibrary" method="get" path="/library/optimize" -->
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
  const result = await plexAPI.library.optimizeLibrary({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryOptimizeLibrary } from "@parke.dev/plexjs/funcs/libraryOptimizeLibrary.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryOptimizeLibrary(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryOptimizeLibrary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OptimizeLibraryRequest](../../models/operations/optimizelibraryrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## optimizeLibraryPost

Optimize the database globally across all library sections.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="optimizeLibraryPost" method="post" path="/library/optimize" -->
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
  const result = await plexAPI.library.optimizeLibraryPost({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryOptimizeLibraryPost } from "@parke.dev/plexjs/funcs/libraryOptimizeLibraryPost.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryOptimizeLibraryPost(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryOptimizeLibraryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OptimizeLibraryPostRequest](../../models/operations/optimizelibrarypostrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## optimizeDatabase

Initiate optimize on the database.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="optimizeDatabase" method="put" path="/library/optimize" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.optimizeDatabase({
    async: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryOptimizeDatabase } from "@parke.dev/plexjs/funcs/libraryOptimizeDatabase.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryOptimizeDatabase(plexAPI, {
    async: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryOptimizeDatabase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OptimizeDatabaseRequest](../../models/operations/optimizedatabaserequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getRandomArtwork

Get random artwork across sections.  This is commonly used for a screensaver.

This retrieves 100 random artwork paths in the specified sections and returns them.  Restrictions are put in place to not return artwork for items the user is not allowed to access.  Artwork will be for Movies, Shows, and Artists only.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRandomArtwork" method="get" path="/library/randomArtwork" -->
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
  const result = await plexAPI.library.getRandomArtwork({
    sections: [
      5,
      6,
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetRandomArtwork } from "@parke.dev/plexjs/funcs/libraryGetRandomArtwork.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetRandomArtwork(plexAPI, {
    sections: [
      5,
      6,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetRandomArtwork failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRandomArtworkRequest](../../models/operations/getrandomartworkrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithArtwork](../../models/shared/mediacontainerwithartwork.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getRecentlyAddedGlobal

Get recently added items across all library sections.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRecentlyAddedGlobal" method="get" path="/library/recentlyAdded" -->
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
  const result = await plexAPI.library.getRecentlyAddedGlobal({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetRecentlyAddedGlobal } from "@parke.dev/plexjs/funcs/libraryGetRecentlyAddedGlobal.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetRecentlyAddedGlobal(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetRecentlyAddedGlobal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecentlyAddedGlobalRequest](../../models/operations/getrecentlyaddedglobalrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLibrarySectionsFallback

Fallback for non-owners to list library sections.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibrarySectionsFallback" method="get" path="/library/sections/" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.getLibrarySectionsFallback();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetLibrarySectionsFallback } from "@parke.dev/plexjs/funcs/libraryGetLibrarySectionsFallback.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryGetLibrarySectionsFallback(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetLibrarySectionsFallback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSections

A library section (commonly referred to as just a library) is a collection of media. Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media. For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.
Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts. This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSections" method="get" path="/library/sections/all" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.getSections();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSections } from "@parke.dev/plexjs/funcs/libraryGetSections.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryGetSections(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSectionsResponse](../../models/operations/getsectionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## addSection

Add a new library section to the server

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addSection" method="post" path="/library/sections/all" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.addSection({
    name: "<value>",
    mediaType: 39544,
    agent: "<value>",
    language: "<value>",
    locations: [
      "O:\\fatboy\\Media\\Ripped\\Music",
      "O:\\fatboy\\Media\\My Music",
    ],
    prefs: {},
    relative: BoolInt.True,
    importFromiTunes: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryAddSection } from "@parke.dev/plexjs/funcs/libraryAddSection.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryAddSection(plexAPI, {
    name: "<value>",
    mediaType: 39544,
    agent: "<value>",
    language: "<value>",
    locations: [
      "O:\\fatboy\\Media\\Ripped\\Music",
      "O:\\fatboy\\Media\\My Music",
    ],
    prefs: {},
    relative: BoolInt.True,
    importFromiTunes: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryAddSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddSectionRequest](../../models/operations/addsectionrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SlashGetResponses200](../../models/shared/slashgetresponses200.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## stopAllRefreshes

Stop all refreshes across all sections

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopAllRefreshes" method="delete" path="/library/sections/all/refresh" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.library.stopAllRefreshes();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryStopAllRefreshes } from "@parke.dev/plexjs/funcs/libraryStopAllRefreshes.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await libraryStopAllRefreshes(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryStopAllRefreshes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LibrarySections](../../models/shared/librarysections.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionsPrefs

Get a section's preferences for a metadata type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionsPrefs" method="get" path="/library/sections/prefs" -->
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
  const result = await plexAPI.library.getSectionsPrefs({
    mediaType: 460221,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionsPrefs } from "@parke.dev/plexjs/funcs/libraryGetSectionsPrefs.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionsPrefs(plexAPI, {
    mediaType: 460221,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionsPrefs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionsPrefsRequest](../../models/operations/getsectionsprefsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LibrarySections](../../models/shared/librarysections.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## refreshSectionsMetadata

Tell PMS to refresh all section metadata

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshSectionsMetadata" method="post" path="/library/sections/refresh" -->
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
  await plexAPI.library.refreshSectionsMetadata({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryRefreshSectionsMetadata } from "@parke.dev/plexjs/funcs/libraryRefreshSectionsMetadata.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryRefreshSectionsMetadata(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryRefreshSectionsMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RefreshSectionsMetadataRequest](../../models/operations/refreshsectionsmetadatarequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTags

Get all library tags of a type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTags" method="get" path="/library/tags" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getTags({
    type: MediaType.TvShow,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetTags } from "@parke.dev/plexjs/funcs/libraryGetTags.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetTags(plexAPI, {
    type: MediaType.TvShow,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTagsRequest](../../models/operations/gettagsrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTagsResponse](../../models/operations/gettagsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## uploadArt

Upload custom background art for a metadata item.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadArt" method="post" path="/library/metadata/{id}/arts" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUploadArt } from "@parke.dev/plexjs/funcs/libraryUploadArt.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";
import { openAsBlob } from "node:fs";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUploadArt(plexAPI, {
    id: 996758,
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryUploadArt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadArtRequest](../../models/operations/uploadartrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataChildren

Get children of a show, season, artist, or album.

### Example Usage: include-stream

<!-- UsageSnippet language="typescript" operationID="getMetadataChildren" method="get" path="/library/metadata/{id}/children" example="include-stream" -->
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
  const result = await plexAPI.library.getMetadataChildren({
    id: 240367,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataChildren } from "@parke.dev/plexjs/funcs/libraryGetMetadataChildren.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataChildren(plexAPI, {
    id: 240367,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataChildren failed:", res.error);
  }
}

run();
```
### Example Usage: include-stream-otheritem

<!-- UsageSnippet language="typescript" operationID="getMetadataChildren" method="get" path="/library/metadata/{id}/children" example="include-stream-otheritem" -->
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
  const result = await plexAPI.library.getMetadataChildren({
    id: 240367,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataChildren } from "@parke.dev/plexjs/funcs/libraryGetMetadataChildren.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataChildren(plexAPI, {
    id: 240367,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataChildren failed:", res.error);
  }
}

run();
```
### Example Usage: include-stream-otheritem-anotheritem

<!-- UsageSnippet language="typescript" operationID="getMetadataChildren" method="get" path="/library/metadata/{id}/children" example="include-stream-otheritem-anotheritem" -->
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
  const result = await plexAPI.library.getMetadataChildren({
    id: 240367,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataChildren } from "@parke.dev/plexjs/funcs/libraryGetMetadataChildren.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataChildren(plexAPI, {
    id: 240367,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataChildren failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataChildrenRequest](../../models/operations/getmetadatachildrenrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## computeSonicPath

Compute a sonic adventure path from a starting track.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="computeSonicPath" method="get" path="/library/metadata/{id}/computePath" -->
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
  const result = await plexAPI.library.computeSonicPath({
    id: 622554,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryComputeSonicPath } from "@parke.dev/plexjs/funcs/libraryComputeSonicPath.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryComputeSonicPath(plexAPI, {
    id: 622554,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryComputeSonicPath failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComputeSonicPathRequest](../../models/operations/computesonicpathrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataGrandchildren

Get grandchildren (e.g. episodes under a show).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataGrandchildren" method="get" path="/library/metadata/{id}/grandchildren" -->
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
  const result = await plexAPI.library.getMetadataGrandchildren({
    id: 679910,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataGrandchildren } from "@parke.dev/plexjs/funcs/libraryGetMetadataGrandchildren.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataGrandchildren(plexAPI, {
    id: 679910,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataGrandchildren failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataGrandchildrenRequest](../../models/operations/getmetadatagrandchildrenrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataGrandparent

Get grandparent metadata shortcut.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataGrandparent" method="get" path="/library/metadata/{id}/grandparent" -->
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
  const result = await plexAPI.library.getMetadataGrandparent({
    id: 191152,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataGrandparent } from "@parke.dev/plexjs/funcs/libraryGetMetadataGrandparent.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataGrandparent(plexAPI, {
    id: 191152,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataGrandparent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataGrandparentRequest](../../models/operations/getmetadatagrandparentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getNearestMetadata

Get sonically similar items for a music track.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getNearestMetadata" method="get" path="/library/metadata/{id}/nearest" -->
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
  const result = await plexAPI.library.getNearestMetadata({
    id: 62697,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetNearestMetadata } from "@parke.dev/plexjs/funcs/libraryGetNearestMetadata.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetNearestMetadata(plexAPI, {
    id: 62697,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetNearestMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNearestMetadataRequest](../../models/operations/getnearestmetadatarequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataOnDeck

Get On Deck status for a show or season.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataOnDeck" method="get" path="/library/metadata/{id}/onDeck" -->
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
  const result = await plexAPI.library.getMetadataOnDeck({
    id: 883975,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataOnDeck } from "@parke.dev/plexjs/funcs/libraryGetMetadataOnDeck.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataOnDeck(plexAPI, {
    id: 883975,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataOnDeck failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataOnDeckRequest](../../models/operations/getmetadataondeckrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataParent

Get parent metadata shortcut.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataParent" method="get" path="/library/metadata/{id}/parent" -->
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
  const result = await plexAPI.library.getMetadataParent({
    id: 352555,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataParent } from "@parke.dev/plexjs/funcs/libraryGetMetadataParent.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataParent(plexAPI, {
    id: 352555,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataParent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataParentRequest](../../models/operations/getmetadataparentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## uploadPoster

Upload a custom poster image for a metadata item.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadPoster" method="post" path="/library/metadata/{id}/posters" -->
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
  const result = await plexAPI.library.uploadPoster({
    id: 316927,
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUploadPoster } from "@parke.dev/plexjs/funcs/libraryUploadPoster.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";
import { openAsBlob } from "node:fs";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUploadPoster(plexAPI, {
    id: 316927,
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryUploadPoster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadPosterRequest](../../models/operations/uploadposterrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataReviews

Get user reviews for a metadata item.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetadataReviews" method="get" path="/library/metadata/{id}/reviews" -->
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
  const result = await plexAPI.library.getMetadataReviews({
    id: 146091,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMetadataReviews } from "@parke.dev/plexjs/funcs/libraryGetMetadataReviews.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMetadataReviews(plexAPI, {
    id: 146091,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMetadataReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetadataReviewsRequest](../../models/operations/getmetadatareviewsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteMetadataItem

Delete a single metadata item from the library, deleting media as well

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteMetadataItem" method="delete" path="/library/metadata/{ids}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.deleteMetadataItem({
    ids: "<value>",
    proxy: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteMetadataItem } from "@parke.dev/plexjs/funcs/libraryDeleteMetadataItem.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteMetadataItem(plexAPI, {
    ids: "<value>",
    proxy: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteMetadataItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMetadataItemRequest](../../models/operations/deletemetadataitemrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## editMetadataItem

Edit metadata items setting fields

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editMetadataItem" method="put" path="/library/metadata/{ids}" -->
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
  await plexAPI.library.editMetadataItem({
    ids: [
      "<value 1>",
      "<value 2>",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEditMetadataItem } from "@parke.dev/plexjs/funcs/libraryEditMetadataItem.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEditMetadataItem(plexAPI, {
    ids: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryEditMetadataItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditMetadataItemRequest](../../models/operations/editmetadataitemrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## detectAds

Start the detection of ads in a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="detectAds" method="put" path="/library/metadata/{ids}/addetect" -->
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
  await plexAPI.library.detectAds({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDetectAds } from "@parke.dev/plexjs/funcs/libraryDetectAds.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDetectAds(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDetectAds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DetectAdsRequest](../../models/operations/detectadsrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAllItemLeaves

Get the leaves for a metadata item such as the episodes in a show

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllItemLeaves" method="get" path="/library/metadata/{ids}/allLeaves" -->
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
  const result = await plexAPI.library.getAllItemLeaves({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetAllItemLeaves } from "@parke.dev/plexjs/funcs/libraryGetAllItemLeaves.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetAllItemLeaves(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetAllItemLeaves failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllItemLeavesRequest](../../models/operations/getallitemleavesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllItemLeavesResponse](../../models/operations/getallitemleavesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## analyzeMetadata

Start the analysis of a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="analyzeMetadata" method="put" path="/library/metadata/{ids}/analyze" -->
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
  await plexAPI.library.analyzeMetadata({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryAnalyzeMetadata } from "@parke.dev/plexjs/funcs/libraryAnalyzeMetadata.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryAnalyzeMetadata(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryAnalyzeMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AnalyzeMetadataRequest](../../models/operations/analyzemetadatarequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## generateThumbs

Start the chapter thumb generation for an item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generateThumbs" method="put" path="/library/metadata/{ids}/chapterThumbs" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.generateThumbs({
    ids: "<value>",
    force: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGenerateThumbs } from "@parke.dev/plexjs/funcs/libraryGenerateThumbs.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGenerateThumbs(plexAPI, {
    ids: "<value>",
    force: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryGenerateThumbs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GenerateThumbsRequest](../../models/operations/generatethumbsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## detectCredits

Start credit detection on a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="detectCredits" method="put" path="/library/metadata/{ids}/credits" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.detectCredits({
    ids: "<value>",
    force: BoolInt.True,
    manual: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDetectCredits } from "@parke.dev/plexjs/funcs/libraryDetectCredits.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDetectCredits(plexAPI, {
    ids: "<value>",
    force: BoolInt.True,
    manual: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDetectCredits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DetectCreditsRequest](../../models/operations/detectcreditsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getExtras

Get the extras for a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExtras" method="get" path="/library/metadata/{ids}/extras" -->
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
  const result = await plexAPI.library.getExtras({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetExtras } from "@parke.dev/plexjs/funcs/libraryGetExtras.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetExtras(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetExtras failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExtrasRequest](../../models/operations/getextrasrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetExtrasResponse](../../models/operations/getextrasresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## addExtras

Add an extra to a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addExtras" method="post" path="/library/metadata/{ids}/extras" -->
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
  await plexAPI.library.addExtras({
    ids: "<value>",
    url: "https://super-mortise.biz/",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryAddExtras } from "@parke.dev/plexjs/funcs/libraryAddExtras.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryAddExtras(plexAPI, {
    ids: "<value>",
    url: "https://super-mortise.biz/",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryAddExtras failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddExtrasRequest](../../models/operations/addextrasrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getFile

Get a bundle file for a metadata or media item.  This is either an image or a mp3 (for a show's theme)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFile" method="get" path="/library/metadata/{ids}/file" -->
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
  const result = await plexAPI.library.getFile({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetFile } from "@parke.dev/plexjs/funcs/libraryGetFile.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetFile(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFileRequest](../../models/operations/getfilerequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFileResponse](../../models/operations/getfileresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## startBifGeneration

Start the indexing (BIF generation) of an item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startBifGeneration" method="put" path="/library/metadata/{ids}/index" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.startBifGeneration({
    ids: "<value>",
    force: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryStartBifGeneration } from "@parke.dev/plexjs/funcs/libraryStartBifGeneration.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryStartBifGeneration(plexAPI, {
    ids: "<value>",
    force: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryStartBifGeneration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartBifGenerationRequest](../../models/operations/startbifgenerationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## detectIntros

Start the detection of intros in a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="detectIntros" method="put" path="/library/metadata/{ids}/intro" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.detectIntros({
    ids: "<value>",
    force: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDetectIntros } from "@parke.dev/plexjs/funcs/libraryDetectIntros.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDetectIntros(plexAPI, {
    ids: "<value>",
    force: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDetectIntros failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DetectIntrosRequest](../../models/operations/detectintrosrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createMarker

Create a marker for this user on the metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createMarker" method="post" path="/library/metadata/{ids}/marker" -->
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
  const result = await plexAPI.library.createMarker({
    ids: "<value>",
    mediaType: 248391,
    startTimeOffset: 535191,
    attributes: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryCreateMarker } from "@parke.dev/plexjs/funcs/libraryCreateMarker.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryCreateMarker(plexAPI, {
    ids: "<value>",
    mediaType: 248391,
    startTimeOffset: 535191,
    attributes: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryCreateMarker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMarkerRequest](../../models/operations/createmarkerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateMarkerResponse](../../models/operations/createmarkerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## matchItem

Match a metadata item to a guid

### Example Usage

<!-- UsageSnippet language="typescript" operationID="matchItem" method="put" path="/library/metadata/{ids}/match" -->
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
  await plexAPI.library.matchItem({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryMatchItem } from "@parke.dev/plexjs/funcs/libraryMatchItem.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryMatchItem(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryMatchItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MatchItemRequest](../../models/operations/matchitemrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listMatches

Get the list of metadata matches for a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMatches" method="put" path="/library/metadata/{ids}/matches" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.listMatches({
    ids: "<value>",
    manual: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryListMatches } from "@parke.dev/plexjs/funcs/libraryListMatches.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryListMatches(plexAPI, {
    ids: "<value>",
    manual: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryListMatches failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMatchesRequest](../../models/operations/listmatchesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## mergeItems

Merge a metadata item with other items

### Example Usage

<!-- UsageSnippet language="typescript" operationID="mergeItems" method="put" path="/library/metadata/{ids}/merge" -->
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
  await plexAPI.library.mergeItems({
    idsPathParameter: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryMergeItems } from "@parke.dev/plexjs/funcs/libraryMergeItems.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryMergeItems(plexAPI, {
    idsPathParameter: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryMergeItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MergeItemsRequest](../../models/operations/mergeitemsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## setItemPreferences

Set the preferences on a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setItemPreferences" method="put" path="/library/metadata/{ids}/prefs" -->
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
  await plexAPI.library.setItemPreferences({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySetItemPreferences } from "@parke.dev/plexjs/funcs/librarySetItemPreferences.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySetItemPreferences(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("librarySetItemPreferences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetItemPreferencesRequest](../../models/operations/setitempreferencesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## refreshItemsMetadata

Refresh a metadata item from the agent

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshItemsMetadata" method="put" path="/library/metadata/{ids}/refresh" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.refreshItemsMetadata({
    ids: "<value>",
    markUpdated: BoolInt.True,
    skipRefresh: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryRefreshItemsMetadata } from "@parke.dev/plexjs/funcs/libraryRefreshItemsMetadata.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryRefreshItemsMetadata(plexAPI, {
    ids: "<value>",
    markUpdated: BoolInt.True,
    skipRefresh: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryRefreshItemsMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RefreshItemsMetadataRequest](../../models/operations/refreshitemsmetadatarequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getRelatedItems

Get a hub of related items to a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRelatedItems" method="get" path="/library/metadata/{ids}/related" -->
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
  const result = await plexAPI.library.getRelatedItems({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetRelatedItems } from "@parke.dev/plexjs/funcs/libraryGetRelatedItems.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetRelatedItems(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetRelatedItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRelatedItemsRequest](../../models/operations/getrelateditemsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithHubs](../../models/shared/mediacontainerwithhubs.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listSimilar

Get a list of similar items to a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSimilar" method="get" path="/library/metadata/{ids}/similar" -->
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
  const result = await plexAPI.library.listSimilar({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryListSimilar } from "@parke.dev/plexjs/funcs/libraryListSimilar.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryListSimilar(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryListSimilar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSimilarRequest](../../models/operations/listsimilarrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## splitItem

Split a metadata item into multiple items

### Example Usage

<!-- UsageSnippet language="typescript" operationID="splitItem" method="put" path="/library/metadata/{ids}/split" -->
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
  await plexAPI.library.splitItem({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySplitItem } from "@parke.dev/plexjs/funcs/librarySplitItem.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySplitItem(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("librarySplitItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SplitItemRequest](../../models/operations/splititemrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSubtitles

Add a subtitle to a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSubtitles" method="get" path="/library/metadata/{ids}/subtitles" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.getSubtitles({
    ids: "<value>",
    forced: BoolInt.True,
    hearingImpaired: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSubtitles } from "@parke.dev/plexjs/funcs/libraryGetSubtitles.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSubtitles(plexAPI, {
    ids: "<value>",
    forced: BoolInt.True,
    hearingImpaired: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryGetSubtitles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubtitlesRequest](../../models/operations/getsubtitlesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getItemTree

Get a tree of metadata items, such as the seasons/episodes of a show

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getItemTree" method="get" path="/library/metadata/{ids}/tree" -->
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
  const result = await plexAPI.library.getItemTree({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetItemTree } from "@parke.dev/plexjs/funcs/libraryGetItemTree.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetItemTree(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetItemTree failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetItemTreeRequest](../../models/operations/getitemtreerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithNestedMetadata](../../models/shared/mediacontainerwithnestedmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## unmatch

Unmatch a metadata item to info fetched from the agent

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unmatch" method="put" path="/library/metadata/{ids}/unmatch" -->
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
  await plexAPI.library.unmatch({
    ids: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUnmatch } from "@parke.dev/plexjs/funcs/libraryUnmatch.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUnmatch(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryUnmatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnmatchRequest](../../models/operations/unmatchrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listTopUsers

Get the list of users which have played this item starting with the most

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTopUsers" method="get" path="/library/metadata/{ids}/users/top" -->
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
  const result = await plexAPI.library.listTopUsers({
    ids: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryListTopUsers } from "@parke.dev/plexjs/funcs/libraryListTopUsers.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryListTopUsers(plexAPI, {
    ids: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryListTopUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTopUsersRequest](../../models/operations/listtopusersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTopUsersResponse](../../models/operations/listtopusersresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## detectVoiceActivity

Start the detection of voice in a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="detectVoiceActivity" method="put" path="/library/metadata/{ids}/voiceActivity" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.detectVoiceActivity({
    ids: "<value>",
    force: BoolInt.True,
    manual: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDetectVoiceActivity } from "@parke.dev/plexjs/funcs/libraryDetectVoiceActivity.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDetectVoiceActivity(plexAPI, {
    ids: "<value>",
    force: BoolInt.True,
    manual: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDetectVoiceActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DetectVoiceActivityRequest](../../models/operations/detectvoiceactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAugmentationStatus

Get augmentation status and potentially wait for completion

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAugmentationStatus" method="get" path="/library/metadata/augmentations/{augmentationId}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.getAugmentationStatus({
    augmentationId: "<id>",
    wait: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetAugmentationStatus } from "@parke.dev/plexjs/funcs/libraryGetAugmentationStatus.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetAugmentationStatus(plexAPI, {
    augmentationId: "<id>",
    wait: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryGetAugmentationStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAugmentationStatusRequest](../../models/operations/getaugmentationstatusrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setStreamSelection

Set which streams (audio/subtitle) are selected by this user

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setStreamSelection" method="put" path="/library/parts/{partId}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.setStreamSelection({
    partId: 360489,
    allParts: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySetStreamSelection } from "@parke.dev/plexjs/funcs/librarySetStreamSelection.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySetStreamSelection(plexAPI, {
    partId: 360489,
    allParts: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("librarySetStreamSelection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetStreamSelectionRequest](../../models/operations/setstreamselectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPerson

Get details for a single actor.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerson" method="get" path="/library/people/{personId}" -->
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
  const result = await plexAPI.library.getPerson({
    personId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetPerson } from "@parke.dev/plexjs/funcs/libraryGetPerson.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetPerson(plexAPI, {
    personId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetPerson failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPersonRequest](../../models/operations/getpersonrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithTags](../../models/shared/mediacontainerwithtags.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPersonMedia

Get all the media for a single actor.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPersonMedia" method="get" path="/library/people/{personId}/media" -->
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
  const result = await plexAPI.library.listPersonMedia({
    personId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryListPersonMedia } from "@parke.dev/plexjs/funcs/libraryListPersonMedia.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryListPersonMedia(plexAPI, {
    personId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryListPersonMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPersonMediaRequest](../../models/operations/listpersonmediarequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteLibrarySection

Delete a library section by id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteLibrarySection" method="delete" path="/library/sections/{sectionId}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.deleteLibrarySection({
    sectionId: "<id>",
    async: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteLibrarySection } from "@parke.dev/plexjs/funcs/libraryDeleteLibrarySection.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteLibrarySection(plexAPI, {
    sectionId: "<id>",
    async: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteLibrarySection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLibrarySectionRequest](../../models/operations/deletelibrarysectionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLibraryDetails

Returns details for the library. This can be thought of as an interstitial endpoint because it contains information about the library, rather than content itself. It often contains a list of `Directory` metadata objects: These used to be used by clients to build a menuing system.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibraryDetails" method="get" path="/library/sections/{sectionId}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getLibraryDetails({
    sectionId: "<id>",
    includeDetails: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetLibraryDetails } from "@parke.dev/plexjs/funcs/libraryGetLibraryDetails.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetLibraryDetails(plexAPI, {
    sectionId: "<id>",
    includeDetails: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetLibraryDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLibraryDetailsRequest](../../models/operations/getlibrarydetailsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLibraryDetailsResponse](../../models/operations/getlibrarydetailsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## editSection

Edit a library section by id setting parameters

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editSection" method="put" path="/library/sections/{sectionId}" -->
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
  await plexAPI.library.editSection({
    sectionId: "<id>",
    agent: "<value>",
    locations: [
      "O:\\fatboy\\Media\\Ripped\\Music",
      "O:\\fatboy\\Media\\My Music",
    ],
    prefs: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEditSection } from "@parke.dev/plexjs/funcs/libraryEditSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEditSection(plexAPI, {
    sectionId: "<id>",
    agent: "<value>",
    locations: [
      "O:\\fatboy\\Media\\Ripped\\Music",
      "O:\\fatboy\\Media\\My Music",
    ],
    prefs: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryEditSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditSectionRequest](../../models/operations/editsectionrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getSectionAgents

Get available metadata agents for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionAgents" method="get" path="/library/sections/{sectionId}/agents" -->
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
  const result = await plexAPI.library.getSectionAgents({
    sectionId: 757906,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionAgents } from "@parke.dev/plexjs/funcs/libraryGetSectionAgents.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionAgents(plexAPI, {
    sectionId: 757906,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionAgents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionAgentsRequest](../../models/operations/getsectionagentsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateItems

This endpoint takes an large possible set of values.  Here are some examples.
- **Parameters, extra documentation**
  - artist.title.value
      - When used with track, both artist.title.value and album.title.value need to be specified
  - title.value usage
      - Summary
          - Tracks always rename and never merge
          - Albums and Artists
              - if single item and item without title does not exist, it is renamed.
              - if single item and item with title does exist they are merged.
              - if multiple they are always merged.
      - Tracks
          - Works as expected will update the track's title
          - Single track:    `/library/sections/{id}/all?type=10&id=42&title.value=NewName`
          - Multiple tracks: `/library/sections/{id}/all?type=10&id=42,43,44&title.value=NewName`
          - All tracks:      `/library/sections/{id}/all?type=10&title.value=NewName`
      - Albums
          - Functionality changes depending on the existence of an album with the same title
          - Album exists
              - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=Album 2`
                  - Album with id 42 is merged into album titled "Album 2"
              - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=Moo Album`
                  - All albums are merged into the existing album titled "Moo Album"
          - Album does not exist
              - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=NewAlbumTitle`
                  - Album with id 42 has title modified to "NewAlbumTitle"
              - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=NewAlbumTitle`
                  - All albums are merged into a new album with title="NewAlbumTitle"
      - Artists
          - Functionaly changes depending on the existence of an artist with the same title.
          - Artist exists
              - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=Artist 2`
                  - Artist with id 42 is merged into existing artist titled "Artist 2"
              - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=Artist 3`
                  - All artists are merged into the existing artist titled "Artist 3"
          - Artist does not exist
              - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=NewArtistTitle`
                  - Artist with id 42 has title modified to "NewArtistTitle"
              - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=NewArtistTitle`
                  - All artists are merged into a new artist with title="NewArtistTitle"

- **Notes**
    - Technically square brackets are not allowed in an URI except the Internet Protocol Literal Address
    - RFC3513: A host identified by an Internet Protocol literal address, version 6 [RFC3513] or later, is distinguished by enclosing the IP literal within square brackets ("[" and "]"). This is the only place where square bracket characters are allowed in the URI syntax.
    - Escaped square brackets are allowed, but don't render well

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateItems" method="put" path="/library/sections/{sectionId}/all" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.updateItems({
    sectionId: "<id>",
    fieldLocked: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUpdateItems } from "@parke.dev/plexjs/funcs/libraryUpdateItems.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUpdateItems(plexAPI, {
    sectionId: "<id>",
    fieldLocked: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryUpdateItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateItemsRequest](../../models/operations/updateitemsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## startAnalysis

Start analysis of all items in a section.  If BIF generation is enabled, this will also be started on this section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startAnalysis" method="put" path="/library/sections/{sectionId}/analyze" -->
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
  await plexAPI.library.startAnalysis({
    sectionId: 158829,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryStartAnalysis } from "@parke.dev/plexjs/funcs/libraryStartAnalysis.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryStartAnalysis(plexAPI, {
    sectionId: 158829,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryStartAnalysis failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartAnalysisRequest](../../models/operations/startanalysisrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionArtists

Get artists for a music library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionArtists" method="get" path="/library/sections/{sectionId}/artists" -->
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
  const result = await plexAPI.library.getSectionArtists({
    sectionId: 716398,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionArtists } from "@parke.dev/plexjs/funcs/libraryGetSectionArtists.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionArtists(plexAPI, {
    sectionId: 716398,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionArtists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionArtistsRequest](../../models/operations/getsectionartistsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## autocomplete

The field to autocomplete on is specified by the `{field}.query` parameter. For example `genre.query` or `title.query`.
Returns a set of items from the filtered items whose `{field}` starts with `{field}.query`.  In the results, a `{field}.queryRange` will be present to express the range of the match

### Example Usage

<!-- UsageSnippet language="typescript" operationID="autocomplete" method="get" path="/library/sections/{sectionId}/autocomplete" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.autocomplete({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 942007,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryAutocomplete } from "@parke.dev/plexjs/funcs/libraryAutocomplete.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryAutocomplete(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 942007,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryAutocomplete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AutocompleteRequest](../../models/operations/autocompleterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AutocompleteResponse](../../models/operations/autocompleteresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getByContentRating

Browse items in a library section grouped by content rating.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByContentRating" method="get" path="/library/sections/{sectionId}/byContentRating" -->
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
  const result = await plexAPI.library.getByContentRating({
    sectionId: 586837,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetByContentRating } from "@parke.dev/plexjs/funcs/libraryGetByContentRating.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetByContentRating(plexAPI, {
    sectionId: 586837,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetByContentRating failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetByContentRatingRequest](../../models/operations/getbycontentratingrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getByDecade

Browse items in a library section grouped by decade.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByDecade" method="get" path="/library/sections/{sectionId}/byDecade" -->
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
  const result = await plexAPI.library.getByDecade({
    sectionId: 212187,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetByDecade } from "@parke.dev/plexjs/funcs/libraryGetByDecade.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetByDecade(plexAPI, {
    sectionId: 212187,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetByDecade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetByDecadeRequest](../../models/operations/getbydecaderequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getByFolder

Browse items in a library section by underlying filesystem folder.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByFolder" method="get" path="/library/sections/{sectionId}/byFolder" -->
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
  const result = await plexAPI.library.getByFolder({
    sectionId: 352088,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetByFolder } from "@parke.dev/plexjs/funcs/libraryGetByFolder.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetByFolder(plexAPI, {
    sectionId: 352088,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetByFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetByFolderRequest](../../models/operations/getbyfolderrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getByResolution

Browse items in a library section grouped by resolution.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByResolution" method="get" path="/library/sections/{sectionId}/byResolution" -->
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
  const result = await plexAPI.library.getByResolution({
    sectionId: 139174,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetByResolution } from "@parke.dev/plexjs/funcs/libraryGetByResolution.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetByResolution(plexAPI, {
    sectionId: 139174,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetByResolution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetByResolutionRequest](../../models/operations/getbyresolutionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getByYear

Browse items in a library section grouped by year.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getByYear" method="get" path="/library/sections/{sectionId}/byYear" -->
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
  const result = await plexAPI.library.getByYear({
    sectionId: 14634,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetByYear } from "@parke.dev/plexjs/funcs/libraryGetByYear.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetByYear(plexAPI, {
    sectionId: 14634,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetByYear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetByYearRequest](../../models/operations/getbyyearrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionClips

Get clips for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionClips" method="get" path="/library/sections/{sectionId}/clips" -->
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
  const result = await plexAPI.library.getSectionClips({
    sectionId: 407860,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionClips } from "@parke.dev/plexjs/funcs/libraryGetSectionClips.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionClips(plexAPI, {
    sectionId: 407860,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionClips failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionClipsRequest](../../models/operations/getsectionclipsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getCollections

Get all collections in a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCollections" method="get" path="/library/sections/{sectionId}/collections" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getCollections({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 348838,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetCollections } from "@parke.dev/plexjs/funcs/libraryGetCollections.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetCollections(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 348838,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetCollections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCollectionsRequest](../../models/operations/getcollectionsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCollectionsResponse](../../models/operations/getcollectionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getCommon

Represents a "Common" item. It contains only the common attributes of the items selected by the provided filter
Fields which are not common will be expressed in the `mixedFields` field

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommon" method="get" path="/library/sections/{sectionId}/common" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getCommon({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 298154,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetCommon } from "@parke.dev/plexjs/funcs/libraryGetCommon.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetCommon(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 298154,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetCommon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommonRequest](../../models/operations/getcommonrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCommonResponse](../../models/operations/getcommonresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getSectionEdit

Get library section metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionEdit" method="get" path="/library/sections/{sectionId}/edit" -->
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
  const result = await plexAPI.library.getSectionEdit({
    sectionId: 223075,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionEdit } from "@parke.dev/plexjs/funcs/libraryGetSectionEdit.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionEdit(plexAPI, {
    sectionId: 223075,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionEdit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionEditRequest](../../models/operations/getsectioneditrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## editLibrarySection

Update library section metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editLibrarySection" method="put" path="/library/sections/{sectionId}/edit" -->
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
  const result = await plexAPI.library.editLibrarySection({
    sectionId: 834094,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEditLibrarySection } from "@parke.dev/plexjs/funcs/libraryEditLibrarySection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEditLibrarySection(plexAPI, {
    sectionId: 834094,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryEditLibrarySection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditLibrarySectionRequest](../../models/operations/editlibrarysectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## emptyTrash

Permanently remove items from the trash for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="emptyTrash" method="get" path="/library/sections/{sectionId}/emptyTrash" -->
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
  const result = await plexAPI.library.emptyTrash({
    sectionId: 30052,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEmptyTrash } from "@parke.dev/plexjs/funcs/libraryEmptyTrash.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEmptyTrash(plexAPI, {
    sectionId: 30052,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryEmptyTrash failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmptyTrashRequest](../../models/operations/emptytrashrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## emptyTrashPost

Permanently remove items from the trash for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="emptyTrashPost" method="post" path="/library/sections/{sectionId}/emptyTrash" -->
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
  const result = await plexAPI.library.emptyTrashPost({
    sectionId: 537157,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEmptyTrashPost } from "@parke.dev/plexjs/funcs/libraryEmptyTrashPost.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEmptyTrashPost(plexAPI, {
    sectionId: 537157,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryEmptyTrashPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmptyTrashPostRequest](../../models/operations/emptytrashpostrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## emptyTrashPut

Empty trash in the section, permanently deleting media/metadata for missing media

### Example Usage

<!-- UsageSnippet language="typescript" operationID="emptyTrashPut" method="put" path="/library/sections/{sectionId}/emptyTrash" -->
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
  await plexAPI.library.emptyTrashPut({
    sectionId: 642296,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEmptyTrashPut } from "@parke.dev/plexjs/funcs/libraryEmptyTrashPut.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEmptyTrashPut(plexAPI, {
    sectionId: 642296,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryEmptyTrashPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmptyTrashPutRequest](../../models/operations/emptytrashputrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionEpisodes

Get episodes for a TV library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionEpisodes" method="get" path="/library/sections/{sectionId}/episodes" -->
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
  const result = await plexAPI.library.getSectionEpisodes({
    sectionId: 229495,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionEpisodes } from "@parke.dev/plexjs/funcs/libraryGetSectionEpisodes.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionEpisodes(plexAPI, {
    sectionId: 229495,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionEpisodes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionEpisodesRequest](../../models/operations/getsectionepisodesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionFilters

Get common filters on a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionFilters" method="get" path="/library/sections/{sectionId}/filters" -->
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
  const result = await plexAPI.library.getSectionFilters({
    sectionId: 380557,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionFilters } from "@parke.dev/plexjs/funcs/libraryGetSectionFilters.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionFilters(plexAPI, {
    sectionId: 380557,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionFilters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionFiltersRequest](../../models/operations/getsectionfiltersrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFirstCharacters

Get list of first characters in this section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFirstCharacters" method="get" path="/library/sections/{sectionId}/firstCharacters" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getFirstCharacters({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 3947,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetFirstCharacters } from "@parke.dev/plexjs/funcs/libraryGetFirstCharacters.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetFirstCharacters(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 3947,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetFirstCharacters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFirstCharactersRequest](../../models/operations/getfirstcharactersrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFirstCharactersResponse](../../models/operations/getfirstcharactersresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLibrarySectionHubs

Get hubs for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibrarySectionHubs" method="get" path="/library/sections/{sectionId}/hubs" -->
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
  const result = await plexAPI.library.getLibrarySectionHubs({
    sectionId: 426468,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetLibrarySectionHubs } from "@parke.dev/plexjs/funcs/libraryGetLibrarySectionHubs.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetLibrarySectionHubs(plexAPI, {
    sectionId: 426468,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetLibrarySectionHubs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLibrarySectionHubsRequest](../../models/operations/getlibrarysectionhubsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithHubs](../../models/shared/mediacontainerwithhubs.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteIndexes

Delete all the indexes in a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteIndexes" method="delete" path="/library/sections/{sectionId}/indexes" -->
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
  await plexAPI.library.deleteIndexes({
    sectionId: 588437,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteIndexes } from "@parke.dev/plexjs/funcs/libraryDeleteIndexes.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteIndexes(plexAPI, {
    sectionId: 588437,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteIndexes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIndexesRequest](../../models/operations/deleteindexesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteIntros

Delete all the intro markers in a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteIntros" method="delete" path="/library/sections/{sectionId}/intros" -->
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
  await plexAPI.library.deleteIntros({
    sectionId: 498656,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteIntros } from "@parke.dev/plexjs/funcs/libraryDeleteIntros.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteIntros(plexAPI, {
    sectionId: 498656,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteIntros failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIntrosRequest](../../models/operations/deleteintrosrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionLabels

Get labels for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionLabels" method="get" path="/library/sections/{sectionId}/label" -->
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
  const result = await plexAPI.library.getSectionLabels({
    sectionId: 705342,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionLabels } from "@parke.dev/plexjs/funcs/libraryGetSectionLabels.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionLabels(plexAPI, {
    sectionId: 705342,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionLabels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionLabelsRequest](../../models/operations/getsectionlabelsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithTags](../../models/shared/mediacontainerwithtags.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## matchSectionItems

Match items in a library section against metadata providers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="matchSectionItems" method="get" path="/library/sections/{sectionId}/match" -->
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
  const result = await plexAPI.library.matchSectionItems({
    sectionId: 31032,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryMatchSectionItems } from "@parke.dev/plexjs/funcs/libraryMatchSectionItems.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryMatchSectionItems(plexAPI, {
    sectionId: 31032,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryMatchSectionItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MatchSectionItemsRequest](../../models/operations/matchsectionitemsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## moveSection

Move library section paths.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="moveSection" method="put" path="/library/sections/{sectionId}/move" -->
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
  const result = await plexAPI.library.moveSection({
    sectionId: 483061,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryMoveSection } from "@parke.dev/plexjs/funcs/libraryMoveSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryMoveSection(plexAPI, {
    sectionId: 483061,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryMoveSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MoveSectionRequest](../../models/operations/movesectionrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionMovies

Get movies for a movie library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionMovies" method="get" path="/library/sections/{sectionId}/movies" -->
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
  const result = await plexAPI.library.getSectionMovies({
    sectionId: 530892,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionMovies } from "@parke.dev/plexjs/funcs/libraryGetSectionMovies.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionMovies(plexAPI, {
    sectionId: 530892,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionMovies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionMoviesRequest](../../models/operations/getsectionmoviesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getNewestForSection

Get the newest additions for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getNewestForSection" method="get" path="/library/sections/{sectionId}/newest" -->
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
  const result = await plexAPI.library.getNewestForSection({
    sectionId: 73900,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetNewestForSection } from "@parke.dev/plexjs/funcs/libraryGetNewestForSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetNewestForSection(plexAPI, {
    sectionId: 73900,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetNewestForSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNewestForSectionRequest](../../models/operations/getnewestforsectionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getOnDeckForSection

Get the On Deck items for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOnDeckForSection" method="get" path="/library/sections/{sectionId}/onDeck" -->
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
  const result = await plexAPI.library.getOnDeckForSection({
    sectionId: 331089,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetOnDeckForSection } from "@parke.dev/plexjs/funcs/libraryGetOnDeckForSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetOnDeckForSection(plexAPI, {
    sectionId: 331089,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetOnDeckForSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOnDeckForSectionRequest](../../models/operations/getondeckforsectionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## optimizeSection

Optimize the database for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="optimizeSection" method="get" path="/library/sections/{sectionId}/optimize" -->
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
  const result = await plexAPI.library.optimizeSection({
    sectionId: 721290,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryOptimizeSection } from "@parke.dev/plexjs/funcs/libraryOptimizeSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryOptimizeSection(plexAPI, {
    sectionId: 721290,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryOptimizeSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OptimizeSectionRequest](../../models/operations/optimizesectionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## optimizeSectionPost

Optimize the database for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="optimizeSectionPost" method="post" path="/library/sections/{sectionId}/optimize" -->
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
  const result = await plexAPI.library.optimizeSectionPost({
    sectionId: 876391,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryOptimizeSectionPost } from "@parke.dev/plexjs/funcs/libraryOptimizeSectionPost.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryOptimizeSectionPost(plexAPI, {
    sectionId: 876391,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryOptimizeSectionPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OptimizeSectionPostRequest](../../models/operations/optimizesectionpostrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionPhotos

Get photos for a photo library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionPhotos" method="get" path="/library/sections/{sectionId}/photos" -->
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
  const result = await plexAPI.library.getSectionPhotos({
    sectionId: 622466,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionPhotos } from "@parke.dev/plexjs/funcs/libraryGetSectionPhotos.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionPhotos(plexAPI, {
    sectionId: 622466,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionPhotos failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionPhotosRequest](../../models/operations/getsectionphotosrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionPlaylists

Get playlists belonging to a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionPlaylists" method="get" path="/library/sections/{sectionId}/playlists" -->
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
  const result = await plexAPI.library.getSectionPlaylists({
    sectionId: 826184,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionPlaylists } from "@parke.dev/plexjs/funcs/libraryGetSectionPlaylists.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionPlaylists(plexAPI, {
    sectionId: 826184,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionPlaylists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionPlaylistsRequest](../../models/operations/getsectionplaylistsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithPlaylistMetadata](../../models/shared/mediacontainerwithplaylistmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionPreferences

Get the prefs for a section by id and potentially overriding the agent

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionPreferences" method="get" path="/library/sections/{sectionId}/prefs" -->
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
  const result = await plexAPI.library.getSectionPreferences({
    sectionId: 754869,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionPreferences } from "@parke.dev/plexjs/funcs/libraryGetSectionPreferences.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionPreferences(plexAPI, {
    sectionId: 754869,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionPreferences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionPreferencesRequest](../../models/operations/getsectionpreferencesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithSettings](../../models/shared/mediacontainerwithsettings.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## setSectionPreferences

Set the prefs for a section by id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setSectionPreferences" method="put" path="/library/sections/{sectionId}/prefs" -->
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
  await plexAPI.library.setSectionPreferences({
    sectionId: 349936,
    prefs: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySetSectionPreferences } from "@parke.dev/plexjs/funcs/librarySetSectionPreferences.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySetSectionPreferences(plexAPI, {
    sectionId: 349936,
    prefs: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("librarySetSectionPreferences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetSectionPreferencesRequest](../../models/operations/setsectionpreferencesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getRecentlyAddedForSection

Get recently added items for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRecentlyAddedForSection" method="get" path="/library/sections/{sectionId}/recentlyAdded" -->
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
  const result = await plexAPI.library.getRecentlyAddedForSection({
    sectionId: 46283,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetRecentlyAddedForSection } from "@parke.dev/plexjs/funcs/libraryGetRecentlyAddedForSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetRecentlyAddedForSection(plexAPI, {
    sectionId: 46283,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetRecentlyAddedForSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecentlyAddedForSectionRequest](../../models/operations/getrecentlyaddedforsectionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelRefresh

Cancel the refresh of a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelRefresh" method="delete" path="/library/sections/{sectionId}/refresh" -->
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
  await plexAPI.library.cancelRefresh({
    sectionId: 326852,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryCancelRefresh } from "@parke.dev/plexjs/funcs/libraryCancelRefresh.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryCancelRefresh(plexAPI, {
    sectionId: 326852,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryCancelRefresh failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelRefreshRequest](../../models/operations/cancelrefreshrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## refreshSection

Trigger a metadata refresh for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshSection" method="get" path="/library/sections/{sectionId}/refresh" -->
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
  const result = await plexAPI.library.refreshSection({
    sectionId: 450300,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryRefreshSection } from "@parke.dev/plexjs/funcs/libraryRefreshSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryRefreshSection(plexAPI, {
    sectionId: 450300,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryRefreshSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RefreshSectionRequest](../../models/operations/refreshsectionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## refreshSectionPost

Trigger a metadata refresh for a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshSectionPost" method="post" path="/library/sections/{sectionId}/refresh" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.refreshSectionPost({
    sectionId: 848668,
    force: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryRefreshSectionPost } from "@parke.dev/plexjs/funcs/libraryRefreshSectionPost.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryRefreshSectionPost(plexAPI, {
    sectionId: 848668,
    force: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryRefreshSectionPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RefreshSectionPostRequest](../../models/operations/refreshsectionpostrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## searchSection

Search within a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchSection" method="get" path="/library/sections/{sectionId}/search" -->
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
  const result = await plexAPI.library.searchSection({
    sectionId: 925380,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySearchSection } from "@parke.dev/plexjs/funcs/librarySearchSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySearchSection(plexAPI, {
    sectionId: 925380,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("librarySearchSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchSectionRequest](../../models/operations/searchsectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionSettings

Get section-specific settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionSettings" method="get" path="/library/sections/{sectionId}/settings" -->
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
  const result = await plexAPI.library.getSectionSettings({
    sectionId: 100390,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionSettings } from "@parke.dev/plexjs/funcs/libraryGetSectionSettings.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionSettings(plexAPI, {
    sectionId: 100390,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionSettingsRequest](../../models/operations/getsectionsettingsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionShows

Get shows for a TV library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionShows" method="get" path="/library/sections/{sectionId}/shows" -->
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
  const result = await plexAPI.library.getSectionShows({
    sectionId: 9583,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionShows } from "@parke.dev/plexjs/funcs/libraryGetSectionShows.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionShows(plexAPI, {
    sectionId: 9583,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionShows failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionShowsRequest](../../models/operations/getsectionshowsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAvailableSorts

Get the sort mechanisms available in a section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAvailableSorts" method="get" path="/library/sections/{sectionId}/sorts" -->
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
  const result = await plexAPI.library.getAvailableSorts({
    sectionId: 212498,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetAvailableSorts } from "@parke.dev/plexjs/funcs/libraryGetAvailableSorts.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetAvailableSorts(plexAPI, {
    sectionId: 212498,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetAvailableSorts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAvailableSortsRequest](../../models/operations/getavailablesortsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithSorts](../../models/shared/mediacontainerwithsorts.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionTags

Get tags in a library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionTags" method="get" path="/library/sections/{sectionId}/tags" -->
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
  const result = await plexAPI.library.getSectionTags({
    sectionId: 787543,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionTags } from "@parke.dev/plexjs/funcs/libraryGetSectionTags.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionTags(plexAPI, {
    sectionId: 787543,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionTagsRequest](../../models/operations/getsectiontagsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithTags](../../models/shared/mediacontainerwithtags.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getSectionTimeline

Get section timeline data.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionTimeline" method="get" path="/library/sections/{sectionId}/timeline" -->
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
  const result = await plexAPI.library.getSectionTimeline({
    sectionId: 670370,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionTimeline } from "@parke.dev/plexjs/funcs/libraryGetSectionTimeline.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionTimeline(plexAPI, {
    sectionId: 670370,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetSectionTimeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionTimelineRequest](../../models/operations/getsectiontimelinerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## unmatchSectionItems

Unmatch items in a library section from metadata providers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unmatchSectionItems" method="get" path="/library/sections/{sectionId}/unmatch" -->
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
  const result = await plexAPI.library.unmatchSectionItems({
    sectionId: 209342,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUnmatchSectionItems } from "@parke.dev/plexjs/funcs/libraryUnmatchSectionItems.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUnmatchSectionItems(plexAPI, {
    sectionId: 209342,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryUnmatchSectionItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnmatchSectionItemsRequest](../../models/operations/unmatchsectionitemsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getUnwatchedForSection

Get unwatched items for a specific library section.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUnwatchedForSection" method="get" path="/library/sections/{sectionId}/unwatched" -->
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
  const result = await plexAPI.library.getUnwatchedForSection({
    sectionId: 483590,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetUnwatchedForSection } from "@parke.dev/plexjs/funcs/libraryGetUnwatchedForSection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetUnwatchedForSection(plexAPI, {
    sectionId: 483590,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetUnwatchedForSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUnwatchedForSectionRequest](../../models/operations/getunwatchedforsectionrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getStreamLevels

The the loudness of a stream in db, one entry per 100ms

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStreamLevels" method="get" path="/library/streams/{streamId}/levels" -->
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
  const result = await plexAPI.library.getStreamLevels({
    streamId: 447611,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetStreamLevels } from "@parke.dev/plexjs/funcs/libraryGetStreamLevels.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetStreamLevels(plexAPI, {
    streamId: 447611,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetStreamLevels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStreamLevelsRequest](../../models/operations/getstreamlevelsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStreamLevelsResponse](../../models/operations/getstreamlevelsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getStreamLoudness

The the loudness of a stream in db, one number per line, one entry per 100ms

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStreamLoudness" method="get" path="/library/streams/{streamId}/loudness" -->
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
  const result = await plexAPI.library.getStreamLoudness({
    streamId: 277271,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetStreamLoudness } from "@parke.dev/plexjs/funcs/libraryGetStreamLoudness.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetStreamLoudness(plexAPI, {
    streamId: 277271,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetStreamLoudness failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStreamLoudnessRequest](../../models/operations/getstreamloudnessrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getChapterImage

Get a single chapter image for a piece of media

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getChapterImage" method="get" path="/library/media/{mediaId}/chapterImages/{chapter}" -->
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
  const result = await plexAPI.library.getChapterImage({
    mediaId: 892563,
    chapter: 48348,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetChapterImage } from "@parke.dev/plexjs/funcs/libraryGetChapterImage.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetChapterImage(plexAPI, {
    mediaId: 892563,
    chapter: 48348,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetChapterImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChapterImageRequest](../../models/operations/getchapterimagerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setItemArtwork

Set the artwork, thumb, element for a metadata item
Generally only the admin can perform this action.  The exception is if the metadata is a playlist created by the user

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setItemArtwork" method="post" path="/library/metadata/{ids}/{element}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { SetItemArtworkElement } from "@parke.dev/plexjs/models/operations";
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
  await plexAPI.library.setItemArtwork({
    ids: "<value>",
    element: SetItemArtworkElement.Banner,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySetItemArtwork } from "@parke.dev/plexjs/funcs/librarySetItemArtwork.js";
import { SetItemArtworkElement } from "@parke.dev/plexjs/models/operations";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySetItemArtwork(plexAPI, {
    ids: "<value>",
    element: SetItemArtworkElement.Banner,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("librarySetItemArtwork failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetItemArtworkRequest](../../models/operations/setitemartworkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateItemArtwork

Set the artwork, thumb, element for a metadata item
Generally only the admin can perform this action.  The exception is if the metadata is a playlist created by the user

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateItemArtwork" method="put" path="/library/metadata/{ids}/{element}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { UpdateItemArtworkElement } from "@parke.dev/plexjs/models/operations";
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
  await plexAPI.library.updateItemArtwork({
    ids: "<value>",
    element: UpdateItemArtworkElement.ClearLogo,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryUpdateItemArtwork } from "@parke.dev/plexjs/funcs/libraryUpdateItemArtwork.js";
import { UpdateItemArtworkElement } from "@parke.dev/plexjs/models/operations";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryUpdateItemArtwork(plexAPI, {
    ids: "<value>",
    element: UpdateItemArtworkElement.ClearLogo,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryUpdateItemArtwork failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateItemArtworkRequest](../../models/operations/updateitemartworkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteMarker

Delete a marker for this user on the metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteMarker" method="delete" path="/library/metadata/{ids}/marker/{marker}" -->
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
  await plexAPI.library.deleteMarker({
    ids: "<value>",
    marker: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteMarker } from "@parke.dev/plexjs/funcs/libraryDeleteMarker.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteMarker(plexAPI, {
    ids: "<value>",
    marker: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteMarker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMarkerRequest](../../models/operations/deletemarkerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## editMarker

Edit a marker for this user on the metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editMarker" method="put" path="/library/metadata/{ids}/marker/{marker}" -->
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
  const result = await plexAPI.library.editMarker({
    ids: "<value>",
    marker: "<value>",
    mediaType: 884347,
    startTimeOffset: 517251,
    attributes: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryEditMarker } from "@parke.dev/plexjs/funcs/libraryEditMarker.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryEditMarker(plexAPI, {
    ids: "<value>",
    marker: "<value>",
    mediaType: 884347,
    startTimeOffset: 517251,
    attributes: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryEditMarker failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditMarkerRequest](../../models/operations/editmarkerrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PostResponses200](../../models/shared/postresponses200.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteMediaItem

Delete a single media from a metadata item in the library

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteMediaItem" method="delete" path="/library/metadata/{ids}/media/{mediaItem}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.deleteMediaItem({
    ids: "<value>",
    mediaItem: "<value>",
    proxy: BoolInt.True,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteMediaItem } from "@parke.dev/plexjs/funcs/libraryDeleteMediaItem.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteMediaItem(plexAPI, {
    ids: "<value>",
    mediaItem: "<value>",
    proxy: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteMediaItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediaItemRequest](../../models/operations/deletemediaitemrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPartIndex

Get BIF index for a part by index type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPartIndex" method="get" path="/library/parts/{partId}/indexes/{index}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { GetPartIndexIndex } from "@parke.dev/plexjs/models/operations";
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
  const result = await plexAPI.library.getPartIndex({
    partId: 724750,
    index: GetPartIndexIndex.Sd,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetPartIndex } from "@parke.dev/plexjs/funcs/libraryGetPartIndex.js";
import { GetPartIndexIndex } from "@parke.dev/plexjs/models/operations";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetPartIndex(plexAPI, {
    partId: 724750,
    index: GetPartIndexIndex.Sd,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetPartIndex failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPartIndexRequest](../../models/operations/getpartindexrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteCollection

Delete a library collection from the PMS

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCollection" method="delete" path="/library/sections/{sectionId}/collection/{collectionId}" -->
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
  await plexAPI.library.deleteCollection({
    sectionId: 283619,
    collectionId: 680895,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteCollection } from "@parke.dev/plexjs/funcs/libraryDeleteCollection.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteCollection(plexAPI, {
    sectionId: 283619,
    collectionId: 680895,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCollectionRequest](../../models/operations/deletecollectionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getSectionImage

Get a composite image of images in this section

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSectionImage" method="get" path="/library/sections/{sectionId}/composite/{updatedAt}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

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
  await plexAPI.library.getSectionImage({
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 925611,
    updatedAt: 117413,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetSectionImage } from "@parke.dev/plexjs/funcs/libraryGetSectionImage.js";
import { Accepts, MediaType } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetSectionImage(plexAPI, {
    mediaQuery: {
      type: MediaType.Episode,
      sort: "duration:desc,index",
      sourceType: 2,
    },
    sectionId: 925611,
    updatedAt: 117413,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryGetSectionImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionImageRequest](../../models/operations/getsectionimagerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteStream

Delete a stream.  Only applies to downloaded subtitle streams or a sidecar subtitle when media deletion is enabled.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteStream" method="delete" path="/library/streams/{streamId}.{ext}" -->
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
  await plexAPI.library.deleteStream({
    streamId: 841510,
    ext: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryDeleteStream } from "@parke.dev/plexjs/funcs/libraryDeleteStream.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryDeleteStream(plexAPI, {
    streamId: 841510,
    ext: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("libraryDeleteStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteStreamRequest](../../models/operations/deletestreamrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getStream

Get a stream (such as a sidecar subtitle stream)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStream" method="get" path="/library/streams/{streamId}.{ext}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getStream({
    streamId: 314506,
    ext: "<value>",
    autoAdjustSubtitle: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetStream } from "@parke.dev/plexjs/funcs/libraryGetStream.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetStream(plexAPI, {
    streamId: 314506,
    ext: "<value>",
    autoAdjustSubtitle: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStreamRequest](../../models/operations/getstreamrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/binaryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setStreamOffset

Set a stream offset in ms.  This may not be respected by all clients

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setStreamOffset" method="put" path="/library/streams/{streamId}.{ext}" -->
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
  const result = await plexAPI.library.setStreamOffset({
    streamId: 606295,
    ext: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { librarySetStreamOffset } from "@parke.dev/plexjs/funcs/librarySetStreamOffset.js";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await librarySetStreamOffset(plexAPI, {
    streamId: 606295,
    ext: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("librarySetStreamOffset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetStreamOffsetRequest](../../models/operations/setstreamoffsetrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/binaryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getItemArtwork

Get the artwork, thumb, element for a metadata item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getItemArtwork" method="get" path="/library/metadata/{ids}/{element}/{timestamp}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { GetItemArtworkElement } from "@parke.dev/plexjs/models/operations";
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
  const result = await plexAPI.library.getItemArtwork({
    ids: "<value>",
    element: GetItemArtworkElement.Poster,
    timestamp: 999555,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetItemArtwork } from "@parke.dev/plexjs/funcs/libraryGetItemArtwork.js";
import { GetItemArtworkElement } from "@parke.dev/plexjs/models/operations";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetItemArtwork(plexAPI, {
    ids: "<value>",
    element: GetItemArtworkElement.Poster,
    timestamp: 999555,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetItemArtwork failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetItemArtworkRequest](../../models/operations/getitemartworkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetItemArtworkResponse](../../models/operations/getitemartworkresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMediaPart

Get a media part for streaming or download.
  - streaming: This is the default scenario.  Bandwidth usage on this endpoint will be guaranteed (on the server's end) to be at least the bandwidth reservation given in the decision.  If no decision exists, an ad-hoc decision will be created if sufficient bandwidth exists.  Clients should not rely on ad-hoc decisions being made as this may be removed in the future.
  - download: Indicated if the query parameter indicates this is a download.  Bandwidth will be prioritized behind playbacks and will get a fair share of what remains.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMediaPart" method="get" path="/library/parts/{partId}/{changestamp}/{filename}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

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
  const result = await plexAPI.library.getMediaPart({
    partId: 877105,
    changestamp: 970622,
    filename: "example.file",
    download: BoolInt.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetMediaPart } from "@parke.dev/plexjs/funcs/libraryGetMediaPart.js";
import { Accepts, BoolInt } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetMediaPart(plexAPI, {
    partId: 877105,
    changestamp: 970622,
    filename: "example.file",
    download: BoolInt.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetMediaPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaPartRequest](../../models/operations/getmediapartrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediaPartResponse](../../models/operations/getmediapartresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getImageFromBif

Extract an image from the BIF for a part at a particular offset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getImageFromBif" method="get" path="/library/parts/{partId}/indexes/{index}/{offset}" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";
import { GetImageFromBifIndex } from "@parke.dev/plexjs/models/operations";
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
  const result = await plexAPI.library.getImageFromBif({
    partId: 304273,
    index: GetImageFromBifIndex.Sd,
    offset: 939569,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { libraryGetImageFromBif } from "@parke.dev/plexjs/funcs/libraryGetImageFromBif.js";
import { GetImageFromBifIndex } from "@parke.dev/plexjs/models/operations";
import { Accepts } from "@parke.dev/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
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
  const res = await libraryGetImageFromBif(plexAPI, {
    partId: 304273,
    index: GetImageFromBifIndex.Sd,
    offset: 939569,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("libraryGetImageFromBif failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetImageFromBifRequest](../../models/operations/getimagefrombifrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |