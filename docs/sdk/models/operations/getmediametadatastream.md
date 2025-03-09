# GetMediaMetaDataStream

## Example Usage

```typescript
import { GetMediaMetaDataStream } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataStream = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *number*                                                             | :heavy_check_mark:                                                   | Unique stream identifier.                                            | 1002625                                                              |
| `streamType`                                                         | *number*                                                             | :heavy_check_mark:                                                   | Stream type (1=video, 2=audio, 3=subtitle).                          | 1                                                                    |
| `default`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this stream is default.                                 | true                                                                 |
| `codec`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Codec used by the stream.                                            | hevc                                                                 |
| `index`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Index of the stream.                                                 | 0                                                                    |
| `bitrate`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | Bitrate of the stream.                                               | 24743                                                                |
| `language`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Language of the stream.                                              | English                                                              |
| `languageTag`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Language tag (e.g., en).                                             | en                                                                   |
| `languageCode`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | ISO language code.                                                   | eng                                                                  |
| `headerCompression`                                                  | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates whether header compression is enabled.                     | true                                                                 |
| `doviblCompatID`                                                     | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision BL compatibility ID.                                    | 1                                                                    |
| `doviblPresent`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision BL is present.                             | true                                                                 |
| `dovielPresent`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision EL is present.                             | false                                                                |
| `doviLevel`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision level.                                                  | 6                                                                    |
| `doviPresent`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision is present.                                | true                                                                 |
| `doviProfile`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Dolby Vision profile.                                                | 8                                                                    |
| `dovirpuPresent`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if Dolby Vision RPU is present.                            | true                                                                 |
| `doviVersion`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Dolby Vision version.                                                | 1.0                                                                  |
| `bitDepth`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Bit depth of the video stream.                                       | 10                                                                   |
| `chromaLocation`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | Chroma sample location.                                              | topleft                                                              |
| `chromaSubsampling`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | Chroma subsampling format.                                           | 4:2:0                                                                |
| `codedHeight`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Coded video height.                                                  | 1608                                                                 |
| `codedWidth`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Coded video width.                                                   | 3840                                                                 |
| `closedCaptions`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | true                                                                 |
| `colorPrimaries`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | Color primaries used.                                                | bt2020                                                               |
| `colorRange`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Color range (e.g., tv).                                              | tv                                                                   |
| `colorSpace`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Color space.                                                         | bt2020nc                                                             |
| `colorTrc`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Color transfer characteristics.                                      | smpte2084                                                            |
| `frameRate`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Frame rate of the stream.                                            | 23.976                                                               |
| `height`                                                             | *number*                                                             | :heavy_minus_sign:                                                   | Height of the video stream.                                          | 1602                                                                 |
| `level`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Video level.                                                         | 150                                                                  |
| `original`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this is the original stream.                            | true                                                                 |
| `hasScalingMatrix`                                                   | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | false                                                                |
| `profile`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Video profile.                                                       | main 10                                                              |
| `scanType`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | progressive                                                          |
| `embeddedInVideo`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | progressive                                                          |
| `refFrames`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Number of reference frames.                                          | 1                                                                    |
| `width`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Width of the video stream.                                           | 3840                                                                 |
| `displayTitle`                                                       | *string*                                                             | :heavy_check_mark:                                                   | Display title for the stream.                                        | 4K DoVi/HDR10 (HEVC Main 10)                                         |
| `extendedDisplayTitle`                                               | *string*                                                             | :heavy_check_mark:                                                   | Extended display title for the stream.                               | 4K DoVi/HDR10 (HEVC Main 10)                                         |
| `selected`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if this stream is selected (applicable for audio streams). | true                                                                 |
| `forced`                                                             | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | true                                                                 |
| `channels`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Number of audio channels (for audio streams).                        | 6                                                                    |
| `audioChannelLayout`                                                 | *string*                                                             | :heavy_minus_sign:                                                   | Audio channel layout.                                                | 5.1(side)                                                            |
| `samplingRate`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | Sampling rate for the audio stream.                                  | 48000                                                                |
| `canAutoSync`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream can auto-sync.                               | false                                                                |
| `hearingImpaired`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream is for the hearing impaired.                 | true                                                                 |
| `dub`                                                                | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates if the stream is a dub.                                    | true                                                                 |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Optional title for the stream (e.g., language variant).              | SDH                                                                  |