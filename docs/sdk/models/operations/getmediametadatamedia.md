# GetMediaMetaDataMedia

## Example Usage

```typescript
import { GetMediaMetaDataMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataMedia = {
  id: 387322,
  duration: 9610350,
  bitrate: 25512,
  width: 3840,
  height: 1602,
  aspectRatio: 2.35,
  audioChannels: 6,
  displayOffset: 50,
  audioCodec: "eac3",
  videoCodec: "hevc",
  videoResolution: "4k",
  container: "mkv",
  videoFrameRate: "24p",
  videoProfile: "main 10",
  hasVoiceActivity: false,
  audioProfile: "dts",
  has64bitOffsets: false,
  part: [
    {
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
      stream: [
        {
          id: 1002625,
          streamType: 1,
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
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | Unique media identifier.                                                                    | 387322                                                                                      |
| `duration`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | Duration of the media in milliseconds.                                                      | 9610350                                                                                     |
| `bitrate`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | Bitrate in bits per second.                                                                 | 25512                                                                                       |
| `width`                                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | Video width in pixels.                                                                      | 3840                                                                                        |
| `height`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | Video height in pixels.                                                                     | 1602                                                                                        |
| `aspectRatio`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Aspect ratio of the video.                                                                  | 2.35                                                                                        |
| `audioChannels`                                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | Number of audio channels.                                                                   | 6                                                                                           |
| `displayOffset`                                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 50                                                                                          |
| `audioCodec`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Audio codec used.                                                                           | eac3                                                                                        |
| `videoCodec`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Video codec used.                                                                           | hevc                                                                                        |
| `videoResolution`                                                                           | *string*                                                                                    | :heavy_minus_sign:                                                                          | Video resolution (e.g., 4k).                                                                | 4k                                                                                          |
| `container`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | File container type.                                                                        | mkv                                                                                         |
| `videoFrameRate`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | Frame rate of the video. Values found include NTSC, PAL, 24p<br/>                           | 24p                                                                                         |
| `videoProfile`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | Video profile (e.g., main 10).                                                              | main 10                                                                                     |
| `hasVoiceActivity`                                                                          | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Indicates whether voice activity is detected.                                               | false                                                                                       |
| `audioProfile`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | The audio profile used for the media (e.g., DTS, Dolby Digital, etc.).                      | dts                                                                                         |
| `optimizedForStreaming`                                                                     | *operations.GetMediaMetaDataOptimizedForStreaming*                                          | :heavy_minus_sign:                                                                          | Has this media been optimized for streaming. NOTE: This can be 0, 1, false or true          |                                                                                             |
| `has64bitOffsets`                                                                           | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         | false                                                                                       |
| `part`                                                                                      | [operations.GetMediaMetaDataPart](../../../sdk/models/operations/getmediametadatapart.md)[] | :heavy_minus_sign:                                                                          | An array of parts for this media item.                                                      |                                                                                             |