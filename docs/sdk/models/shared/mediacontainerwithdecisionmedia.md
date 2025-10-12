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
      audioProfile: "lc",
      container: "mov",
      duration: 150192,
      file: "/home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov",
      has64bitOffsets: false,
      id: 1,
      key: "/library/parts/1/1531779263/file.mov",
      optimizedForStreaming: false,
      size: 105355654,
      stream: [
        {
          default: true,
          audioChannelLayout: "stereo",
          bitDepth: 8,
          bitrate: 5466,
          canAutoSync: true,
          chromaLocation: "topleft",
          chromaSubsampling: "4:2:0",
          codec: "h264",
          colorPrimaries: "bt709",
          colorRange: "tv",
          colorSpace: "bt709",
          colorTrc: "bt709",
          displayTitle: "English (H.264 Main)",
          frameRate: 23.976,
          hasScalingMatrix: false,
          height: 544,
          id: 1,
          index: 0,
          key: "/library/streams/1",
          language: "English",
          languageCode: "eng",
          level: 31,
          profile: "main",
          refFrames: 2,
          samplingRate: 48000,
          streamIdentifier: 1,
          streamType: 1,
          width: 1280,
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
| `audioCodec`                                                                                            | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | aac                                                                                                     |
| `audioProfile`                                                                                          | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | lc                                                                                                      |
| `bitrate`                                                                                               | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 5612                                                                                                    |
| `container`                                                                                             | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | mov                                                                                                     |
| `duration`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 150192                                                                                                  |
| `has64bitOffsets`                                                                                       | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `hasVoiceActivity`                                                                                      | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | true                                                                                                    |
| `height`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 544                                                                                                     |
| `id`                                                                                                    | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `optimizedForStreaming`                                                                                 | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `part`                                                                                                  | [shared.MediaContainerWithDecisionPart](../../../sdk/models/shared/mediacontainerwithdecisionpart.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `videoCodec`                                                                                            | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | h264                                                                                                    |
| `videoFrameRate`                                                                                        | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 24p                                                                                                     |
| `videoProfile`                                                                                          | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | main                                                                                                    |
| `videoResolution`                                                                                       | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 720                                                                                                     |
| `width`                                                                                                 | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1280                                                                                                    |
| `abr`                                                                                                   | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `resourceSession`                                                                                       | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `selected`                                                                                              | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `additionalProperties`                                                                                  | Record<string, *any*>                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |