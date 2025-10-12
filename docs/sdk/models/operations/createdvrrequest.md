# CreateDVRRequest

## Example Usage

```typescript
import { CreateDVRRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreateDVRRequest = {
  lineup: "lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT",
  device: [
    "device[]=device://tv.plex.grabbers.hdhomerun/1053C0CA",
  ],
  language: "eng",
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
| `lineup`                                                       | *string*                                                       | :heavy_minus_sign:                                             | The EPG lineup.                                                | lineup://tv.plex.providers.epg.onconnect/USA-HI51418-DEFAULT   |
| `device`                                                       | *string*[]                                                     | :heavy_minus_sign:                                             | The device.                                                    | device[]=device://tv.plex.grabbers.hdhomerun/1053C0CA          |
| `language`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The language.                                                  | eng                                                            |