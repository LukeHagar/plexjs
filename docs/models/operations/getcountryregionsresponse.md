# GetCountryRegionsResponse

## Example Usage

```typescript
import { GetCountryRegionsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetCountryRegionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [operations.GetCountryRegionsResponseBody](../../models/operations/getcountryregionsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |