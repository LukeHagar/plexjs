# TranscodeSession

The transcode session if item is currently being transcoded

## Example Usage

```typescript
import { TranscodeSession } from "@lukehagar/plexjs/sdk/models/shared";

let value: TranscodeSession = {};
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