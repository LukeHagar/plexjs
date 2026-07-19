# TranscodeSession

The transcode session if item is currently being transcoded

## Example Usage

```typescript
import { TranscodeSession } from "@parke.dev/plexjs/models/shared";

let value: TranscodeSession = {
  complete: true,
  context: "string value",
  duration: 1,
  error: true,
  key: "string value",
  progress: 1,
  protocol: "string value",
  size: 1,
  sourceAudioCodec: "string value",
  sourceVideoCodec: "string value",
  speed: 1,
  throttled: true,
  transcodeHwFullPipeline: true,
  transcodeHwRequested: true,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `complete`                | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `context`                 | *string*                  | :heavy_minus_sign:        | N/A                       |
| `duration`                | *number*                  | :heavy_minus_sign:        | N/A                       |
| `error`                   | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `key`                     | *string*                  | :heavy_minus_sign:        | N/A                       |
| `progress`                | *number*                  | :heavy_minus_sign:        | N/A                       |
| `protocol`                | *string*                  | :heavy_minus_sign:        | N/A                       |
| `size`                    | *number*                  | :heavy_minus_sign:        | N/A                       |
| `sourceAudioCodec`        | *string*                  | :heavy_minus_sign:        | N/A                       |
| `sourceVideoCodec`        | *string*                  | :heavy_minus_sign:        | N/A                       |
| `speed`                   | *number*                  | :heavy_minus_sign:        | N/A                       |
| `throttled`               | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `transcodeHwFullPipeline` | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `transcodeHwRequested`    | *boolean*                 | :heavy_minus_sign:        | N/A                       |