# PlexSDK Services
A list of all services and services methods.
- Services

    - [Server](#server)

    - [Media](#media)

    - [Activities](#activities)

    - [Butler](#butler)

    - [Hubs](#hubs)

    - [Search](#search)

    - [Library](#library)

    - [Log](#log)

    - [Playlists](#playlists)

    - [Security](#security)

    - [Sessions](#sessions)

    - [Updater](#updater)

    - [Video](#video)
- [All Methods](#all-methods)


## Server

| Method    | Description|
| :-------- | :----------|
| [getServerCapabilities](#getservercapabilities) | Server Capabilities |
| [getServerPreferences](#getserverpreferences) | Get Server Preferences |
| [getAvailableClients](#getavailableclients) | Get Available Clients |
| [getDevices](#getdevices) | Get Devices |
| [getServerIdentity](#getserveridentity) | Get Server Identity |
| [getMyPlexAccount](#getmyplexaccount) | Get MyPlex Account |
| [getResizedPhoto](#getresizedphoto) | Get a Resized Photo |
| [getServerList](#getserverlist) | Get Server List |


## Media

| Method    | Description|
| :-------- | :----------|
| [markPlayed](#markplayed) | Mark Media Played |
| [markUnplayed](#markunplayed) | Mark Media Unplayed |
| [updatePlayProgress](#updateplayprogress) | Update Media Play Progress |


## Activities

| Method    | Description|
| :-------- | :----------|
| [getServerActivities](#getserveractivities) | Get Server Activities |
| [cancelServerActivities](#cancelserveractivities) | Cancel Server Activities |


## Butler

| Method    | Description|
| :-------- | :----------|
| [startAllTasks](#startalltasks) | Start all Butler tasks |
| [getButlerTasks](#getbutlertasks) | Get Butler tasks |
| [stopAllTasks](#stopalltasks) | Stop all Butler tasks |
| [startTask](#starttask) | Start a single Butler task |
| [stopTask](#stoptask) | Stop a single Butler task |


## Hubs

| Method    | Description|
| :-------- | :----------|
| [getGlobalHubs](#getglobalhubs) | Get Global Hubs |
| [getLibraryHubs](#getlibraryhubs) | Get library specific hubs |


## Search

| Method    | Description|
| :-------- | :----------|
| [performSearch](#performsearch) | Perform a search |
| [performVoiceSearch](#performvoicesearch) | Perform a voice search |
| [getSearchResults](#getsearchresults) | Get Search Results |


## Library

| Method    | Description|
| :-------- | :----------|
| [getFileHash](#getfilehash) | Get Hash Value |
| [getRecentlyAdded](#getrecentlyadded) | Get Recently Added |
| [getLibraries](#getlibraries) | Get All Libraries |
| [getLibrary](#getlibrary) | Get Library Details |
| [deleteLibrary](#deletelibrary) | Delete Library Section |
| [getLibraryItems](#getlibraryitems) | Get Library Items |
| [refreshLibrary](#refreshlibrary) | Refresh Library |
| [getLatestLibraryItems](#getlatestlibraryitems) | Get Latest Library Items |
| [getCommonLibraryItems](#getcommonlibraryitems) | Get Common Library Items |
| [getMetadata](#getmetadata) | Get Items Metadata |
| [getMetadataChildren](#getmetadatachildren) | Get Items Children |
| [getOnDeck](#getondeck) | Get On Deck |


## Log

| Method    | Description|
| :-------- | :----------|
| [logMultiLine](#logmultiline) | Logging a multi-line message |
| [logLine](#logline) | Logging a single line message. |
| [enablePaperTrail](#enablepapertrail) | Enabling Papertrail |


## Playlists

| Method    | Description|
| :-------- | :----------|
| [createPlaylist](#createplaylist) | Create a Playlist |
| [getPlaylists](#getplaylists) | Get All Playlists |
| [getPlaylist](#getplaylist) | Retrieve Playlist |
| [deletePlaylist](#deleteplaylist) | Deletes a Playlist |
| [updatePlaylist](#updateplaylist) | Update a Playlist |
| [getPlaylistContents](#getplaylistcontents) | Retrieve Playlist Contents |
| [clearPlaylistContents](#clearplaylistcontents) | Delete Playlist Contents |
| [addPlaylistContents](#addplaylistcontents) | Adding to a Playlist |
| [uploadPlaylist](#uploadplaylist) | Upload Playlist |


## Security

| Method    | Description|
| :-------- | :----------|
| [getTransientToken](#gettransienttoken) | Get a Transient Token. |
| [getSourceConnectionInformation](#getsourceconnectioninformation) | Get Source Connection Information |


## Sessions

| Method    | Description|
| :-------- | :----------|
| [getSessions](#getsessions) | Get Active Sessions |
| [getSessionHistory](#getsessionhistory) | Get Session History |
| [getTranscodeSessions](#gettranscodesessions) | Get Transcode Sessions |
| [stopTranscodeSession](#stoptranscodesession) | Stop a Transcode Session |


## Updater

| Method    | Description|
| :-------- | :----------|
| [getUpdateStatus](#getupdatestatus) | Querying status of updates |
| [checkForUpdates](#checkforupdates) | Checking for updates |
| [applyUpdates](#applyupdates) | Apply Updates |


## Video

| Method    | Description|
| :-------- | :----------|
| [startUniversalTranscode](#startuniversaltranscode) | Start Universal Transcode |
| [getTimeline](#gettimeline) | Get the timeline for a media item |




## All Methods


### **getServerCapabilities**
Server Capabilities
- HTTP Method: GET
- Endpoint: /


**Return Type**

GetServerCapabilitiesResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getServerCapabilities();
  console.log(result.data);
})();

```

### **getServerPreferences**
Get Server Preferences
- HTTP Method: GET
- Endpoint: /:/prefs


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getServerPreferences();
  console.log(result.data);
})();

```

### **getAvailableClients**
Get Available Clients
- HTTP Method: GET
- Endpoint: /clients


**Return Type**

GetAvailableClientsResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getAvailableClients();
  console.log(result.data);
})();

```

### **getDevices**
Get Devices
- HTTP Method: GET
- Endpoint: /devices


**Return Type**

GetDevicesResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getDevices();
  console.log(result.data);
})();

```

### **getServerIdentity**
Get Server Identity
- HTTP Method: GET
- Endpoint: /identity


**Return Type**

GetServerIdentityResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getServerIdentity();
  console.log(result.data);
})();

```

### **getMyPlexAccount**
Get MyPlex Account
- HTTP Method: GET
- Endpoint: /myplex/account


**Return Type**

GetMyPlexAccountResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getMyPlexAccount();
  console.log(result.data);
})();

```

### **getResizedPhoto**
Get a Resized Photo
- HTTP Method: GET
- Endpoint: /photo/:/transcode

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| width | number | The width for the resized photo |
| height | number | The height for the resized photo |
| opacity | number | The opacity for the resized photo |
| blur | number | The width for the resized photo |
| minSize | [MinSize](/src/models/README.md#minsize) | images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against. |
| upscale | [Upscale](/src/models/README.md#upscale) | allow images to be resized beyond native dimensions. |
| url | string | path to image within Plex |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getResizedPhoto(
    110,
    165,
    100,
    4000,
    1,
    1,
    '/library/metadata/49564/thumb/1654258204',
  );
  console.log(result.data);
})();

```

### **getServerList**
Get Server List
- HTTP Method: GET
- Endpoint: /servers


**Return Type**

GetServerListResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.server.getServerList();
  console.log(result.data);
})();

```


### **markPlayed**
Mark Media Played
- HTTP Method: GET
- Endpoint: /:/scrobble

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| key | number | The media key to mark as played |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.media.markPlayed(59398);
  console.log(result.data);
})();

```

### **markUnplayed**
Mark Media Unplayed
- HTTP Method: GET
- Endpoint: /:/unscrobble

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| key | number | The media key to mark as Unplayed |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.media.markUnplayed(59398);
  console.log(result.data);
})();

```

### **updatePlayProgress**
Update Media Play Progress
- HTTP Method: POST
- Endpoint: /:/progress

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| key | string | the media key |
| time | number | The time, in milliseconds, used to set the media playback progress. |
| state | string | The playback state of the media item. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.media.updatePlayProgress('key', -67598765.07465324, 'state');
  console.log(result.data);
})();

```


### **getServerActivities**
Get Server Activities
- HTTP Method: GET
- Endpoint: /activities


**Return Type**

GetServerActivitiesResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.activities.getServerActivities();
  console.log(result.data);
})();

```

### **cancelServerActivities**
Cancel Server Activities
- HTTP Method: DELETE
- Endpoint: /activities/{activityUUID}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| activityUuid | string | The UUID of the activity to cancel. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.activities.cancelServerActivities('activityUUID');
  console.log(result.data);
})();

```


### **startAllTasks**
Start all Butler tasks
- HTTP Method: POST
- Endpoint: /butler


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.butler.startAllTasks();
  console.log(result.data);
})();

```

### **getButlerTasks**
Get Butler tasks
- HTTP Method: GET
- Endpoint: /butler


**Return Type**

GetButlerTasksResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.butler.getButlerTasks();
  console.log(result.data);
})();

```

### **stopAllTasks**
Stop all Butler tasks
- HTTP Method: DELETE
- Endpoint: /butler


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.butler.stopAllTasks();
  console.log(result.data);
})();

```

### **startTask**
Start a single Butler task
- HTTP Method: POST
- Endpoint: /butler/{taskName}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| taskName | [TaskName](/src/models/README.md#taskname) | the name of the task to be started. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.butler.startTask('RefreshLibraries');
  console.log(result.data);
})();

```

### **stopTask**
Stop a single Butler task
- HTTP Method: DELETE
- Endpoint: /butler/{taskName}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| taskName | [TaskName](/src/models/README.md#taskname) | The name of the task to be started. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.butler.stopTask('DeepMediaAnalysis');
  console.log(result.data);
})();

```


### **getGlobalHubs**
Get Global Hubs
- HTTP Method: GET
- Endpoint: /hubs


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| count | number | The number of items to return with each hub. |
| onlyTransient | [OnlyTransient](/src/models/README.md#onlytransient) | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added). |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.hubs.getGlobalHubs({ count: 28368865.713739887, onlyTransient: 1 });
  console.log(result.data);
})();

```

### **getLibraryHubs**
Get library specific hubs
- HTTP Method: GET
- Endpoint: /hubs/sections/{sectionId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| count | number | The number of items to return with each hub. |
| onlyTransient | [OnlyTransient](/src/models/README.md#onlytransient) | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added). |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.hubs.getLibraryHubs(18589771.015234828, {
    count: -32594130.898548722,
    onlyTransient: 1,
  });
  console.log(result.data);
})();

```


### **performSearch**
Perform a search
- HTTP Method: GET
- Endpoint: /hubs/search

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| query | string | The query term |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | This gives context to the search, and can result in re-ordering of search result hubs |
| limit | number | The number of items to return per hub |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.search.performSearch('arnold', {
    sectionId: 44691501.34992224,
    limit: 5,
  });
  console.log(result.data);
})();

```

### **performVoiceSearch**
Perform a voice search
- HTTP Method: GET
- Endpoint: /hubs/search/voice

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| query | string | The query term |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | This gives context to the search, and can result in re-ordering of search result hubs |
| limit | number | The number of items to return per hub |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.search.performVoiceSearch('dead+poop', {
    sectionId: 63927189.69130659,
    limit: 5,
  });
  console.log(result.data);
})();

```

### **getSearchResults**
Get Search Results
- HTTP Method: GET
- Endpoint: /search

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| query | string | The search query string to use |



**Return Type**

GetSearchResultsResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.search.getSearchResults('110');
  console.log(result.data);
})();

```


### **getFileHash**
Get Hash Value
- HTTP Method: GET
- Endpoint: /library/hashes

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| url | string | This is the path to the local file, must be prefixed by `file://` |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| type | number | Item type |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getFileHash('file://C:Image.png&type=13', {
    type: -40347992.189137824,
  });
  console.log(result.data);
})();

```

### **getRecentlyAdded**
Get Recently Added
- HTTP Method: GET
- Endpoint: /library/recentlyAdded


**Return Type**

GetRecentlyAddedResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getRecentlyAdded();
  console.log(result.data);
})();

```

### **getLibraries**
Get All Libraries
- HTTP Method: GET
- Endpoint: /library/sections


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getLibraries();
  console.log(result.data);
})();

```

### **getLibrary**
Get Library Details
- HTTP Method: GET
- Endpoint: /library/sections/{sectionId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| includeDetails | [IncludeDetails](/src/models/README.md#includedetails) | Whether or not to include details for a section (types, filters, and sorts). <br>Only exists for backwards compatibility, media providers other than the server libraries have it on always.<br> |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getLibrary(1000, { includeDetails: 42 });
  console.log(result.data);
})();

```

### **deleteLibrary**
Delete Library Section
- HTTP Method: DELETE
- Endpoint: /library/sections/{sectionId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.deleteLibrary(1000);
  console.log(result.data);
})();

```

### **getLibraryItems**
Get Library Items
- HTTP Method: GET
- Endpoint: /library/sections/{sectionId}/all

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| type | number | item type |
| filter | string | the filter parameter |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getLibraryItems(72139049.19684184, {
    type: -38282492.854482666,
    filter: 'filter',
  });
  console.log(result.data);
})();

```

### **refreshLibrary**
Refresh Library
- HTTP Method: GET
- Endpoint: /library/sections/{sectionId}/refresh

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to refresh |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.refreshLibrary(-48997883.13740698);
  console.log(result.data);
})();

```

### **getLatestLibraryItems**
Get Latest Library Items
- HTTP Method: GET
- Endpoint: /library/sections/{sectionId}/latest

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |
| type | number | item type |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| filter | string | the filter parameter |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getLatestLibraryItems(58797973.85610509, -91925704.44457702, {
    filter: 'filter',
  });
  console.log(result.data);
})();

```

### **getCommonLibraryItems**
Get Common Library Items
- HTTP Method: GET
- Endpoint: /library/sections/{sectionId}/common

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sectionId | number | the Id of the library to query |
| type | number | item type |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| filter | string | the filter parameter |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getCommonLibraryItems(-1929766.2595285624, 10178756.232577473, {
    filter: 'filter',
  });
  console.log(result.data);
})();

```

### **getMetadata**
Get Items Metadata
- HTTP Method: GET
- Endpoint: /library/metadata/{ratingKey}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| ratingKey | number | the id of the library item to return the children of. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getMetadata(-93116760.96986176);
  console.log(result.data);
})();

```

### **getMetadataChildren**
Get Items Children
- HTTP Method: GET
- Endpoint: /library/metadata/{ratingKey}/children

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| ratingKey | number | the id of the library item to return the children of. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getMetadataChildren(74240120.76203653);
  console.log(result.data);
})();

```

### **getOnDeck**
Get On Deck
- HTTP Method: GET
- Endpoint: /library/onDeck


**Return Type**

GetOnDeckResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.library.getOnDeck();
  console.log(result.data);
})();

```


### **logMultiLine**
Logging a multi-line message
- HTTP Method: POST
- Endpoint: /log


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.log.logMultiLine();
  console.log(result.data);
})();

```

### **logLine**
Logging a single line message.
- HTTP Method: GET
- Endpoint: /log

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| level | [Level](/src/models/README.md#level) | An integer log level to write to the PMS log with.  <br>0: Error  <br>1: Warning  <br>2: Info <br>3: Debug  <br>4: Verbose<br> |
| message | string | The text of the message to write to the log. |
| source | string | a string indicating the source of the message. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.log.logLine(4, 'message', 'source');
  console.log(result.data);
})();

```

### **enablePaperTrail**
Enabling Papertrail
- HTTP Method: GET
- Endpoint: /log/networked


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.log.enablePaperTrail();
  console.log(result.data);
})();

```


### **createPlaylist**
Create a Playlist
- HTTP Method: POST
- Endpoint: /playlists

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| title | string | name of the playlist |
| type | [Type](/src/models/README.md#type) | type of playlist to create |
| smart | [Smart](/src/models/README.md#smart) | whether the playlist is smart or not |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| uri | string | the content URI for the playlist |
| playQueueId | number | the play queue to copy to a playlist |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.createPlaylist('title', 'video', 1, {
    uri: 'uri',
    playQueueID: 8848570.752491549,
  });
  console.log(result.data);
})();

```

### **getPlaylists**
Get All Playlists
- HTTP Method: GET
- Endpoint: /playlists/all


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistType | [PlaylistType](/src/models/README.md#playlisttype) | limit to a type of playlist. |
| smart | [Smart](/src/models/README.md#smart) | type of playlists to return (default is all). |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.getPlaylists({ playlistType: 'photo', smart: 1 });
  console.log(result.data);
})();

```

### **getPlaylist**
Retrieve Playlist
- HTTP Method: GET
- Endpoint: /playlists/{playlistID}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.getPlaylist(-26157175.250883877);
  console.log(result.data);
})();

```

### **deletePlaylist**
Deletes a Playlist
- HTTP Method: DELETE
- Endpoint: /playlists/{playlistID}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.deletePlaylist(98575271.53317443);
  console.log(result.data);
})();

```

### **updatePlaylist**
Update a Playlist
- HTTP Method: PUT
- Endpoint: /playlists/{playlistID}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.updatePlaylist(-63882285.47098422);
  console.log(result.data);
})();

```

### **getPlaylistContents**
Retrieve Playlist Contents
- HTTP Method: GET
- Endpoint: /playlists/{playlistID}/items

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |
| type | number | the metadata type of the item to return |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.getPlaylistContents(39702400.82414672, 90162914.95216954);
  console.log(result.data);
})();

```

### **clearPlaylistContents**
Delete Playlist Contents
- HTTP Method: DELETE
- Endpoint: /playlists/{playlistID}/items

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.clearPlaylistContents(12387577.811442614);
  console.log(result.data);
})();

```

### **addPlaylistContents**
Adding to a Playlist
- HTTP Method: PUT
- Endpoint: /playlists/{playlistID}/items

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| playlistId | number | the ID of the playlist |
| uri | string | the content URI for the playlist |
| playQueueId | number | the play queue to add to a playlist |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.addPlaylistContents(68171801.32332289, 'library://..', 123);
  console.log(result.data);
})();

```

### **uploadPlaylist**
Upload Playlist
- HTTP Method: POST
- Endpoint: /playlists/upload

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| path | string | absolute path to a directory on the server where m3u files are stored, or the absolute path to a playlist file on the server. <br>If the `path` argument is a directory, that path will be scanned for playlist files to be processed. <br>Each file in that directory creates a separate playlist, with a name based on the filename of the file that created it. <br>The GUID of each playlist is based on the filename. <br>If the `path` argument is a file, that file will be used to create a new playlist, with the name based on the filename of the file that created it. <br>The GUID of each playlist is based on the filename.<br> |
| force | [Force](/src/models/README.md#force) | force overwriting of duplicate playlists. By default, a playlist file uploaded with the same path will overwrite the existing playlist. <br>The `force` argument is used to disable overwriting. If the `force` argument is set to 0, a new playlist will be created suffixed with the date and time that the duplicate was uploaded.<br> |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.playlists.uploadPlaylist('/home/barkley/playlist.m3u', 1);
  console.log(result.data);
})();

```


### **getTransientToken**
Get a Transient Token.
- HTTP Method: GET
- Endpoint: /security/token

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| type | [SecurityType](/src/models/README.md#securitytype) | `delegation` - This is the only supported `type` parameter. |
| scope | [Scope](/src/models/README.md#scope) | `all` - This is the only supported `scope` parameter. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.security.getTransientToken('delegation', 'all');
  console.log(result.data);
})();

```

### **getSourceConnectionInformation**
Get Source Connection Information
- HTTP Method: GET
- Endpoint: /security/resources

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| source | string | The source identifier with an included prefix. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.security.getSourceConnectionInformation(
    'provider://provider-identifier',
  );
  console.log(result.data);
})();

```


### **getSessions**
Get Active Sessions
- HTTP Method: GET
- Endpoint: /status/sessions


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.sessions.getSessions();
  console.log(result.data);
})();

```

### **getSessionHistory**
Get Session History
- HTTP Method: GET
- Endpoint: /status/sessions/history/all


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.sessions.getSessionHistory();
  console.log(result.data);
})();

```

### **getTranscodeSessions**
Get Transcode Sessions
- HTTP Method: GET
- Endpoint: /transcode/sessions


**Return Type**

GetTranscodeSessionsResponse

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.sessions.getTranscodeSessions();
  console.log(result.data);
})();

```

### **stopTranscodeSession**
Stop a Transcode Session
- HTTP Method: DELETE
- Endpoint: /transcode/sessions/{sessionKey}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sessionKey | string | the Key of the transcode session to stop |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.sessions.stopTranscodeSession('zz7llzqlx8w9vnrsbnwhbmep');
  console.log(result.data);
})();

```


### **getUpdateStatus**
Querying status of updates
- HTTP Method: GET
- Endpoint: /updater/status


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.updater.getUpdateStatus();
  console.log(result.data);
})();

```

### **checkForUpdates**
Checking for updates
- HTTP Method: PUT
- Endpoint: /updater/check


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| download | [Download](/src/models/README.md#download) | Indicate that you want to start download any updates found. |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.updater.checkForUpdates({ download: 1 });
  console.log(result.data);
})();

```

### **applyUpdates**
Apply Updates
- HTTP Method: PUT
- Endpoint: /updater/apply


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| tonight | [Tonight](/src/models/README.md#tonight) | Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install |
| skip | [Skip](/src/models/README.md#skip) | Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`. |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.updater.applyUpdates({ tonight: 1, skip: 1 });
  console.log(result.data);
})();

```


### **startUniversalTranscode**
Start Universal Transcode
- HTTP Method: GET
- Endpoint: /video/:/transcode/universal/start.mpd

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| hasMde | number | Whether the media item has MDE |
| path | string | The path to the media item to transcode |
| mediaIndex | number | The index of the media item to transcode |
| partIndex | number | The index of the part to transcode |
| protocol | string | The protocol to use for the transcode session |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| fastSeek | number | Whether to use fast seek or not |
| directPlay | number | Whether to use direct play or not |
| directStream | number | Whether to use direct stream or not |
| subtitleSize | number | The size of the subtitles |
| subtites | string | The subtitles |
| audioBoost | number | The audio boost |
| location | string | The location of the transcode session |
| mediaBufferSize | number | The size of the media buffer |
| session | string | The session ID |
| addDebugOverlay | number | Whether to add a debug overlay or not |
| autoAdjustQuality | number | Whether to auto adjust quality or not |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.video.startUniversalTranscode(
    -72522752.76989551,
    'path',
    82041936.41398731,
    -84753516.90588528,
    'protocol',
    {
      fastSeek: -30142578.11776738,
      directPlay: 9919137.354697362,
      directStream: -19025857.514729157,
      subtitleSize: -84468293.84527272,
      subtites: 'subtites',
      audioBoost: -68940176.38612957,
      location: 'location',
      mediaBufferSize: 30606631.50083433,
      session: 'session',
      addDebugOverlay: -70696815.34237362,
      autoAdjustQuality: -83810577.71928595,
    },
  );
  console.log(result.data);
})();

```

### **getTimeline**
Get the timeline for a media item
- HTTP Method: GET
- Endpoint: /:/timeline

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| ratingKey | number | The rating key of the media item |
| key | string | The key of the media item to get the timeline for |
| state | [State](/src/models/README.md#state) | The state of the media item |
| hasMde | number | Whether the media item has MDE |
| time | number | The time of the media item |
| duration | number | The duration of the media item |
| context | string | The context of the media item |
| playQueueItemId | number | The play queue item ID of the media item |
| playBackTime | number | The playback time of the media item |
| row | number | The row of the media item |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PlexSDK } from './src';

const sdk = new PlexSDK({ apiKey: process.env.PLEXSDK_API_KEY_TOKEN });

(async () => {
  const result = await sdk.video.getTimeline(
    64550873.97298089,
    'key',
    'playing',
    -30122195.47065121,
    85753219.1612091,
    -36475708.52265885,
    'context',
    26769044.884643376,
    36998590.48639223,
    -3788221.7909231335,
  );
  console.log(result.data);
})();

```




