# Updater
(*updater*)

## Overview

This describes the API for searching and applying updates to the Plex Media Server.
Updates to the status can be observed via the Event API.


### Available Operations

* [getUpdateStatus](#getupdatestatus) - Querying status of updates
* [checkForUpdates](#checkforupdates) - Checking for updates
* [applyUpdates](#applyupdates) - Apply Updates

## getUpdateStatus

Querying status of updates

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.updater.getUpdateStatus();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterGetUpdateStatus } from "@lukehagar/plexjs/funcs/updaterGetUpdateStatus.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await updaterGetUpdateStatus(plexAPI);

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

**Promise\<[models.GetUpdateStatusResponse](../../models/getupdatestatusresponse.md)\>**

### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| models.GetUpdateStatusUpdaterResponseBody | 401                                       | application/json                          |
| models.SDKError                           | 4xx-5xx                                   | */*                                       |


## checkForUpdates

Checking for updates

### Example Usage

```typescript
import { Download, PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.updater.checkForUpdates(Download.One);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Download } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterCheckForUpdates } from "@lukehagar/plexjs/funcs/updaterCheckForUpdates.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await updaterCheckForUpdates(plexAPI, Download.One);

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
| `download`                                                                                                                                                                     | [models.Download](../../models/download.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                             | Indicate that you want to start download any updates found.                                                                                                                    | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.CheckForUpdatesResponse](../../models/checkforupdatesresponse.md)\>**

### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| models.CheckForUpdatesResponseBody | 401                                | application/json                   |
| models.SDKError                    | 4xx-5xx                            | */*                                |


## applyUpdates

Note that these two parameters are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed


### Example Usage

```typescript
import { PlexAPI, Skip, Tonight } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.updater.applyUpdates(Tonight.One, Skip.One);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Skip, Tonight } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterApplyUpdates } from "@lukehagar/plexjs/funcs/updaterApplyUpdates.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await updaterApplyUpdates(plexAPI, Tonight.One, Skip.One);

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
| `tonight`                                                                                                                                                                      | [models.Tonight](../../models/tonight.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install                       | [object Object]                                                                                                                                                                |
| `skip`                                                                                                                                                                         | [models.Skip](../../models/skip.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Indicate that the latest version should be marked as skipped. The [Release] entry for this version will have the `state` set to `skipped`.                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.ApplyUpdatesResponse](../../models/applyupdatesresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.ApplyUpdatesResponseBody | 401                             | application/json                |
| models.SDKError                 | 4xx-5xx                         | */*                             |
