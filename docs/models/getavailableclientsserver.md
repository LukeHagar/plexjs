# GetAvailableClientsServer

## Example Usage

```typescript
import { GetAvailableClientsServer } from "@lukehagar/plexjs";

let value: GetAvailableClientsServer = {
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            | iPad                                           |
| `host`                                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            | 10.10.10.102                                   |
| `address`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            | 10.10.10.102                                   |
| `port`                                         | *number*                                       | :heavy_minus_sign:                             | N/A                                            | 32500                                          |
| `machineIdentifier`                            | *string*                                       | :heavy_minus_sign:                             | N/A                                            | A2E901F8-E016-43A7-ADFB-EF8CA8A4AC05           |
| `version`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            | 8.17                                           |
| `protocol`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            | plex                                           |
| `product`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            | Plex for iOS                                   |
| `deviceClass`                                  | *string*                                       | :heavy_minus_sign:                             | N/A                                            | tablet                                         |
| `protocolVersion`                              | *number*                                       | :heavy_minus_sign:                             | N/A                                            | 2                                              |
| `protocolCapabilities`                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            | playback,playqueues,timeline,provider-playback |