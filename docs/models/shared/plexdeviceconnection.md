# PlexDeviceConnection

## Example Usage

```typescript
import { PlexDeviceConnection, PlexDeviceProtocol } from "@parke.dev/plexjs/models/shared";

let value: PlexDeviceConnection = {
  address: "6703 E Bridge Street",
  iPv6: true,
  local: false,
  port: 753527,
  protocol: PlexDeviceProtocol.Http,
  relay: true,
  uri: "https://fortunate-blight.net/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `address`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The (ip) address or domain name used for the connection                |                                                                        |
| `iPv6`                                                                 | *boolean*                                                              | :heavy_check_mark:                                                     | If the connection is using IPv6                                        |                                                                        |
| `local`                                                                | *boolean*                                                              | :heavy_check_mark:                                                     | If the connection is local address                                     |                                                                        |
| `port`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | The port used for the connection                                       |                                                                        |
| `protocol`                                                             | [shared.PlexDeviceProtocol](../../models/shared/plexdeviceprotocol.md) | :heavy_check_mark:                                                     | The protocol used for the connection (http, https, etc)                | http                                                                   |
| `relay`                                                                | *boolean*                                                              | :heavy_check_mark:                                                     | If the connection is relayed through plex.direct                       |                                                                        |
| `uri`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | The full URI of the connection                                         |                                                                        |