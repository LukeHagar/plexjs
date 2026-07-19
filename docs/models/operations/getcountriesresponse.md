# GetCountriesResponse

## Example Usage

```typescript
import { GetCountriesResponse } from "@parke.dev/plexjs/models/operations";

let value: GetCountriesResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.GetCountriesResponseBody](../../models/operations/getcountriesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |