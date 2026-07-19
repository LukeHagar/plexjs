# ScanResponse

## Example Usage

```typescript
import { ScanResponse } from "@parke.dev/plexjs/models/operations";

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
  result: {
    mediaContainer: {
      identifier: "com.plexapp.system.devices",
      size: 1,
      device: [],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `result`                                                                                      | [shared.MediaContainerWithDevice](../../models/shared/mediacontainerwithdevice.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system.devices",<br/>"size": 1,<br/>"Device": []<br/>}<br/>} |