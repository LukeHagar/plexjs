# Part

## Example Usage

```typescript
import { HasThumbnail, Part } from "@lukehagar/plexjs/sdk/models/operations";

let value: Part = {
  accessible: true,
  exists: true,
  id: 418385,
  key: "/library/parts/418385/1735864239/file.mkv",
  indexes: "sd",
  duration: 9610350,
  file: "/mnt/Movies_1/W/Wicked (2024).mkv",
  size: 30649952104,
  packetLength: 188,
  container: "mkv",
  videoProfile: "main 10",
  audioProfile: "dts",
  has64bitOffsets: false,
  hasThumbnail: HasThumbnail.True,
  stream: [
    {
      id: 1002625,
      format: "srt",
      default: true,
      codec: "hevc",
      index: 0,
      bitrate: 24743,
      language: "English",
      languageTag: "en",
      languageCode: "eng",
      headerCompression: true,
      doviblCompatID: 1,
      doviblPresent: true,
      dovielPresent: false,
      doviLevel: 6,
      doviPresent: true,
      doviProfile: 8,
      dovirpuPresent: true,
      doviVersion: "1.0",
      bitDepth: 10,
      chromaLocation: "topleft",
      chromaSubsampling: "4:2:0",
      codedHeight: 1608,
      codedWidth: 3840,
      closedCaptions: true,
      colorPrimaries: "bt2020",
      colorRange: "tv",
      colorSpace: "bt2020nc",
      colorTrc: "smpte2084",
      frameRate: 23.976,
      key: "/library/streams/216389",
      height: 1602,
      level: 150,
      original: true,
      hasScalingMatrix: false,
      profile: "main 10",
      scanType: "progressive",
      embeddedInVideo: "progressive",
      refFrames: 1,
      width: 3840,
      displayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
      extendedDisplayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
      selected: true,
      forced: true,
      channels: 6,
      audioChannelLayout: "5.1(side)",
      samplingRate: 48000,
      canAutoSync: false,
      hearingImpaired: true,
      dub: true,
      title: "SDH",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessible`                                                                       | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Indicates if the part is accessible.                                               | true                                                                               |
| `exists`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Indicates if the part exists.                                                      | true                                                                               |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Unique part identifier.                                                            | 418385                                                                             |
| `key`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | Key to access this part.                                                           | /library/parts/418385/1735864239/file.mkv                                          |
| `indexes`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | sd                                                                                 |
| `duration`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | Duration of the part in milliseconds.                                              | 9610350                                                                            |
| `file`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | File path for the part.                                                            | /mnt/Movies_1/W/Wicked (2024).mkv                                                  |
| `size`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | File size in bytes.                                                                | 30649952104                                                                        |
| `packetLength`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 188                                                                                |
| `container`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Container format of the part.                                                      | mkv                                                                                |
| `videoProfile`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Video profile for the part.                                                        | main 10                                                                            |
| `audioProfile`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | The audio profile used for the media (e.g., DTS, Dolby Digital, etc.).             | dts                                                                                |
| `has64bitOffsets`                                                                  | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                | false                                                                              |
| `optimizedForStreaming`                                                            | *operations.GetRecentlyAddedOptimizedForStreaming*                                 | :heavy_minus_sign:                                                                 | Has this media been optimized for streaming. NOTE: This can be 0, 1, false or true |                                                                                    |
| `hasThumbnail`                                                                     | [operations.HasThumbnail](../../../sdk/models/operations/hasthumbnail.md)          | :heavy_minus_sign:                                                                 | N/A                                                                                | 1                                                                                  |
| `stream`                                                                           | [operations.Stream](../../../sdk/models/operations/stream.md)[]                    | :heavy_minus_sign:                                                                 | An array of streams for this part.                                                 |                                                                                    |