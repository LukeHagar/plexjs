# GetDownloadQueueResponse

## Example Usage

```typescript
import { GetDownloadQueueResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetDownloadQueueResponse = {
  contentType: "<value>",
  statusCode: 349044,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetDownloadQueueResponseBody](../../../sdk/models/operations/getdownloadqueueresponsebody.md) | :heavy_minus_sign:                                                                                        | OK                                                                                                        |