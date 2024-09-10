# GetDevicesResponseBody

Devices

## Example Usage

```typescript
import { GetDevicesResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetDevicesResponseBody = {
  mediaContainer: {
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
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                  | [operations.GetDevicesMediaContainer](../../../sdk/models/operations/getdevicesmediacontainer.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |