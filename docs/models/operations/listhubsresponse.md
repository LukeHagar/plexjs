# ListHubsResponse

## Example Usage

```typescript
import { ListHubsResponse } from "@lukehagar/plexjs/models/operations";

let value: ListHubsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [operations.ListHubsResponseBody](../../models/operations/listhubsresponsebody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |