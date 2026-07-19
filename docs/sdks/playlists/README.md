# Playlists

## Overview

Plex Playlists operations

### Available Operations

* [deletePlaylistByRatingKey](#deleteplaylistbyratingkey) - Delete Playlist

## deletePlaylistByRatingKey

Delete a playlist.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePlaylistByRatingKey" method="delete" path="/playlists" -->
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
  const result = await plexAPI.playlists.deletePlaylistByRatingKey({
    ratingKey: 499749,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { playlistsDeletePlaylistByRatingKey } from "@parke.dev/plexjs/funcs/playlistsDeletePlaylistByRatingKey.js";
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
  const res = await playlistsDeletePlaylistByRatingKey(plexAPI, {
    ratingKey: 499749,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistsDeletePlaylistByRatingKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePlaylistByRatingKeyRequest](../../models/operations/deleteplaylistbyratingkeyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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