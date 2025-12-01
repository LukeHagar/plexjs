# PlexDevice

## Example Usage

```typescript
import { PlexDevice, PlexDeviceProtocol } from "@lukehagar/plexjs/sdk/models/shared";

let value: PlexDevice = {
  name: "<value>",
  product: "Incredible Steel Chair",
  productVersion: "<value>",
  platform: "<value>",
  platformVersion: "<value>",
  device: "Desktop",
  clientIdentifier: "<value>",
  createdAt: new Date("2019-06-24T11:38:02Z"),
  lastSeenAt: new Date("2019-06-24T11:38:02Z"),
  provides: "<value>",
  ownerId: null,
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
  dnsRebindingProtection: true,
  natLoopbackSupported: true,
  connections: [
    {
      protocol: PlexDeviceProtocol.Http,
      address: "5668 Phyllis Manor",
      port: 811641,
      uri: "https://frail-merit.biz",
      local: false,
      relay: false,
      iPv6: true,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `product`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `productVersion`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `platform`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `platformVersion`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `device`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `clientIdentifier`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2019-06-24T11:38:02Z                                                                          |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2019-06-24T11:38:02Z                                                                          |
| `provides`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `ownerId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | ownerId is null when the device is owned by the token used to send the request                |                                                                                               |
| `sourceTitle`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `publicAddress`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `accessToken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `owned`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `home`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `synced`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `relay`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `presence`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `httpsRequired`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `publicAddressMatches`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `dnsRebindingProtection`                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `natLoopbackSupported`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `connections`                                                                                 | [shared.Connection](../../../sdk/models/shared/connection.md)[]                               | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |