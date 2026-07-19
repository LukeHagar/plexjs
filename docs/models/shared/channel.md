# Channel

## Example Usage

```typescript
import { Channel } from "@parke.dev/plexjs/models/shared";

let value: Channel = {
  title: "string value",
  callSign: "string value",
  channelVcn: "string value",
  drm: true,
  favorite: true,
  hd: true,
  identifier: "string value",
  key: "string value",
  language: "string value",
  signalQuality: 1,
  signalStrength: 1,
  thumb: "string value",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `title`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `callSign`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `channelVcn`                                 | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `drm`                                        | *boolean*                                    | :heavy_minus_sign:                           | Whether the channel requires DRM.            | false                                        |
| `favorite`                                   | *boolean*                                    | :heavy_minus_sign:                           | Whether the channel is marked as a favorite. | true                                         |
| `hd`                                         | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |                                              |
| `identifier`                                 | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `key`                                        | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `language`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `signalQuality`                              | *number*                                     | :heavy_minus_sign:                           | Signal quality percentage (0-100).           | 85                                           |
| `signalStrength`                             | *number*                                     | :heavy_minus_sign:                           | Signal strength percentage (0-100).          | 90                                           |
| `thumb`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |