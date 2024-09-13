# GetServerListResponse

## Example Usage

```typescript
import { GetServerListResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerListResponse = {
  contentType: "<value>",
  statusCode: 891773,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
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
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `object`                                                                                            | [operations.GetServerListResponseBody](../../../sdk/models/operations/getserverlistresponsebody.md) | :heavy_minus_sign:                                                                                  | List of Servers                                                                                     |