# ComputeChannelMapResponse

## Example Usage

```typescript
import { ComputeChannelMapResponse } from "@parke.dev/plexjs/models/operations";

let value: ComputeChannelMapResponse = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [operations.ComputeChannelMapResponseBody](../../models/operations/computechannelmapresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |