# Hubs
(*hubs*)

## Overview

Hubs are a structured two-dimensional container for media, generally represented by multiple horizontal rows.


### Available Operations

* [getGlobalHubs](#getglobalhubs) - Get Global Hubs
* [getLibraryHubs](#getlibraryhubs) - Get library specific hubs

## getGlobalHubs

Get Global Hubs filtered by the parameters provided.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { OnlyTransient } from "@lukehagar/plexjs/models/operations";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const result = await plexAPI.hubs.getGlobalHubs(1262.49, OnlyTransient.One);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `count`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return with each hub.                                                                                                                                   |
| `onlyTransient`                                                                                                                                                                | [operations.OnlyTransient](../../models/operations/onlytransient.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetGlobalHubsResponse](../../models/operations/getglobalhubsresponse.md)\>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetGlobalHubsResponseBody | 401                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

## getLibraryHubs

This endpoint will return a list of library specific hubs


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { QueryParamOnlyTransient } from "@lukehagar/plexjs/models/operations";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const result = await plexAPI.hubs.getLibraryHubs(6728.76, 9010.22, QueryParamOnlyTransient.Zero);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sectionId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | the Id of the library to query                                                                                                                                                 |
| `count`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of items to return with each hub.                                                                                                                                   |
| `onlyTransient`                                                                                                                                                                | [operations.QueryParamOnlyTransient](../../models/operations/queryparamonlytransient.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetLibraryHubsResponse](../../models/operations/getlibraryhubsresponse.md)\>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetLibraryHubsResponseBody | 401                               | application/json                  |
| errors.SDKError                   | 4xx-5xx                           | */*                               |
