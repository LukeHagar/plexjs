# ListPlaybackHistoryResponse

## Example Usage

```typescript
import { ListPlaybackHistoryResponse } from "@parke.dev/plexjs/models/operations";

let value: ListPlaybackHistoryResponse = {
  headers: {},
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      offset: 0,
      size: 1,
      totalSize: 100,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.ListPlaybackHistoryResponseBody](../../models/operations/listplaybackhistoryresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |