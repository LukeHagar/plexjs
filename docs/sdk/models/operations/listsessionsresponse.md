# ListSessionsResponse

## Example Usage

```typescript
import { ListSessionsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: ListSessionsResponse = {
  contentType: "<value>",
  statusCode: 150259,
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `object`                                                                                          | [operations.ListSessionsResponseBody](../../../sdk/models/operations/listsessionsresponsebody.md) | :heavy_minus_sign:                                                                                | OK                                                                                                |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |