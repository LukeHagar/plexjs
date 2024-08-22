# GetServerListMediaContainer

## Example Usage

```typescript
import { GetServerListMediaContainer } from "@lukehagar/plexjs";

let value: GetServerListMediaContainer = {
    size: 1,
    server: [
        {
            name: "Hera",
            host: "10.10.10.47",
            address: "10.10.10.47",
            port: 32400,
            machineIdentifier: "96f2fe7a78c9dc1f16a16bedbe90f98149be16b4",
            version: "1.31.3.6868-28fc46b27",
        },
    ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `size`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 1                                                                |
| `server`                                                         | [models.GetServerListServer](../models/getserverlistserver.md)[] | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |