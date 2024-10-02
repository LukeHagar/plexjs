# GetServerResourcesRequest

## Example Usage

```typescript
import { GetServerResourcesRequest, IncludeHttps, IncludeIPv6, IncludeRelay } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerResourcesRequest = {
  includeHttps: IncludeHttps.Enable,
  includeRelay: IncludeRelay.Enable,
  includeIPv6: IncludeIPv6.Enable,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `includeHttps`                                                                                                     | [operations.IncludeHttps](../../../sdk/models/operations/includehttps.md)                                          | :heavy_minus_sign:                                                                                                 | Include Https entries in the results                                                                               | 1                                                                                                                  |
| `includeRelay`                                                                                                     | [operations.IncludeRelay](../../../sdk/models/operations/includerelay.md)                                          | :heavy_minus_sign:                                                                                                 | Include Relay addresses in the results <br/>E.g: https://10-0-0-25.bbf8e10c7fa20447cacee74cd9914cde.plex.direct:32400<br/> | 1                                                                                                                  |
| `includeIPv6`                                                                                                      | [operations.IncludeIPv6](../../../sdk/models/operations/includeipv6.md)                                            | :heavy_minus_sign:                                                                                                 | Include IPv6 entries in the results                                                                                | 1                                                                                                                  |
| `clientID`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | An opaque identifier unique to the client (UUID, serial number, or other unique device ID)                         | 3381b62b-9ab7-4e37-827b-203e9809eb58                                                                               |