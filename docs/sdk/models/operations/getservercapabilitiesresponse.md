# GetServerCapabilitiesResponse

## Example Usage

```typescript
import { GetServerCapabilitiesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerCapabilitiesResponse = {
  contentType: "<value>",
  statusCode: 503,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `object`                                                                                                            | [operations.GetServerCapabilitiesResponseBody](../../../sdk/models/operations/getservercapabilitiesresponsebody.md) | :heavy_minus_sign:                                                                                                  | The Server Capabilities                                                                                             |