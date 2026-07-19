# GetAvailableGrabbersResponse

## Example Usage

```typescript
import { GetAvailableGrabbersResponse } from "@parke.dev/plexjs/models/operations";

let value: GetAvailableGrabbersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [operations.GetAvailableGrabbersResponseBody](../../models/operations/getavailablegrabbersresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |