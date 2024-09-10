# GetSessionsStream

## Example Usage

```typescript
import { GetSessionsStream } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSessionsStream = {
  albumGain: "-12.94",
  albumPeak: "1.000000",
  albumRange: "4.751014",
  audioChannelLayout: "stereo",
  bitDepth: 16,
  bitrate: 1014,
  channels: 2,
  codec: "flac",
  displayTitle: "FLAC (Stereo)",
  extendedDisplayTitle: "FLAC (Stereo)",
  gain: "-12.94",
  id: "352487",
  index: 0,
  loudness: "-5.94",
  lra: "1.74",
  peak: "1.000000",
  samplingRate: 44100,
  selected: true,
  streamType: 2,
  location: "direct",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `albumGain`            | *string*               | :heavy_minus_sign:     | N/A                    | -12.94                 |
| `albumPeak`            | *string*               | :heavy_minus_sign:     | N/A                    | 1.000000               |
| `albumRange`           | *string*               | :heavy_minus_sign:     | N/A                    | 4.751014               |
| `audioChannelLayout`   | *string*               | :heavy_minus_sign:     | N/A                    | stereo                 |
| `bitDepth`             | *number*               | :heavy_minus_sign:     | N/A                    | 16                     |
| `bitrate`              | *number*               | :heavy_minus_sign:     | N/A                    | 1014                   |
| `channels`             | *number*               | :heavy_minus_sign:     | N/A                    | 2                      |
| `codec`                | *string*               | :heavy_minus_sign:     | N/A                    | flac                   |
| `displayTitle`         | *string*               | :heavy_minus_sign:     | N/A                    | FLAC (Stereo)          |
| `extendedDisplayTitle` | *string*               | :heavy_minus_sign:     | N/A                    | FLAC (Stereo)          |
| `gain`                 | *string*               | :heavy_minus_sign:     | N/A                    | -12.94                 |
| `id`                   | *string*               | :heavy_minus_sign:     | N/A                    | 352487                 |
| `index`                | *number*               | :heavy_minus_sign:     | N/A                    | 0                      |
| `loudness`             | *string*               | :heavy_minus_sign:     | N/A                    | -5.94                  |
| `lra`                  | *string*               | :heavy_minus_sign:     | N/A                    | 1.74                   |
| `peak`                 | *string*               | :heavy_minus_sign:     | N/A                    | 1.000000               |
| `samplingRate`         | *number*               | :heavy_minus_sign:     | N/A                    | 44100                  |
| `selected`             | *boolean*              | :heavy_minus_sign:     | N/A                    | true                   |
| `streamType`           | *number*               | :heavy_minus_sign:     | N/A                    | 2                      |
| `location`             | *string*               | :heavy_minus_sign:     | N/A                    | direct                 |