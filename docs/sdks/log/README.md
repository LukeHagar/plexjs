# Log
(*log*)

## Overview

Submit logs to the Log Handler for Plex Media Server


### Available Operations

* [logLine](#logline) - Logging a single line message.
* [logMultiLine](#logmultiline) - Logging a multi-line message
* [enablePaperTrail](#enablepapertrail) - Enabling Papertrail

## logLine

This endpoint will write a single-line log message, including a level and source to the main Plex Media Server log.


### Example Usage

```typescript
import { Level, PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.log.logLine(Level.Three, "Test log message", "Postman");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Level } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { logLogLine } from "@lukehagar/plexjs/funcs/logLogLine.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await logLogLine(plexAPI, Level.One, "Test log message", "Postman");

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
| `level`                                                                                                                                                                        | [models.Level](../../models/level.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | An integer log level to write to the PMS log with.  <br/>0: Error  <br/>1: Warning  <br/>2: Info  <br/>3: Debug  <br/>4: Verbose<br/>                                          |                                                                                                                                                                                |
| `message`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The text of the message to write to the log.                                                                                                                                   | [object Object]                                                                                                                                                                |
| `source`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | a string indicating the source of the message.                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.LogLineResponse](../../models/loglineresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.LogLineResponseBody | 401                        | application/json           |
| models.SDKError            | 4xx-5xx                    | */*                        |


## logMultiLine

This endpoint allows for the batch addition of log entries to the main Plex Media Server log.  
It accepts a text/plain request body, where each line represents a distinct log entry.  
Each log entry consists of URL-encoded key-value pairs, specifying log attributes such as 'level', 'message', and 'source'.  

Log entries are separated by a newline character (`\n`).  
Each entry's parameters should be URL-encoded to ensure accurate parsing and handling of special characters.  
This method is efficient for logging multiple entries in a single API call, reducing the overhead of multiple individual requests.  

The 'level' parameter specifies the log entry's severity or importance, with the following integer values:
- `0`: Error - Critical issues that require immediate attention.
- `1`: Warning - Important events that are not critical but may indicate potential issues.
- `2`: Info - General informational messages about system operation.
- `3`: Debug - Detailed information useful for debugging purposes.
- `4`: Verbose - Highly detailed diagnostic information for in-depth analysis.

The 'message' parameter contains the log text, and 'source' identifies the log message's origin (e.g., an application name or module).

Example of a single log entry format:
`level=4&message=Sample%20log%20entry&source=applicationName`

Ensure each parameter is properly URL-encoded to avoid interpretation issues.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.log.logMultiLine("level=4&message=Test%20message%201&source=postman\n" +
  "level=3&message=Test%20message%202&source=postman\n" +
  "level=1&message=Test%20message%203&source=postman");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { logLogMultiLine } from "@lukehagar/plexjs/funcs/logLogMultiLine.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await logLogMultiLine(plexAPI, "level=4&message=Test%20message%201&source=postman\n" +
  "level=3&message=Test%20message%202&source=postman\n" +
  "level=1&message=Test%20message%203&source=postman");

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
| `request`                                                                                                                                                                      | [string](../../models/.md)                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogMultiLineResponse](../../models/logmultilineresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.LogMultiLineResponseBody | 401                             | application/json                |
| models.SDKError                 | 4xx-5xx                         | */*                             |


## enablePaperTrail

This endpoint will enable all Plex Media Serverlogs to be sent to the Papertrail networked logging site for a period of time.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const result = await plexAPI.log.enablePaperTrail();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { logEnablePaperTrail } from "@lukehagar/plexjs/funcs/logEnablePaperTrail.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "gcgzw5rz2xovp84b4vha3a40",
});

async function run() {
  const res = await logEnablePaperTrail(plexAPI);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EnablePaperTrailResponse](../../models/enablepapertrailresponse.md)\>**

### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| models.EnablePaperTrailResponseBody | 401                                 | application/json                    |
| models.SDKError                     | 4xx-5xx                             | */*                                 |
