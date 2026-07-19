# GetHubItemsResponse

## Example Usage

```typescript
import { GetHubItemsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetHubItemsResponse = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [operations.GetHubItemsResponseBody](../../models/operations/gethubitemsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |