# Authentication
(*authentication*)

## Overview

API Calls regarding authentication for Plex Media Server


### Available Operations

* [getTransientToken](#gettransienttoken) - Get a Transient Token.
* [getSourceConnectionInformation](#getsourceconnectioninformation) - Get Source Connection Information
* [getUserDetails](#getuserdetails) - Get User Data By Token
* [postUsersSignInData](#postuserssignindata) - Get User SignIn Data

## getTransientToken

This endpoint provides the caller with a temporary token with the same access level as the caller's token. These tokens are valid for up to 48 hours and are destroyed if the server instance is restarted.


### Example Usage

```typescript
import { GetTransientTokenQueryParamType, PlexAPI, Scope } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.authentication.getTransientToken(GetTransientTokenQueryParamType.Delegation, Scope.All);
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GetTransientTokenQueryParamType, Scope } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { authenticationGetTransientToken } from "@lukehagar/plexjs/funcs/authenticationGetTransientToken.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await authenticationGetTransientToken(plexAPI, GetTransientTokenQueryParamType.Delegation, Scope.All);

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [models.GetTransientTokenQueryParamType](../../models/gettransienttokenqueryparamtype.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | `delegation` - This is the only supported `type` parameter.                                                                                                                    |
| `scope`                                                                                                                                                                        | [models.Scope](../../models/scope.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | `all` - This is the only supported `scope` parameter.                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetTransientTokenResponse](../../models/gettransienttokenresponse.md)\>**

### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| models.GetTransientTokenResponseBody | 401                                  | application/json                     |
| models.SDKError                      | 4xx-5xx                              | */*                                  |


## getSourceConnectionInformation

If a caller requires connection details and a transient token for a source that is known to the server, for example a cloud media provider or shared PMS, then this endpoint can be called. This endpoint is only accessible with either an admin token or a valid transient token generated from an admin token.
Note: requires Plex Media Server >= 1.15.4.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.authentication.getSourceConnectionInformation("server://client-identifier");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { authenticationGetSourceConnectionInformation } from "@lukehagar/plexjs/funcs/authenticationGetSourceConnectionInformation.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await authenticationGetSourceConnectionInformation(plexAPI, "server://client-identifier");

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
| `source`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The source identifier with an included prefix.                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GetSourceConnectionInformationResponse](../../models/getsourceconnectioninformationresponse.md)\>**

### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| models.GetSourceConnectionInformationResponseBody | 401                                               | application/json                                  |
| models.SDKError                                   | 4xx-5xx                                           | */*                                               |


## getUserDetails

Get the User data from the provided X-Plex-Token

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.authentication.getUserDetails("CV5xoxjTpFKUzBTShsaf");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { authenticationGetUserDetails } from "@lukehagar/plexjs/funcs/authenticationGetUserDetails.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await authenticationGetUserDetails(plexAPI, "CV5xoxjTpFKUzBTShsaf");

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
| `xPlexToken`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Plex Authentication Token                                                                                                                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |

### Response

**Promise\<[models.GetUserDetailsResponse](../../models/getuserdetailsresponse.md)\>**

### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.GetUserDetailsResponseBody | 401                               | application/json                  |
| models.SDKError                   | 4xx-5xx                           | */*                               |


## postUsersSignInData

Sign in user with username and password and return user data with Plex authentication token

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.authentication.postUsersSignInData("gcgzw5rz2xovp84b4vha3a40", {
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
import { authenticationPostUsersSignInData } from "@lukehagar/plexjs/funcs/authenticationPostUsersSignInData.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await authenticationPostUsersSignInData(plexAPI, "gcgzw5rz2xovp84b4vha3a40", {
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
| `requestBody`                                                                                                                                                                  | [models.PostUsersSignInDataRequestBody](../../models/postuserssignindatarequestbody.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Login credentials                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |

### Response

**Promise\<[models.PostUsersSignInDataResponse](../../models/postuserssignindataresponse.md)\>**

### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.PostUsersSignInDataResponseBody | 401                                    | application/json                       |
| models.SDKError                        | 4xx-5xx                                | */*                                    |
