# GetChannelsResponse

## Example Usage

```typescript
import { GetChannelsResponse } from "@lukehagar/plexjs/models/operations";

let value: GetChannelsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [operations.GetChannelsResponseBody](../../models/operations/getchannelsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |