# Watchlist
(*watchlist*)

## Overview

API Calls that perform operations with Plex Media Server Watchlists


### Available Operations

* [getWatchList](#getwatchlist) - Get User Watchlist

## getWatchList

Get User Watchlist

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-watch-list" method="get" path="/library/sections/watchlist/{filter}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Filter } from "@lukehagar/plexjs/sdk/models/operations";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.watchlist.getWatchList({
    filter: Filter.Released,
    xPlexToken: "CV5xoxjTpFKUzBTShsaf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { watchlistGetWatchList } from "@lukehagar/plexjs/funcs/watchlistGetWatchList.js";
import { Filter } from "@lukehagar/plexjs/sdk/models/operations";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await watchlistGetWatchList(plexAPI, {
    filter: Filter.Released,
    xPlexToken: "CV5xoxjTpFKUzBTShsaf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistGetWatchList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWatchListRequest](../../sdk/models/operations/getwatchlistrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetWatchListResponse](../../sdk/models/operations/getwatchlistresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GetWatchListBadRequest   | 400                             | application/json                |
| errors.GetWatchListUnauthorized | 401                             | application/json                |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |