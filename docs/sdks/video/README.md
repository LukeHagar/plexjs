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

<!-- UsageSnippet language="typescript" operationID="getTimeline" method="get" path="/:/timeline" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { State } from "@lukehagar/plexjs/sdk/models/operations";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
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

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { videoGetTimeline } from "@lukehagar/plexjs/funcs/videoGetTimeline.js";
import { State } from "@lukehagar/plexjs/sdk/models/operations";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accessToken: "<YOUR_API_KEY_HERE>",
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoGetTimeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimelineRequest](../../sdk/models/operations/gettimelinerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTimelineResponse](../../sdk/models/operations/gettimelineresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetTimelineBadRequest   | 400                            | application/json               |
| errors.GetTimelineUnauthorized | 401                            | application/json               |
| errors.SDKError                | 4XX, 5XX                       | \*/\*                          |

## startUniversalTranscode

Begin a Universal Transcode Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startUniversalTranscode" method="get" path="/video/:/transcode/universal/start.mpd" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
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

  console.log(result);
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoStartUniversalTranscode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartUniversalTranscodeRequest](../../sdk/models/operations/startuniversaltranscoderequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartUniversalTranscodeResponse](../../sdk/models/operations/startuniversaltranscoderesponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.StartUniversalTranscodeBadRequest   | 400                                        | application/json                           |
| errors.StartUniversalTranscodeUnauthorized | 401                                        | application/json                           |
| errors.SDKError                            | 4XX, 5XX                                   | \*/\*                                      |