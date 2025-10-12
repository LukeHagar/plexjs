# MediaContainerWithDecisionPart

`Part` represents a particular file or "part" of a media item. The part is the playable unit of the media hierarchy. Suppose that a movie library contains a movie that is broken up into files, reminiscent of a movie split across two BDs. The metadata item represents information about the movie, the media item represents this instance of the movie at this resolution and quality, and the part items represent the two playable files.  If another media were added which contained the joining of these two parts transcoded down to a lower resolution, then this metadata would contain 2 medias, one with 2 parts and one with 1 part.


## Example Usage

```typescript
import { MediaContainerWithDecisionPart } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaContainerWithDecisionPart = {
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
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `audioProfile`                                                                                              | *any*                                                                                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | lc                                                                                                          |
| `container`                                                                                                 | *any*                                                                                                       | :heavy_minus_sign:                                                                                          | The container of the media file, such as `mp4` or `mkv`                                                     | mov                                                                                                         |
| `duration`                                                                                                  | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The duration of the media item, in milliseconds                                                             | 150192                                                                                                      |
| `file`                                                                                                      | *any*                                                                                                       | :heavy_minus_sign:                                                                                          | The local file path at which the part is stored on the server                                               | /home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov                                                       |
| `has64bitOffsets`                                                                                           | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | false                                                                                                       |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | 1                                                                                                           |
| `key`                                                                                                       | *any*                                                                                                       | :heavy_minus_sign:                                                                                          | The key from which the media can be streamed                                                                | /library/parts/1/1531779263/file.mov                                                                        |
| `optimizedForStreaming`                                                                                     | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | false                                                                                                       |
| `size`                                                                                                      | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The size of the media, in bytes                                                                             | 105355654                                                                                                   |
| `stream`                                                                                                    | [shared.MediaContainerWithDecisionStream](../../../sdk/models/shared/mediacontainerwithdecisionstream.md)[] | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `videoProfile`                                                                                              | *any*                                                                                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | main                                                                                                        |
| `decision`                                                                                                  | [shared.Decision](../../../sdk/models/shared/decision.md)                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `selected`                                                                                                  | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `additionalProperties`                                                                                      | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |