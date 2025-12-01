# Connection

## Example Usage

```typescript
import { Connection, PlexDeviceProtocol } from "@lukehagar/plexjs/sdk/models/shared";

let value: Connection = {
  protocol: PlexDeviceProtocol.Http,
  address: "4285 E Central Avenue",
  port: 663268,
  uri: "https://decent-hippodrome.org/",
  local: false,
  relay: true,
  iPv6: false,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `protocol`                                                                    | [shared.PlexDeviceProtocol](../../../sdk/models/shared/plexdeviceprotocol.md) | :heavy_check_mark:                                                            | The protocol used for the connection (http, https, etc)                       | http                                                                          |
| `address`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The (ip) address or domain name used for the connection                       |                                                                               |
| `port`                                                                        | *number*                                                                      | :heavy_check_mark:                                                            | The port used for the connection                                              |                                                                               |
| `uri`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The full URI of the connection                                                |                                                                               |
| `local`                                                                       | *boolean*                                                                     | :heavy_check_mark:                                                            | If the connection is local address                                            |                                                                               |
| `relay`                                                                       | *boolean*                                                                     | :heavy_check_mark:                                                            | If the connection is relayed through plex.direct                              |                                                                               |
| `iPv6`                                                                        | *boolean*                                                                     | :heavy_check_mark:                                                            | If the connection is using IPv6                                               |                                                                               |