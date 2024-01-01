# Server
(*server*)

## Overview

Operations against the Plex Media Server System.


### Available Operations

* [getServerCapabilities](#getservercapabilities) - Server Capabilities
* [getServerPreferences](#getserverpreferences) - Get Server Preferences
* [getAvailableClients](#getavailableclients) - Get Available Clients
* [getDevices](#getdevices) - Get Devices
* [getServerIdentity](#getserveridentity) - Get Server Identity
* [getMyPlexAccount](#getmyplexaccount) - Get MyPlex Account
* [getResizedPhoto](#getresizedphoto) - Get a Resized Photo
* [getServerList](#getserverlist) - Get Server List

## getServerCapabilities

Server Capabilities

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getServerCapabilities();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetServerCapabilitiesResponse](../../models/operations/getservercapabilitiesresponse.md)>**
### Errors

| Error Object                             | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.GetServerCapabilitiesResponseBody | 401                                      | application/json                         |
| errors.SDKError                          | 4xx-5xx                                  | */*                                      |

## getServerPreferences

Get Server Preferences

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getServerPreferences();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetServerPreferencesResponse](../../models/operations/getserverpreferencesresponse.md)>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetServerPreferencesResponseBody | 401                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## getAvailableClients

Get Available Clients

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getAvailableClients();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAvailableClientsResponse](../../models/operations/getavailableclientsresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetAvailableClientsResponseBody | 401                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## getDevices

Get Devices

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getDevices();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDevicesResponse](../../models/operations/getdevicesresponse.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GetDevicesResponseBody | 401                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

## getServerIdentity

Get Server Identity

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getServerIdentity();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetServerIdentityResponse](../../models/operations/getserveridentityresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetServerIdentityResponseBody | 401                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## getMyPlexAccount

Returns MyPlex Account Information

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getMyPlexAccount();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetMyPlexAccountResponse](../../models/operations/getmyplexaccountresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetMyPlexAccountResponseBody | 401                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## getResizedPhoto

Plex's Photo transcoder is used throughout the service to serve images at specified sizes.


### Example Usage

```typescript
import { PlexAPI } from "plexjs";
import { MinSize, Upscale } from "plexjs/models/operations";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getResizedPhoto({
    width: 110,
    height: 165,
    opacity: 643869,
    blur: 4000,
    minSize: MinSize.Zero,
    upscale: Upscale.Zero,
    url: "/library/metadata/49564/thumb/1654258204",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResizedPhotoRequest](../../models/operations/getresizedphotorequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetResizedPhotoResponse](../../models/operations/getresizedphotoresponse.md)>**
### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetResizedPhotoResponseBody | 401                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |

## getServerList

Get Server List

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.server.getServerList();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetServerListResponse](../../models/operations/getserverlistresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetServerListResponseBody | 401                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |
