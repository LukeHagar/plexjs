# Updater
(*updater*)

## Overview

This describes the API for searching and applying updates to the Plex Media Server.
Updates to the status can be observed via the Event API.


### Available Operations

* [applyUpdates](#applyupdates) - Applying updates
* [checkUpdates](#checkupdates) - Checking for updates
* [getUpdatesStatus](#getupdatesstatus) - Querying status of updates

## applyUpdates

Apply any downloaded updates.  Note that the two parameters `tonight` and `skip` are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyUpdates" method="put" path="/updater/apply" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.updater.applyUpdates({
    tonight: BoolInt.One,
    skip: BoolInt.One,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterApplyUpdates } from "@lukehagar/plexjs/funcs/updaterApplyUpdates.js";
import { BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const res = await updaterApplyUpdates(plexAPI, {
    tonight: BoolInt.One,
    skip: BoolInt.One,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("updaterApplyUpdates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyUpdatesRequest](../../sdk/models/operations/applyupdatesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyUpdatesResponse](../../sdk/models/operations/applyupdatesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## checkUpdates

Perform an update check and potentially download

### Example Usage

<!-- UsageSnippet language="typescript" operationID="checkUpdates" method="put" path="/updater/check" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.updater.checkUpdates({
    download: BoolInt.One,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterCheckUpdates } from "@lukehagar/plexjs/funcs/updaterCheckUpdates.js";
import { BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const res = await updaterCheckUpdates(plexAPI, {
    download: BoolInt.One,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("updaterCheckUpdates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CheckUpdatesRequest](../../sdk/models/operations/checkupdatesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CheckUpdatesResponse](../../sdk/models/operations/checkupdatesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUpdatesStatus

Get the status of updating the server

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUpdatesStatus" method="get" path="/updater/status" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.updater.getUpdatesStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { updaterGetUpdatesStatus } from "@lukehagar/plexjs/funcs/updaterGetUpdatesStatus.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await updaterGetUpdatesStatus(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("updaterGetUpdatesStatus failed:", res.error);
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

**Promise\<[operations.GetUpdatesStatusResponse](../../sdk/models/operations/getupdatesstatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |