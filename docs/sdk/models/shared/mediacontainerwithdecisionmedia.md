# MediaContainerWithDecisionMedia

`Media` represents an one or more media files (parts) and is a child of a metadata item. There aren't necessarily any guaranteed attributes on media elements since the attributes will vary based on the type. The possible attributes are not documented here, but they typically have self-evident names. High-level media information that can be used for badging and flagging, such as `videoResolution` and codecs, is included on the media element.


## Example Usage

```typescript
import { MediaContainerWithDecisionMedia } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaContainerWithDecisionMedia = {
  aspectRatio: 2.35,
  audioChannels: 2,
  audioCodec: "aac",
  audioProfile: "lc",
  bitrate: 5612,
  container: "mov",
  duration: 150192,
  has64bitOffsets: false,
  hasVoiceActivity: true,
  height: 544,
  id: 1,
  optimizedForStreaming: false,
  part: [
    {
      accessible: true,
      audioProfile: "lc",
      container: "mov",
      duration: 150192,
      exists: true,
      file: "/home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov",
      has64bitOffsets: false,
      id: 1,
      indexes: "sd",
      key: "/library/parts/1/1531779263/file.mov",
      optimizedForStreaming: false,
      size: 105355654,
      stream: [
        {
          default: true,
          audioChannelLayout: "5.1(side)",
          channels: 6,
          bitDepth: 10,
          doviblCompatID: 1,
          doviblPresent: true,
          dovielPresent: false,
          doviLevel: 6,
          doviPresent: true,
          doviProfile: 8,
          dovirpuPresent: true,
          doviVersion: "1.0",
          bitrate: 24743,
          canAutoSync: false,
          chromaLocation: "topleft",
          chromaSubsampling: "4:2:0",
          codedHeight: 1608,
          codedWidth: 3840,
          closedCaptions: true,
          codec: "hevc",
          colorPrimaries: "bt2020",
          colorRange: "tv",
          colorSpace: "bt2020nc",
          colorTrc: "smpte2084",
          displayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
          extendedDisplayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
          frameRate: 23.976,
          hasScalingMatrix: false,
          height: 1602,
          id: 1002625,
          index: 0,
          key: "/library/streams/216389",
          language: "English",
          languageCode: "eng",
          languageTag: "en",
          format: "srt",
          headerCompression: true,
          level: 150,
          original: true,
          profile: "main 10",
          refFrames: 1,
          samplingRate: 48000,
          scanType: "progressive",
          embeddedInVideo: "progressive",
          selected: true,
          forced: true,
          hearingImpaired: true,
          dub: true,
          title: "SDH",
          streamIdentifier: 1,
          width: 3840,
        },
      ],
      videoProfile: "main",
    },
  ],
  videoCodec: "h264",
  videoFrameRate: "24p",
  videoProfile: "main",
  videoResolution: "720",
  width: 1280,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `aspectRatio`                                                                                           | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 2.35                                                                                                    |
| `audioChannels`                                                                                         | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 2                                                                                                       |
| `audioCodec`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | aac                                                                                                     |
| `audioProfile`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | lc                                                                                                      |
| `bitrate`                                                                                               | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 5612                                                                                                    |
| `container`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | mov                                                                                                     |
| `duration`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 150192                                                                                                  |
| `has64bitOffsets`                                                                                       | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `hasVoiceActivity`                                                                                      | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | true                                                                                                    |
| `height`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 544                                                                                                     |
| `id`                                                                                                    | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `optimizedForStreaming`                                                                                 | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `part`                                                                                                  | [shared.MediaContainerWithDecisionPart](../../../sdk/models/shared/mediacontainerwithdecisionpart.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `videoCodec`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | h264                                                                                                    |
| `videoFrameRate`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 24p                                                                                                     |
| `videoProfile`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | main                                                                                                    |
| `videoResolution`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 720                                                                                                     |
| `width`                                                                                                 | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1280                                                                                                    |
| `abr`                                                                                                   | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `resourceSession`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `selected`                                                                                              | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `additionalProperties`                                                                                  | Record<string, *any*>                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |