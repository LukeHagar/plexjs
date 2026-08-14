# DVRs

## Overview

The DVR provides means to watch and record live TV.  This section of endpoints describes how to setup the DVR itself

### Available Operations

* [listDVRs](#listdvrs) - Get DVRs
* [createDVR](#createdvr) - Create a DVR
* [deleteDVR](#deletedvr) - Delete a single DVR
* [getDVR](#getdvr) - Get a single DVR
* [patchDVRSettings](#patchdvrsettings) - Update DVR Settings
* [updateDVRSettings](#updatedvrsettings) - Update DVR Settings
* [getDVRChannels](#getdvrchannels) - Get DVR Channels
* [getDVRGuide](#getdvrguide) - Get DVR Guide
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
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.dvRs.listDVRs();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsListDVRs } from "@parke.dev/plexjs/funcs/dvRsListDVRs.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

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
| `uuid`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filter by DVR UUID.                                                                                                                                                            |
| `lineup`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filter by lineup.                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListDVRsResponse](../../models/operations/listdvrsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createDVR

Creation of a DVR, after creation of a device and a lineup is selected

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDVR" method="post" path="/livetv/dvrs" -->
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
  const result = await plexAPI.dvRs.createDVR({
    lineup: "lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT",
    deviceQueryParameter: [
      "device://tv.plex.grabbers.hdhomerun/1053C0CA",
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsCreateDVR } from "@parke.dev/plexjs/funcs/dvRsCreateDVR.js";
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
  const res = await dvRsCreateDVR(plexAPI, {
    lineup: "lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT",
    deviceQueryParameter: [
      "device://tv.plex.grabbers.hdhomerun/1053C0CA",
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
| `request`                                                                                                                                                                      | [operations.CreateDVRRequest](../../models/operations/createdvrrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateDVRResponse](../../models/operations/createdvrresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteDVR

Delete a single DVR by its id (key)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteDVR" method="delete" path="/livetv/dvrs/{dvrId}" -->
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
  await plexAPI.dvRs.deleteDVR({
    dvrId: 855088,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsDeleteDVR } from "@parke.dev/plexjs/funcs/dvRsDeleteDVR.js";
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
  const res = await dvRsDeleteDVR(plexAPI, {
    dvrId: 855088,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("dvRsDeleteDVR failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDVRRequest](../../models/operations/deletedvrrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getDVR

Get a single DVR by its id (key)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDVR" method="get" path="/livetv/dvrs/{dvrId}" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsGetDVR } from "@parke.dev/plexjs/funcs/dvRsGetDVR.js";
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
| `request`                                                                                                                                                                      | [operations.GetDVRRequest](../../models/operations/getdvrrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetDVRResponse](../../models/operations/getdvrresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## patchDVRSettings

Update DVR settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDVRSettings" method="patch" path="/livetv/dvrs/{dvrId}" -->
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
  const result = await plexAPI.dvRs.patchDVRSettings({
    dvrId: 537061,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsPatchDVRSettings } from "@parke.dev/plexjs/funcs/dvRsPatchDVRSettings.js";
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
  const res = await dvRsPatchDVRSettings(plexAPI, {
    dvrId: 537061,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsPatchDVRSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDVRSettingsRequest](../../models/operations/patchdvrsettingsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateDVRSettings

Update DVR settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDVRSettings" method="put" path="/livetv/dvrs/{dvrId}" -->
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
  const result = await plexAPI.dvRs.updateDVRSettings({
    dvrId: 614847,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsUpdateDVRSettings } from "@parke.dev/plexjs/funcs/dvRsUpdateDVRSettings.js";
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
  const res = await dvRsUpdateDVRSettings(plexAPI, {
    dvrId: 614847,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsUpdateDVRSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDVRSettingsRequest](../../models/operations/updatedvrsettingsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getDVRChannels

List channels directly associated with a DVR.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDVRChannels" method="get" path="/livetv/dvrs/{dvrId}/channels" -->
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
  const result = await plexAPI.dvRs.getDVRChannels({
    dvrId: 901521,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsGetDVRChannels } from "@parke.dev/plexjs/funcs/dvRsGetDVRChannels.js";
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
  const res = await dvRsGetDVRChannels(plexAPI, {
    dvrId: 901521,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsGetDVRChannels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDVRChannelsRequest](../../models/operations/getdvrchannelsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getDVRGuide

Fetch program guide/schedule for a DVR.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDVRGuide" method="get" path="/livetv/dvrs/{dvrId}/guide" -->
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
  const result = await plexAPI.dvRs.getDVRGuide({
    dvrId: 19054,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsGetDVRGuide } from "@parke.dev/plexjs/funcs/dvRsGetDVRGuide.js";
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
  const res = await dvRsGetDVRGuide(plexAPI, {
    dvrId: 19054,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dvRsGetDVRGuide failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDVRGuideRequest](../../models/operations/getdvrguiderequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteLineup

Deletes a DVR device's lineup.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteLineup" method="delete" path="/livetv/dvrs/{dvrId}/lineups" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsDeleteLineup } from "@parke.dev/plexjs/funcs/dvRsDeleteLineup.js";
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
| `request`                                                                                                                                                                      | [operations.DeleteLineupRequest](../../models/operations/deletelineuprequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteLineupResponse](../../models/operations/deletelineupresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## addLineup

Add a lineup to a DVR device's set of lineups.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addLineup" method="put" path="/livetv/dvrs/{dvrId}/lineups" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsAddLineup } from "@parke.dev/plexjs/funcs/dvRsAddLineup.js";
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
| `request`                                                                                                                                                                      | [operations.AddLineupRequest](../../models/operations/addlineuprequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddLineupResponse](../../models/operations/addlineupresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## setDVRPreferences

Set DVR preferences by name and value

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setDVRPreferences" method="put" path="/livetv/dvrs/{dvrId}/prefs" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsSetDVRPreferences } from "@parke.dev/plexjs/funcs/dvRsSetDVRPreferences.js";
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
| `request`                                                                                                                                                                      | [operations.SetDVRPreferencesRequest](../../models/operations/setdvrpreferencesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetDVRPreferencesResponse](../../models/operations/setdvrpreferencesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## stopDVRReload

Tell a DVR to stop reloading program guide

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopDVRReload" method="delete" path="/livetv/dvrs/{dvrId}/reloadGuide" -->
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
  await plexAPI.dvRs.stopDVRReload({
    dvrId: 348053,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsStopDVRReload } from "@parke.dev/plexjs/funcs/dvRsStopDVRReload.js";
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
  const res = await dvRsStopDVRReload(plexAPI, {
    dvrId: 348053,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("dvRsStopDVRReload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StopDVRReloadRequest](../../models/operations/stopdvrreloadrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## reloadGuide

Tell a DVR to reload program guide

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reloadGuide" method="post" path="/livetv/dvrs/{dvrId}/reloadGuide" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsReloadGuide } from "@parke.dev/plexjs/funcs/dvRsReloadGuide.js";
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
| `request`                                                                                                                                                                      | [operations.ReloadGuideRequest](../../models/operations/reloadguiderequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReloadGuideResponse](../../models/operations/reloadguideresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## tuneChannel

Tune a channel on a DVR to the provided channel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tuneChannel" method="post" path="/livetv/dvrs/{dvrId}/channels/{channel}/tune" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsTuneChannel } from "@parke.dev/plexjs/funcs/dvRsTuneChannel.js";
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
| `request`                                                                                                                                                                      | [operations.TuneChannelRequest](../../models/operations/tunechannelrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TuneChannelResponse](../../models/operations/tunechannelresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeDeviceFromDVR

Remove a device from an existing DVR

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDeviceFromDVR" method="delete" path="/livetv/dvrs/{dvrId}/devices/{deviceId}" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsRemoveDeviceFromDVR } from "@parke.dev/plexjs/funcs/dvRsRemoveDeviceFromDVR.js";
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
| `request`                                                                                                                                                                      | [operations.RemoveDeviceFromDVRRequest](../../models/operations/removedevicefromdvrrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDeviceFromDVRResponse](../../models/operations/removedevicefromdvrresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## addDeviceToDVR

Add a device to an existing DVR

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addDeviceToDVR" method="put" path="/livetv/dvrs/{dvrId}/devices/{deviceId}" -->
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
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { dvRsAddDeviceToDVR } from "@parke.dev/plexjs/funcs/dvRsAddDeviceToDVR.js";
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
| `request`                                                                                                                                                                      | [operations.AddDeviceToDVRRequest](../../models/operations/adddevicetodvrrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddDeviceToDVRResponse](../../models/operations/adddevicetodvrresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |