# GetSearchAllLibrariesMedia

## Example Usage

```typescript
import { GetSearchAllLibrariesMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesMedia = {
  id: 119534,
  duration: 11558112,
  bitrate: 25025,
  width: 3840,
  height: 2072,
  aspectRatio: 1.85,
  audioProfile: "dts",
  audioChannels: 6,
  audioCodec: "eac3",
  videoCodec: "hevc",
  videoResolution: "4k",
  container: "mkv",
  videoFrameRate: "24p",
  videoProfile: "main 10",
  hasVoiceActivity: false,
  has64bitOffsets: false,
  part: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   | 119534                                                                                                                                |
| `duration`                                                                                                                            | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 11558112                                                                                                                              |
| `bitrate`                                                                                                                             | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 25025                                                                                                                                 |
| `width`                                                                                                                               | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 3840                                                                                                                                  |
| `height`                                                                                                                              | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 2072                                                                                                                                  |
| `aspectRatio`                                                                                                                         | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 1.85                                                                                                                                  |
| `audioProfile`                                                                                                                        | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | dts                                                                                                                                   |
| `audioChannels`                                                                                                                       | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 6                                                                                                                                     |
| `audioCodec`                                                                                                                          | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | eac3                                                                                                                                  |
| `videoCodec`                                                                                                                          | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | hevc                                                                                                                                  |
| `videoResolution`                                                                                                                     | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 4k                                                                                                                                    |
| `container`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   | mkv                                                                                                                                   |
| `videoFrameRate`                                                                                                                      | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 24p                                                                                                                                   |
| `videoProfile`                                                                                                                        | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | main 10                                                                                                                               |
| `hasVoiceActivity`                                                                                                                    | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | false                                                                                                                                 |
| `optimizedForStreaming`                                                                                                               | [operations.GetSearchAllLibrariesOptimizedForStreaming](../../../sdk/models/operations/getsearchalllibrariesoptimizedforstreaming.md) | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | 1                                                                                                                                     |
| `has64bitOffsets`                                                                                                                     | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | false                                                                                                                                 |
| `part`                                                                                                                                | [operations.GetSearchAllLibrariesPart](../../../sdk/models/operations/getsearchalllibrariespart.md)[]                                 | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |