# Hubs
(*hubs*)

## Overview

Hubs are a structured two-dimensional container for media, generally represented by multiple horizontal rows.


### Available Operations

* [getGlobalHubs](#getglobalhubs) - Get Global Hubs
* [getRecentlyAdded](#getrecentlyadded) - Get Recently Added
* [getLibraryHubs](#getlibraryhubs) - Get library specific hubs

## getGlobalHubs

Get Global Hubs filtered by the parameters provided.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGlobalHubs" method="get" path="/hubs" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.hubs.getGlobalHubs();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { hubsGetGlobalHubs } from "@lukehagar/plexjs/funcs/hubsGetGlobalHubs.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hubsGetGlobalHubs(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hubsGetGlobalHubs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `count`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return with each hub.                                                                                                                                   |
| `onlyTransient`                                                                                                                                                                | [operations.OnlyTransient](../../sdk/models/operations/onlytransient.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGlobalHubsResponse](../../sdk/models/operations/getglobalhubsresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetGlobalHubsBadRequest   | 400                              | application/json                 |
| errors.GetGlobalHubsUnauthorized | 401                              | application/json                 |
| errors.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getRecentlyAdded

This endpoint will return the recently added content.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-recently-added" method="get" path="/hubs/home/recentlyAdded" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { IncludeMeta, Type } from "@lukehagar/plexjs/sdk/models/operations";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.hubs.getRecentlyAdded({
    contentDirectoryID: 39486,
    sectionID: 2,
    type: Type.TvShow,
    includeMeta: IncludeMeta.Enable,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { hubsGetRecentlyAdded } from "@lukehagar/plexjs/funcs/hubsGetRecentlyAdded.js";
import { IncludeMeta, Type } from "@lukehagar/plexjs/sdk/models/operations";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hubsGetRecentlyAdded(plexAPI, {
    contentDirectoryID: 39486,
    sectionID: 2,
    type: Type.TvShow,
    includeMeta: IncludeMeta.Enable,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hubsGetRecentlyAdded failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecentlyAddedRequest](../../sdk/models/operations/getrecentlyaddedrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRecentlyAddedResponse](../../sdk/models/operations/getrecentlyaddedresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLibraryHubs

This endpoint will return a list of library specific hubs


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLibraryHubs" method="get" path="/hubs/sections/{sectionId}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.hubs.getLibraryHubs(492.74);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { hubsGetLibraryHubs } from "@lukehagar/plexjs/funcs/hubsGetLibraryHubs.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hubsGetLibraryHubs(plexAPI, 492.74);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hubsGetLibraryHubs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sectionId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | the Id of the library to query                                                                                                                                                 |
| `count`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return with each hub.                                                                                                                                   |
| `onlyTransient`                                                                                                                                                                | [operations.QueryParamOnlyTransient](../../sdk/models/operations/queryparamonlytransient.md)                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetLibraryHubsResponse](../../sdk/models/operations/getlibraryhubsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetLibraryHubsBadRequest   | 400                               | application/json                  |
| errors.GetLibraryHubsUnauthorized | 401                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |