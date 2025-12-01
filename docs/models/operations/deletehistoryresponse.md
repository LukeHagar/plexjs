# DeleteHistoryResponse

## Example Usage

```typescript
import { DeleteHistoryResponse } from "@lukehagar/plexjs/models/operations";

let value: DeleteHistoryResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [shared.MediaContainer](../../models/shared/mediacontainer.md) | :heavy_check_mark:                                             | N/A                                                            |