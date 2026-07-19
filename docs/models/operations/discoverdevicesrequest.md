# DiscoverDevicesRequest

## Example Usage

```typescript
import { DiscoverDevicesRequest } from "@parke.dev/plexjs/models/operations";

let value: DiscoverDevicesRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `protocol`                                                                               | [operations.DiscoverDevicesProtocol](../../models/operations/discoverdevicesprotocol.md) | :heavy_minus_sign:                                                                       | Protocol to filter discovery.                                                            |
| `grabberIdentifier`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | Targeted grabber identifier.                                                             |