# GetOnDeckStream

## Example Usage

```typescript
import { GetOnDeckStream } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetOnDeckStream = {
  id: 211234,
  streamType: 1,
  codec: "hevc",
  index: 0,
  bitrate: 918,
  language: "English",
  languageTag: "en",
  languageCode: "eng",
  bitDepth: 8,
  chromaLocation: "left",
  chromaSubsampling: "4:2:0",
  codedHeight: 1080,
  codedWidth: 1920,
  colorRange: "tv",
  frameRate: 25,
  height: 1080,
  level: 120,
  profile: "main",
  refFrames: 1,
  width: 1920,
  displayTitle: "1080p (HEVC Main)",
  extendedDisplayTitle: "1080p (HEVC Main)",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *number*               | :heavy_minus_sign:     | N/A                    | 211234                 |
| `streamType`           | *number*               | :heavy_minus_sign:     | N/A                    | 1                      |
| `default`              | *boolean*              | :heavy_minus_sign:     | N/A                    |                        |
| `codec`                | *string*               | :heavy_minus_sign:     | N/A                    | hevc                   |
| `index`                | *number*               | :heavy_minus_sign:     | N/A                    | 0                      |
| `bitrate`              | *number*               | :heavy_minus_sign:     | N/A                    | 918                    |
| `language`             | *string*               | :heavy_minus_sign:     | N/A                    | English                |
| `languageTag`          | *string*               | :heavy_minus_sign:     | N/A                    | en                     |
| `languageCode`         | *string*               | :heavy_minus_sign:     | N/A                    | eng                    |
| `bitDepth`             | *number*               | :heavy_minus_sign:     | N/A                    | 8                      |
| `chromaLocation`       | *string*               | :heavy_minus_sign:     | N/A                    | left                   |
| `chromaSubsampling`    | *string*               | :heavy_minus_sign:     | N/A                    | 4:2:0                  |
| `codedHeight`          | *number*               | :heavy_minus_sign:     | N/A                    | 1080                   |
| `codedWidth`           | *number*               | :heavy_minus_sign:     | N/A                    | 1920                   |
| `colorRange`           | *string*               | :heavy_minus_sign:     | N/A                    | tv                     |
| `frameRate`            | *number*               | :heavy_minus_sign:     | N/A                    | 25                     |
| `height`               | *number*               | :heavy_minus_sign:     | N/A                    | 1080                   |
| `level`                | *number*               | :heavy_minus_sign:     | N/A                    | 120                    |
| `profile`              | *string*               | :heavy_minus_sign:     | N/A                    | main                   |
| `refFrames`            | *number*               | :heavy_minus_sign:     | N/A                    | 1                      |
| `width`                | *number*               | :heavy_minus_sign:     | N/A                    | 1920                   |
| `displayTitle`         | *string*               | :heavy_minus_sign:     | N/A                    | 1080p (HEVC Main)      |
| `extendedDisplayTitle` | *string*               | :heavy_minus_sign:     | N/A                    | 1080p (HEVC Main)      |