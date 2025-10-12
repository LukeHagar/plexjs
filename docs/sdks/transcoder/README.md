# Transcoder
(*transcoder*)

## Overview

API Operations against the Transcoder

### Available Operations

* [transcodeImage](#transcodeimage) - Transcode an image
* [makeDecision](#makedecision) - Make a decision on media playback
* [triggerFallback](#triggerfallback) - Manually trigger a transcoder fallback
* [transcodeSubtitles](#transcodesubtitles) - Transcode subtitles
* [startTranscodeSession](#starttranscodesession) - Start A Transcoding Session

## transcodeImage

Transcode an image, possibly changing format or size

### Example Usage

<!-- UsageSnippet language="typescript" operationID="transcodeImage" method="get" path="/photo/:/transcode" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts, BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.transcoder.transcodeImage({
    url: "/library/metadata/265/thumb/1715112705",
    background: "#ff5522",
    upscale: BoolInt.One,
    minSize: BoolInt.One,
    rotate: BoolInt.One,
    blendColor: "#ff5522",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderTranscodeImage } from "@lukehagar/plexjs/funcs/transcoderTranscodeImage.js";
import { Accepts, BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const res = await transcoderTranscodeImage(plexAPI, {
    url: "/library/metadata/265/thumb/1715112705",
    background: "#ff5522",
    upscale: BoolInt.One,
    minSize: BoolInt.One,
    rotate: BoolInt.One,
    blendColor: "#ff5522",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderTranscodeImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TranscodeImageRequest](../../sdk/models/operations/transcodeimagerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TranscodeImageResponse](../../sdk/models/operations/transcodeimageresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## makeDecision

Make a decision on media playback based on client profile, and requested settings such as bandwidth and resolution.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="makeDecision" method="get" path="/{transcodeType}/:/transcode/universal/decision" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { MakeDecisionLocation, MakeDecisionProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.transcoder.makeDecision({
    transcodeType: TranscodeType.Music,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: MakeDecisionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: MakeDecisionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderMakeDecision } from "@lukehagar/plexjs/funcs/transcoderMakeDecision.js";
import { MakeDecisionLocation, MakeDecisionProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const res = await transcoderMakeDecision(plexAPI, {
    transcodeType: TranscodeType.Music,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: MakeDecisionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: MakeDecisionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderMakeDecision failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MakeDecisionRequest](../../sdk/models/operations/makedecisionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MakeDecisionResponse](../../sdk/models/operations/makedecisionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## triggerFallback

Manually trigger a transcoder fallback ex: HEVC to h.264 or hw to sw

### Example Usage

<!-- UsageSnippet language="typescript" operationID="triggerFallback" method="post" path="/{transcodeType}/:/transcode/universal/fallback" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Accepts, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.transcoder.triggerFallback({
    transcodeType: TranscodeType.Audio,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderTriggerFallback } from "@lukehagar/plexjs/funcs/transcoderTriggerFallback.js";
import { Accepts, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const res = await transcoderTriggerFallback(plexAPI, {
    transcodeType: TranscodeType.Audio,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderTriggerFallback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TriggerFallbackRequest](../../sdk/models/operations/triggerfallbackrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TriggerFallbackResponse](../../sdk/models/operations/triggerfallbackresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## transcodeSubtitles

Only transcode subtitle streams.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="transcodeSubtitles" method="get" path="/{transcodeType}/:/transcode/universal/subtitles" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { TranscodeSubtitlesLocation, TranscodeSubtitlesProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.transcoder.transcodeSubtitles({
    transcodeType: TranscodeType.Audio,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: TranscodeSubtitlesLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: TranscodeSubtitlesProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderTranscodeSubtitles } from "@lukehagar/plexjs/funcs/transcoderTranscodeSubtitles.js";
import { TranscodeSubtitlesLocation, TranscodeSubtitlesProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const res = await transcoderTranscodeSubtitles(plexAPI, {
    transcodeType: TranscodeType.Audio,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: TranscodeSubtitlesLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: TranscodeSubtitlesProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderTranscodeSubtitles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TranscodeSubtitlesRequest](../../sdk/models/operations/transcodesubtitlesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TranscodeSubtitlesResponse](../../sdk/models/operations/transcodesubtitlesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## startTranscodeSession

Starts the transcoder and returns the corresponding streaming resource document.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startTranscodeSession" method="get" path="/{transcodeType}/:/transcode/universal/start.{extension}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { Extension, StartTranscodeSessionLocation, StartTranscodeSessionProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const result = await plexAPI.transcoder.startTranscodeSession({
    transcodeType: TranscodeType.Music,
    extension: Extension.Mpd,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: StartTranscodeSessionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: StartTranscodeSessionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { transcoderStartTranscodeSession } from "@lukehagar/plexjs/funcs/transcoderStartTranscodeSession.js";
import { Extension, StartTranscodeSessionLocation, StartTranscodeSessionProtocol } from "@lukehagar/plexjs/sdk/models/operations";
import { Accepts, AdvancedSubtitles, BoolInt, TranscodeType } from "@lukehagar/plexjs/sdk/models/shared";

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
});

async function run() {
  const res = await transcoderStartTranscodeSession(plexAPI, {
    transcodeType: TranscodeType.Music,
    extension: Extension.Mpd,
    advancedSubtitles: AdvancedSubtitles.Burn,
    audioBoost: 50,
    audioChannelCount: 5,
    autoAdjustQuality: BoolInt.One,
    autoAdjustSubtitle: BoolInt.One,
    directPlay: BoolInt.One,
    directStream: BoolInt.One,
    directStreamAudio: BoolInt.One,
    disableResolutionRotation: BoolInt.One,
    hasMDE: BoolInt.One,
    location: StartTranscodeSessionLocation.Wan,
    mediaBufferSize: 102400,
    mediaIndex: 0,
    musicBitrate: 5000,
    offset: 90.5,
    partIndex: 0,
    path: "/library/metadata/151671",
    peakBitrate: 12000,
    photoResolution: "1080x1080",
    protocol: StartTranscodeSessionProtocol.Dash,
    secondsPerSegment: 5,
    subtitleSize: 50,
    videoBitrate: 12000,
    videoQuality: 50,
    videoResolution: "1080x1080",
    xPlexClientProfileExtra: "add-limitation(scope=videoCodec&scopeName=*&type=upperBound&name=video.frameRate&value=60&replace=true)+append-transcode-target-codec(type=videoProfile&context=streaming&videoCodec=h264%2Chevc&audioCodec=aac&protocol=dash)",
    xPlexClientProfileName: "generic",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcoderStartTranscodeSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartTranscodeSessionRequest](../../sdk/models/operations/starttranscodesessionrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartTranscodeSessionResponse](../../sdk/models/operations/starttranscodesessionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |