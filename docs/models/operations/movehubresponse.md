# MoveHubResponse

## Example Usage

```typescript
import { MoveHubResponse } from "@lukehagar/plexjs/models/operations";

let value: MoveHubResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [shared.GetResponses200](../../models/shared/getresponses200.md) | :heavy_check_mark:                                               | N/A                                                              |