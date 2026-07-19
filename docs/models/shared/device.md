# Device

## Example Usage

```typescript
import { Device } from "@parke.dev/plexjs/models/shared";

let value: Device = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `title`                                                          | *string*                                                         | :heavy_minus_sign:                                               | Display title for the device.                                    | Living Room Tuner                                                |
| `channelMapping`                                                 | [shared.ChannelMapping](../../models/shared/channelmapping.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `deviceIdentifier`                                               | *string*                                                         | :heavy_minus_sign:                                               | Distinct hardware identifier for the device.                     | HDHomeRun-1234ABCD                                               |
| `enabled`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | Whether the device is enabled.                                   | true                                                             |
| `id`                                                             | *number*                                                         | :heavy_minus_sign:                                               | Unique device ID.                                                | 42                                                               |
| `key`                                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `lastSeenAt`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `lineup`                                                         | *string*                                                         | :heavy_minus_sign:                                               | EPG lineup association.                                          | OTA                                                              |
| `lineupType`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Type of EPG lineup.                                              | Antenna                                                          |
| `make`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `model`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `modelNumber`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Human-readable device name.                                      | HDHomeRun CONNECT                                                |
| `protocol`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `sources`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `state`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `status`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `thumb`                                                          | *string*                                                         | :heavy_minus_sign:                                               | URL to the device thumbnail image.                               | https://plex.tv/devices/42/thumb                                 |
| `thumbVersion`                                                   | *number*                                                         | :heavy_minus_sign:                                               | Version of the device thumbnail.                                 | 1                                                                |
| `tuners`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `uri`                                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |