# GetAvailableClientsMediaContainer

## Example Usage

```typescript
import { GetAvailableClientsMediaContainer } from "@lukehagar/plexjs";

let value: GetAvailableClientsMediaContainer = {
    size: 1,
    server: [
        {
            name: "iPad",
            host: "10.10.10.102",
            address: "10.10.10.102",
            port: 32500,
            machineIdentifier: "A2E901F8-E016-43A7-ADFB-EF8CA8A4AC05",
            version: "8.17",
            protocol: "plex",
            product: "Plex for iOS",
            deviceClass: "tablet",
            protocolVersion: 2,
            protocolCapabilities: "playback,playqueues,timeline,provider-playback",
        },
    ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `size`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 1                                                                            |
| `server`                                                                     | [models.GetAvailableClientsServer](../models/getavailableclientsserver.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |