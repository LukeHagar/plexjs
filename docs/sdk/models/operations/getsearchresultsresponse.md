# GetSearchResultsResponse

## Example Usage

```typescript
import { GetSearchResultsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchResultsResponse = {
  contentType: "<value>",
  statusCode: 197131,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetSearchResultsResponseBody](../../../sdk/models/operations/getsearchresultsresponsebody.md) | :heavy_minus_sign:                                                                                        | Search Results                                                                                            |