# Part

`Part` represents a particular file or "part" of a media item. The part is the playable unit of the media hierarchy. Suppose that a movie library contains a movie that is broken up into files, reminiscent of a movie split across two BDs. The metadata item represents information about the movie, the media item represents this instance of the movie at this resolution and quality, and the part items represent the two playable files.  If another media were added which contained the joining of these two parts transcoded down to a lower resolution, then this metadata would contain 2 medias, one with 2 parts and one with 1 part.


## Example Usage

```typescript
import { Part } from "@lukehagar/plexjs/sdk/models/shared";

let value: Part = {
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
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `accessible`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Indicates if the part is accessible.                          | true                                                          |
| `audioProfile`                                                | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | lc                                                            |
| `container`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The container of the media file, such as `mp4` or `mkv`       | mov                                                           |
| `duration`                                                    | *number*                                                      | :heavy_minus_sign:                                            | The duration of the media item, in milliseconds               | 150192                                                        |
| `exists`                                                      | *boolean*                                                     | :heavy_minus_sign:                                            | Indicates if the part exists.                                 | true                                                          |
| `file`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The local file path at which the part is stored on the server | /home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov         |
| `has64bitOffsets`                                             | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           | false                                                         |
| `id`                                                          | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 1                                                             |
| `indexes`                                                     | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | sd                                                            |
| `key`                                                         | *string*                                                      | :heavy_check_mark:                                            | The key from which the media can be streamed                  | /library/parts/1/1531779263/file.mov                          |
| `optimizedForStreaming`                                       | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           | false                                                         |
| `size`                                                        | *number*                                                      | :heavy_minus_sign:                                            | The size of the media, in bytes                               | 105355654                                                     |
| `stream`                                                      | [shared.Stream](../../../sdk/models/shared/stream.md)[]       | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `videoProfile`                                                | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | main                                                          |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |                                                               |