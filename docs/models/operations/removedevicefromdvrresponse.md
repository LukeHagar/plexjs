# RemoveDeviceFromDVRResponse

## Example Usage

```typescript
import { RemoveDeviceFromDVRResponse } from "@parke.dev/plexjs/models/operations";

let value: RemoveDeviceFromDVRResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    mediaContainer: {
      mediaContainer: {
        identifier: "com.plexapp.system",
        size: 1,
      },
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.RemoveDeviceFromDVRResponseBody](../../models/operations/removedevicefromdvrresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |