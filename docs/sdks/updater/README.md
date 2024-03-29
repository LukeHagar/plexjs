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

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "<value>",
  });

  const result = await sdk.updater.getUpdateStatus();

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


### Response

**Promise<[operations.GetUpdateStatusResponse](../../models/operations/getupdatestatusresponse.md)>**
### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetUpdateStatusResponseBody | 401                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |

## checkForUpdates

Checking for updates

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Download } from "@lukehagar/plexjs/models/operations";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "<value>",
  });

  const download = Download.One;
  
  const result = await sdk.updater.checkForUpdates(download);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `download`                                                                                                                                                                     | [operations.Download](../../models/operations/download.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | Indicate that you want to start download any updates found.                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CheckForUpdatesResponse](../../models/operations/checkforupdatesresponse.md)>**
### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.CheckForUpdatesResponseBody | 401                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |

## applyUpdates

Note that these two parameters are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Skip, Tonight } from "@lukehagar/plexjs/models/operations";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
    xPlexClientIdentifier: "<value>",
  });

  const tonight = Tonight.One;
  const skip = Skip.Zero;
  
  const result = await sdk.updater.applyUpdates(tonight, skip);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tonight`                                                                                                                                                                      | [operations.Tonight](../../models/operations/tonight.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install                       |
| `skip`                                                                                                                                                                         | [operations.Skip](../../models/operations/skip.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ApplyUpdatesResponse](../../models/operations/applyupdatesresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ApplyUpdatesResponseBody | 401                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
