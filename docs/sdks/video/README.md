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
import { PlexAPI } from "@lukehagar/plexjs";
import { State } from "@lukehagar/plexjs/models/operations";

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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimelineRequest](../../models/operations/gettimelinerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetTimelineResponse](../../models/operations/gettimelineresponse.md)\>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetTimelineResponseBody | 401                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |

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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartUniversalTranscodeRequest](../../models/operations/startuniversaltranscoderequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.StartUniversalTranscodeResponse](../../models/operations/startuniversaltranscoderesponse.md)\>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.StartUniversalTranscodeResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |
