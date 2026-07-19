# TranscodeJob

## Example Usage

```typescript
import { TranscodeJob, TranscodeJobType } from "@parke.dev/plexjs/models/shared";

let value: TranscodeJob = {
  title: "string value",
  type: TranscodeJobType.Transcode,
  generatorID: 1,
  key: "string value",
  progress: 1,
  ratingKey: "string value",
  remaining: 1,
  size: 1,
  speed: 1,
  targetTagID: 1,
  thumb: "string value",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `title`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [shared.TranscodeJobType](../../models/shared/transcodejobtype.md)                         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `generatorID`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `key`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `progress`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `ratingKey`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `remaining`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | The number of seconds remaining in this job                                                |
| `size`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | The size of the result so far                                                              |
| `speed`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The speed of the transcode; 1.0 means real-time                                            |
| `targetTagID`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | The tag associated with the job.  This could be the tag containing the optimizer settings. |
| `thumb`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |