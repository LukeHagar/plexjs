# RemoveDeviceResponse

## Example Usage

```typescript
import { RemoveDeviceResponse } from "@parke.dev/plexjs/models/operations";

let value: RemoveDeviceResponse = {
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.RemoveDeviceResponseBody](../../models/operations/removedeviceresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |