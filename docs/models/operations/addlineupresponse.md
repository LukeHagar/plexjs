# AddLineupResponse

## Example Usage

```typescript
import { AddLineupResponse } from "@lukehagar/plexjs/models/operations";

let value: AddLineupResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [operations.AddLineupResponseBody](../../models/operations/addlineupresponsebody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |