# StartUniversalTranscodeRequest

## Example Usage

```typescript
import { StartUniversalTranscodeRequest } from "@lukehagar/plexjs";

let value: StartUniversalTranscodeRequest = {
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
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `hasMDE`                                      | *number*                                      | :heavy_check_mark:                            | Whether the media item has MDE                | 1                                             |
| `path`                                        | *string*                                      | :heavy_check_mark:                            | The path to the media item to transcode       | /library/metadata/23409                       |
| `mediaIndex`                                  | *number*                                      | :heavy_check_mark:                            | The index of the media item to transcode      | 0                                             |
| `partIndex`                                   | *number*                                      | :heavy_check_mark:                            | The index of the part to transcode            | 0                                             |
| `protocol`                                    | *string*                                      | :heavy_check_mark:                            | The protocol to use for the transcode session | hls                                           |
| `fastSeek`                                    | *number*                                      | :heavy_minus_sign:                            | Whether to use fast seek or not               | 0                                             |
| `directPlay`                                  | *number*                                      | :heavy_minus_sign:                            | Whether to use direct play or not             | 0                                             |
| `directStream`                                | *number*                                      | :heavy_minus_sign:                            | Whether to use direct stream or not           | 0                                             |
| `subtitleSize`                                | *number*                                      | :heavy_minus_sign:                            | The size of the subtitles                     | 100                                           |
| `subtites`                                    | *string*                                      | :heavy_minus_sign:                            | The subtitles                                 | burn                                          |
| `audioBoost`                                  | *number*                                      | :heavy_minus_sign:                            | The audio boost                               | 100                                           |
| `location`                                    | *string*                                      | :heavy_minus_sign:                            | The location of the transcode session         | lan                                           |
| `mediaBufferSize`                             | *number*                                      | :heavy_minus_sign:                            | The size of the media buffer                  | 102400                                        |
| `session`                                     | *string*                                      | :heavy_minus_sign:                            | The session ID                                | zvcage8b7rkioqcm8f4uns4c                      |
| `addDebugOverlay`                             | *number*                                      | :heavy_minus_sign:                            | Whether to add a debug overlay or not         | 0                                             |
| `autoAdjustQuality`                           | *number*                                      | :heavy_minus_sign:                            | Whether to auto adjust quality or not         | 0                                             |