# GetDevicesChannelsResponse

## Example Usage

```typescript
import { GetDevicesChannelsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetDevicesChannelsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [operations.GetDevicesChannelsResponseBody](../../models/operations/getdeviceschannelsresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |