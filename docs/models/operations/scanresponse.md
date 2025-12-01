# ScanResponse

## Example Usage

```typescript
import { ScanResponse } from "@lukehagar/plexjs/models/operations";

let value: ScanResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [shared.MediaContainerWithDevice](../../models/shared/mediacontainerwithdevice.md) | :heavy_check_mark:                                                                 | N/A                                                                                |