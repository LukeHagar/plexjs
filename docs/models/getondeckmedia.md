# GetOnDeckMedia

## Example Usage

```typescript
import { GetOnDeckMedia } from "@lukehagar/plexjs";

let value: GetOnDeckMedia = {
    id: 80994,
    duration: 420080,
    bitrate: 1046,
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    audioChannels: 2,
    audioCodec: "aac",
    videoCodec: "hevc",
    videoResolution: "1080",
    container: "mkv",
    videoFrameRate: "PAL",
    audioProfile: "lc",
    videoProfile: "main",
    part: [
        {
            id: 80994,
            key: "/library/parts/80994/1655007810/file.mkv",
            duration: 420080,
            file: "/tvshows/Bluey (2018)/Bluey (2018) - S02E33 - Circus.mkv",
            size: 55148931,
            audioProfile: "lc",
            container: "mkv",
            videoProfile: "main",
            stream: [
                {
                    id: 211234,
                    streamType: 1,
                    codec: "hevc",
                    index: 0,
                    bitrate: 918,
                    language: "English",
                    languageTag: "en",
                    languageCode: "eng",
                    bitDepth: 8,
                    chromaLocation: "left",
                    chromaSubsampling: "4:2:0",
                    codedHeight: 1080,
                    codedWidth: 1920,
                    colorRange: "tv",
                    frameRate: 25,
                    height: 1080,
                    level: 120,
                    profile: "main",
                    refFrames: 1,
                    width: 1920,
                    displayTitle: "1080p (HEVC Main)",
                    extendedDisplayTitle: "1080p (HEVC Main)",
                },
            ],
        },
    ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 80994                                                |
| `duration`                                           | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 420080                                               |
| `bitrate`                                            | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1046                                                 |
| `width`                                              | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1920                                                 |
| `height`                                             | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1080                                                 |
| `aspectRatio`                                        | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1.78                                                 |
| `audioChannels`                                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 2                                                    |
| `audioCodec`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | aac                                                  |
| `videoCodec`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | hevc                                                 |
| `videoResolution`                                    | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1080                                                 |
| `container`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | mkv                                                  |
| `videoFrameRate`                                     | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | PAL                                                  |
| `audioProfile`                                       | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | lc                                                   |
| `videoProfile`                                       | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | main                                                 |
| `part`                                               | [models.GetOnDeckPart](../models/getondeckpart.md)[] | :heavy_minus_sign:                                   | N/A                                                  |                                                      |