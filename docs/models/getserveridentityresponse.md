# GetServerIdentityResponse

## Example Usage

```typescript
import { GetServerIdentityResponse } from "@lukehagar/plexjs";

let value: GetServerIdentityResponse = {
    contentType: "<value>",
    statusCode: 602763,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 0,
            machineIdentifier: "96f2fe7a78c9dc1f16a16bedbe90f98149be16b4",
            version: "1.31.3.6868-28fc46b27",
        },
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `contentType`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP response content type for this operation                                      |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP response status code for this operation                                       |
| `rawResponse`                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)              | :heavy_check_mark:                                                                 | Raw HTTP response; suitable for custom response parsing                            |
| `object`                                                                           | [models.GetServerIdentityResponseBody](../models/getserveridentityresponsebody.md) | :heavy_minus_sign:                                                                 | The Server Identity information                                                    |