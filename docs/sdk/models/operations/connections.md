# Connections

## Example Usage

```typescript
import { Connections, Protocol } from "@lukehagar/plexjs/sdk/models/operations";

let value: Connections = {
  protocol: Protocol.Http,
  address: "21611 Schuster Cliffs",
  port: 54915,
  uri: "https://wobbly-instance.org/",
  local: false,
  relay: false,
  iPv6: false,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `protocol`                                                        | [operations.Protocol](../../../sdk/models/operations/protocol.md) | :heavy_check_mark:                                                | The protocol used for the connection (http, https, etc)           | http                                                              |
| `address`                                                         | *string*                                                          | :heavy_check_mark:                                                | The (ip) address or domain name used for the connection           |                                                                   |
| `port`                                                            | *number*                                                          | :heavy_check_mark:                                                | The port used for the connection                                  |                                                                   |
| `uri`                                                             | *string*                                                          | :heavy_check_mark:                                                | The full URI of the connection                                    |                                                                   |
| `local`                                                           | *boolean*                                                         | :heavy_check_mark:                                                | If the connection is local address                                |                                                                   |
| `relay`                                                           | *boolean*                                                         | :heavy_check_mark:                                                | If the connection is relayed through plex.direct                  |                                                                   |
| `iPv6`                                                            | *boolean*                                                         | :heavy_check_mark:                                                | If the connection is using IPv6                                   |                                                                   |