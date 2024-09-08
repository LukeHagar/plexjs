# GetMetaDataByRatingKeyPart

## Example Usage

```typescript
import { GetMetaDataByRatingKeyPart } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMetaDataByRatingKeyPart = {
    id: 15,
    key: "/library/parts/15/1705637151/file.mp4",
    duration: 141417,
    file: "/movies/Serenity (2005)/Serenity (2005).mp4",
    size: 40271948,
    audioProfile: "lc",
    container: "mp4",
    has64bitOffsets: false,
    optimizedForStreaming: false,
    videoProfile: "high",
    stream: [
        {
            id: 29,
            streamType: 2,
            default: true,
            codec: "aac",
            index: 0,
            bitrate: 128,
            bitDepth: 8,
            chromaLocation: "left",
            chromaSubsampling: "14520",
            codedHeight: 816,
            codedWidth: 1920,
            colorPrimaries: "bt709",
            colorRange: "tv",
            colorSpace: "bt709",
            colorTrc: "bt709",
            frameRate: 24,
            hasScalingMatrix: false,
            height: 814,
            level: 40,
            profile: "lc",
            refFrames: 4,
            scanType: "progressive",
            streamIdentifier: "1",
            width: 1920,
            displayTitle: "English (AAC Stereo)",
            extendedDisplayTitle: "English (AAC Stereo)",
            selected: true,
            channels: 2,
            language: "English",
            languageTag: "en",
            languageCode: "eng",
            samplingRate: 44100,
        },
    ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 15                                                              |
| `key`                                                           | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | /library/parts/15/1705637151/file.mp4                           |
| `duration`                                                      | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 141417                                                          |
| `file`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | /movies/Serenity (2005)/Serenity (2005).mp4                     |
| `size`                                                          | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 40271948                                                        |
| `audioProfile`                                                  | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | lc                                                              |
| `container`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | mp4                                                             |
| `has64bitOffsets`                                               | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             | false                                                           |
| `optimizedForStreaming`                                         | *boolean*                                                       | :heavy_minus_sign:                                              | N/A                                                             | false                                                           |
| `videoProfile`                                                  | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | high                                                            |
| `stream`                                                        | [operations.Stream](../../../sdk/models/operations/stream.md)[] | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |