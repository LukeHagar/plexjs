# GetServerResourcesResponse

## Example Usage

```typescript
import { GetServerResourcesResponse, Protocol } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerResourcesResponse = {
  contentType: "<value>",
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  plexDevices: [
    {
      name: "<value>",
      product: "Gorgeous Steel Chair",
      productVersion: "<value>",
      platform: "<value>",
      platformVersion: "<value>",
      device: "Desktop",
      clientIdentifier: "<value>",
      createdAt: new Date("2019-06-24T11:38:02Z"),
      lastSeenAt: new Date("2019-06-24T11:38:02Z"),
      provides: "<value>",
      ownerId: 399166,
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
          protocol: Protocol.Http,
          address: "29059 Ward Lake",
          port: 52102,
          uri: "https://old-validity.info",
          local: false,
          relay: false,
          iPv6: false,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `plexDevices`                                                           | [operations.PlexDevice](../../../sdk/models/operations/plexdevice.md)[] | :heavy_minus_sign:                                                      | List of Plex Devices. This includes Plex hosted servers and clients     |