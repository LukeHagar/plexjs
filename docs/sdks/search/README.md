# Search
(*search*)

## Overview

API Calls that perform search operations with Plex Media Server


### Available Operations

* [performSearch](#performsearch) - Perform a search
* [performVoiceSearch](#performvoicesearch) - Perform a voice search
* [getSearchResults](#getsearchresults) - Get Search Results

## performSearch

This endpoint performs a search across all library sections, or a single section, and returns matches as hubs, split up by type. It performs spell checking, looks for partial matches, and orders the hubs based on quality of results. In addition, based on matches, it will return other related matches (e.g. for a genre match, it may return movies in that genre, or for an actor match, movies with that actor).

In the response's items, the following extra attributes are returned to further describe or disambiguate the result:

- `reason`: The reason for the result, if not because of a direct search term match; can be either:
  - `section`: There are multiple identical results from different sections.
  - `originalTitle`: There was a search term match from the original title field (sometimes those can be very different or in a foreign language).
  - `<hub identifier>`: If the reason for the result is due to a result in another hub, the source hub identifier is returned. For example, if the search is for "dylan" then Bob Dylan may be returned as an artist result, an a few of his albums returned as album results with a reason code of `artist` (the identifier of that particular hub). Or if the search is for "arnold", there might be movie results returned with a reason of `actor`
- `reasonTitle`: The string associated with the reason code. For a section reason, it'll be the section name; For a hub identifier, it'll be a string associated with the match (e.g. `Arnold Schwarzenegger` for movies which were returned because the search was for "arnold").
- `reasonID`: The ID of the item associated with the reason for the result. This might be a section ID, a tag ID, an artist ID, or a show ID.

This request is intended to be very fast, and called as the user types.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.search.performSearch("arnold");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { searchPerformSearch } from "@lukehagar/plexjs/funcs/searchPerformSearch.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await searchPerformSearch(plexAPI, "arnold");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchPerformSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The query term                                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `sectionId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | This gives context to the search, and can result in re-ordering of search result hubs                                                                                          |                                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return per hub                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PerformSearchResponse](../../sdk/models/operations/performsearchresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.PerformSearchBadRequest   | 400                              | application/json                 |
| errors.PerformSearchUnauthorized | 401                              | application/json                 |
| errors.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## performVoiceSearch

This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint. 
It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint. 
Whenever possible, clients should limit the search to the appropriate type. 
Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.search.performVoiceSearch("dead+poop");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { searchPerformVoiceSearch } from "@lukehagar/plexjs/funcs/searchPerformVoiceSearch.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await searchPerformVoiceSearch(plexAPI, "dead+poop");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchPerformVoiceSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The query term                                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `sectionId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | This gives context to the search, and can result in re-ordering of search result hubs                                                                                          |                                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return per hub                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PerformVoiceSearchResponse](../../sdk/models/operations/performvoicesearchresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PerformVoiceSearchBadRequest   | 400                                   | application/json                      |
| errors.PerformVoiceSearchUnauthorized | 401                                   | application/json                      |
| errors.SDKError                       | 4XX, 5XX                              | \*/\*                                 |

## getSearchResults

This will search the database for the string provided.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.search.getSearchResults("110");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { searchGetSearchResults } from "@lukehagar/plexjs/funcs/searchGetSearchResults.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await searchGetSearchResults(plexAPI, "110");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchGetSearchResults failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The search query string to use                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetSearchResultsResponse](../../sdk/models/operations/getsearchresultsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetSearchResultsBadRequest   | 400                                 | application/json                    |
| errors.GetSearchResultsUnauthorized | 401                                 | application/json                    |
| errors.SDKError                     | 4XX, 5XX                            | \*/\*                               |