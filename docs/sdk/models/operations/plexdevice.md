# PlexDevice

## Example Usage

```typescript
import { PlexDevice } from "@lukehagar/plexjs/sdk/models/operations";

let value: PlexDevice = {
    name: "<value>",
    product: "Oriental Metal Computer",
    productVersion: "<value>",
    platform: "<value>",
    platformVersion: "<value>",
    device: "<value>",
    clientIdentifier: "<value>",
    createdAt: new Date("2024-02-29T19:31:16.563Z"),
    lastSeenAt: new Date("2023-12-03T08:28:56.752Z"),
    provides: "<value>",
    ownerId: 582020,
    sourceTitle: "<value>",
    publicAddress: "<value>",
    accessToken: "<value>",
    owned: false,
    home: false,
    synced: false,
    relay: false,
    presence: false,
    httpsRequired: false,
    publicAddressMatches: false,
    dnsRebindingProtection: false,
    natLoopbackSupported: false,
    connections: [
        {
            protocol: "<value>",
            address: "59751 Jaren Ford",
            port: 1863.32,
            uri: "https://several-increase.biz",
            local: false,
            relay: false,
            iPv6: false,
        },
    ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productVersion`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `platform`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `platformVersion`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `device`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientIdentifier`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `provides`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | ownerId is null when the device is owned by the token used to send the request                |
| `sourceTitle`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publicAddress`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accessToken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `owned`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `home`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `synced`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relay`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `presence`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `httpsRequired`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publicAddressMatches`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dnsRebindingProtection`                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `natLoopbackSupported`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connections`                                                                                 | [operations.Connections](../../../sdk/models/operations/connections.md)[]                     | :heavy_check_mark:                                                                            | N/A                                                                                           |