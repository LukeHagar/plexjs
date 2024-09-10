# GetOnDeckPart

## Example Usage

```typescript
import { GetOnDeckPart } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetOnDeckPart = {
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 80994                                                                             |
| `key`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | /library/parts/80994/1655007810/file.mkv                                          |
| `duration`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 420080                                                                            |
| `file`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | /tvshows/Bluey (2018)/Bluey (2018) - S02E33 - Circus.mkv                          |
| `size`                                                                            | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 55148931                                                                          |
| `audioProfile`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | lc                                                                                |
| `container`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | mkv                                                                               |
| `videoProfile`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | main                                                                              |
| `stream`                                                                          | [operations.GetOnDeckStream](../../../sdk/models/operations/getondeckstream.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |