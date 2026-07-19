# GetScheduledRecordingsResponse

## Example Usage

```typescript
import { GetScheduledRecordingsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetScheduledRecordingsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    mediaContainer: {
      identifier: "com.plexapp.system",
      size: 1,
      mediaGrabOperation: [],
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `result`                                                                                                   | [shared.MediaContainerWithMediaGrabOperation](../../models/shared/mediacontainerwithmediagraboperation.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system",<br/>"size": 1,<br/>"MediaGrabOperation": []<br/>}<br/>} |