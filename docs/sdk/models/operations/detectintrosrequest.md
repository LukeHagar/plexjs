# DetectIntrosRequest

## Example Usage

```typescript
import { DetectIntrosRequest } from "@lukehagar/plexjs/sdk/models/operations";
import { BoolInt } from "@lukehagar/plexjs/sdk/models/shared";

let value: DetectIntrosRequest = {
  ids: "<value>",
  force: BoolInt.One,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `xPlexClientIdentifier`                                        | *string*                                                       | :heavy_minus_sign:                                             | An opaque identifier unique to the client                      | abc123                                                         |
| `xPlexProduct`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The name of the client product                                 | Plex for Roku                                                  |
| `xPlexVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The version of the client application                          | 2.4.1                                                          |
| `xPlexPlatform`                                                | *string*                                                       | :heavy_minus_sign:                                             | The platform of the client                                     | Roku                                                           |
| `xPlexPlatformVersion`                                         | *string*                                                       | :heavy_minus_sign:                                             | The version of the platform                                    | 4.3 build 1057                                                 |
| `xPlexDevice`                                                  | *string*                                                       | :heavy_minus_sign:                                             | A relatively friendly name for the client device               | Roku 3                                                         |
| `xPlexModel`                                                   | *string*                                                       | :heavy_minus_sign:                                             | A potentially less friendly identifier for the device model    | 4200X                                                          |
| `xPlexDeviceVendor`                                            | *string*                                                       | :heavy_minus_sign:                                             | The device vendor                                              | Roku                                                           |
| `xPlexDeviceName`                                              | *string*                                                       | :heavy_minus_sign:                                             | A friendly name for the client                                 | Living Room TV                                                 |
| `xPlexMarketplace`                                             | *string*                                                       | :heavy_minus_sign:                                             | The marketplace on which the client application is distributed | googlePlay                                                     |
| `ids`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `force`                                                        | [shared.BoolInt](../../../sdk/models/shared/boolint.md)        | :heavy_minus_sign:                                             | Indicate whether detection should be re-run                    | 1                                                              |
| `threshold`                                                    | *number*                                                       | :heavy_minus_sign:                                             | The threshold for determining if content is an intro or not    |                                                                |