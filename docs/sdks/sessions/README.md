# Sessions
(*sessions*)

## Overview

API Calls that perform search operations with Plex Media Server Sessions


### Available Operations

* [getSessions](#getsessions) - Get Active Sessions
* [getSessionHistory](#getsessionhistory) - Get Session History
* [getTranscodeSessions](#gettranscodesessions) - Get Transcode Sessions
* [stopTranscodeSession](#stoptranscodesession) - Stop a Transcode Session

## getSessions

This will retrieve the "Now Playing" Information of the PMS.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const result = await plexAPI.sessions.getSessions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { sessionsGetSessions } from "@lukehagar/plexjs/funcs/sessionsGetSessions.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const res = await sessionsGetSessions(plexAPI);

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

**Promise\<[operations.GetSessionsResponse](../../sdk/models/operations/getsessionsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetSessionsBadRequest   | 400                            | application/json               |
| errors.GetSessionsUnauthorized | 401                            | application/json               |
| errors.SDKError                | 4XX, 5XX                       | \*/\*                          |

## getSessionHistory

This will Retrieve a listing of all history views.

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const result = await plexAPI.sessions.getSessionHistory("viewedAt:desc", 1, {}, 12);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { sessionsGetSessionHistory } from "@lukehagar/plexjs/funcs/sessionsGetSessionHistory.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const res = await sessionsGetSessionHistory(plexAPI, "viewedAt:desc", 1, {}, 12);

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
| `sort`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Sorts the results by the specified field followed by the direction (asc, desc)<br/>                                                                                            |                                                                                                                                                                                |
| `accountId`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filter results by those that are related to a specific users id<br/>                                                                                                           | [object Object]                                                                                                                                                                |
| `filter`                                                                                                                                                                       | [operations.QueryParamFilter](../../sdk/models/operations/queryparamfilter.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Filters content by field and direction/equality<br/>(Unknown if viewedAt is the only supported column)<br/>                                                                    | [object Object]                                                                                                                                                                |
| `librarySectionID`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filters the results based on the id of a valid library section<br/>                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetSessionHistoryResponse](../../sdk/models/operations/getsessionhistoryresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetSessionHistoryBadRequest   | 400                                  | application/json                     |
| errors.GetSessionHistoryUnauthorized | 401                                  | application/json                     |
| errors.SDKError                      | 4XX, 5XX                             | \*/\*                                |

## getTranscodeSessions

Get Transcode Sessions

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const result = await plexAPI.sessions.getTranscodeSessions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { sessionsGetTranscodeSessions } from "@lukehagar/plexjs/funcs/sessionsGetTranscodeSessions.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const res = await sessionsGetTranscodeSessions(plexAPI);

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

**Promise\<[operations.GetTranscodeSessionsResponse](../../sdk/models/operations/gettranscodesessionsresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetTranscodeSessionsBadRequest   | 400                                     | application/json                        |
| errors.GetTranscodeSessionsUnauthorized | 401                                     | application/json                        |
| errors.SDKError                         | 4XX, 5XX                                | \*/\*                                   |

## stopTranscodeSession

Stop a Transcode Session

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const result = await plexAPI.sessions.stopTranscodeSession("zz7llzqlx8w9vnrsbnwhbmep");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { sessionsStopTranscodeSession } from "@lukehagar/plexjs/funcs/sessionsStopTranscodeSession.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  clientID: "gcgzw5rz2xovp84b4vha3a40",
  clientName: "Plex Web",
  clientVersion: "4.133.0",
  clientPlatform: "Chrome",
  deviceName: "Linux",
});

async function run() {
  const res = await sessionsStopTranscodeSession(plexAPI, "zz7llzqlx8w9vnrsbnwhbmep");

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
| `sessionKey`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | the Key of the transcode session to stop                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.StopTranscodeSessionResponse](../../sdk/models/operations/stoptranscodesessionresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.StopTranscodeSessionBadRequest   | 400                                     | application/json                        |
| errors.StopTranscodeSessionUnauthorized | 401                                     | application/json                        |
| errors.SDKError                         | 4XX, 5XX                                | \*/\*                                   |