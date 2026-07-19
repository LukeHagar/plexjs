# ListDevicesResponse

## Example Usage

```typescript
import { ListDevicesResponse } from "@parke.dev/plexjs/models/operations";

let value: ListDevicesResponse = {
  headers: {},
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