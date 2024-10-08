# TranscodeSession

## Example Usage

```typescript
import { TranscodeSession } from "@lukehagar/plexjs/sdk/models/operations";

let value: TranscodeSession = {
  key: "vv3i2q2lax92qlzul1hbd4bx",
  throttled: false,
  complete: false,
  progress: 1.7999999523162842,
  size: -22,
  speed: 25.100000381469727,
  error: false,
  duration: 1445695,
  remaining: 53,
  context: "streaming",
  sourceVideoCodec: "h264",
  sourceAudioCodec: "aac",
  videoDecision: "transcode",
  audioDecision: "transcode",
  subtitleDecision: "burn",
  protocol: "http",
  container: "mkv",
  videoCodec: "h264",
  audioCodec: "opus",
  audioChannels: 1,
  transcodeHwRequested: true,
  timeStamp: 1705895805.4919229,
  maxOffsetAvailable: 29.53,
  minOffsetAvailable: 3.003000020980835,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `key`                    | *string*                 | :heavy_minus_sign:       | N/A                      | vv3i2q2lax92qlzul1hbd4bx |
| `throttled`              | *boolean*                | :heavy_minus_sign:       | N/A                      | false                    |
| `complete`               | *boolean*                | :heavy_minus_sign:       | N/A                      | false                    |
| `progress`               | *number*                 | :heavy_minus_sign:       | N/A                      | 1.7999999523162842       |
| `size`                   | *number*                 | :heavy_minus_sign:       | N/A                      | -22                      |
| `speed`                  | *number*                 | :heavy_minus_sign:       | N/A                      | 25.100000381469727       |
| `error`                  | *boolean*                | :heavy_minus_sign:       | N/A                      | false                    |
| `duration`               | *number*                 | :heavy_minus_sign:       | N/A                      | 1445695                  |
| `remaining`              | *number*                 | :heavy_minus_sign:       | N/A                      | 53                       |
| `context`                | *string*                 | :heavy_minus_sign:       | N/A                      | streaming                |
| `sourceVideoCodec`       | *string*                 | :heavy_minus_sign:       | N/A                      | h264                     |
| `sourceAudioCodec`       | *string*                 | :heavy_minus_sign:       | N/A                      | aac                      |
| `videoDecision`          | *string*                 | :heavy_minus_sign:       | N/A                      | transcode                |
| `audioDecision`          | *string*                 | :heavy_minus_sign:       | N/A                      | transcode                |
| `subtitleDecision`       | *string*                 | :heavy_minus_sign:       | N/A                      | burn                     |
| `protocol`               | *string*                 | :heavy_minus_sign:       | N/A                      | http                     |
| `container`              | *string*                 | :heavy_minus_sign:       | N/A                      | mkv                      |
| `videoCodec`             | *string*                 | :heavy_minus_sign:       | N/A                      | h264                     |
| `audioCodec`             | *string*                 | :heavy_minus_sign:       | N/A                      | opus                     |
| `audioChannels`          | *number*                 | :heavy_minus_sign:       | N/A                      | 1                        |
| `transcodeHwRequested`   | *boolean*                | :heavy_minus_sign:       | N/A                      | true                     |
| `timeStamp`              | *number*                 | :heavy_minus_sign:       | N/A                      | 1.7058958054919229e+09   |
| `maxOffsetAvailable`     | *number*                 | :heavy_minus_sign:       | N/A                      | 29.53                    |
| `minOffsetAvailable`     | *number*                 | :heavy_minus_sign:       | N/A                      | 3.003000020980835        |