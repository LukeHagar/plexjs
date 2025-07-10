# GetTopWatchedContentResponse

## Example Usage

```typescript
import { GetTopWatchedContentResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTopWatchedContentResponse = {
  contentType: "<value>",
  statusCode: 478842,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `object`                                                                                                          | [operations.GetTopWatchedContentResponseBody](../../../sdk/models/operations/gettopwatchedcontentresponsebody.md) | :heavy_minus_sign:                                                                                                | The metadata of the library item.                                                                                 |