# Stream

## Example Usage

```typescript
import { Stream } from "@lukehagar/plexjs/sdk/models/operations";

let value: Stream = {
  id: 29,
  streamType: 2,
  default: true,
  codec: "aac",
  index: 0,
  bitrate: 128,
  bitDepth: 8,
  chromaLocation: "left",
  chromaSubsampling: "14520",
  codedHeight: 816,
  codedWidth: 1920,
  colorPrimaries: "bt709",
  colorRange: "tv",
  colorSpace: "bt709",
  colorTrc: "bt709",
  frameRate: 24,
  hasScalingMatrix: false,
  height: 814,
  level: 40,
  profile: "lc",
  refFrames: 4,
  scanType: "progressive",
  streamIdentifier: "1",
  width: 1920,
  displayTitle: "English (AAC Stereo)",
  extendedDisplayTitle: "English (AAC Stereo)",
  selected: true,
  channels: 2,
  language: "English",
  languageTag: "en",
  languageCode: "eng",
  samplingRate: 44100,
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *number*               | :heavy_minus_sign:     | N/A                    | 29                     |
| `streamType`           | *number*               | :heavy_minus_sign:     | N/A                    | 2                      |
| `default`              | *boolean*              | :heavy_minus_sign:     | N/A                    | true                   |
| `codec`                | *string*               | :heavy_minus_sign:     | N/A                    | aac                    |
| `index`                | *number*               | :heavy_minus_sign:     | N/A                    | 0                      |
| `bitrate`              | *number*               | :heavy_minus_sign:     | N/A                    | 128                    |
| `bitDepth`             | *number*               | :heavy_minus_sign:     | N/A                    | 8                      |
| `chromaLocation`       | *string*               | :heavy_minus_sign:     | N/A                    | left                   |
| `chromaSubsampling`    | *string*               | :heavy_minus_sign:     | N/A                    | 14520                  |
| `codedHeight`          | *number*               | :heavy_minus_sign:     | N/A                    | 816                    |
| `codedWidth`           | *number*               | :heavy_minus_sign:     | N/A                    | 1920                   |
| `colorPrimaries`       | *string*               | :heavy_minus_sign:     | N/A                    | bt709                  |
| `colorRange`           | *string*               | :heavy_minus_sign:     | N/A                    | tv                     |
| `colorSpace`           | *string*               | :heavy_minus_sign:     | N/A                    | bt709                  |
| `colorTrc`             | *string*               | :heavy_minus_sign:     | N/A                    | bt709                  |
| `frameRate`            | *number*               | :heavy_minus_sign:     | N/A                    | 24                     |
| `hasScalingMatrix`     | *boolean*              | :heavy_minus_sign:     | N/A                    | false                  |
| `height`               | *number*               | :heavy_minus_sign:     | N/A                    | 814                    |
| `level`                | *number*               | :heavy_minus_sign:     | N/A                    | 40                     |
| `profile`              | *string*               | :heavy_minus_sign:     | N/A                    | lc                     |
| `refFrames`            | *number*               | :heavy_minus_sign:     | N/A                    | 4                      |
| `scanType`             | *string*               | :heavy_minus_sign:     | N/A                    | progressive            |
| `streamIdentifier`     | *string*               | :heavy_minus_sign:     | N/A                    | 1                      |
| `width`                | *number*               | :heavy_minus_sign:     | N/A                    | 1920                   |
| `displayTitle`         | *string*               | :heavy_minus_sign:     | N/A                    | English (AAC Stereo)   |
| `extendedDisplayTitle` | *string*               | :heavy_minus_sign:     | N/A                    | English (AAC Stereo)   |
| `selected`             | *boolean*              | :heavy_minus_sign:     | N/A                    | true                   |
| `channels`             | *number*               | :heavy_minus_sign:     | N/A                    | 2                      |
| `language`             | *string*               | :heavy_minus_sign:     | N/A                    | English                |
| `languageTag`          | *string*               | :heavy_minus_sign:     | N/A                    | en                     |
| `languageCode`         | *string*               | :heavy_minus_sign:     | N/A                    | eng                    |
| `samplingRate`         | *number*               | :heavy_minus_sign:     | N/A                    | 44100                  |