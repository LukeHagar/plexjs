# Users

## Overview

Plex Users operations

### Available Operations

* [getLegacyResources](#getlegacyresources) - Get Legacy Resources
* [getLegacyUsers](#getlegacyusers) - Get Legacy Users
* [getFriends](#getfriends) - Get Friends
* [getHome](#gethome) - Get home hubs
* [getHomeUsers](#gethomeusers) - Get home hubs Users
* [createHomeUser](#createhomeuser) - Create Home User
* [getMyPlexAccount](#getmyplexaccount) - Get MyPlex Account
* [getUserServer](#getuserserver) - Get User Server Association
* [getServerUserFeatures](#getserveruserfeatures) - Get Server User Features
* [shareServer](#shareserver) - Share Server
* [updateViewStateSync](#updateviewstatesync) - Update View State Sync
* [getUsers](#getusers) - Get list of all connected users
* [getAccountXML](#getaccountxml) - Get Account (XML)
* [getAccountJSON](#getaccountjson) - Get Account (JSON)
* [deleteHomeUser](#deletehomeuser) - Delete Home User
* [updateHomeUser](#updatehomeuser) - Update Home User
* [updateRestrictedUser](#updaterestricteduser) - Update Restricted User
* [getServerDetails](#getserverdetails) - Get Server Details
* [shareServerLegacy](#shareserverlegacy) - Share Server (Legacy v1)
* [removeShare](#removeshare) - Remove Share
* [updateShare](#updateshare) - Update Share
* [getUserOptOuts](#getuseroptouts) - Get User Opt-Outs

## getLegacyResources

Get legacy published server connections (XML).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLegacyResources" method="get" path="/api/resources" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.users.getLegacyResources();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetLegacyResources } from "@parke.dev/plexjs/funcs/usersGetLegacyResources.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await usersGetLegacyResources(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetLegacyResources failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[Uint8Array](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getLegacyUsers

Get legacy friends list (XML).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLegacyUsers" method="get" path="/api/users/" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.users.getLegacyUsers();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetLegacyUsers } from "@parke.dev/plexjs/funcs/usersGetLegacyUsers.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await usersGetLegacyUsers(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetLegacyUsers failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[Uint8Array](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFriends

Get the list of friends and shared users.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFriends" method="get" path="/friends" -->
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
  const result = await plexAPI.users.getFriends({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetFriends } from "@parke.dev/plexjs/funcs/usersGetFriends.js";
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
  const res = await usersGetFriends(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetFriends failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFriendsRequest](../../models/operations/getfriendsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetFriendsResponse](../../models/operations/getfriendsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getHome

Get Plex Home user list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHome" method="get" path="/home" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.users.getHome();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetHome } from "@parke.dev/plexjs/funcs/usersGetHome.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await usersGetHome(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetHome failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.MediaContainerWithHubs](../../models/shared/mediacontainerwithhubs.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getHomeUsers

Get the list of Plex Home users.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHomeUsers" method="get" path="/home/users" -->
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
  const result = await plexAPI.users.getHomeUsers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetHomeUsers } from "@parke.dev/plexjs/funcs/usersGetHomeUsers.js";
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
  const res = await usersGetHomeUsers(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetHomeUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHomeUsersRequest](../../models/operations/gethomeusersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.MediaContainerWithDirectory1](../../models/shared/mediacontainerwithdirectory1.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createHomeUser

Create a new Plex Home user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHomeUser" method="post" path="/home/users" -->
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
  const result = await plexAPI.users.createHomeUser({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersCreateHomeUser } from "@parke.dev/plexjs/funcs/usersCreateHomeUser.js";
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
  const res = await usersCreateHomeUser(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersCreateHomeUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHomeUserRequest](../../models/operations/createhomeuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMyPlexAccount

Get linked MyPlex account info on PMS.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMyPlexAccount" method="get" path="/myplex/account" -->
```typescript
import { PlexAPI } from "@parke.dev/plexjs";

const plexAPI = new PlexAPI({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.users.getMyPlexAccount();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetMyPlexAccount } from "@parke.dev/plexjs/funcs/usersGetMyPlexAccount.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await usersGetMyPlexAccount(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetMyPlexAccount failed:", res.error);
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

**Promise\<[shared.UserPlexAccount](../../models/shared/userplexaccount.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getUserServer

Get server association information for the logged-in user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserServer" method="get" path="/server" -->
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
  const result = await plexAPI.users.getUserServer({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetUserServer } from "@parke.dev/plexjs/funcs/usersGetUserServer.js";
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
  const res = await usersGetUserServer(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetUserServer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserServerRequest](../../models/operations/getuserserverrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.ConnectionInfo](../../models/shared/connectioninfo.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getServerUserFeatures

Get features enabled per shared user for the server.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getServerUserFeatures" method="get" path="/server/users/features" -->
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
  const result = await plexAPI.users.getServerUserFeatures({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetServerUserFeatures } from "@parke.dev/plexjs/funcs/usersGetServerUserFeatures.js";
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
  const res = await usersGetServerUserFeatures(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetServerUserFeatures failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetServerUserFeaturesRequest](../../models/operations/getserveruserfeaturesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.ServerUserFeaturesResponse](../../models/shared/serveruserfeaturesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## shareServer

Share a server with a friend or managed user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="shareServer" method="post" path="/shared_servers" -->
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
  const result = await plexAPI.users.shareServer({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersShareServer } from "@parke.dev/plexjs/funcs/usersShareServer.js";
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
  const res = await usersShareServer(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersShareServer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ShareServerRequest](../../models/operations/shareserverrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateViewStateSync

Enable or disable watch-state sync consent for the logged-in user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateViewStateSync" method="put" path="/user/view_state_sync" -->
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
  const result = await plexAPI.users.updateViewStateSync({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersUpdateViewStateSync } from "@parke.dev/plexjs/funcs/usersUpdateViewStateSync.js";
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
  const res = await usersUpdateViewStateSync(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersUpdateViewStateSync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateViewStateSyncRequest](../../models/operations/updateviewstatesyncrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getUsers

Get list of all users that are friends and have library access with the provided Plex authentication token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUsers" method="get" path="/users" -->
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
  const result = await plexAPI.users.getUsers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetUsers } from "@parke.dev/plexjs/funcs/usersGetUsers.js";
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
  const res = await usersGetUsers(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUsersRequest](../../models/operations/getusersrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetUsersResponse](../../models/operations/getusersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.BadRequestError   | 400                      | application/json         |
| errors.UnauthorizedError | 401                      | application/json         |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## getAccountXML

Get the logged-in user's account details in XML format (legacy v1 endpoint).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountXML" method="get" path="/users/account" -->
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
  const result = await plexAPI.users.getAccountXML({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetAccountXML } from "@parke.dev/plexjs/funcs/usersGetAccountXML.js";
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
  const res = await usersGetAccountXML(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetAccountXML failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountXMLRequest](../../models/operations/getaccountxmlrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[Uint8Array](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAccountJSON

Get the logged-in user's account details in JSON format (legacy v1 endpoint).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountJSON" method="get" path="/users/account.json" -->
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
  const result = await plexAPI.users.getAccountJSON({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetAccountJSON } from "@parke.dev/plexjs/funcs/usersGetAccountJSON.js";
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
  const res = await usersGetAccountJSON(plexAPI, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetAccountJSON failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountJSONRequest](../../models/operations/getaccountjsonrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.UserPlexAccount](../../models/shared/userplexaccount.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteHomeUser

Remove a Plex Home user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteHomeUser" method="delete" path="/home/users/{userId}" -->
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
  const result = await plexAPI.users.deleteHomeUser({
    userId: 768153,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersDeleteHomeUser } from "@parke.dev/plexjs/funcs/usersDeleteHomeUser.js";
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
  const res = await usersDeleteHomeUser(plexAPI, {
    userId: 768153,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersDeleteHomeUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteHomeUserRequest](../../models/operations/deletehomeuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateHomeUser

Update a Plex Home user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHomeUser" method="put" path="/home/users/{userId}" -->
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
  const result = await plexAPI.users.updateHomeUser({
    userId: 187897,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersUpdateHomeUser } from "@parke.dev/plexjs/funcs/usersUpdateHomeUser.js";
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
  const res = await usersUpdateHomeUser(plexAPI, {
    userId: 187897,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersUpdateHomeUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHomeUserRequest](../../models/operations/updatehomeuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateRestrictedUser

Update restricted (managed) home user settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateRestrictedUser" method="put" path="/home/users/restricted/{userId}" -->
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
  const result = await plexAPI.users.updateRestrictedUser({
    userId: 130660,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersUpdateRestrictedUser } from "@parke.dev/plexjs/funcs/usersUpdateRestrictedUser.js";
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
  const res = await usersUpdateRestrictedUser(plexAPI, {
    userId: 130660,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersUpdateRestrictedUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRestrictedUserRequest](../../models/operations/updaterestricteduserrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getServerDetails

Get server details for sharing.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getServerDetails" method="get" path="/servers/{machineId}" -->
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
  const result = await plexAPI.users.getServerDetails({
    machineId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetServerDetails } from "@parke.dev/plexjs/funcs/usersGetServerDetails.js";
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
  const res = await usersGetServerDetails(plexAPI, {
    machineId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetServerDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetServerDetailsRequest](../../models/operations/getserverdetailsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.ServerConfiguration](../../models/shared/serverconfiguration.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## shareServerLegacy

Share a library with a friend (legacy v1 XML endpoint).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="shareServerLegacy" method="post" path="/servers/{machineId}/shared_servers" -->
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
  const result = await plexAPI.users.shareServerLegacy({
    machineId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersShareServerLegacy } from "@parke.dev/plexjs/funcs/usersShareServerLegacy.js";
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
  const res = await usersShareServerLegacy(plexAPI, {
    machineId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersShareServerLegacy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ShareServerLegacyRequest](../../models/operations/shareserverlegacyrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## removeShare

Remove a share / friend.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeShare" method="delete" path="/sharings/{userId}" -->
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
  const result = await plexAPI.users.removeShare({
    userId: 858924,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersRemoveShare } from "@parke.dev/plexjs/funcs/usersRemoveShare.js";
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
  const res = await usersRemoveShare(plexAPI, {
    userId: 858924,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersRemoveShare failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveShareRequest](../../models/operations/removesharerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateShare

Update friend filters (allowSync, filterMovies, etc.).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateShare" method="put" path="/sharings/{userId}" -->
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
  const result = await plexAPI.users.updateShare({
    userId: 139113,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersUpdateShare } from "@parke.dev/plexjs/funcs/usersUpdateShare.js";
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
  const res = await usersUpdateShare(plexAPI, {
    userId: 139113,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersUpdateShare failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateShareRequest](../../models/operations/updatesharerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.SuccessResponse](../../models/shared/successresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getUserOptOuts

Get online media source opt-out settings for a user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserOptOuts" method="get" path="/user/{uuid}/settings/opt_outs" -->
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
  const result = await plexAPI.users.getUserOptOuts({
    uuid: "17dd8bb4-eb45-4878-97c7-017f7d9a2384",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@parke.dev/plexjs/core.js";
import { usersGetUserOptOuts } from "@parke.dev/plexjs/funcs/usersGetUserOptOuts.js";
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
  const res = await usersGetUserOptOuts(plexAPI, {
    uuid: "17dd8bb4-eb45-4878-97c7-017f7d9a2384",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetUserOptOuts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserOptOutsRequest](../../models/operations/getuseroptoutsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.UserOptOutsResponse](../../models/shared/useroptoutsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |