# Stream

`Stream` represents a particular stream from a media item, such as the video stream, audio stream, or subtitle stream. The stream may either be part of the file represented by the parent `Part` or, especially for subtitles, an external file. The stream contains more detailed information about the specific stream. For example, a video may include the `aspectRatio` at the `Media` level, but detailed information about the video stream like the color space will be included on the `Stream` for the video stream.  Note that photos do not have streams (mostly as an optimization).


## Example Usage

```typescript
import { Stream, StreamType } from "@lukehagar/plexjs/models/shared";

let value: Stream = {
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
  streamType: StreamType.Video,
  width: 3840,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `default`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this stream is default.                                 | true                                                                 |
| `audioChannelLayout`                                                 | *string*                                                             | :heavy_minus_sign:                                                   | Audio channel layout.                                                | 5.1(side)                                                            |
| `channels`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Number of audio channels (for audio streams).                        | 6                                                                    |
| `bitDepth`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Bit depth of the video stream.                                       | 10                                                                   |
| `doviblCompatID`                                                     | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision BL compatibility ID.                                    | 1                                                                    |
| `doviblPresent`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision BL is present.                             | true                                                                 |
| `dovielPresent`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision EL is present.                             | false                                                                |
| `doviLevel`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision level.                                                  | 6                                                                    |
| `doviPresent`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision is present.                                | true                                                                 |
| `doviProfile`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision profile.                                                | 8                                                                    |
| `dovirpuPresent`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision RPU is present.                            | true                                                                 |
| `doviVersion`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Dolby Vision version.                                                | 1.0                                                                  |
| `bitrate`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | Bitrate of the stream.                                               | 24743                                                                |
| `canAutoSync`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream can auto-sync.                               | false                                                                |
| `chromaLocation`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | Chroma sample location.                                              | topleft                                                              |
| `chromaSubsampling`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | Chroma subsampling format.                                           | 4:2:0                                                                |
| `codedHeight`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Coded video height.                                                  | 1608                                                                 |
| `codedWidth`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Coded video width.                                                   | 3840                                                                 |
| `closedCaptions`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | true                                                                 |
| `codec`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Codec used by the stream.                                            | hevc                                                                 |
| `colorPrimaries`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | Color primaries used.                                                | bt2020                                                               |
| `colorRange`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Color range (e.g., tv).                                              | tv                                                                   |
| `colorSpace`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Color space.                                                         | bt2020nc                                                             |
| `colorTrc`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Color transfer characteristics.                                      | smpte2084                                                            |
| `displayTitle`                                                       | *string*                                                             | :heavy_check_mark:                                                   | Display title for the stream.                                        | 4K DoVi/HDR10 (HEVC Main 10)                                         |
| `extendedDisplayTitle`                                               | *string*                                                             | :heavy_minus_sign:                                                   | Extended display title for the stream.                               | 4K DoVi/HDR10 (HEVC Main 10)                                         |
| `frameRate`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Frame rate of the stream.                                            | 23.976                                                               |
| `hasScalingMatrix`                                                   | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | false                                                                |
| `height`                                                             | *number*                                                             | :heavy_minus_sign:                                                   | Height of the video stream.                                          | 1602                                                                 |
| `id`                                                                 | *number*                                                             | :heavy_check_mark:                                                   | Unique stream identifier.                                            | 1002625                                                              |
| `index`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Index of the stream.                                                 | 0                                                                    |
| `key`                                                                | *string*                                                             | :heavy_check_mark:                                                   | Key to access this stream part.                                      | /library/streams/216389                                              |
| `language`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Language of the stream.                                              | English                                                              |
| `languageCode`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | ISO language code.                                                   | eng                                                                  |
| `languageTag`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Language tag (e.g., en).                                             | en                                                                   |
| `format`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Format of the stream (e.g., srt).                                    | srt                                                                  |
| `headerCompression`                                                  | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates whether header compression is enabled.                     | true                                                                 |
| `level`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Video level.                                                         | 150                                                                  |
| `original`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this is the original stream.                            | true                                                                 |
| `profile`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Video profile.                                                       | main 10                                                              |
| `refFrames`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Number of reference frames.                                          | 1                                                                    |
| `samplingRate`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | Sampling rate for the audio stream.                                  | 48000                                                                |
| `scanType`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | progressive                                                          |
| `embeddedInVideo`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | progressive                                                          |
| `selected`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this stream is selected (applicable for audio streams). | true                                                                 |
| `forced`                                                             | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | true                                                                 |
| `hearingImpaired`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream is for the hearing impaired.                 | true                                                                 |
| `dub`                                                                | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream is a dub.                                    | true                                                                 |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Optional title for the stream (e.g., language variant).              | SDH                                                                  |
| `streamIdentifier`                                                   | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 1                                                                    |
| `streamType`                                                         | [shared.StreamType](../../models/shared/streamtype.md)               | :heavy_check_mark:                                                   | N/A                                                                  | 1                                                                    |
| `width`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Width of the video stream.                                           | 3840                                                                 |
| `additionalProperties`                                               | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |