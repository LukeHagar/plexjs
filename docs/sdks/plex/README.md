# Plex
(*plex*)

## Overview

API Calls that perform operations directly against https://Plex.tv


### Available Operations

* [getCompanionsData](#getcompanionsdata) - Get Companions Data
* [getUserFriends](#getuserfriends) - Get list of friends of the user logged in
* [getGeoData](#getgeodata) - Get Geo Data
* [getHomeData](#gethomedata) - Get Plex Home Data
* [getServerResources](#getserverresources) - Get Server Resources
* [getPin](#getpin) - Get a Pin
* [getTokenByPinId](#gettokenbypinid) - Get Access Token by PinId

## getCompanionsData

Get Companions Data

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.plex.getCompanionsData();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetCompanionsData } from "@lukehagar/plexjs/funcs/plexGetCompanionsData.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await plexGetCompanionsData(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetCompanionsDataResponse](../../sdk/models/operations/getcompanionsdataresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetCompanionsDataBadRequest   | 400                                  | application/json                     |
| errors.GetCompanionsDataUnauthorized | 401                                  | application/json                     |
| errors.SDKError                      | 4XX, 5XX                             | \*/\*                                |

## getUserFriends

Get friends of provided auth token.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.plex.getUserFriends();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetUserFriends } from "@lukehagar/plexjs/funcs/plexGetUserFriends.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await plexGetUserFriends(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetUserFriendsResponse](../../sdk/models/operations/getuserfriendsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetUserFriendsBadRequest   | 400                               | application/json                  |
| errors.GetUserFriendsUnauthorized | 401                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## getGeoData

Returns the geolocation and locale data of the caller

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.plex.getGeoData();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetGeoData } from "@lukehagar/plexjs/funcs/plexGetGeoData.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await plexGetGeoData(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetGeoDataResponse](../../sdk/models/operations/getgeodataresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GetGeoDataBadRequest   | 400                           | application/json              |
| errors.GetGeoDataUnauthorized | 401                           | application/json              |
| errors.SDKError               | 4XX, 5XX                      | \*/\*                         |

## getHomeData

Retrieves the home data for the authenticated user, including details like home ID, name, guest access information, and subscription status.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.plex.getHomeData();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetHomeData } from "@lukehagar/plexjs/funcs/plexGetHomeData.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await plexGetHomeData(plexAPI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

**Promise\<[operations.GetHomeDataResponse](../../sdk/models/operations/gethomedataresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetHomeDataBadRequest   | 400                            | application/json               |
| errors.GetHomeDataUnauthorized | 401                            | application/json               |
| errors.SDKError                | 4XX, 5XX                       | \*/\*                          |

## getServerResources

Get Plex server access tokens and server connections

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.plex.getServerResources("3381b62b-9ab7-4e37-827b-203e9809eb58");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetServerResources } from "@lukehagar/plexjs/funcs/plexGetServerResources.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await plexGetServerResources(plexAPI, "3381b62b-9ab7-4e37-827b-203e9809eb58");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `clientID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | An opaque identifier unique to the client (UUID, serial number, or other unique device ID)                                                                                     | [object Object]                                                                                                                                                                |
| `includeHttps`                                                                                                                                                                 | [operations.IncludeHttps](../../sdk/models/operations/includehttps.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Include Https entries in the results                                                                                                                                           | [object Object]                                                                                                                                                                |
| `includeRelay`                                                                                                                                                                 | [operations.IncludeRelay](../../sdk/models/operations/includerelay.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Include Relay addresses in the results <br/>E.g: https://10-0-0-25.bbf8e10c7fa20447cacee74cd9914cde.plex.direct:32400<br/>                                                     | [object Object]                                                                                                                                                                |
| `includeIPv6`                                                                                                                                                                  | [operations.IncludeIPv6](../../sdk/models/operations/includeipv6.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | Include IPv6 entries in the results                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |

### Response

**Promise\<[operations.GetServerResourcesResponse](../../sdk/models/operations/getserverresourcesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetServerResourcesBadRequest   | 400                                   | application/json                      |
| errors.GetServerResourcesUnauthorized | 401                                   | application/json                      |
| errors.SDKError                       | 4XX, 5XX                              | \*/\*                                 |

## getPin

Retrieve a Pin ID from Plex.tv to use for authentication flows

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.plex.getPin({
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    clientVersion: "2.4.1",
    platform: "Roku",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetPin } from "@lukehagar/plexjs/funcs/plexGetPin.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await plexGetPin(plexAPI, {
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    clientVersion: "2.4.1",
    platform: "Roku",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPinRequest](../../sdk/models/operations/getpinrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetPinResponse](../../sdk/models/operations/getpinresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.GetPinBadRequest | 400                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getTokenByPinId

Retrieve an Access Token from Plex.tv after the Pin has been authenticated

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.plex.getTokenByPinId({
    pinID: 408895,
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    clientVersion: "2.4.1",
    platform: "Roku",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetTokenByPinId } from "@lukehagar/plexjs/funcs/plexGetTokenByPinId.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await plexGetTokenByPinId(plexAPI, {
    pinID: 408895,
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    clientVersion: "2.4.1",
    platform: "Roku",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTokenByPinIdRequest](../../sdk/models/operations/gettokenbypinidrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetTokenByPinIdResponse](../../sdk/models/operations/gettokenbypinidresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetTokenByPinIdBadRequest   | 400                                | application/json                   |
| errors.GetTokenByPinIdResponseBody | 404                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |