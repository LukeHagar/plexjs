# AddDeviceToDVRResponse

## Example Usage

```typescript
import { AddDeviceToDVRResponse } from "@parke.dev/plexjs/models/operations";

let value: AddDeviceToDVRResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [operations.AddDeviceToDVRResponseBody](../../models/operations/adddevicetodvrresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |