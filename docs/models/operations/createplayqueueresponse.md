# CreatePlayQueueResponse

## Example Usage

```typescript
import { CreatePlayQueueResponse } from "@lukehagar/plexjs/models/operations";

let value: CreatePlayQueueResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [operations.CreatePlayQueueResponseBody](../../models/operations/createplayqueueresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |