# Dvr

## Example Usage

```typescript
import { Dvr } from "@parke.dev/plexjs/models/shared";

let value: Dvr = {
  device: [
    {
      title: "string value",
      channelMapping: [
        {
          channelKey: "string value",
          deviceIdentifier: "string value",
          enabled: "string value",
          lineupIdentifier: "string value",
        },
      ],
      deviceIdentifier: "string value",
      enabled: true,
      id: 1,
      key: "string value",
      lastSeenAt: 1,
      lineup: "string value",
      lineupType: "string value",
      make: "string value",
      model: "string value",
      modelNumber: "string value",
      name: "string value",
      protocol: "string value",
      sources: "string value",
      state: "string value",
      status: "string value",
      thumb: "string value",
      thumbVersion: 1,
      tuners: "string value",
      uri: "string value",
      uuid: "string value",
    },
  ],
  key: "string value",
  language: "string value",
  lineup: "string value",
  uuid: "string value",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `device`                                         | [shared.Device](../../models/shared/device.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `language`                                       | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `lineup`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `uuid`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |