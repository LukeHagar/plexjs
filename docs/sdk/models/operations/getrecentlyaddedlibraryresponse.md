# GetRecentlyAddedLibraryResponse

## Example Usage

```typescript
import { GetRecentlyAddedLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedLibraryResponse = {
  contentType: "<value>",
  statusCode: 838956,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `object`                                                                                                                | [operations.GetRecentlyAddedLibraryResponseBody](../../../sdk/models/operations/getrecentlyaddedlibraryresponsebody.md) | :heavy_minus_sign:                                                                                                      | The recently added content                                                                                              |