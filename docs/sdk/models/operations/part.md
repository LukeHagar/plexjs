# Part

## Example Usage

```typescript
import { Part } from "@lukehagar/plexjs/sdk/models/operations";

let value: Part = {
  id: 119542,
  key: "/library/parts/119542/1680457526/file.mkv",
  duration: 11558112,
  file:
    "/movies/Avatar The Way of Water (2022)/Avatar.The.Way.of.Water.2022.2160p.WEB-DL.DDP5.1.Atmos.DV.HDR10.HEVC-CMRG.mkv",
  size: 36158371307,
  container: "mkv",
  audioProfile: "dts",
  has64bitOffsets: false,
  optimizedForStreaming: false,
  videoProfile: "main 10",
  indexes: "sd",
  stream: [
    {
      id: 272796,
      streamType: 1,
      default: true,
      selected: true,
      codec: "h264",
      index: 0,
      bitrate: 6273,
      colorPrimaries: "bt709",
      colorRange: "tv",
      colorSpace: "bt709",
      colorTrc: "bt709",
      bitDepth: 8,
      chromaLocation: "left",
      streamIdentifier: "2",
      chromaSubsampling: "4:2:0",
      codedHeight: 1088,
      codedWidth: 1920,
      frameRate: 29.97,
      hasScalingMatrix: false,
      hearingImpaired: false,
      closedCaptions: false,
      embeddedInVideo: "1",
      height: 1080,
      level: 40,
      profile: "main",
      refFrames: 4,
      scanType: "progressive",
      width: 1920,
      displayTitle: "1080p (H.264)",
      extendedDisplayTitle: "1080p (H.264)",
      channels: 2,
      language: "English",
      languageTag: "en",
      languageCode: "eng",
      audioChannelLayout: "stereo",
      samplingRate: 48000,
      title: "English",
      canAutoSync: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 119542                                                                                                               |
| `key`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | /library/parts/119542/1680457526/file.mkv                                                                            |
| `duration`                                                                                                           | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | 11558112                                                                                                             |
| `file`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | /movies/Avatar The Way of Water (2022)/Avatar.The.Way.of.Water.2022.2160p.WEB-DL.DDP5.1.Atmos.DV.HDR10.HEVC-CMRG.mkv |
| `size`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 36158371307                                                                                                          |
| `container`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The container format of the media file.<br/>                                                                         | mkv                                                                                                                  |
| `audioProfile`                                                                                                       | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | dts                                                                                                                  |
| `has64bitOffsets`                                                                                                    | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | false                                                                                                                |
| `optimizedForStreaming`                                                                                              | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | false                                                                                                                |
| `videoProfile`                                                                                                       | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | main 10                                                                                                              |
| `indexes`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | sd                                                                                                                   |
| `hasThumbnail`                                                                                                       | [operations.HasThumbnail](../../../sdk/models/operations/hasthumbnail.md)                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | 1                                                                                                                    |
| `stream`                                                                                                             | [operations.Stream](../../../sdk/models/operations/stream.md)[]                                                      | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |