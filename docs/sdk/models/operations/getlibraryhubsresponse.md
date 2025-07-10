# GetLibraryHubsResponse

## Example Usage

```typescript
import { GetLibraryHubsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryHubsResponse = {
  contentType: "<value>",
  statusCode: 455564,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `object`                                                                                              | [operations.GetLibraryHubsResponseBody](../../../sdk/models/operations/getlibraryhubsresponsebody.md) | :heavy_minus_sign:                                                                                    | The hubs specific to the library                                                                      |