# PlexDevice

## Example Usage

```typescript
import { PlexDevice, PlexDeviceProtocol } from "@parke.dev/plexjs/models/shared";

let value: PlexDevice = {
  accessToken: "string value",
  clientIdentifier: "string value",
  connections: [
    {
      address: "string value",
      iPv6: true,
      local: true,
      port: 1,
      protocol: PlexDeviceProtocol.Http,
      relay: true,
      uri: "string value",
    },
  ],
  createdAt: new Date("2019-06-24T11:38:02Z"),
  dnsRebindingProtection: true,
  home: true,
  httpsRequired: true,
  lastSeenAt: new Date("2019-06-24T11:38:02Z"),
  name: "string value",
  natLoopbackSupported: true,
  owned: true,
  ownerId: 860965,
  presence: true,
  product: "string value",
  productVersion: "string value",
  provides: "string value",
  publicAddress: "string value",
  publicAddressMatches: true,
  relay: true,
  sourceTitle: "<value>",
  synced: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `clientIdentifier`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `connections`                                                                                 | [shared.PlexDeviceConnection](../../models/shared/plexdeviceconnection.md)[]                  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2019-06-24T11:38:02Z                                                                          |
| `device`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `dnsRebindingProtection`                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `home`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `httpsRequired`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2019-06-24T11:38:02Z                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `natLoopbackSupported`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `owned`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `ownerId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | ownerId is null when the device is owned by the token used to send the request                |                                                                                               |
| `platform`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `platformVersion`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `presence`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `product`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `productVersion`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `provides`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `publicAddress`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `publicAddressMatches`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `relay`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sourceTitle`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `synced`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |