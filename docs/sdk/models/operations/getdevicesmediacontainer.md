# GetDevicesMediaContainer

## Example Usage

```typescript
import { GetDevicesMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetDevicesMediaContainer = {
    size: 151,
    identifier: "com.plexapp.system.devices",
    device: [
        {
            id: 1,
            name: "iPhone",
            platform: "iOS",
            createdAt: 1654131230,
        },
    ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `size`                                                          | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 151                                                             |
| `identifier`                                                    | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | com.plexapp.system.devices                                      |
| `device`                                                        | [operations.Device](../../../sdk/models/operations/device.md)[] | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |