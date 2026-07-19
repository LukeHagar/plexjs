# ProcessSubscriptionsResponse

## Example Usage

```typescript
import { ProcessSubscriptionsResponse } from "@parke.dev/plexjs/models/operations";

let value: ProcessSubscriptionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: new TextEncoder().encode("0xB19E8BD7Ee"),
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *Uint8Array*               | :heavy_check_mark:         | N/A                        |