# DVRs
(*dvRs*)

## Overview

The DVR provides means to watch and record live TV.  This section of endpoints describes how to setup the DVR itself


### Available Operations

* [listDVRs](#listdvrs) - Get DVRs
* [createDVR](#createdvr) - Create a DVR
* [deleteDVR](#deletedvr) - Delete a single DVR
* [getDVR](#getdvr) - Get a single DVR
* [deleteLineup](#deletelineup) - Delete a DVR Lineup
* [addLineup](#addlineup) - Add a DVR Lineup
* [setDVRPreferences](#setdvrpreferences) - Set DVR preferences
* [stopDVRReload](#stopdvrreload) - Tell a DVR to stop reloading program guide
* [reloadGuide](#reloadguide) - Tell a DVR to reload program guide
* [tuneChannel](#tunechannel) - Tune a channel on a DVR
* [removeDeviceFromDVR](#removedevicefromdvr) - Remove a device from an existing DVR
* [addDeviceToDVR](#adddevicetodvr) - Add a device to an existing DVR

## listDVRs

Get the list of all available DVRs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDVRs" method="get" path="/livetv/dvrs" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.dvRs.listDVRs();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsListDVRs } from "@lukehagar/plexjs/funcs/dvRsListDVRs.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await dvRsListDVRs(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsListDVRs failed:", res.error);
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

**Promise\<[operations.ListDVRsResponse](../../sdk/models/operations/listdvrsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDVR

Creation of a DVR, after creation of a devcie and a lineup is selected

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDVR" method="post" path="/livetv/dvrs" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.createDVR({
    lineup: "lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT",
    device: [
      "d",
      "e",
      "v",
      "i",
      "c",
      "e",
      "[",
      "]",
      "=",
      "d",
      "e",
      "v",
      "i",
      "c",
      "e",
      ":",
      "/",
      "/",
      "t",
      "v",
      ".",
      "p",
      "l",
      "e",
      "x",
      ".",
      "g",
      "r",
      "a",
      "b",
      "b",
      "e",
      "r",
      "s",
      ".",
      "h",
      "d",
      "h",
      "o",
      "m",
      "e",
      "r",
      "u",
      "n",
      "/",
      "1",
      "0",
      "5",
      "3",
      "C",
      "0",
      "C",
      "A",
    ],
    language: "eng",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsCreateDVR } from "@lukehagar/plexjs/funcs/dvRsCreateDVR.js";

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
  const res = await dvRsCreateDVR(plexAPI, {
    lineup: "lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT",
    device: [
      "d",
      "e",
      "v",
      "i",
      "c",
      "e",
      "[",
      "]",
      "=",
      "d",
      "e",
      "v",
      "i",
      "c",
      "e",
      ":",
      "/",
      "/",
      "t",
      "v",
      ".",
      "p",
      "l",
      "e",
      "x",
      ".",
      "g",
      "r",
      "a",
      "b",
      "b",
      "e",
      "r",
      "s",
      ".",
      "h",
      "d",
      "h",
      "o",
      "m",
      "e",
      "r",
      "u",
      "n",
      "/",
      "1",
      "0",
      "5",
      "3",
      "C",
      "0",
      "C",
      "A",
    ],
    language: "eng",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsCreateDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDVRRequest](../../sdk/models/operations/createdvrrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateDVRResponse](../../sdk/models/operations/createdvrresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteDVR

Delete a single DVR by its id (key)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteDVR" method="delete" path="/livetv/dvrs/{dvrId}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.deleteDVR({
    dvrId: 855088,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsDeleteDVR } from "@lukehagar/plexjs/funcs/dvRsDeleteDVR.js";

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
  const res = await dvRsDeleteDVR(plexAPI, {
    dvrId: 855088,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsDeleteDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDVRRequest](../../sdk/models/operations/deletedvrrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteDVRResponse](../../sdk/models/operations/deletedvrresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDVR

Get a single DVR by its id (key)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDVR" method="get" path="/livetv/dvrs/{dvrId}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.getDVR({
    dvrId: 973518,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsGetDVR } from "@lukehagar/plexjs/funcs/dvRsGetDVR.js";

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
  const res = await dvRsGetDVR(plexAPI, {
    dvrId: 973518,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsGetDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDVRRequest](../../sdk/models/operations/getdvrrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetDVRResponse](../../sdk/models/operations/getdvrresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteLineup

Deletes a DVR device's lineup.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteLineup" method="delete" path="/livetv/dvrs/{dvrId}/lineups" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.deleteLineup({
    dvrId: 454470,
    lineup: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsDeleteLineup } from "@lukehagar/plexjs/funcs/dvRsDeleteLineup.js";

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
  const res = await dvRsDeleteLineup(plexAPI, {
    dvrId: 454470,
    lineup: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsDeleteLineup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLineupRequest](../../sdk/models/operations/deletelineuprequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteLineupResponse](../../sdk/models/operations/deletelineupresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addLineup

Add a lineup to a DVR device's set of lineups.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addLineup" method="put" path="/livetv/dvrs/{dvrId}/lineups" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.addLineup({
    dvrId: 945235,
    lineup: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsAddLineup } from "@lukehagar/plexjs/funcs/dvRsAddLineup.js";

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
  const res = await dvRsAddLineup(plexAPI, {
    dvrId: 945235,
    lineup: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsAddLineup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddLineupRequest](../../sdk/models/operations/addlineuprequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddLineupResponse](../../sdk/models/operations/addlineupresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setDVRPreferences

Set DVR preferences by name avd value

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setDVRPreferences" method="put" path="/livetv/dvrs/{dvrId}/prefs" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.setDVRPreferences({
    dvrId: 116357,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsSetDVRPreferences } from "@lukehagar/plexjs/funcs/dvRsSetDVRPreferences.js";

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
  const res = await dvRsSetDVRPreferences(plexAPI, {
    dvrId: 116357,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsSetDVRPreferences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetDVRPreferencesRequest](../../sdk/models/operations/setdvrpreferencesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetDVRPreferencesResponse](../../sdk/models/operations/setdvrpreferencesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## stopDVRReload

Tell a DVR to stop reloading program guide

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopDVRReload" method="delete" path="/livetv/dvrs/{dvrId}/reloadGuide" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.stopDVRReload({
    dvrId: 348053,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsStopDVRReload } from "@lukehagar/plexjs/funcs/dvRsStopDVRReload.js";

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
  const res = await dvRsStopDVRReload(plexAPI, {
    dvrId: 348053,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsStopDVRReload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StopDVRReloadRequest](../../sdk/models/operations/stopdvrreloadrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StopDVRReloadResponse](../../sdk/models/operations/stopdvrreloadresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## reloadGuide

Tell a DVR to reload program guide

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reloadGuide" method="post" path="/livetv/dvrs/{dvrId}/reloadGuide" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.reloadGuide({
    dvrId: 140753,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsReloadGuide } from "@lukehagar/plexjs/funcs/dvRsReloadGuide.js";

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
  const res = await dvRsReloadGuide(plexAPI, {
    dvrId: 140753,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsReloadGuide failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReloadGuideRequest](../../sdk/models/operations/reloadguiderequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReloadGuideResponse](../../sdk/models/operations/reloadguideresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## tuneChannel

Tune a channel on a DVR to the provided channel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tuneChannel" method="post" path="/livetv/dvrs/{dvrId}/channels/{channel}/tune" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.tuneChannel({
    dvrId: 834281,
    channel: "2.1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsTuneChannel } from "@lukehagar/plexjs/funcs/dvRsTuneChannel.js";

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
  const res = await dvRsTuneChannel(plexAPI, {
    dvrId: 834281,
    channel: "2.1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsTuneChannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TuneChannelRequest](../../sdk/models/operations/tunechannelrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TuneChannelResponse](../../sdk/models/operations/tunechannelresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeDeviceFromDVR

Remove a device from an existing DVR

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDeviceFromDVR" method="delete" path="/livetv/dvrs/{dvrId}/devices/{deviceId}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.removeDeviceFromDVR({
    dvrId: 945416,
    deviceId: 260761,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsRemoveDeviceFromDVR } from "@lukehagar/plexjs/funcs/dvRsRemoveDeviceFromDVR.js";

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
  const res = await dvRsRemoveDeviceFromDVR(plexAPI, {
    dvrId: 945416,
    deviceId: 260761,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsRemoveDeviceFromDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDeviceFromDVRRequest](../../sdk/models/operations/removedevicefromdvrrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDeviceFromDVRResponse](../../sdk/models/operations/removedevicefromdvrresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addDeviceToDVR

Add a device to an existing DVR

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addDeviceToDVR" method="put" path="/livetv/dvrs/{dvrId}/devices/{deviceId}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

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
  const result = await plexAPI.dvRs.addDeviceToDVR({
    dvrId: 334755,
    deviceId: 852930,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { dvRsAddDeviceToDVR } from "@lukehagar/plexjs/funcs/dvRsAddDeviceToDVR.js";

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
  const res = await dvRsAddDeviceToDVR(plexAPI, {
    dvrId: 334755,
    deviceId: 852930,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsAddDeviceToDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddDeviceToDVRRequest](../../sdk/models/operations/adddevicetodvrrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddDeviceToDVRResponse](../../sdk/models/operations/adddevicetodvrresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |