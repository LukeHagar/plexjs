# ConnectionInfo

## Example Usage

```typescript
import { ConnectionInfo } from "@parke.dev/plexjs/models/shared";

let value: ConnectionInfo = {
  accessToken: "string value",
  clientIdentifier: "string value",
  connection: [
    {
      address: "string value",
      local: true,
      port: 1,
      protocol: "string value",
      relay: true,
      uri: "string value",
    },
  ],
  name: "string value",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accessToken`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `clientIdentifier`                                       | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `connection`                                             | [shared.Connection](../../models/shared/connection.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |