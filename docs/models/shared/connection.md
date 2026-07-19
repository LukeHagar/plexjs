# Connection

## Example Usage

```typescript
import { Connection } from "@parke.dev/plexjs/models/shared";

let value: Connection = {
  address: "string value",
  local: true,
  port: 1,
  protocol: "string value",
  relay: true,
  uri: "string value",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `address`                                               | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `local`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Indicates if the connection is the server's LAN address |
| `port`                                                  | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `protocol`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `relay`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Indicates the connection is over a relayed connection   |
| `uri`                                                   | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |