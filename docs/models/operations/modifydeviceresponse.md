# ModifyDeviceResponse

## Example Usage

```typescript
import { ModifyDeviceResponse } from "@lukehagar/plexjs/models/operations";

let value: ModifyDeviceResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.ModifyDeviceResponseBody](../../models/operations/modifydeviceresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |