# Video
(*video*)

## Overview

API Calls that perform operations with Plex Media Server Videos


### Available Operations

* [getTimeline](#gettimeline) - Get the timeline for a media item
* [startUniversalTranscode](#startuniversaltranscode) - Start Universal Transcode

## getTimeline

Get the timeline for a media item

### Example Usage

```typescript
import { PlexAPI, State } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const result = await plexAPI.video.getTimeline({
    ratingKey: 23409,
    key: "/library/metadata/23409",
    state: State.Playing,
    hasMDE: 1,
    time: 2000,
    duration: 10000,
    context: "home:hub.continueWatching",
    playQueueItemID: 1,
    playBackTime: 2000,
    row: 1,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { State } from "@lukehagar/plexjs";
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { videoGetTimeline } from "@lukehagar/plexjs/funcs/videoGetTimeline.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const res = await videoGetTimeline(plexAPI, {
    ratingKey: 23409,
    key: "/library/metadata/23409",
    state: State.Playing,
    hasMDE: 1,
    time: 2000,
    duration: 10000,
    context: "home:hub.continueWatching",
    playQueueItemID: 1,
    playBackTime: 2000,
    row: 1,
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetTimelineRequest](../../models/gettimelinerequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetTimelineResponse](../../models/gettimelineresponse.md)\>**

### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| models.GetTimelineResponseBody | 401                            | application/json               |
| models.SDKError                | 4xx-5xx                        | */*                            |


## startUniversalTranscode

Begin a Universal Transcode Session

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const result = await plexAPI.video.startUniversalTranscode({
    hasMDE: 1,
    path: "/library/metadata/23409",
    mediaIndex: 0,
    partIndex: 0,
    protocol: "hls",
    fastSeek: 0,
    directPlay: 0,
    directStream: 0,
    subtitleSize: 100,
    subtites: "burn",
    audioBoost: 100,
    location: "lan",
    mediaBufferSize: 102400,
    session: "zvcage8b7rkioqcm8f4uns4c",
    addDebugOverlay: 0,
    autoAdjustQuality: 0,
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
import { videoStartUniversalTranscode } from "@lukehagar/plexjs/funcs/videoStartUniversalTranscode.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const res = await videoStartUniversalTranscode(plexAPI, {
    hasMDE: 1,
    path: "/library/metadata/23409",
    mediaIndex: 0,
    partIndex: 0,
    protocol: "hls",
    fastSeek: 0,
    directPlay: 0,
    directStream: 0,
    subtitleSize: 100,
    subtites: "burn",
    audioBoost: 100,
    location: "lan",
    mediaBufferSize: 102400,
    session: "zvcage8b7rkioqcm8f4uns4c",
    addDebugOverlay: 0,
    autoAdjustQuality: 0,
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.StartUniversalTranscodeRequest](../../models/startuniversaltranscoderequest.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StartUniversalTranscodeResponse](../../models/startuniversaltranscoderesponse.md)\>**

### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| models.StartUniversalTranscodeResponseBody | 401                                        | application/json                           |
| models.SDKError                            | 4xx-5xx                                    | */*                                        |
