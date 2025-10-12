# CreateMarkerResponse

## Example Usage

```typescript
import { CreateMarkerResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreateMarkerResponse = {
  contentType: "<value>",
  statusCode: 530183,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `object`                                                                                          | [operations.CreateMarkerResponseBody](../../../sdk/models/operations/createmarkerresponsebody.md) | :heavy_minus_sign:                                                                                | OK                                                                                                |