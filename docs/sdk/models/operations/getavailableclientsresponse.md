# GetAvailableClientsResponse

## Example Usage

```typescript
import { GetAvailableClientsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAvailableClientsResponse = {
  contentType: "<value>",
  statusCode: 305,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 1,
      server: [
        {
          name: "iPad",
          host: "10.10.10.102",
          address: "10.10.10.102",
          port: 32500,
          machineIdentifier: "A2E901F8-E016-43A7-ADFB-EF8CA8A4AC05",
          version: "8.17",
          protocol: "plex",
          product: "Plex for iOS",
          deviceClass: "tablet",
          protocolVersion: 2,
          protocolCapabilities:
            "playback,playqueues,timeline,provider-playback",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.GetAvailableClientsResponseBody](../../../sdk/models/operations/getavailableclientsresponsebody.md) | :heavy_minus_sign:                                                                                              | Available Clients                                                                                               |