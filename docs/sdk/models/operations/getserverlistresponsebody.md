# GetServerListResponseBody

List of Servers

## Example Usage

```typescript
import { GetServerListResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerListResponseBody = {
    mediaContainer: {
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
    },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                        | [operations.GetServerListMediaContainer](../../../sdk/models/operations/getserverlistmediacontainer.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |