# GetLibraryItemsStream

## Example Usage

```typescript
import { GetLibraryItemsStream } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsStream = {
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
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 272796                                                  |
| `streamType`                                            | *number*                                                | :heavy_check_mark:                                      | Type of stream (1 = video, 2 = audio, 3 = subtitle)     | 1                                                       |
| `default`                                               | *boolean*                                               | :heavy_minus_sign:                                      | Indicates if this is the default stream                 | true                                                    |
| `selected`                                              | *boolean*                                               | :heavy_minus_sign:                                      | Indicates if the stream is selected                     | true                                                    |
| `codec`                                                 | *string*                                                | :heavy_check_mark:                                      | Codec used by the stream                                | h264                                                    |
| `index`                                                 | *number*                                                | :heavy_check_mark:                                      | The index of the stream                                 | 0                                                       |
| `bitrate`                                               | *number*                                                | :heavy_minus_sign:                                      | The bitrate of the stream in kbps                       | 6273                                                    |
| `colorPrimaries`                                        | *string*                                                | :heavy_minus_sign:                                      | The color primaries of the video stream                 | bt709                                                   |
| `colorRange`                                            | *string*                                                | :heavy_minus_sign:                                      | The color range of the video stream                     | tv                                                      |
| `colorSpace`                                            | *string*                                                | :heavy_minus_sign:                                      | The color space of the video stream                     | bt709                                                   |
| `colorTrc`                                              | *string*                                                | :heavy_minus_sign:                                      | The transfer characteristics (TRC) of the video stream  | bt709                                                   |
| `bitDepth`                                              | *number*                                                | :heavy_minus_sign:                                      | The bit depth of the video stream                       | 8                                                       |
| `chromaLocation`                                        | *string*                                                | :heavy_minus_sign:                                      | The chroma location of the video stream                 | left                                                    |
| `streamIdentifier`                                      | *string*                                                | :heavy_minus_sign:                                      | The identifier of the video stream                      | 2                                                       |
| `chromaSubsampling`                                     | *string*                                                | :heavy_minus_sign:                                      | The chroma subsampling format                           | 4:2:0                                                   |
| `codedHeight`                                           | *number*                                                | :heavy_minus_sign:                                      | The coded height of the video stream                    | 1088                                                    |
| `codedWidth`                                            | *number*                                                | :heavy_minus_sign:                                      | The coded width of the video stream                     | 1920                                                    |
| `frameRate`                                             | *number*                                                | :heavy_minus_sign:                                      | The frame rate of the video stream                      | 29.97                                                   |
| `hasScalingMatrix`                                      | *boolean*                                               | :heavy_minus_sign:                                      | Indicates if the stream has a scaling matrix            | false                                                   |
| `hearingImpaired`                                       | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     | false                                                   |
| `closedCaptions`                                        | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     | false                                                   |
| `embeddedInVideo`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | 1                                                       |
| `height`                                                | *number*                                                | :heavy_minus_sign:                                      | The height of the video stream                          | 1080                                                    |
| `level`                                                 | *number*                                                | :heavy_minus_sign:                                      | The level of the video codec                            | 40                                                      |
| `profile`                                               | *string*                                                | :heavy_minus_sign:                                      | The profile of the video codec                          | main                                                    |
| `refFrames`                                             | *number*                                                | :heavy_minus_sign:                                      | Number of reference frames                              | 4                                                       |
| `scanType`                                              | *string*                                                | :heavy_minus_sign:                                      | The scan type (progressive or interlaced)               | progressive                                             |
| `width`                                                 | *number*                                                | :heavy_minus_sign:                                      | The width of the video stream                           | 1920                                                    |
| `displayTitle`                                          | *string*                                                | :heavy_minus_sign:                                      | Display title of the stream                             | 1080p (H.264)                                           |
| `extendedDisplayTitle`                                  | *string*                                                | :heavy_minus_sign:                                      | Extended display title of the stream                    | 1080p (H.264)                                           |
| `channels`                                              | *number*                                                | :heavy_minus_sign:                                      | Number of audio channels (for audio streams)            | 2                                                       |
| `language`                                              | *string*                                                | :heavy_minus_sign:                                      | The language of the stream (for audio/subtitle streams) | English                                                 |
| `languageTag`                                           | *string*                                                | :heavy_minus_sign:                                      | Language tag of the stream                              | en                                                      |
| `languageCode`                                          | *string*                                                | :heavy_minus_sign:                                      | Language code of the stream                             | eng                                                     |
| `audioChannelLayout`                                    | *string*                                                | :heavy_minus_sign:                                      | The audio channel layout                                | stereo                                                  |
| `samplingRate`                                          | *number*                                                | :heavy_minus_sign:                                      | Sampling rate of the audio stream in Hz                 | 48000                                                   |
| `title`                                                 | *string*                                                | :heavy_minus_sign:                                      | Title of the subtitle track (for subtitle streams)      | English                                                 |
| `canAutoSync`                                           | *boolean*                                               | :heavy_minus_sign:                                      | Indicates if the subtitle stream can auto-sync          | false                                                   |