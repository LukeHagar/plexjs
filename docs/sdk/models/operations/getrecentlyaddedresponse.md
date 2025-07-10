# GetRecentlyAddedResponse

## Example Usage

```typescript
import { GetRecentlyAddedResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedResponse = {
  contentType: "<value>",
  statusCode: 216712,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetRecentlyAddedResponseBody](../../../sdk/models/operations/getrecentlyaddedresponsebody.md) | :heavy_minus_sign:                                                                                        | A successful response with recently added content.                                                        |