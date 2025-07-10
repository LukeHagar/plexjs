# GetSearchLibraryResponse

## Example Usage

```typescript
import { GetSearchLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchLibraryResponse = {
  contentType: "<value>",
  statusCode: 39973,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetSearchLibraryResponseBody](../../../sdk/models/operations/getsearchlibraryresponsebody.md) | :heavy_minus_sign:                                                                                        | The contents of the library by section and type                                                           |