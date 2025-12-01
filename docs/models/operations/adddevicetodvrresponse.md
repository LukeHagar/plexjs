# AddDeviceToDVRResponse

## Example Usage

```typescript
import { AddDeviceToDVRResponse } from "@lukehagar/plexjs/models/operations";

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
  result: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [operations.AddDeviceToDVRResponseBody](../../models/operations/adddevicetodvrresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |