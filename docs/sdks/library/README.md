# Library
(*library*)

## Overview

API Calls interacting with Plex Media Server Libraries


### Available Operations

* [getFileHash](#getfilehash) - Get Hash Value
* [getRecentlyAdded](#getrecentlyadded) - Get Recently Added
* [getAllLibraries](#getalllibraries) - Get All Libraries
* [getLibraryDetails](#getlibrarydetails) - Get Library Details
* [deleteLibrary](#deletelibrary) - Delete Library Section
* [getLibraryItems](#getlibraryitems) - Get Library Items
* [getRefreshLibraryMetadata](#getrefreshlibrarymetadata) - Refresh Metadata Of The Library
* [getSearchLibrary](#getsearchlibrary) - Search Library
* [getMetaDataByRatingKey](#getmetadatabyratingkey) - Get Metadata by RatingKey
* [getMetadataChildren](#getmetadatachildren) - Get Items Children
* [getTopWatchedContent](#gettopwatchedcontent) - Get Top Watched Content
* [getOnDeck](#getondeck) - Get On Deck

## getFileHash

This resource returns hash values for local files

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getFileHash("file://C:\Image.png&type=13");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetFileHash } from "@lukehagar/plexjs/funcs/libraryGetFileHash.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetFileHash(plexAPI, "file://C:\Image.png&type=13");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | This is the path to the local file, must be prefixed by `file://`                                                                                                              | [object Object]                                                                                                                                                                |
| `type`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Item type                                                                                                                                                                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GetFileHashResponse](../../models/getfilehashresponse.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| models.GetFileHashResponseBody | 401                            | application/json               |
| models.SDKError                | 4xx-5xx                        | */*                            |


## getRecentlyAdded

This endpoint will return the recently added content.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getRecentlyAdded(0, 50);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetRecentlyAdded } from "@lukehagar/plexjs/funcs/libraryGetRecentlyAdded.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetRecentlyAdded(plexAPI, 0, 50);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                 | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               | Example                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xPlexContainerStart`                                                                                                                                                                     | *number*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | The index of the first item to return. If not specified, the first item will be returned.<br/>If the number of items exceeds the limit, the response will be paginated.<br/>By default this is 0<br/> | [object Object]                                                                                                                                                                           |
| `xPlexContainerSize`                                                                                                                                                                      | *number*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | The number of items to return. If not specified, all items will be returned.<br/>If the number of items exceeds the limit, the response will be paginated.<br/>By default this is 50<br/> | [object Object]                                                                                                                                                                           |
| `options`                                                                                                                                                                                 | RequestOptions                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                     |                                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.            |                                                                                                                                                                                           |
| `options.retries`                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                          |                                                                                                                                                                                           |

### Response

**Promise\<[models.GetRecentlyAddedResponse](../../models/getrecentlyaddedresponse.md)\>**

### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| models.GetRecentlyAddedLibraryResponseBody | 401                                        | application/json                           |
| models.SDKError                            | 4xx-5xx                                    | */*                                        |


## getAllLibraries

A library section (commonly referred to as just a library) is a collection of media. 
Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media. 
For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.

Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts. 
This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getAllLibraries();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetAllLibraries } from "@lukehagar/plexjs/funcs/libraryGetAllLibraries.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetAllLibraries(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
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

**Promise\<[models.GetAllLibrariesResponse](../../models/getalllibrariesresponse.md)\>**

### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| models.GetAllLibrariesLibraryResponseBody | 401                                       | application/json                          |
| models.SDKError                           | 4xx-5xx                                   | */*                                       |


## getLibraryDetails

## Library Details Endpoint

This endpoint provides comprehensive details about the library, focusing on organizational aspects rather than the content itself.   

The details include:

### Directories
Organized into three categories:

- **Primary Directories**: 
  - Used in some clients for quick access to media subsets (e.g., "All", "On Deck").
  - Most can be replicated via media queries.
  - Customizable by users.

- **Secondary Directories**:
  - Marked with `secondary="1"`.
  - Used in older clients for structured navigation.

- **Special Directories**:
  - Includes a "By Folder" entry for filesystem-based browsing.
  - Contains an obsolete `search="1"` entry for on-the-fly search dialog creation.

### Types
Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:

- **Type Object Attributes**:
  - `key`: Endpoint for the media list of this type.
  - `type`: Metadata type (if standard Plex type).
  - `title`: Title for this content type (e.g., "Movies").

- **Filter Objects**:
  - Subset of the media query language.
  - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.

- **Sort Objects**:
  - Description of sort fields.
  - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.

> **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getLibraryDetails(9518);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetLibraryDetails } from "@lukehagar/plexjs/funcs/libraryGetLibraryDetails.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetLibraryDetails(plexAPI, 9518);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                | Example                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sectionKey`                                                                                                                                                                               | *number*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/>                                                                                      | [object Object]                                                                                                                                                                            |
| `includeDetails`                                                                                                                                                                           | [models.IncludeDetails](../../models/includedetails.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Whether or not to include details for a section (types, filters, and sorts). <br/>Only exists for backwards compatibility, media providers other than the server libraries have it on always.<br/> |                                                                                                                                                                                            |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |                                                                                                                                                                                            |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |                                                                                                                                                                                            |

### Response

**Promise\<[models.GetLibraryDetailsResponse](../../models/getlibrarydetailsresponse.md)\>**

### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| models.GetLibraryDetailsLibraryResponseBody | 401                                         | application/json                            |
| models.SDKError                             | 4xx-5xx                                     | */*                                         |


## deleteLibrary

Delete a library using a specific section id

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.deleteLibrary(9518);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryDeleteLibrary } from "@lukehagar/plexjs/funcs/libraryDeleteLibrary.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryDeleteLibrary(plexAPI, 9518);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sectionKey`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/>                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.DeleteLibraryResponse](../../models/deletelibraryresponse.md)\>**

### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.DeleteLibraryResponseBody | 401                              | application/json                 |
| models.SDKError                  | 4xx-5xx                          | */*                              |


## getLibraryItems

Fetches details from a specific section of the library identified by a section key and a tag. The tag parameter accepts the following values:
- `all`: All items in the section.
- `unwatched`: Items that have not been played.
- `newest`: Items that are recently released.
- `recentlyAdded`: Items that are recently added to the library.
- `recentlyViewed`: Items that were recently viewed.
- `onDeck`: Items to continue watching.
- `collection`: Items categorized by collection.
- `edition`: Items categorized by edition.
- `genre`: Items categorized by genre.
- `year`: Items categorized by year of release.
- `decade`: Items categorized by decade.
- `director`: Items categorized by director.
- `actor`: Items categorized by starring actor.
- `country`: Items categorized by country of origin.
- `contentRating`: Items categorized by content rating.
- `rating`: Items categorized by rating.
- `resolution`: Items categorized by resolution.
- `firstCharacter`: Items categorized by the first letter.
- `folder`: Items categorized by folder.


### Example Usage

```typescript
import { IncludeGuids, IncludeMeta, PlexAPI, Tag, Type } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getLibraryItems({
    sectionKey: 9518,
    tag: Tag.Edition,
    includeGuids: IncludeGuids.One,
    includeMeta: IncludeMeta.One,
    type: Type.Two,
    xPlexContainerStart: 0,
    xPlexContainerSize: 50,
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IncludeGuids, IncludeMeta, Tag, Type } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetLibraryItems } from "@lukehagar/plexjs/funcs/libraryGetLibraryItems.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetLibraryItems(plexAPI, {
    sectionKey: 9518,
    tag: Tag.Actor,
    includeGuids: IncludeGuids.One,
    includeMeta: IncludeMeta.One,
    type: Type.Two,
    xPlexContainerStart: 0,
    xPlexContainerSize: 50,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetLibraryItemsRequest](../../models/getlibraryitemsrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetLibraryItemsResponse](../../models/getlibraryitemsresponse.md)\>**

### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| models.GetLibraryItemsLibraryResponseBody | 401                                       | application/json                          |
| models.SDKError                           | 4xx-5xx                                   | */*                                       |


## getRefreshLibraryMetadata

This endpoint Refreshes all the Metadata of the library.


### Example Usage

```typescript
import { Force, PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getRefreshLibraryMetadata(9518, Force.One);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Force } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetRefreshLibraryMetadata } from "@lukehagar/plexjs/funcs/libraryGetRefreshLibraryMetadata.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetRefreshLibraryMetadata(plexAPI, 9518, Force.One);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sectionKey`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/>                                                                          | [object Object]                                                                                                                                                                |
| `force`                                                                                                                                                                        | [models.Force](../../models/force.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | Force the refresh even if the library is already being refreshed.                                                                                                              | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GetRefreshLibraryMetadataResponse](../../models/getrefreshlibrarymetadataresponse.md)\>**

### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| models.GetRefreshLibraryMetadataResponseBody | 401                                          | application/json                             |
| models.SDKError                              | 4xx-5xx                                      | */*                                          |


## getSearchLibrary

Search for content within a specific section of the library.

### Types
Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:

- **Type Object Attributes**:
  - `type`: Metadata type (if standard Plex type).  
  - `title`: Title for this content type (e.g., "Movies").

- **Filter Objects**:
  - Subset of the media query language.
  - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.

- **Sort Objects**:
  - Description of sort fields.
  - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.

> **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.


### Example Usage

```typescript
import { PlexAPI, QueryParamType } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getSearchLibrary(9518, QueryParamType.Two);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QueryParamType } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetSearchLibrary } from "@lukehagar/plexjs/funcs/libraryGetSearchLibrary.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetSearchLibrary(plexAPI, 9518, QueryParamType.Two);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sectionKey`                                                                                                                                                                    | *number*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The unique key of the Plex library. <br/>Note: This is unique in the context of the Plex server.<br/>                                                                           | [object Object]                                                                                                                                                                 |
| `type`                                                                                                                                                                          | [models.QueryParamType](../../models/queryparamtype.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                              | The type of media to retrieve.<br/>1 = movie<br/>2 = show<br/>3 = season<br/>4 = episode<br/>E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries<br/> | [object Object]                                                                                                                                                                 |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |                                                                                                                                                                                 |

### Response

**Promise\<[models.GetSearchLibraryResponse](../../models/getsearchlibraryresponse.md)\>**

### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| models.GetSearchLibraryLibraryResponseBody | 401                                        | application/json                           |
| models.SDKError                            | 4xx-5xx                                    | */*                                        |


## getMetaDataByRatingKey

This endpoint will return the metadata of a library item specified with the ratingKey.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getMetaDataByRatingKey(9518);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetMetaDataByRatingKey } from "@lukehagar/plexjs/funcs/libraryGetMetaDataByRatingKey.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetMetaDataByRatingKey(plexAPI, 9518);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ratingKey`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | the id of the library item to return the children of.                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GetMetaDataByRatingKeyResponse](../../models/getmetadatabyratingkeyresponse.md)\>**

### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| models.GetMetaDataByRatingKeyLibraryResponseBody | 401                                              | application/json                                 |
| models.SDKError                                  | 4xx-5xx                                          | */*                                              |


## getMetadataChildren

This endpoint will return the children of of a library item specified with the ratingKey.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getMetadataChildren(1539.14, "Stream");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetMetadataChildren } from "@lukehagar/plexjs/funcs/libraryGetMetadataChildren.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetMetadataChildren(plexAPI, 5800.4, "Stream");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ratingKey`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | the id of the library item to return the children of.                                                                                                                          |
| `includeElements`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Adds additional elements to the response. Supported types are (Stream)<br/>                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetMetadataChildrenResponse](../../models/getmetadatachildrenresponse.md)\>**

### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| models.GetMetadataChildrenLibraryResponseBody | 401                                           | application/json                              |
| models.SDKError                               | 4xx-5xx                                       | */*                                           |


## getTopWatchedContent

This endpoint will return the top watched content from libraries of a certain type


### Example Usage

```typescript
import { GetTopWatchedContentQueryParamType, PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getTopWatchedContent(GetTopWatchedContentQueryParamType.Two, 1);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GetTopWatchedContentQueryParamType } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetTopWatchedContent } from "@lukehagar/plexjs/funcs/libraryGetTopWatchedContent.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetTopWatchedContent(plexAPI, GetTopWatchedContentQueryParamType.Two, 1);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                          | [models.GetTopWatchedContentQueryParamType](../../models/gettopwatchedcontentqueryparamtype.md)                                                                                 | :heavy_check_mark:                                                                                                                                                              | The type of media to retrieve.<br/>1 = movie<br/>2 = show<br/>3 = season<br/>4 = episode<br/>E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries<br/> | [object Object]                                                                                                                                                                 |
| `includeGuids`                                                                                                                                                                  | *number*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Adds the Guids object to the response<br/>                                                                                                                                      | [object Object]                                                                                                                                                                 |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |                                                                                                                                                                                 |

### Response

**Promise\<[models.GetTopWatchedContentResponse](../../models/gettopwatchedcontentresponse.md)\>**

### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| models.GetTopWatchedContentLibraryResponseBody | 401                                            | application/json                               |
| models.SDKError                                | 4xx-5xx                                        | */*                                            |


## getOnDeck

This endpoint will return the on deck content.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.library.getOnDeck();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { libraryGetOnDeck } from "@lukehagar/plexjs/funcs/libraryGetOnDeck.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await libraryGetOnDeck(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
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

**Promise\<[models.GetOnDeckResponse](../../models/getondeckresponse.md)\>**

### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| models.GetOnDeckLibraryResponseBody | 401                                 | application/json                    |
| models.SDKError                     | 4xx-5xx                             | */*                                 |
