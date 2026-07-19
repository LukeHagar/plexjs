# ListSessionsResponse

## Example Usage

```typescript
import { ListSessionsResponse } from "@parke.dev/plexjs/models/operations";

let value: ListSessionsResponse = {
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.ListSessionsResponseBody](../../models/operations/listsessionsresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |