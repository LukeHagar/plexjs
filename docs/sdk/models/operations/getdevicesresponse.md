# GetDevicesResponse

## Example Usage

```typescript
import { GetDevicesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetDevicesResponse = {
  contentType: "<value>",
  statusCode: 844266,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 151,
      identifier: "com.plexapp.system.devices",
      device: [
        {
          id: 1,
          name: "iPhone",
          platform: "iOS",
          createdAt: 1654131230,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `object`                                                                                      | [operations.GetDevicesResponseBody](../../../sdk/models/operations/getdevicesresponsebody.md) | :heavy_minus_sign:                                                                            | Devices                                                                                       |