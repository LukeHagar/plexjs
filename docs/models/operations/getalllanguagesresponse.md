# GetAllLanguagesResponse

## Example Usage

```typescript
import { GetAllLanguagesResponse } from "@parke.dev/plexjs/models/operations";

let value: GetAllLanguagesResponse = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [operations.GetAllLanguagesResponseBody](../../models/operations/getalllanguagesresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |