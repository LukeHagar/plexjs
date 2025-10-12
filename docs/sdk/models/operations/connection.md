# Connection

## Example Usage

```typescript
import { Connection } from "@lukehagar/plexjs/sdk/models/operations";

let value: Connection = {};
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