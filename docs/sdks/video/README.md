# Video
(*video*)

## Overview

API Calls that perform operations with Plex Media Server Videos


### Available Operations

* [startUniversalTranscode](#startuniversaltranscode) - Start Universal Transcode
* [getTimeline](#gettimeline) - Get the timeline for a media item

## startUniversalTranscode

Begin a Universal Transcode Session

### Example Usage

```typescript
import { PlexAPI } from "plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.video.startUniversalTranscode({
    hasMDE: 8924.99,
    path: "/etc/mail",
    mediaIndex: 9962.95,
    partIndex: 1232.82,
    protocol: "string",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
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

**Promise<[operations.StartUniversalTranscodeResponse](../../models/operations/startuniversaltranscoderesponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.StartUniversalTranscodeResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## getTimeline

Get the timeline for a media item

### Example Usage

```typescript
import { PlexAPI } from "plexjs";
import { State } from "plexjs/models/operations";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.video.getTimeline({
    ratingKey: 716.56,
    key: "<key>",
    state: State.Paused,
    hasMDE: 7574.33,
    time: 3327.51,
    duration: 7585.39,
    context: "string",
    playQueueItemID: 1406.21,
    playBackTime: 2699.34,
    row: 3536.42,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
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

**Promise<[operations.GetTimelineResponse](../../models/operations/gettimelineresponse.md)>**
### Errors

| Error Object                   | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetTimelineResponseBody | 401                            | application/json               |
| errors.SDKError                | 4xx-5xx                        | */*                            |
