# User
(*user*)

## Overview

API Calls that perform operations with Plex Media Server Users


### Available Operations

* [postUsersSigninData](#postuserssignindata) - Get User SignIn Data

## postUsersSigninData

Sign in user with username and password and return user data with Plex authentication token

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const result = await plexAPI.user.postUsersSigninData("Postman", {
    login: "username@email.com",
    password: "password123",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { userPostUsersSigninData } from "@lukehagar/plexjs/funcs/userPostUsersSigninData.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const res = await userPostUsersSigninData(plexAPI, "Postman", {
    login: "username@email.com",
    password: "password123",
  });

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
| `xPlexClientIdentifier`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The unique identifier for the client application<br/>This is used to track the client application and its usage<br/>(UUID, serial number, or other number unique per device)<br/> | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [models.PostUsersSigninDataRequestBody](../../models/postuserssignindatarequestbody.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Login credentials                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |

### Response

**Promise\<[models.PostUsersSigninDataResponse](../../models/postuserssignindataresponse.md)\>**

### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.PostUsersSigninDataResponseBody | 401                                    | application/json                       |
| models.SDKError                        | 4xx-5xx                                | */*                                    |
