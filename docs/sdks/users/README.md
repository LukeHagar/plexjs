# Users
(*users*)

## Overview

### Available Operations

* [getUsers](#getusers) - Get list of all connected users

## getUsers

Get list of all users that are friends and have library access with the provided Plex authentication token

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.users.getUsers({
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    deviceName: "Chrome",
    deviceScreenResolution: "1487x1165,2560x1440",
    clientVersion: "2.4.1",
    platform: "Roku",
    clientFeatures: "external-media,indirect-media,hub-style-list",
    model: "4200X",
    xPlexSessionId: "97e136ef-4ddd-4ff3-89a7-a5820c96c2ca",
    xPlexLanguage: "en",
    platformVersion: "4.3 build 1057",
    xPlexToken: "CV5xoxjTpFKUzBTShsaf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { usersGetUsers } from "@lukehagar/plexjs/funcs/usersGetUsers.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await usersGetUsers(plexAPI, {
    clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
    clientName: "Plex for Roku",
    deviceNickname: "Roku 3",
    deviceName: "Chrome",
    deviceScreenResolution: "1487x1165,2560x1440",
    clientVersion: "2.4.1",
    platform: "Roku",
    clientFeatures: "external-media,indirect-media,hub-style-list",
    model: "4200X",
    xPlexSessionId: "97e136ef-4ddd-4ff3-89a7-a5820c96c2ca",
    xPlexLanguage: "en",
    platformVersion: "4.3 build 1057",
    xPlexToken: "CV5xoxjTpFKUzBTShsaf",
  });
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
| `request`                                                                                                                                                                      | [operations.GetUsersRequest](../../sdk/models/operations/getusersrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetUsersResponse](../../sdk/models/operations/getusersresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GetUsersBadRequest   | 400                         | application/json            |
| errors.GetUsersUnauthorized | 401                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |